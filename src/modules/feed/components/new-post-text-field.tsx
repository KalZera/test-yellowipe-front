import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useCreatePost } from "../hook/use-create-post";

interface NewPostTextFieldProps {
  fetchPosts: () => void;
}
export function NewPostTextField({ fetchPosts }: NewPostTextFieldProps) {
  const { createPost, newPost, setNewPost } = useCreatePost(fetchPosts);

  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-semibold">Nova Publicação</h2>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="O que você está pensando?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => createPost({ content: newPost })}
          disabled={!newPost.trim()}
        >
          Postar
        </Button>
      </CardFooter>
    </Card>
  );
}
