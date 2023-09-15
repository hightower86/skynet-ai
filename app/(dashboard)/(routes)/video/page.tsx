'use client';
import axios from 'axios';
import { Heading } from '@/components/heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { VideoIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader } from '@/components/loader';
import { Empty } from '@/components/ui/empty';

const VideoPage = ({}) => {
    const router = useRouter();

    const [video, setVideo] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            prompt: '',
        },
        resolver: zodResolver(formSchema),
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setVideo('');

            const response = await axios.post('/api/video', values);

            setVideo(response.data[0]);

            form.reset();
        } catch (error) {
            // TODO: Open Pro Modal
        } finally {
            router.refresh();
        }
    };

    return (
        <div>
            <Heading
                title="Video Generation"
                description="Our Video is super amasing"
                icon={VideoIcon}
                iconColor="text-orange-700"
                bgColor="bg-orange-700/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                            w-full
                            p-4
                            px-3
                            md:px-6
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                            rounded-lg
                            border
                            "
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="White shark diving with a human"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                // size="icon"
                                className="col-span-12 lg:col-span-2"
                                disabled={isLoading}
                            >
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                    )}
                    {!video && !isLoading && (
                        <Empty label="No video created." />
                    )}
                    {video && !isLoading && (
                        <video
                            controls
                            className="w-full aspect-video mt-8 rounded-lg border"
                        >
                            <source src={video} />
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
