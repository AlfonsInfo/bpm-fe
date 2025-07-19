"use client"


export function storeToken(token : string){
    localStorage.setItem("token",token);
}

export const getTokenFromLocalStorage = (): string | null => {
  if (typeof window === "undefined") return null; 
  return localStorage.getItem("token");
};

