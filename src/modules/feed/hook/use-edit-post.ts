import toast from "@/utils/toast";
import {
  updatePostService,
  type UpdatePostBody,
} from "../services/update-post";
import { useGlobalFeedState } from "./use-global-state";

export const useEditPost = () => {
  const { fetchPosts, setLoading } = useGlobalFeedState();
  const editPost = async ({ content, postId }: UpdatePostBody) => {
    try {
      setLoading(true);
      const response = await updatePostService({ content, postId });
      if (response.status === 204) {
        toast.success("Post Editado!");
        // poderia ser feito de maneira manual outra forma, utilizando o zustand e atualizando o estado
        // const updatedPosts = posts.map((post) =>
        //   post.id === postId ? { ...post, content } : post
        // );
        // setPosts(updatedPosts);
        fetchPosts();
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return {
    editPost,
  };
};
