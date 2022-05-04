import styled, { keyframes } from 'styled-components';

const popAnimation = keyframes`
  0% { transform:scale(0.8)}
  100% { transform:scale(1)}
`;

export const PopupBackdropDiv = styled.div`
  /* spread over entire screen */
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;

  /* center popup content */
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: auto;
  z-index: 1040;
`;

export const PopupContentDiv = styled.div`
  z-index: 1060;
  animation: ${popAnimation} 0.25s ease-in-out;
`;
