'use client'

import {NextUIProvider} from  '@nextui-org/react'
import { SessionProvider } from 'next-auth/react';

interface Props{
    children: React.ReactNode
}

export function Providers({children} : Props){
    return(
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export const ProviderSession = ({children} : Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider> 
    )
};