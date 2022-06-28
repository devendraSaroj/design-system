import React, { useRef } from 'react';
// import { createPortal } from 'react-dom';
import DialogTemplate from '../DialogTemplate';
import {} from './styled';
import { DialogWizardProps } from './utils';

// type Props = {};

const DialogWizard = (props: DialogWizardProps) => {
  const unlockedSteps = useRef(1);

  const activeStepData = props.steps[props.currentStep - 1];
  const totalSteps = props.steps.length;
  return (
    <DialogTemplate>
      <DialogTemplate.Header
        name={activeStepData.name}
        currentStep={props.currentStep}
        totalStep={totalSteps}
        onBack={props.onBack}
        onClose={props.onClose}
      />
      <DialogTemplate.Body>
        {props.steps.map(({ component }, index) => {
          const isActiveStep = index + 1 === props.currentStep;
          if (index + 1 <= unlockedSteps.current)
            return (
              <div style={{ display: isActiveStep ? 'block' : 'none' }}>
                {component}
              </div>
            );
          return null;
        })}
      </DialogTemplate.Body>
      <DialogTemplate.Footer
        onCancel={() => {}}
        isNextLoading={props.isNextLoading}
        onNext={props.onNext}
      />
    </DialogTemplate>
  );
};

export { DialogWizard };
