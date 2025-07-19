import { Article } from "@/interfaces/dto.interface";
import { create } from "zustand";

type ArticleState = {
  visibleArticleCreateDialog: boolean;
  visibleArticleEditDialog: boolean;
  selectedArticle: Article | undefined | null;
  setSelectedArticle: (data: Article) => void;
  showCreateDialog: () => void;
  showEditDialog: () => void;
  hideCreateDialog: () => void;
  hideEditDialog: () => void;
};

export const useArticleState = create<ArticleState>((set) => ({
  visibleArticleCreateDialog: false,
  visibleArticleEditDialog: false,
  selectedArticle: null,
  setSelectedArticle: (data) => set({ selectedArticle: data }),
  showCreateDialog: () => set({ visibleArticleCreateDialog: true }),
  showEditDialog: () => set({ visibleArticleEditDialog: true }),
  hideCreateDialog: () => set({ visibleArticleCreateDialog: false }),
  hideEditDialog: () => set({ visibleArticleEditDialog: false }),
}));