import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

export default function OTPScreen() {
  const router = useRouter();
  
  const [code, setCode] = useState('');
  const inputRef = useRef<TextInput>(null);

  // Generate exactly 6 boxes
  const digits = code.split('');
  while (digits.length < 6) {
    digits.push('');
  }

  // Button is only enabled when all 6 digits are entered
  const isFormValid = code.length === 6;

  const handlePressBoxes = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.header}>
        <Text style={styles.title}>Verify your number</Text>
        <Text style={styles.subtitle}>Sent to +88017XX XXXXXX</Text>
      </SafeAreaView>

      <View style={styles.bottomSheet}>
        <Pressable style={styles.otpContainer} onPress={handlePressBoxes}>
          {digits.map((digit, index) => {
            const isActive = index === code.length || (code.length === 6 && index === 5);
            return (
              <View 
                key={index} 
                style={[
                  styles.otpBox, 
                  digit ? styles.otpBoxFilled : styles.otpBoxEmpty,
                  isActive && styles.otpBoxActive
                ]}
              >
                <Text style={styles.otpText}>{digit}</Text>
              </View>
            );
          })}
        </Pressable>

        {/* Hidden Input to handle the actual keyboard logic */}
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={(text) => {
            const numericText = text.replace(/[^0-9]/g, '');
            if (numericText.length <= 6) {
              setCode(numericText);
            }
          }}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          style={styles.hiddenInput}
          autoFocus
        />

        <Text style={styles.resendText}>Resend in 0:42</Text>
        <Text style={styles.infoText}>
          OTP valid 5 minutes. Never share this code.
        </Text>

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
    backgroundColor: '#ffffff',
  },
  otpBoxFilled: {
    borderColor: '#e0e0e0', // Keep border grey once filled unless active
  },
  otpBoxEmpty: {
    borderColor: '#e0e0e0',
  },
  otpBoxActive: {
    borderColor: Colors.light.primary,
    borderWidth: 2,
  },
  otpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
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
    textAlign: 'center',
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
