import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NumberButtonProps } from '@/types';
import { colors, metrics } from '@/theme';

export const NumberButton = memo<NumberButtonProps>(
  ({ number, isSelected, onPress }) => {
    const handlePress = () => onPress(number);

    return (
      <TouchableOpacity
        style={[styles.button, isSelected && styles.selectedButton]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {number}
        </Text>
      </TouchableOpacity>
    );
  }
);

NumberButton.displayName = 'NumberButton';

const styles = StyleSheet.create({
  button: {
    width: metrics.dimensions.numberButton,
    height: metrics.dimensions.numberButton,
    backgroundColor: colors.numberBallBackground,
    borderRadius: metrics.dimensions.numberButton / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    margin: 2,
  },
  selectedButton: {
    backgroundColor: colors.numberBallSelected,
    borderColor: colors.numberBallSelected,
  },
  text: {
    fontSize: metrics.fontSize.base,
    fontFamily: metrics.fontWeight.medium,
    color: colors.textPrimary,
  },
  selectedText: {
    color: colors.textWhite,
  },
});
