import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { strings } from '@constants/strings';

export function useSelectedNumbers(maxNumbers: number = 5) {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const handleNumberSelect = useCallback(
    (number: number) => {
      setSelectedNumbers((prev) => {
        if (prev.includes(number)) {
          return prev.filter((n) => n !== number);
        } else if (prev.length < maxNumbers) {
          return [...prev, number];
        } else {
          Alert.alert(
            strings.alerts.maxSelectionTitle,
            strings.alerts.maxSelectionMessage
          );
          return prev;
        }
      });
    },
    [maxNumbers]
  );

  const clearSelection = useCallback(() => {
    setSelectedNumbers([]);
  }, []);

  const isComplete = selectedNumbers.length === maxNumbers;
  const isEmpty = selectedNumbers.length === 0;

  return {
    selectedNumbers,
    handleNumberSelect,
    clearSelection,
    isComplete,
    isEmpty,
  };
}
