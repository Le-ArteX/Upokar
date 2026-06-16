import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

const GREEN = '#1B8654';
const LIGHT_GREEN = '#E9F5EF';
const BORDER = '#EAEAEA';
const TEXT_MAIN = '#111111';
const TEXT_MUTED = '#888888';
const BLUE = '#4A90E2';
const LIGHT_BLUE = '#F0F8FF';
const ORANGE = '#E87D32';
const LIGHT_ORANGE = '#FDF3ED';

export default function PayDepositScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10} style={styles.backButton}>
          <SymbolView name="arrow.left" tintColor={TEXT_MAIN} size={20} weight="semibold" />
        </Pressable>
        <Text style={styles.headerTitle}>Pay deposit</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Order Summary */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Order summary</Text>
          <View style={styles.divider} />
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Item (Napa 500mg × 2)</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Service fee</Text>
          </View>
          
          <View style={[styles.divider, { marginVertical: 16 }]} />
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Deposit now (25%)</Text>
            <Text style={styles.summaryValue}>৳ 10</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Service fee (full)</Text>
            <Text style={styles.summaryValue}>৳ 20</Text>
          </View>
          
          <View style={styles.totalRow}>
            <Text style={styles.totalValue}>৳ 30</Text>
          </View>
        </View>

        {/* Payment Methods */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pay via</Text>
          
          <View style={styles.paymentMethods}>
            <View style={[styles.paymentMethod, styles.paymentMethodActive]}>
              <Text style={[styles.paymentText, { color: BLUE }]}>bKash</Text>
              <View style={styles.activeDot} />
            </View>
            <View style={styles.paymentMethod}>
              <Text style={styles.paymentText}>Nagad</Text>
            </View>
            <View style={styles.paymentMethod}>
              <Text style={styles.paymentText}>Cash</Text>
            </View>
          </View>
        </View>

        {/* Escrow Note */}
        <View style={styles.escrowNote}>
          <SymbolView name="lock.fill" tintColor={ORANGE} size={14} />
          <Text style={styles.escrowText}>Deposit held in escrow. Refunded on delivery.</Text>
        </View>

      </ScrollView>

      {/* Bottom Button Area */}
      <View style={styles.footer}>
        <Pressable style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay ৳ 30 via bKash</Text>
        </Pressable>
      </View>
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
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: BORDER,
    marginBottom: 20,
  },
  cardTitle: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN, marginBottom: 12 },
  divider: { height: 1, backgroundColor: BORDER, marginVertical: 8 },
  summaryItem: { marginBottom: 8 },
  summaryLabel: { fontSize: 15, color: TEXT_MUTED, fontWeight: '500' },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  summaryValue: { fontSize: 15, color: TEXT_MAIN, fontWeight: '600' },
  totalRow: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 8 },
  totalValue: { fontSize: 24, color: GREEN, fontWeight: '700' },
  paymentMethods: { flexDirection: 'row', gap: 12, marginTop: 12 },
  paymentMethod: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
  },
  paymentMethodActive: {
    borderColor: BLUE,
    backgroundColor: LIGHT_BLUE,
    position: 'relative',
  },
  paymentText: { fontSize: 15, fontWeight: '600', color: TEXT_MAIN },
  activeDot: {
    position: 'absolute',
    bottom: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: BLUE,
  },
  escrowNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_ORANGE,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  escrowText: { color: ORANGE, fontSize: 13, fontWeight: '600', flex: 1 },
  footer: { padding: 24, backgroundColor: '#FAFAFA' },
  payButton: {
    backgroundColor: GREEN,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  payButtonText: { color: '#FFF', fontSize: 16, fontWeight: '700' },
});
