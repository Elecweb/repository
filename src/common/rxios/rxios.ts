import { Rxios as BaseRxios } from "./base-rxios";
import { AxiosRequestConfig } from "axios";
import { getAccessToken } from "./token";

class Rxios extends BaseRxios {
  override interceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = getAccessToken();
    if (config.headers && config.headers["Authorization"]) {
      return {
        ...config,
        headers: {
          Authorization: config.headers["Authorization"],
        },
      };
    } else if (token) {
      return {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      return config;
    }
  };
}

export default Rxios;
