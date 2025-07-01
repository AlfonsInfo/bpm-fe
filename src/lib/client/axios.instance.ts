import Axios, {  AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getTokenFromLocalStorage } from "../manager/token.manager";
import toast from "react-hot-toast";
import { ErrorResponseDto } from "@/interfaces/dto.interface";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    skipGlobalErrorHandler?: boolean;
}

export const BE_ENDPOINT = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// header
export const headerWithToken = () => {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    }
}

export const headerWithoutToken = () => {
    return {
        "Content-Type": "application/json",
    }
}

// Axios Instance
export const clientWithoutAuth = Axios.create({
    baseURL: `${BE_ENDPOINT}`,
    headers: headerWithoutToken(),
});


export const clientWithAuth = Axios.create({
    baseURL: `${BE_ENDPOINT}`,
    headers: {...headerWithToken()}
});


function handleError(error: AxiosError<ErrorResponseDto<any>>){
    const errorMsg = error?.response?.data?.message
    toast.error(errorMsg ?? "Terjadi Kesalahan!")
}

// Optional: Interceptors
clientWithAuth.interceptors.response.use(
    (response) => response,
    (error: AxiosError<any>) => {
        const config = error.config as CustomAxiosRequestConfig;
        if (config?.skipGlobalErrorHandler) {
          return Promise.reject(error);
        }
        handleError(error);
        return Promise.reject(error);
    }
  );
  

export function unwrapResp<T>(res: AxiosResponse<T>): T {
    return res.data;
}