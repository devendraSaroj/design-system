import styled from 'styled-components';
import { ButtonTemplateProps, constants } from './utils';

const Button = styled.button<ButtonTemplateProps>`
  font-size: 14px;
  border-radius: 4px;
  border: none;
  letter-spacing: 1.34px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => {
    if (props.variants === 'fill') {
      return 'white';
    }
    return constants.color[props.colorScheme!].main;
  }};

  // depends on variants prop
  background-color: ${(props) => {
    if (props.variants === 'fill') {
      return constants.color[props.colorScheme!].main;
    }
    return 'transparent';
  }};

  border: ${(props) => {
    if (props.variants === 'outline') {
      return `2px solid ${constants.color[props.colorScheme!].main}`;
    }
    return 'none';
  }};

  // varies based on size prop
  height: ${(props) => {
    return constants.height[props.size!];
  }};

  &:not(:disabled) {
    cursor: pointer;
    :hover,
    :focus-visible {
      background-color: ${(props) =>
        constants.color[props.colorScheme!].hover[props.variants!]};
    }

    :active {
      opacity: 0.8;
    }
  }

  & span {
    margin-right: 5px;
    display: ${(props) => (props.isLoading ? 'flex' : 'none')};
  }
`;

export default { Button };
