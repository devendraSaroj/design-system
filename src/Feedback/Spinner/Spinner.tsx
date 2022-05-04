import React from 'react';
import { SpinnerProps } from '.';
import S from './SpinnerStyled';

const Spinner = (props: SpinnerProps) => {
  return <S.Spinner {...props}></S.Spinner>;
};

Spinner.defaultProps = {
  size: 'small',
  color: '#fff',
};

export default Spinner;
