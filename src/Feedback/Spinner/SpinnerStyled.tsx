import styled, { keyframes } from 'styled-components';
import { constants, SpinnerProps } from '.';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => constants.size[props.size!]};
  height: ${(props) => constants.size[props.size!]};

  border: 4px solid ${(props) => props.color};
  border-left-color: transparent;
  border-radius: 50%;

  animation: ${spin} 0.7s linear infinite;
`;

export default { Spinner };
