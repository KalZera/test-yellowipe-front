import { useState } from "react";
import {
  createPostService,
  type CreatePostBody,
} from "../services/create-post";
import toast from "@/utils/toast";

export const useCreatePost = (fetchPosts: () => void) => {
  const [newPost, setNewPost] = useState("");
  const createPost = async ({ content }: CreatePostBody) => {
    try {
      const response = await createPostService({ content });

      if (response.status === 201) {
        toast.success("Post Criado!");
        setNewPost("");
        fetchPosts();
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return {
    createPost,
    setNewPost,
    newPost,
  };
};
