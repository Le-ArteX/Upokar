import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

const GREEN = '#1B8654';
const LIGHT_GREEN = '#E9F5EF';
const BORDER = '#EAEAEA';
const TEXT_MAIN = '#111111';
const TEXT_MUTED = '#888888';
const LIGHT_ORANGE = '#FDF3ED';
const ORANGE = '#E87D32';

export default function ConfirmItemScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10} style={styles.backButton}>
          <SymbolView name="arrow.left" tintColor={TEXT_MAIN} size={20} weight="semibold" />
        </Pressable>
        <Text style={styles.headerTitle}>Confirm item</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.textCenter}>
          <Text style={styles.title}>Runner found the item</Text>
          <Text style={styles.subtitle}>Please confirm before they buy</Text>
        </View>

        <View style={styles.photoContainer}>
          <View style={styles.photoBox}>
            <SymbolView name="pills.fill" tintColor="#FF5C5C" size={48} />
            <Text style={styles.photoText}>Napa 500mg × 2</Text>
          </View>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Item total</Text>
          <Text style={styles.priceValue}>৳ 40</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Service fee</Text>
          <Text style={styles.priceValue}>৳ 20</Text>
        </View>

        <View style={styles.autoConfirmContainer}>
          <View style={styles.timerBadge}>
            <Text style={styles.timerLabel}>Auto-confirm in</Text>
            <View style={styles.timerValueBox}>
              <SymbolView name="clock" tintColor={ORANGE} size={14} />
              <Text style={styles.timerValueText}> 2:48</Text>
            </View>
          </View>
          <Text style={styles.autoConfirmNote}>No reply = auto-confirmed</Text>
        </View>

        <Pressable style={styles.confirmButton}>
          <SymbolView name="checkmark" tintColor="#FFF" size={18} weight="bold" />
          <Text style={styles.confirmButtonText}> Yes, buy it!</Text>
        </Pressable>

        <Pressable style={styles.cancelButton}>
          <SymbolView name="xmark" tintColor="#4A90E2" size={16} weight="bold" />
          <Text style={styles.cancelButtonText}> Wrong item — cancel</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    backgroundColor: '#FFF',
  },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN },
  content: { padding: 24, paddingBottom: 40 },
  textCenter: { alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN, marginBottom: 4 },
  subtitle: { fontSize: 15, color: TEXT_MUTED },
  photoContainer: { marginBottom: 24, alignItems: 'center' },
  photoBox: {
    width: '100%',
    height: 180,
    backgroundColor: LIGHT_GREEN,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  photoText: { color: GREEN, fontWeight: '700', fontSize: 16 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  priceLabel: { fontSize: 16, color: TEXT_MAIN, fontWeight: '500' },
  priceValue: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN },
  autoConfirmContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    marginBottom: 24,
  },
  timerBadge: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 8 },
  timerLabel: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN },
  timerValueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_ORANGE,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  timerValueText: { color: ORANGE, fontWeight: '700', fontSize: 14 },
  autoConfirmNote: { color: TEXT_MUTED, fontSize: 14 },
  confirmButton: {
    flexDirection: 'row',
    backgroundColor: GREEN,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  confirmButtonText: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  cancelButton: {
    flexDirection: 'row',
    backgroundColor: '#F0F8FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: { color: '#4A90E2', fontSize: 16, fontWeight: '600' },
});
