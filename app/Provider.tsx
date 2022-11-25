import React from "react";
import { QueryClient, dehydrate } from "@tanstack/query-core";
import { ReactQuery } from './ReactQuery';
import fetchTest from "./fetchTest";

export default async function Provider({children}: {children: React.ReactNode}) {
    const queryClient = new QueryClient();

    // alternatively, use queryClient.setQuery and/or access data directly
    await queryClient.prefetchQuery(['test'], fetchTest);
    
    const provider =
        <ReactQuery dehydratedState={dehydrate(queryClient)}>
            {children}
        </ReactQuery>

    queryClient.clear();
    return provider;
}