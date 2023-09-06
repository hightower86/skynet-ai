import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
    return (
        <div className="flex">
            <p>DAshboard Page</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default DashboardPage;
