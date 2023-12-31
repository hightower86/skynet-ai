'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import {
    Code,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
    VideoIcon,
} from 'lucide-react';
import FreeCounter from '@/components/free-counter';

interface SidebarProps {
    apiLimitCount: number;
}

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });
const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: 'text-sky-500',
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: 'text-violet-500',
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        href: '/image',
        color: 'text-pink-700',
    },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        href: '/video',
        color: 'text-orange-700',
    },
    {
        label: 'Music Generation',
        icon: Music,
        href: '/music',
        color: 'text-emerald-500',
    },
    {
        label: 'Code Generation',
        icon: Code,
        href: '/code',
        color: 'text-green-700',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
];

const Sidebar: FC<SidebarProps> = ({ apiLimitCount = 0 }) => {
    const pathname = usePathname();
    console.log({ apiLimitCount });
    return (
        <div className="h-full space-y-4 py-4 flex flex-col bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link
                    href="/dashboard"
                    className="flex items-center pl-3 mb-14"
                >
                    <div className="relative w-9 h-8 mr-4">
                        <Image fill alt="logo" src="/logo_tool.png" />
                    </div>
                    <h1
                        className={
                            (cn('text-2xl font-bold'), montserrat.className)
                        }
                    >
                        AI-TOOL
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                                pathname === route.href
                                    ? 'bg-white/10 text-white'
                                    : 'text-zinc-400'
                            )}
                        >
                            <div className="flex">
                                <route.icon
                                    className={cn('w-5 h-5 mr-3', route.color)}
                                />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter apiLimitCount={apiLimitCount} />
        </div>
    );
};

export default Sidebar;
