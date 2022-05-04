import React from 'react';
import { Spinner } from '../../Feedback/Spinner';
import S from './ButtonStyled';
import { ButtonProps } from '.';

const Button = (props: ButtonProps) => {
  return (
    <S.Button {...props}>
      <span>
        <Spinner size="small" />
      </span>
      {props.children}
    </S.Button>
  );
};

Button.defaultProps = {
  size: 'medium',
  variants: 'fill',
  colorScheme: 'default',
  isLoading: false,
};

export { Button };
