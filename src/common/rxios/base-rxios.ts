import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';

export type RxiosConfig = AxiosRequestConfig;

type BasicObject = Record<string, unknown>;

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class Rxios {
  private httpClient: AxiosInstance;

  constructor(options: RxiosConfig = {}) {
    this.httpClient = axios.create(options);
  }

  interceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  };

  private observableRequest<T>(config: RxiosConfig) {
    const request = this.httpClient.request<T>(this.interceptor(config));

    return new Observable<T>((subscriber) => {
      request
        .then((response) => {
          subscriber.next(response.data);
        })
        .catch((err: Error) => {
          subscriber.error(err);
        })
        .finally(() => {
          subscriber.complete();
        });
    });
  }

  public get<T>(
    url: string,
    params?: BasicObject,
    config?: AxiosRequestConfig
  ) {
    const request = { method: HttpMethod.GET, url, params, ...config };
    return this.observableRequest<T>(request);
  }

  public post<T>(
    url: string,
    payload: BasicObject,
    config: AxiosRequestConfig = {}
  ) {
    const request = {
      method: HttpMethod.POST,
      url,
      data: payload,
      ...config,
    };
    return this.observableRequest<T>(request);
  }

  public put<T>(
    url: string,
    payload: BasicObject,
    config: AxiosRequestConfig = {}
  ) {
    const request = {
      method: HttpMethod.PUT,
      url,
      data: payload,
      ...config,
    };
    return this.observableRequest<T>(request);
  }

  public patch<T>(
    url: string,
    payload: BasicObject,
    config: AxiosRequestConfig = {}
  ) {
    const request = {
      method: HttpMethod.PATCH,
      url,
      data: payload,
      ...config,
    };
    return this.observableRequest<T>(request);
  }

  public delete<T>(url: string, config: AxiosRequestConfig = {}) {
    const request = {
      method: HttpMethod.DELETE,
      url,
      ...config,
    };
    return this.observableRequest<T>(request);
  }
}

export default Rxios;
