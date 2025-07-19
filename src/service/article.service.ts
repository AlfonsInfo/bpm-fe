import { Article } from "@/interfaces/dto.interface";
import { clientWithAuth, unwrapResp } from "@/lib/client/axios.instance";


export const endpointArticles = "/v1/articles";

export const getArticleList = async () : Promise<Array<Article>> => {
    return unwrapResp(await clientWithAuth.get(endpointArticles))
}