import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 65px;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;

  input {
    background: #fafafa;
    width: 320px;
    padding: 8px;
    border: 2px solid #fafafa;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      font-size: 12px;
      color: #999;
    }
  }

  button {
    display: flex;
    align-items: center;
    background: #56f;
    border-radius: 0 5px 5px 0;
    border: 0;
    padding: 0 10px;

    &:hover {
      background: ${shade(0.1, '#56f')};
    }

    svg {
      color: #fff;
    }
  }
`;

export const RightButtons = styled.div`
  display: flex;
  align-items: center;

  button {
    border: 0;
    background: none;
    margin-right: 30px;

    svg {
      display: block;
      color: #ccc;
    }
  }

  div {
    border-left: 1px solid #ddd;
  }
`;
