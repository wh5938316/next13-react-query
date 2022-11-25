'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider, Hydrate, DehydratedState } from '@tanstack/react-query';
import Script from 'next/script';

type Props = {
    dehydratedState: DehydratedState,
    children: React.ReactNode
}
export function ReactQuery({dehydratedState, children}: Props) {
    const [queryClient] = useState(new QueryClient());

    return <>
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                {children}
            </Hydrate>
        </QueryClientProvider>
        <Script id="react-query">
            {`window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}`}
        </Script>
    </>
}