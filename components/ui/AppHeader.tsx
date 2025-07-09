import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, metrics } from '@/theme';

interface AppHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const AppHeader = memo<AppHeaderProps>(({ title, children }) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryDark]}
      style={styles.header}
    >
      <SafeAreaView edges={['top']}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
});

AppHeader.displayName = 'AppHeader';

const styles = StyleSheet.create({
  header: {
    paddingBottom: metrics.spacing.xl,
  },
  headerContent: {
    paddingHorizontal: metrics.spacing.lg,
    paddingTop: metrics.spacing.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: metrics.fontSize.xxl,
    fontFamily: metrics.fontWeight.semiBold,
    color: colors.textWhite,
    textAlign: 'center',
    marginBottom: metrics.spacing.xl,
  },
});
