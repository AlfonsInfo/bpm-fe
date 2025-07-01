export function storeTokenLocalStorage(token : string){
    localStorage.setItem("token",token)
}

export function getTokenFromLocalStorage() : string | null{
    return "dummy-token";
    // return localStorage.getItem("token")
}

