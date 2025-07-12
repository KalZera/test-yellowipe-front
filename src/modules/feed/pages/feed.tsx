import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NewPostTextField } from "../components/new-post-text-field";
import { ItemListPost } from "../components/item-list-posts";
import { useGlobalFeedState } from "../hook/use-global-state";
import { Skeleton } from "@/components/ui/skeleton";

const POSTS_PER_PAGE = 10; // Assuming a constant for posts per page

export function Feed() {
  const { fetchPosts, posts, loading, page, setPage } = useGlobalFeedState();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center">Seu Feed</h1>

      <NewPostTextField fetchPosts={fetchPosts} />

      {loading && (
        <div className="flex flex-col justify-center items-center  gap-10">
          <Skeleton className="w-full h-32" />
          <Skeleton className="w-full h-32" />
        </div>
      )}
      {!loading && posts.length === 0 && (
        <div className="text-center text-gray-500">
          Nenhum post encontrado.
          <br />
          Crie o primeiro post!
        </div>
      )}
      {!loading &&
        posts.map((post) => (
          <ItemListPost key={post.id} {...post} author={post.author.name} />
        ))}

      <div className="flex justify-center items-center mt-6 gap-4">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
            fetchPosts();
          }}
        >
          Anterior
        </Button>
        <span className="text-sm text-gray-600">Página {page}</span>
        <Button
          variant="outline"
          disabled={posts.length < POSTS_PER_PAGE} // Assuming 10 posts per page
          onClick={() => {
            setPage(page + 1);
            fetchPosts();
          }}
        >
          Próxima
        </Button>
      </div>
    </div>
  );
}
