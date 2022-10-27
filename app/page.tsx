import { dehydrate, QueryClient } from "@tanstack/react-query";
import Content from "./Content";

export default async function RootPage() {
  // throw error
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['test', () => {
    return fetch('/api/test');
  }])

  return <Content dehydratedState={dehydrate(queryClient)} />
}