import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlayCardProps } from '@/types';
import { PlayDeleteButton } from '@/components/ui/PlayDeleteButton';
import { colors, metrics } from '@/theme';

export const PlayCard = memo<PlayCardProps>(({ play, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.numbersContainer}>
        {play.numbers.map((number) => (
          <View key={number} style={styles.numberBall}>
            <Text style={styles.numberText}>{number}</Text>
          </View>
        ))}
      </View>

      <PlayDeleteButton onPress={onDelete} />
    </View>
  );
});

PlayCard.displayName = 'PlayCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundWhite,
    borderRadius: metrics.radius.sm,
    padding: metrics.spacing.lg,
    alignItems: 'center',
    shadowColor: colors.shadow,
    ...metrics.shadow.small,
  },
  numbersContainer: {
    flexDirection: 'row',
    gap: metrics.spacing.sm,
    marginBottom: metrics.spacing.md,
    justifyContent: 'center',
  },
  numberBall: {
    width: metrics.dimensions.numberBall,
    height: metrics.dimensions.numberBall,
    backgroundColor: colors.numberBallBackground,
    borderRadius: metrics.dimensions.numberBall / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  numberText: {
    color: colors.textPrimary,
    fontSize: metrics.fontSize.base,
    fontFamily: metrics.fontWeight.semiBold,
  },
});
