export interface PageInfo {
  screenshot: string,
  description?: string,
  headline?: string,
  title: string
}

export interface IState {
  img: string,
  isLoading: undefined | boolean,
  page: PageInfo
}

export interface IGenerateCode {
  (urlVal: string, httpPattern: string): Promise<{ img: string, url: string }>
}

export interface ISendURL {
  (url: string): Promise<void>
}

export interface IScrapPageInfo {
  (): Promise<{ screenshot: string, description: string, headline: string, title: string }>
}

export interface IRetrieveInfoObj {
  (url: string): Promise<{ page: PageInfo, img: string, isLoading: boolean }>
}