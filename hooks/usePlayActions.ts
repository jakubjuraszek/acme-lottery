import { useCallback } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { usePlaysStore } from '@/store/usePlaysStore';
import { strings } from '@constants/strings';

export function usePlayActions() {
  const router = useRouter();
  const plays = usePlaysStore((state) => state.plays);
  const addPlay = usePlaysStore((state) => state.addPlay);
  const removePlay = usePlaysStore((state) => state.removePlay);
  const canAddPlay = usePlaysStore((state) => state.canAddPlay);
  const hasPlays = usePlaysStore((state) => state.hasPlays);

  const handleAddPlay = useCallback(() => {
    if (!canAddPlay) {
      Alert.alert(strings.alerts.maxPlaysTitle, strings.alerts.maxPlaysMessage);
      return;
    }
    router.push('/number-picker');
  }, [canAddPlay, router]);

  const handleRemovePlay = useCallback(
    (playId: string) => {
      removePlay(playId);
    },
    [removePlay]
  );

  const handlePurchase = useCallback(() => {
    if (!hasPlays) {
      Alert.alert(strings.alerts.noPlaysTitle, strings.alerts.noPlaysMessage);
      return;
    }

    const playsText = plays.map((play) => play.numbers.join(',')).join('\n');

    Alert.alert(
      strings.alerts.purchaseTitle,
      `${strings.alerts.purchaseMessage}\n${playsText}`,
      [{ text: strings.buttons.ok, style: 'default' }]
    );
  }, [plays, hasPlays]);

  const handlePlaySubmit = useCallback(
    (selectedNumbers: number[]) => {
      if (selectedNumbers.length !== 5) {
        Alert.alert(
          strings.alerts.incompleteTitle,
          strings.alerts.incompleteMessage
        );
        return false;
      }

      addPlay(selectedNumbers);
      router.back();
      return true;
    },
    [addPlay, router]
  );

  return {
    handleAddPlay,
    handleRemovePlay,
    handlePurchase,
    handlePlaySubmit,
    canAddPlay,
    hasPlays,
  };
}
