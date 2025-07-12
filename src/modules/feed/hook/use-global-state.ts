import { create } from "zustand";
import { fetchPostService } from "../services/fetch-posts";

type Author = {
  name: string;
  email: string;
  id: string;
};

type Post = {
  id: number;
  content: string;
  author: Author;
  authorId?: string;
  createdAt?: string;
};

interface GlobalFeedStore {
  posts: Post[];
  loading: boolean;
  error: Error | null;
  page: number;
  setPosts: (posts: Post[]) => void;
  setPage: (page: number) => void;
  setLoading: (loading: boolean) => void;
  fetchPosts: () => void;
}
export const useGlobalFeedState = create<GlobalFeedStore>((set, get) => ({
  posts: [],
  loading: true,
  error: null,
  page: 1,
  setPage: (page: number) => {
    set({ page });
  },
  setLoading: (loading: boolean) => {
    set({ loading });
  },
  setPosts: (posts: Post[]) => {
    set({ posts });
  },
  fetchPosts: async () => {
    try {
      set({ loading: true });
      const page = get().page;
      const { data } = await fetchPostService({ page });
      set({ posts: data.posts });
    } catch (err) {
      set({ error: err as Error });
    } finally {
      set({ loading: false });
    }
  },
}));
