import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('@/assets/images/expo-logo.png')} 
            style={styles.logo} 
            contentFit="contain" 
          />
          <Text style={styles.subtitle}>
            উপকার — Your neighbourhood helper
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable 
            style={[styles.button, styles.primaryButton]} 
            onPress={() => router.push('/login' as any)}
          >
            <Text style={styles.primaryButtonText}>Get started</Text>
          </Pressable>
          
          <Pressable 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => {}}
          >
            <Text style={styles.secondaryButtonText}>I already have an account</Text>
          </Pressable>
        </View>

        <Text style={styles.footerText}>
          Bangladesh's task & errand platform
        </Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  logo: {
    width: 250,
    height: 120,
  },
  subtitle: {
    color: '#a0a0a0',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 24,
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.dark.primary,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.dark.primary,
  },
  secondaryButtonText: {
    color: Colors.dark.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#60646c',
    textAlign: 'center',
    fontSize: 12,
  },
});
