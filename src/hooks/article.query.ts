import { Article } from "@/interfaces/dto.interface";
import { getArticleList } from "@/service/article.service";
import { useQuery } from "@tanstack/react-query";


export const USE_GET_ARTICLE_LIST = "use-get-article-list";

export function useGetArticleList() : {isFetchingArticles : boolean , articles : Array<Article> | undefined} {
    const { isFetching  : isFetchingArticles,  data : articles } = useQuery({
        queryKey: [USE_GET_ARTICLE_LIST, ],
        queryFn: () => getArticleList(),
    });
    return { isFetchingArticles, articles } 
}