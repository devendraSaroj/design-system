import React, { ReactElement } from 'react';
import ButtonTemplate from '../Template';
import { ButtonTemplateProps } from '../Template/utils';
import { constants } from './utils';

type IconButtonProps = Omit<ButtonTemplateProps, 'children'> & {
  children: ReactElement;
};

const IconButton = (props: IconButtonProps) => {
  const height = constants[props.size!].height;
  const width = constants[props.size!].width;

  return (
    <ButtonTemplate {...props} style={{ width, height, padding: 0 }}>
      {React.cloneElement(props.children, { size: height - 8 })}
    </ButtonTemplate>
  );
};

IconButton.defaultProps = {
  size: 'small',
  variants: 'ghost',
  colorScheme: 'default',
  isLoading: false,
  type: 'button',
};

export default IconButton;
