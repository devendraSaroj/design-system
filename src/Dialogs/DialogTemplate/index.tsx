import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '../../Buttons/Button';
import IconButton, { IconButtonProps } from '../../Buttons/IconButton';
import { IconName } from '../../Icons/Icons';
import BackdropPortal from '../../Utils/BackdropPortal';
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
  return (
    <BackdropPortal>
      <DialogWrapper>{props.children}</DialogWrapper>
    </BackdropPortal>
  );
};

export type HeaderProps = {
  name: string;
  currentStep: number;
  totalStep: number;

  /**
   * Gets triggered on back arrow click;
   * - Back arrow button will appear at very left of Wizard header:
   *    1. if Wizard has more than 1 steps;
   *    2. and user is currently at steps other than 1;
   */
  onBack: IconButtonProps['onClick'];

  /**
   * - Triggers on:
   *    1. Close button click
   *    2. keyboard Esc button
   */
  onClose: IconButtonProps['onClick'];
};

DialogTemplate.Header = ({
  name,
  currentStep,
  totalStep,
  onBack,
  onClose,
}: HeaderProps) => {
  return (
    <>
      <Header>
        <HeaderLeft>
          {currentStep > 1 && (
            <span>
              <IconButton onClick={onBack}>
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
          <IconButton onClick={onClose}>
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

type click = ButtonProps['onClick'];

export type FooterProps = {
  onCancel: click;
  onNext: click;
  isNextLoading: boolean;
};

DialogTemplate.Footer = (props: FooterProps) => {
  return (
    <FooterDiv>
      <FooterButtons>
        <Button variants={'ghost'} onClick={props.onCancel}>
          Cancel
        </Button>
        <Button isLoading={props.isNextLoading} onClick={props.onNext}>
          Next
        </Button>
      </FooterButtons>
    </FooterDiv>
  );
};

export default DialogTemplate;
