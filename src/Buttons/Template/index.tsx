import React from 'react';
import { Spinner } from '../../Feedback/Spinner';
import S from './styled';
import { ButtonTemplateProps } from './utils';

const ButtonTemplate = (props: ButtonTemplateProps) => {
  return (
    <S.Button {...props}>
      <span>
        <Spinner size="small" />
      </span>
      {props.children}
    </S.Button>
  );
};

ButtonTemplate.defaultProps = {
  type: 'button',
  size: 'medium',
  variants: 'fill',
  colorScheme: 'primary',
  isLoading: false,
};

export default ButtonTemplate;
