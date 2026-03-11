export type HttpResponse<T> = {
  data: T | null;
  error: ErrorResponse | null;
};

export type ErrorResponse = {
  errorCode?: string;
  message: string;
};
