import { ReactElement } from 'react';
import { HeaderProps } from '../DialogTemplate';

export interface DialogWizardProps {
  currentStep: number;
  steps: Array<{ name: string; component: ReactElement }>;
  onClose: HeaderProps['onClose'];
  onBack: HeaderProps['onClose'];
  onNext: HeaderProps['onClose'];
  isNextLoading: boolean;
}
