import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage = () => {
    return (
        <div className="flex  flex-col gap-4">
            <h1 className="text-4xl">Landing page (Unprotected)</h1>
            <div className=" p-4 flex gap-2">
                <Link href="/sign-in">
                    <Button className="bg-lime-700">Login</Button>
                </Link>

                <Link href="/sign-up">
                    <Button className="bg-indigo-700">Register</Button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
