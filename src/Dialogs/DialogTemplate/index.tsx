import React, { ReactNode } from 'react';
import { Button } from '../../Buttons/Button/Button';
import IconButton from '../../Buttons/IconButton';
import { IconName } from '../../Icons/Icons';
import {
  DialogWrapper,
  Header,
  HeaderLeft,
  HeaderRight,
  ProgressTrack,
  ProgressThumb,
  FooterDiv,
  FooterButtons,
  DialogBody,
} from './styled';
import { DialogTemplateProps } from './utils';

const DialogTemplate = (props: DialogTemplateProps) => {
  return <DialogWrapper>{props.children}</DialogWrapper>;
};

type HeaderProps = {
  name: string;
  currentStep: number;
  totalStep: number;
};

DialogTemplate.Header = ({ name, currentStep, totalStep }: HeaderProps) => {
  return (
    <>
      <Header>
        <HeaderLeft>
          {currentStep > 1 && (
            <span>
              <IconButton>
                <IconName.HiOutlineArrowNarrowLeft />
              </IconButton>
            </span>
          )}
          {name}
        </HeaderLeft>
        <HeaderRight>
          <span>
            STEP <strong>{' ' + currentStep}</strong> OUT OF
            <strong>{' ' + totalStep}</strong>
          </span>
          <IconButton>
            <IconName.Close />
          </IconButton>
        </HeaderRight>
      </Header>
      <ProgressTrack>
        <ProgressThumb width={(100 / totalStep) * currentStep} />
      </ProgressTrack>
    </>
  );
};

DialogTemplate.Body = ({ children }: { children: ReactNode }) => {
  return <DialogBody>{children}</DialogBody>;
};

DialogTemplate.Footer = ({}) => {
  return (
    <FooterDiv>
      <FooterButtons>
        <Button variants="ghost">Cancel</Button>
        <Button>Next</Button>
      </FooterButtons>
    </FooterDiv>
  );
};

export default DialogTemplate;
