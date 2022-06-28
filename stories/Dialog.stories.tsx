import React from 'react';
import Docs from './Dialog.stories.mdx';
import DialogWizardStory from '../src/Dialogs/DialogWizard/Usage';

type Props = {};

DialogWizardStory;

// const DialogWizard = (props: Props) => {
//   return <div>Dialog.stories</div>;
// };

export default {
  title: 'POPOVER/Dialog',
  component: DialogWizardStory,

  parameters: {
    docs: {
      page: Docs,
    },
  },
};
