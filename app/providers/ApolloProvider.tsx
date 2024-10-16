// providers/ApolloProvider.tsx
"use client";

import { ReactNode } from 'react';
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

interface ApolloProvidersProps {
  children: ReactNode;
}

export function ApolloProviders({ children }: ApolloProvidersProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
