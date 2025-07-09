import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSelectedNumbers } from '@/hooks/useSelectedNumbers';
import { usePlaysStore } from '@/store/usePlaysStore';
import { NumberGrid } from '@/components/NumberGrid';
import { SelectedNumbers } from '@/components/SelectedNumbers';
import { ActionButton } from '@/components/ui/ActionButton';
import { AppHeader } from '@/components/ui/AppHeader';
import { colors, metrics } from '@/theme';
import { strings } from '@constants/strings';

export default function NumberPickerScreen() {
  const router = useRouter();
  const { selectedNumbers, handleNumberSelect, isComplete } =
    useSelectedNumbers(5);
  const addPlay = usePlaysStore((state) => state.addPlay);

  const onPlaySubmit = () => {
    if (selectedNumbers.length === 5) {
      addPlay(selectedNumbers);
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader title={strings.picker.title}>
        <SelectedNumbers selectedNumbers={selectedNumbers} />
      </AppHeader>

      <View style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>
              {strings.picker.instructions}
            </Text>
          </View>

          <NumberGrid
            selectedNumbers={selectedNumbers}
            onNumberSelect={handleNumberSelect}
            maxNumber={42}
          />
        </ScrollView>

        <SafeAreaView edges={['bottom']}>
          <View style={styles.bottomActions}>
            <ActionButton
              title={strings.picker.playNumbers}
              onPress={onPlaySubmit}
              disabled={!isComplete}
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: metrics.spacing.lg,
    paddingBottom: 100,
  },
  instructionsContainer: {
    marginBottom: metrics.spacing.xxl,
    alignItems: 'flex-start',
  },
  instructions: {
    fontSize: metrics.fontSize.xl,
    fontFamily: metrics.fontWeight.semiBold,
    color: colors.textPrimary,
  },
  bottomActions: {
    paddingHorizontal: metrics.spacing.lg,
    paddingTop: metrics.spacing.md,
    paddingBottom: metrics.spacing.xs,
    backgroundColor: colors.backgroundWhite,
  },
});
