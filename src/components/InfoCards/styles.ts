import styled from 'styled-components';

interface InfoCardProps {
  color: string;
}

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  margin: 30px 0;
`;

export const InfoCard = styled.div<InfoCardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 20px;
  background: white;
  border-radius: 5px;
  border: 1px solid #ddd;
  border-left: 4px solid ${props => props.color};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 11px;
      font-weight: 500;
      color: ${props => props.color};
      text-transform: uppercase;
    }

    strong {
      font-size: 20px;
      color: #555;
      margin-top: 5px;
    }
  }

  svg {
    color: #ddd;
  }
`;
