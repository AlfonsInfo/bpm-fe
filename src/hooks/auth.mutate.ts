"use client"
import { LoginRequest, LoginResponse } from '@/interfaces/dto.interface';
import {storeToken } from '@/lib/manager/token.manager';
import { loginService, validateToken } from '@/service/auth.service';
import { useMutation, useQuery } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAuthStore } from './auth.state';

export const USE_GET_USER = "user-get-user";

export const endpointUsers = "/v1/users";

export const useLogin = () => {
    const router = useRouter();
    const setPassProcessLogin = useAuthStore((state) => state.setPassProcessLogin);
    const { mutate : login, isPending : isLoadingLogin } = useMutation({
        mutationKey : ["login"],
        mutationFn : (credential : LoginRequest) => loginService(credential),
        onSuccess:  (response) => {
            storeToken(response.token);
            setPassProcessLogin(true);
            toast.success("Login Berhasil");
            router.push("/dashboard");
            router.refresh();
        },
    });
    return {login, isLoadingLogin};
}

export const useValidateToken = ({ enabled = true }: { enabled?: boolean } = {}) => {
  const {
    data: validate,
    isLoading,
    isFetching: isLoadFetching,
    isSuccess: tokenValid,
    refetch,
  } = useQuery<LoginResponse, Error>({
    queryKey: ["validateToken"],
    queryFn: validateToken,
    retry:false,
    enabled  :enabled,
    throwOnError : (error,query) => {
      return false;
    },
  });

  return { validate, isLoading, isLoadFetching, tokenValid, refetch };
};
