import { LoginRequest, LoginResponse } from "@/interfaces/dto.interface";
import { clientWithAuth, clientWithoutAuth, unwrapResp } from "@/lib/client/axios.instance";

export const endpointLogin = "/v1/auth/login";
export const endpointValidateToken = "/v1/auth/validate";

export const loginService = async (credential : LoginRequest) : Promise<LoginResponse> => {
    return unwrapResp(await clientWithoutAuth.post(endpointLogin,credential));  
}


export const validateToken = async () : Promise<LoginResponse> => {
    return unwrapResp(await clientWithAuth.get(endpointValidateToken));  
}