import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 10,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        notifyOnChangePropsExclusions: ['isStale'],
      },
    },
  });