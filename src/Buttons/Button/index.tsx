import React from 'react';
import ButtonTemplate from '../Template';
import { ButtonTemplateProps } from '../Template/utils';

export type ButtonProps = Omit<ButtonTemplateProps, 'children'> & {
  children: string;
};
const Button = (props: ButtonProps) => {
  return (
    <ButtonTemplate {...props} style={{ padding: '0 16px' }}>
      {props.children}
    </ButtonTemplate>
  );
};

Button.defaultProps = {
  size: 'medium',
  variants: 'fill',
  colorScheme: 'primary',
  isLoading: false,
};

export { Button };
