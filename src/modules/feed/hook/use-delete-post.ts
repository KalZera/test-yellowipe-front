import toast from "@/utils/toast";
import {
  deletePostService,
  type DeletePostBody,
} from "../services/delete-post";
import { useGlobalFeedState } from "./use-global-state";

export const useDeletePost = () => {
  const { fetchPosts, setLoading } = useGlobalFeedState();
  const deletePost = async ({ postId }: DeletePostBody) => {
    try {
      setLoading(true);
      const response = await deletePostService({ postId });
      if (response.status === 204) {
        toast.success("Post Deletado!");
        //abordagem parecida com o funcionamento do react-query,
        //onde é sempre feita uma nova requisição para atualizar o estado
        fetchPosts();
      }
    } catch (error) {
      console.error("Error deleting Post:", error);
    }
  };

  return {
    deletePost,
  };
};
