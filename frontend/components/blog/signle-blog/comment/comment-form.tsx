'use client';

import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import action, { createComment } from './action';
import { getLocalData } from '@/utils/utils';
import { usePathname } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { useMutation } from '@tanstack/react-query';

const CommentForm = () => {
  const pathName = usePathname();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: createComment,
    onError: (data: any) => {
      alert(data.message || 'Failed to send comment');
    },
    onSuccess: () => {
      inputRef!.current!.value = '';
      action(pathName.split('/')[2]);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('comment')?.toString();
    if (!comment) return alert('Please enter a comment');
    const blogId = pathName.split('/')[2];
    const id: string = getLocalData('tempId');
    mutate({ comment, userId: id, blogId });
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
        disabled={isPending}
        type="submit"
        className=" w-full px-[30px] py-6 md:w-auto"
      >
        {isPending ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
};

export default CommentForm;
