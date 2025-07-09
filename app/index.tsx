import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePlaysStore } from '@/store/usePlaysStore';
import { usePlayActions } from '@/hooks/usePlayActions';
import { PlayCard } from '@/components/PlayCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { ActionButton } from '@/components/ui/ActionButton';
import { AppHeader } from '@/components/ui/AppHeader';
import { colors, metrics } from '@/theme';
import { strings } from '@constants/strings';

export default function HomeScreen() {
  const plays = usePlaysStore((state) => state.plays);
  const hasPlays = usePlaysStore((state) => state.hasPlays);
  const { handleAddPlay, handleRemovePlay, handlePurchase, canAddPlay } =
    usePlayActions();

  return (
    <View style={styles.container}>
      <AppHeader title={strings.home.title} />

      <View style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {!hasPlays ? (
            <EmptyState message={strings.home.noPlaysEmpty} />
          ) : (
            <View style={styles.playsContainer}>
              {plays.map((play) => (
                <PlayCard
                  key={play.id}
                  play={play}
                  onDelete={() => handleRemovePlay(play.id)}
                />
              ))}
            </View>
          )}

          <ActionButton
            title={strings.home.addPlay}
            onPress={handleAddPlay}
            disabled={!canAddPlay}
            variant="secondary"
            style={styles.addButton}
          />
        </ScrollView>

        <SafeAreaView edges={['bottom']}>
          <View style={styles.bottomActions}>
            <ActionButton
              title={strings.home.purchase}
              onPress={handlePurchase}
              disabled={!hasPlays}
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
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: metrics.spacing.lg,
    paddingBottom: 100,
  },
  playsContainer: {
    gap: metrics.spacing.md,
    marginBottom: metrics.spacing.xl,
  },
  addButton: {
    marginTop: metrics.spacing.xs,
  },
  bottomActions: {
    paddingHorizontal: metrics.spacing.lg,
    paddingTop: metrics.spacing.md,
    paddingBottom: metrics.spacing.xs,
    backgroundColor: colors.background,
  },
});
