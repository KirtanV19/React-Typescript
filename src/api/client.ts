import axios from "axios";
import { API } from "../configs/env";
export const METHODS = {
  POST: "post",
  GET: "get",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
};

const BASE_URL = API.URL;
// const DEFAULT_PREFIX = "/api";

const axiosConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (!response) {
      return Promise.reject(error);
    }

    const { status } = response;

    const errorMessage = response?.error?.message;

    const customErrorMessage = {
      message: errorMessage,
      ...response,
    };

    return Promise.reject(customErrorMessage);
  }
);

const client = ({
  method = METHODS.GET,
  url = "",
  data = undefined as any,
  ...rest
}: {
  method?: string;
  url?: string;
  data?: any;
  [key: string]: any;
}) => {
  return axiosInstance({
    method,
    url,
    data,
    withCredentials: true,
    ...rest,
  });
};

export default client;

/*
const client = ({
  method = METHODS.GET,
  url = "",
  data = undefined as any,
  ...rest
}: {
  method?: string;
  url?: string;
  data?: any;
  [key: string]: any;
})

same as

type ClientConfig =  {
  method?: string;
  url?: string;
  data?: any;
  [key: string]: any;
}

const client = ({
  method = METHODS.GET,
  url = '',
  data = undefined as any,
  ...rest
}: ClientConfig) 
*/
