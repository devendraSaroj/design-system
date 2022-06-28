import React, { useState } from 'react';
import { DialogWizard } from '..';
import { Button } from '../../../Buttons/Button';

const ComponentStory = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open Wizard</Button>
      {open && (
        <DialogWizard
          currentStep={activeStep}
          steps={[
            { name: 'Popup Header 1', component: <Step1 /> },
            { name: 'Popup Header 2', component: <div>Content 2</div> },
            { name: 'Popup Header 3', component: <div>Content 3</div> },
          ]}
          onClose={() => setOpen(!open)}
          isNextLoading={loading}
          onNext={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setActiveStep(activeStep + 1);
            }, 3000);
          }}
          onBack={() => setActiveStep(activeStep - 1)}
        />
      )}
    </div>
  );
};

const Step1 = () => {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}>Content {count}</div>;
};

export default ComponentStory;
