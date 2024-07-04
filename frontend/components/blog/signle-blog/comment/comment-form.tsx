import { Button } from '@/components/ui/button';
import { FormEvent } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { marked } from 'marked';

export type TComment = {
  comment: string;
  children: any[];
};

const CommentForm = ({
  handleAddComment,
  setComment,
  currentComment,
}: {
  handleAddComment: (e: TComment) => void;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  currentComment: string;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const comment = formData.get('comment') as string;
    if (!comment || comment.trim() === '') return alert('Comment is required');

    handleAddComment({ comment: marked.parse(comment) as any, children: [] });
    setComment('');
    e.currentTarget.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 md:flex-row"
    >
      <Textarea
        placeholder="Your Comment"
        aria-label="comment input"
        required={true}
        className="max-h-[150px] min-h-[70px] py-6 text-base"
        name="comment"
        value={currentComment}
        onChange={(e) => setComment(e.target.value)}
        style={{
          whiteSpace: 'pre-wrap',
        }}
      />
      <Button type="submit" className="w-full px-[30px] py-6 md:w-auto">
        Send
      </Button>
    </form>
  );
};

export default CommentForm;
