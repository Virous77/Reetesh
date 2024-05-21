import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const AuthorImage = () => {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/101452588?v=4"
        alt="Reetesh Kumar"
      />
      <AvatarFallback>RK</AvatarFallback>
    </Avatar>
  );
};

export default AuthorImage;
