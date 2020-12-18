import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  padding: 25px;

  div {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
    }

    h2 {
      margin-left: 10px;
      font-weight: normal;
      color: #555;
    }
  }
`;
