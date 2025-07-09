import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { NumberGridProps } from '@/types';
import { NumberButton } from '@/components/ui/NumberButton';
import { metrics } from '@/theme';

export const NumberGrid = memo<NumberGridProps>(
  ({ selectedNumbers, onNumberSelect, maxNumber }) => {
    const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);

    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          {numbers.map((number) => (
            <NumberButton
              key={number}
              number={number}
              isSelected={selectedNumbers.includes(number)}
              onPress={onNumberSelect}
            />
          ))}
        </View>
      </View>
    );
  }
);

NumberGrid.displayName = 'NumberGrid';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: metrics.spacing.xs,
    maxWidth: 350,
  },
});
