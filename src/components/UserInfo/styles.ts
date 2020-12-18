import styled from 'styled-components';

interface ContainerProps {
  imageUrl: string;
  marginLeft?: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding-left: ${({ marginLeft = 0 }) => `${marginLeft}px`};

  span {
    font-size: 12px;
    color: #aaa;
  }

  div {
    background-image: url(${props => props.imageUrl});
    background-size: contain;

    margin-left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
