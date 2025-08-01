import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { strings } from '@/constants/strings';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: strings.notFound.title }} />
      <View style={styles.container}>
        <Text style={styles.text}>{strings.notFound.message}</Text>
        <Link href="/" style={styles.link}>
          <Text>{strings.notFound.linkText}</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
