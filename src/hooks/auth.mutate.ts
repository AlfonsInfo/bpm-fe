import { LoginRequest, LoginResponse } from '@/interfaces/dto.interface';
import { storeTokenLocalStorage } from '@/lib/manager/token.manager';
import { loginService, validateToken } from '@/service/auth.service';
import { useMutation, useQuery } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const USE_GET_USER = "user-get-user";

export const endpointUsers = "/v1/users";

export const useLogin = () => {
    const router = useRouter();

    const { mutate : login, isPending : isLoadingLogin } = useMutation({
        mutationKey : ["login"],
        mutationFn : (credential : LoginRequest) => loginService(credential),
        onSuccess: (response) => {
            storeTokenLocalStorage(response.token);
            toast.success("Login Berhasil");
            router.push("/dashboard");
            router.refresh();
        },
    });
    return {login, isLoadingLogin};
}

export const useValidateToken = () => {
  const router = useRouter();

  const {
    data: validate,
    isLoading,
    isFetching: isLoadFetching,
    isSuccess: tokenValid,
    refetch,
  } = useQuery<LoginResponse, Error>({
    queryKey: ["validateToken"],
    queryFn: validateToken,
    retry: false,
    throwOnError : (error,query) => {
      return false;
    },
  });

  return { validate, isLoading, isLoadFetching, tokenValid, refetch };
};
