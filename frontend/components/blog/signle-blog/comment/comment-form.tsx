'use client';

import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import action from './action';
import { getLocalData } from '@/utils/utils';
import { usePathname } from 'next/navigation';
import { trpc } from '@/trpc-client/client';
import { Textarea } from '@/components/ui/textarea';

const CommentForm = () => {
  const [pending, setPending] = useState(false);
  const pathName = usePathname();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { mutateAsync } = trpc.blogs.createComment.useMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('comment')?.toString();

    if (!comment) return alert('Please enter a comment');
    setPending(true);

    try {
      const blogId = pathName.split('/')[2];
      const id: string = getLocalData('tempId');
      await mutateAsync({ comment, blogId, userId: id });
      inputRef!.current!.value = '';
      action(blogId);
      setPending(false);
    } catch (error) {
      setPending(false);
      alert('Failed to send comment');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center gap-2 md:flex-row"
    >
      <Textarea
        placeholder="Your Comment"
        aria-label="comment"
        required={true}
        className=" max-h-[150px] min-h-[70px] py-6 text-base"
        name="comment"
        ref={inputRef}
      />
      <Button
        disabled={pending}
        type="submit"
        className=" w-full px-[30px] py-6 md:w-auto"
      >
        {pending ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
};

export default CommentForm;
