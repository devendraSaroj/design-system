import { CSSProperties, ReactNode } from 'react';
import { colors } from '../../DesignTokens/Colors';

export interface ButtonTemplateProps {
  size?: 'small' | 'medium' | 'large';
  variants?: 'fill' | 'outline' | 'ghost';
  colorScheme?: 'default' | 'success' | 'alert' | 'danger';
  children: ReactNode;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
}

export const constants = {
  height: {
    small: '32px',
    medium: '40px',
    large: '48px',
  },
  color: {
    default: {
      main: colors.light.primary.main,
      hover: {
        fill: colors.light.primary.dark,
        outline: colors.light.primary.ghost,
        ghost: colors.light.primary.ghost,
      },
    },
    success: {
      main: colors.light.success.main,
      hover: {
        fill: colors.light.success.dark,
        outline: colors.light.success.ghost,
        ghost: colors.light.success.ghost,
      },
    },
    alert: {
      main: colors.light.alert.main,
      hover: {
        fill: colors.light.alert.dark,
        outline: colors.light.alert.ghost,
        ghost: colors.light.alert.ghost,
      },
    },
    danger: {
      main: colors.light.danger.main,
      hover: {
        fill: colors.light.danger.dark,
        outline: colors.light.danger.ghost,
        ghost: colors.light.danger.ghost,
      },
    },
  },
};
