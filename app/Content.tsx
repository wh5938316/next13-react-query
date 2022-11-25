"use client";

import { useQuery } from "@tanstack/react-query";
import fetchTest from "./fetchTest";

export default function Content() {

  const { data, isLoading, isError } = useQuery<string>(['test'], fetchTest);

  if(isLoading) {
    return  <div>Loading...</div>
  };

  if(isError) {
    return <div>Error</div>
  }
  
  return <div>{data}</div>
}
