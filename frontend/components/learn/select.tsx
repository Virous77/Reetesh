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

const SelectComp = ({ topics }: any) => {
  const router = useRouter();
  const pathName = usePathname().split('/')[2];
  const [value, setValue] = useState(pathName);

  return (
    <Select
      value={value}
      onValueChange={(e) => {
        setValue(e);
        router.push(`/learn/${e.toLowerCase().replace(' ', '-')}`);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {topics.map((topic: any) => (
            <SelectItem
              value={topic.title.toLowerCase().replace(' ', '-')}
              key={topic.title}
              onSelect={() =>
                setValue(topic.title.toLowerCase().replace(' ', '-'))
              }
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
