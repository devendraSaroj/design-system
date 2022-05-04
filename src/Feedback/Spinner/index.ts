import Spinner from './Spinner';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'giant';
  color?: 'string';
}

export const constants = {
  size: {
    small: '16px',
    medium: '24px',
    large: '32px',
    giant: '40px',
  },
};

export { Spinner };
