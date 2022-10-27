"use client";

import { Hydrate } from "@tanstack/react-query";

export default function Content({
  dehydratedState,
}: {
  dehydratedState?: unknown;
}) {
  return <Hydrate state={dehydratedState}>hello</Hydrate>;
}
