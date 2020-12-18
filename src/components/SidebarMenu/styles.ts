import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  width: 260px;
  height: 100vh;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  /* background-image: linear-gradient(180deg, #363636 10%, #292929 100%); */
  color: #fff;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    > div {
      /* padding: 20px 0 0; */
      border-bottom: 1px solid #77f;

      > span {
        display: block;
        margin-top: 15px;
        font-size: 11px;
        font-weight: bold;
        text-transform: uppercase;
        color: #9af;
      }
    }
  }

  img {
    width: 100px;
    align-self: center;
    margin-bottom: 50px;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  padding: 22px 0;

  h2 {
    font-size: 18px;
    margin-left: 15px;
  }
`;

export const PageLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #cce;
  transition: color 0.2s;
  padding: 22px 0;

  svg {
    transition: color 0.2s;
    color: #89f;
  }

  span {
    margin-left: 10px;
    font-size: 13px;
    font-weight: 500;
  }

  &:hover,
  .active {
    color: #fff;

    svg {
      color: #fff;
    }
  }
`;
