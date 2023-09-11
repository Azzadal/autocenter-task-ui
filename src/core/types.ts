export interface IUseMutateQueryOptions<TData = any, TVariables = any, TError = Error> {
  /**
   * This callback will fire any time the query is either successfully fetched or errors
   * and be passed either the data or error.
   */
  onSettled?: (data: TData | undefined, error: TError | null) => void;
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (err: TError) => void;
}
