import React, { memo } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, metrics } from '@/theme';

interface ActionButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
}

export const ActionButton = memo<ActionButtonProps>(
  ({ title, onPress, disabled = false, variant = 'primary', style }) => {
    const buttonStyle = [
      styles.button,
      variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
      disabled &&
        (variant === 'primary'
          ? styles.disabledPrimaryButton
          : styles.disabledSecondaryButton),
      style,
    ];

    const textStyle = [
      styles.text,
      variant === 'primary' ? styles.primaryText : styles.secondaryText,
    ];

    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

ActionButton.displayName = 'ActionButton';

const styles = StyleSheet.create({
  button: {
    borderRadius: metrics.radius.round,
    paddingVertical: metrics.spacing.lg - 2,
    paddingHorizontal: metrics.spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: metrics.spacing.md,
  },
  disabledPrimaryButton: {
    backgroundColor: colors.buttonDisabled,
  },
  disabledSecondaryButton: {
    borderColor: colors.buttonDisabled,
  },
  text: {
    fontSize: metrics.fontSize.lg,
    fontFamily: metrics.fontWeight.semiBold,
  },
  primaryText: {
    color: colors.textWhite,
  },
  secondaryText: {
    color: colors.primary,
    fontSize: metrics.fontSize.base,
  },
});
