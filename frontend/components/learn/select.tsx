'use client';

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { usePathname, useRouter } from 'next/navigation';
import { slugify } from '@/utils/utils';

const SelectComp = ({
  topics,
  id,
}: {
  topics: { title: string }[];
  id: string;
}) => {
  const router = useRouter();
  const pathName = usePathname().split('/')[3];
  const [value, setValue] = useState(pathName);

  return (
    <Select
      value={value}
      onValueChange={(e) => {
        setValue(e);
        router.push(`/learn/${id}/${slugify(e)}`);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {topics.map((topic: any) => (
            <SelectItem
              value={slugify(topic.title)}
              key={topic.title}
              onSelect={() => setValue(slugify(topic.title))}
            >
              {topic.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComp;
