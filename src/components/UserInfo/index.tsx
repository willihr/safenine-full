import React from 'react';

import { Container } from './styles';

interface UserInfoProps {
  marginLeft?: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ marginLeft }: UserInfoProps) => {
  return (
    <Container
      marginLeft={marginLeft}
      imageUrl="https://source.unsplash.com/QAB-WJcbgJk/60x60"
    >
      <span>Willian Henrique</span>
      <div />
    </Container>
  );
};

export default UserInfo;
