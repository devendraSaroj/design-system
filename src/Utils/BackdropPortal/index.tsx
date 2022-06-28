import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { canUseDOM } from './utils';
import { PopupBackdropDiv, PopupContentDiv } from './styled';
// import { PopupBackdropDiv, PopupContentDiv } from './PopupWrapperStyled';

type PortalProps = {
  children: React.ReactNode;
  onBackdropClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const BackdropPortal = (props: PortalProps) => {
  /**
   * blur background when popup opened, and remove blur when popup is closed
   * NOTE: since backdrop-filter css property is not supported in Firefox browser,
   * we would go ahead with filter property
   */
  useEffect(() => {
    const allImmediateChildren = document.body
      .children as HTMLCollectionOf<HTMLElement>;

    // ignore script tags and div#modal-root element
    const immediateChildren = Array.from(allImmediateChildren).filter(
      (child) => child.nodeName !== 'SCRIPT' && child.id !== 'modal-root'
    );
    if (canUseDOM) {
      immediateChildren.forEach(
        (child: HTMLElement) => (child.style.filter = 'blur(7px)')
      );
    }
    return () => {
      if (canUseDOM) {
        immediateChildren.forEach((child: HTMLElement) =>
          child.style.removeProperty('filter')
        );
      }
    };
  }, []);

  // check if document.createElement is available
  if (!canUseDOM) return null;

  /**
   * Check if body has an immediate child with @id "modal-root",
   * If not available then create a new one
   */
  const modalRoot = document.querySelector('body #modal-root');
  if (!modalRoot) {
    const newModalRoot = document.createElement('div');
    newModalRoot.id = 'modal-root';
    document.body.appendChild(newModalRoot);
  }
  return ReactDOM.createPortal(
    <PopupBackdropDiv onClick={props.onBackdropClick}>
      <PopupContentDiv
        onClick={(e) => {
          // stop propagation so that backdrop(blurred background) only gets the click which falls outside of popup content
          e.stopPropagation();
        }}
      >
        {props.children}
      </PopupContentDiv>
    </PopupBackdropDiv>,
    document.querySelector('body #modal-root')!
  );
};

export default BackdropPortal;
