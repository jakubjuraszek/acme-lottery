import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, metrics } from '@/theme';

interface EmptyStateProps {
  message: string;
}

export const EmptyState = memo<EmptyStateProps>(({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
});

EmptyState.displayName = 'EmptyState';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: metrics.spacing.xxxl,
  },
  text: {
    fontSize: metrics.fontSize.base,
    fontFamily: metrics.fontWeight.regular,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
