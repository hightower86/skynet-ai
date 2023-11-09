import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse('Unauthorized User', {
                status: 401,
            });
        }

        if (!configuration.apiKey) {
            return new NextResponse('Not configured API key', {
                status: 500,
            });
        }

        if (!messages) {
            return new NextResponse('Missing messages', {
                status: 400,
            });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse('Exceeded free trial', {
                status: 403,
            });
        }

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages,
        });

        await increaseApiLimit();

        return NextResponse.json(response.data.choices[0].message);
    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error);
        return new NextResponse('Internal Server Error', {
            status: 401,
        });
    }
}
