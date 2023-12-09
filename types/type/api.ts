export interface BaseResponse<T> {
  code: string;
  result: T;
  message: string;
}
