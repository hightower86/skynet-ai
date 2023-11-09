import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

// It's not affected by hot reload while developing

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb;
