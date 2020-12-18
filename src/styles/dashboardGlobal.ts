import 'react-toastify/dist/ReactToastify.css';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f6f7fa;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
