import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react';
import Preview from './preview';
import CommentForm, { TComment } from './comment-form';
import { SquareM } from 'lucide-react';

type TCommentTabs = {
  handleAddComment: (e: TComment) => void;
  isComment?: boolean;
};

const CommentTabs: React.FC<TCommentTabs> = ({
  handleAddComment,
  isComment = false,
}) => {
  const [comment, setComment] = useState('');

  return (
    <Tabs defaultValue="comment" className="w-full">
      <div className="flex items-end justify-between md:w-[85%]">
        <TabsList className="grid w-fit grid-cols-2">
          <TabsTrigger value="comment" className="text-[13px]">
            Comment
          </TabsTrigger>
          <TabsTrigger value="preview" className="text-[13px]">
            Preview
          </TabsTrigger>
        </TabsList>
        <span className="flex items-center text-[10px] md:text-xs">
          <SquareM size={16} />
          arkdown is supported.*
        </span>
      </div>

      <TabsContent value="comment">
        <CommentForm
          setComment={setComment}
          currentComment={comment}
          handleAddComment={handleAddComment}
        />
      </TabsContent>
      <TabsContent value="preview" className="-mb-[5.9px]">
        <Preview comment={comment} isComment={isComment} />
      </TabsContent>
    </Tabs>
  );
};

export default CommentTabs;
