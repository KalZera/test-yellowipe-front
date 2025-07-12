import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/authentication";
import { useDeletePost } from "../hook/use-delete-post";
import { EditDialog } from "./edit-dialog";

type Post = {
  id: number;
  content: string;
  author: string;
  authorId?: string;
  createdAt?: string;
};

export function ItemListPost({ id, author, authorId, content }: Post) {
  const { deletePost } = useDeletePost();
  const { user } = useAuth();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <Card key={id} className="mb-4">
      <CardHeader className="flex justify-between items-start">
        <span className="text-sm font-medium text-gray-500">{author}</span>
        {authorId === user?.id && (
          <div className="flex gap-2">
            <Dialog open={isEditing || isDeleting}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  Editar
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    setIsDeleting(true);
                  }}
                >
                  Deletar
                </Button>
              </DialogTrigger>
              {isEditing && (
                <EditDialog
                  id={id}
                  initialContent={content}
                  toggleDialog={() => setIsEditing(!isEditing)}
                />
              )}
              {isDeleting && (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Deseja Deletar esse Post</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button
                      variant="ghost"
                      onClick={() => setIsDeleting(false)}
                    >
                      Não, Cancelar
                    </Button>
                    <Button
                      onClick={() => {
                        deletePost({ postId: id });
                        setIsDeleting(false);
                      }}
                    >
                      Sim, Deletar
                    </Button>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
