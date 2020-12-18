import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  h3 {
    background: #f8f8f8;
    padding: 15px 20px;
    font-size: 15px;
    color: #4e73df;
    width: 100%;

    border-bottom: 1px solid #ddd;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 25px 10px;
    margin-bottom: 10px;

    div {
      display: flex;
      flex-direction: column;
      padding-top: 5px;
      padding-bottom: 0;

      h4 {
        color: #333;
        background: #eee;
        padding: 5px 8px;
        border-radius: 10px;
        box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.1);
        margin: 10px 0;
      }
    }
  }
`;
