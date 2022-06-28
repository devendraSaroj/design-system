import { CSSProperties, HTMLProps, ReactNode } from 'react';
import { colors } from '../../DesignTokens/Colors';
import { ExtractMethods } from '../../Utils/typeUtils';

type HtmlBtnMethods = ExtractMethods<HTMLProps<HTMLButtonElement>>;

export interface ButtonTemplateProps extends HtmlBtnMethods {
  size?: 'small' | 'medium' | 'large';
  variants?: 'fill' | 'outline' | 'ghost';
  colorScheme?: 'primary' | 'success' | 'alert' | 'danger' | 'black';
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
    primary: {
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
    black: {
      main: colors.light.black.main,
      hover: {
        fill: colors.light.black.dark,
        outline: colors.light.black.ghost,
        ghost: colors.light.black.ghost,
      },
    },
  },
};
