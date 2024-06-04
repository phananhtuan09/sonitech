export interface ISuccessCommonResponse {
  status: true;
  title?: string;
}

export interface IErrorCommonResponse {
  errorMessage: string;
  status: false;
}
