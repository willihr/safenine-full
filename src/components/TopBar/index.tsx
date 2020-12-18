import React from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import UserInfo from '../UserInfo';

import { Container, Search, RightButtons } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Pesquisar por..." />
        <button type="button">
          <FaSearch size={16} />
        </button>
      </Search>
      <RightButtons>
        <button type="button">
          <FaBell size={16} />
        </button>
        <button type="button">
          <FaEnvelope size={16} />
        </button>
        <UserInfo marginLeft={30} />
      </RightButtons>
    </Container>
  );
};

export default SearchBar;
