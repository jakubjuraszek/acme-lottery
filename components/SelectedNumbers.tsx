import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectedNumberListProps } from '@/types';
import { colors, metrics } from '@/theme';

export const SelectedNumbers = memo<SelectedNumberListProps>(
  ({ selectedNumbers, maxNumbers = 5 }) => {
    const displayNumbers = Array.from({ length: maxNumbers }, (_, index) => {
      return selectedNumbers[index] || null;
    });

    return (
      <View style={styles.container}>
        <View style={styles.numbersContainer}>
          {displayNumbers.map((number, index) => (
            <View key={index} style={styles.numberBall}>
              {number && <Text style={styles.numberText}>{number}</Text>}
            </View>
          ))}
        </View>
      </View>
    );
  }
);

SelectedNumbers.displayName = 'SelectedNumbers';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  numbersContainer: {
    flexDirection: 'row',
    gap: metrics.spacing.sm,
    justifyContent: 'center',
  },
  numberBall: {
    width: metrics.dimensions.numberBallLarge,
    height: metrics.dimensions.numberBallLarge,
    backgroundColor: colors.backgroundWhite,
    borderRadius: metrics.dimensions.numberBallLarge / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    ...metrics.shadow.medium,
  },
  numberText: {
    color: colors.textPrimary,
    fontSize: metrics.fontSize.lg,
    fontFamily: metrics.fontWeight.semiBold,
  },
});
