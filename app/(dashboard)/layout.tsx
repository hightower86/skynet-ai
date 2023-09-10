import Navbar from '@/components/navbar';
import { FC } from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <div className="text-white text-4xl">Hello Sidebar</div>
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
