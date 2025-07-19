"use client"
import { FooterCardLayout } from "@/components/cards/FooterCardLayout";
import { useGetArticleList } from "@/hooks/article.query";
import { Skeleton } from "primereact/skeleton";
import ArticleCard from "./component/ArticleCard";
import { Article } from "@/interfaces/dto.interface";
import AddButtonComponent from "@/components/button/add-button/add-button";
import { AddCard } from "@/components/cards/AddCard";
import { useArticleState } from "@/hooks/article.state";
import CreateArticleDialog from "./component/CreateArticleDialog";

export default function ArticlePage() {
  const { isFetchingArticles, articles } = useGetArticleList();
  const { visibleArticleCreateDialog,showCreateDialog,hideCreateDialog} = useArticleState();
  function ArticleGridLayout({ children }: {children : React.ReactNode} ){
    return(
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {children}
         </div>
    )
  }

  function ArticleGridSkeleton() {
    return (
      <ArticleGridLayout>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 border rounded shadow">
            <Skeleton width="80%" height="1.5rem" className="mb-10" />
            <FooterCardLayout>
              <Skeleton width="3rem" height="2rem" />
              <Skeleton width="2rem" height="2rem" />
            </FooterCardLayout>
          </div>
        ))}
        </ArticleGridLayout>
    );
  }

  return (
    <div className="m-4 p-4">
    <div className="flex flex-row justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Articles</h1>
      {/* <AddButtonComponent /> */}
    </div>
      {isFetchingArticles && <ArticleGridSkeleton />}

      {!isFetchingArticles && (
          <ArticleGridLayout>
            {articles?.map((article: Article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
            <AddCard onClick={showCreateDialog} text="Add New Article"/>
          </ArticleGridLayout>
      )}
      <CreateArticleDialog
        visible={visibleArticleCreateDialog}
        onHide={hideCreateDialog}
      />
    </div>
  );
}
