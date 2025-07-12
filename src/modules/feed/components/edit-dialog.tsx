import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEditPost } from "../hook/use-edit-post";
interface EditDialogProps {
  id: number;
  initialContent: string;
  toggleDialog: () => void;
}

export function EditDialog({
  id,
  initialContent,
  toggleDialog,
}: EditDialogProps) {
  const { editPost } = useEditPost();
  const [editContent, setEditContent] = useState(initialContent);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Editar Post</DialogTitle>
      </DialogHeader>
      <Textarea
        className="mt-4"
        value={editContent}
        onChange={(e) => setEditContent(e.target.value)}
      />
      <div className="flex justify-end gap-2 mt-4">
        <Button
          variant="ghost"
          onClick={() => {
            toggleDialog();
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={() => {
            editPost({ content: editContent, postId: id });
            toggleDialog();
          }}
        >
          Salvar
        </Button>
      </div>
    </DialogContent>
  );
}
