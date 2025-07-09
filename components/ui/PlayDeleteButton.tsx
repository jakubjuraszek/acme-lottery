import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, metrics } from '@/theme';
import { strings } from '@constants/strings';

interface PlayDeleteButtonProps {
  onPress: () => void;
}

export const PlayDeleteButton = memo<PlayDeleteButtonProps>(({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{strings.buttons.deleteRow}</Text>
    </TouchableOpacity>
  );
});

PlayDeleteButton.displayName = 'PlayDeleteButton';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.deleteButton,
    borderRadius: metrics.radius.md,
    paddingVertical: metrics.spacing.xs,
    paddingHorizontal: metrics.spacing.md,
  },
  text: {
    color: colors.textSecondary,
    fontSize: metrics.fontSize.md,
    fontFamily: metrics.fontWeight.medium,
  },
});
