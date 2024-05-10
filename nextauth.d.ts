import NextAuth,{DefaultSession} from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            userName: string;
            names: string;
            lastNames: string;
            role: number;
        } & DefaultSession['user']
    }
}