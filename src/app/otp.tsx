import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

export default function OTPScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  
  // Example dummy state for 6 digits
  const digits = ['4', '7', '2', '', '', ''];

  const isFormValid = name.trim().length > 0;

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.header}>
        <Text style={styles.title}>Verify your number</Text>
        <Text style={styles.subtitle}>Sent to 017XX XXXXXX</Text>
      </SafeAreaView>

      <View style={styles.bottomSheet}>
        <View style={styles.otpContainer}>
          {digits.map((digit, index) => (
            <View 
              key={index} 
              style={[
                styles.otpBox, 
                digit ? styles.otpBoxFilled : styles.otpBoxEmpty
              ]}
            >
              <Text style={styles.otpText}>{digit}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.resendText}>Resend in 0:42</Text>
        <Text style={styles.infoText}>
          OTP valid 5 minutes. Never share this code.
        </Text>

        <Text style={styles.label}>Your name</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Full name" 
          placeholderTextColor="#a0a0a0"
          value={name}
          onChangeText={setName}
        />

        <View style={{ flex: 1 }} />

        <SafeAreaView edges={['bottom']}>
          <Pressable 
            style={[
              styles.primaryButton, 
              !isFormValid && styles.primaryButtonDisabled
            ]}
            onPress={() => router.replace('/home' as any)}
            disabled={!isFormValid}
          >
            <Text style={[
              styles.primaryButtonText,
              !isFormValid && styles.primaryButtonTextDisabled
            ]}>
              Verify & continue
            </Text>
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
    color: Colors.light.primary,
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  otpBox: {
    width: 48,
    height: 56,
    borderWidth: 1.5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpBoxFilled: {
    borderColor: Colors.light.primary,
  },
  otpBoxEmpty: {
    borderColor: '#e0e0e0',
  },
  otpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  resendText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
  },
  infoText: {
    fontSize: 14,
    color: '#60646c',
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    height: 56,
    fontSize: 16,
    paddingHorizontal: 16,
    color: '#000000',
    marginBottom: 32,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: Colors.light.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  primaryButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonTextDisabled: {
    color: '#a0a0a0',
  },
});
