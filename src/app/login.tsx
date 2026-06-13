import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

import { Colors } from '@/constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [role, setRole] = useState<'customer' | 'runner'>('customer');

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.header}>
        <Text style={styles.title}>Welcome to Upokar</Text>
        <Text style={styles.subtitle}>Enter your mobile number</Text>
      </SafeAreaView>

      <View style={styles.bottomSheet}>
        <Text style={styles.label}>Mobile number</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+88</Text>
          <View style={styles.divider} />
          <TextInput 
            style={styles.input} 
            placeholder="01x xxxx xxxx" 
            placeholderTextColor="#a0a0a0"
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.label}>I am a</Text>
        <View style={styles.roleContainer}>
          <Pressable 
            style={[styles.roleCard, role === 'customer' && styles.roleCardActive]}
            onPress={() => setRole('customer')}
          >
            <SymbolView 
              name="person" 
              tintColor={role === 'customer' ? Colors.light.primary : '#60646C'} 
              size={24} 
            />
            <Text style={[styles.roleTitle, role === 'customer' && styles.roleTitleActive]}>Customer</Text>
            <Text style={[styles.roleSubtitle, role === 'customer' && styles.roleSubtitleActive]}>Post tasks</Text>
          </Pressable>

          <Pressable 
            style={[styles.roleCard, role === 'runner' && styles.roleCardActive]}
            onPress={() => setRole('runner')}
          >
            <SymbolView 
              name="figure.run" 
              tintColor={role === 'runner' ? Colors.light.primary : '#60646C'} 
              size={24} 
            />
            <Text style={[styles.roleTitle, role === 'runner' && styles.roleTitleActive]}>Runner</Text>
            <Text style={[styles.roleSubtitle, role === 'runner' && styles.roleSubtitleActive]}>Earn money</Text>
          </Pressable>
        </View>

        <View style={{ flex: 1 }} />

        <SafeAreaView edges={['bottom']}>
          <Pressable 
            style={styles.primaryButton}
            onPress={() => router.push('/otp' as any)}
          >
            <Text style={styles.primaryButtonText}>Send OTP code</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.light.primary,
    borderRadius: 12,
    height: 56,
    marginBottom: 32,
  },
  prefix: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 16,
    color: '#000000',
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    color: '#000000',
  },
  roleContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  roleCard: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  roleCardActive: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.backgroundSelected,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  roleTitleActive: {
    color: Colors.light.primary,
  },
  roleSubtitle: {
    fontSize: 12,
    color: '#60646c',
  },
  roleSubtitleActive: {
    color: Colors.light.primary,
  },
  infoText: {
    fontSize: 14,
    color: '#60646c',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: Colors.light.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
