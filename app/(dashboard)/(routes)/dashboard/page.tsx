import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SkyNet | Dashboard',
    description: 'Dashboard AI SkyNet',
};

const DashboardPage = () => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <p className="text-4xl">DAshboard Page (Protected)</p>
        </div>
    );
};

export default DashboardPage;
