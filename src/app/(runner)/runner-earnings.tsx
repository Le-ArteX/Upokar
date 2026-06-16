import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

const BG = '#0A0A0A';
const CARD_BG = '#1A1A1A';
const BORDER = '#333333';
const TEXT_MAIN = '#FFFFFF';
const TEXT_MUTED = '#A0A0A0';
const ORANGE = '#F36B0A';
const LIGHT_ORANGE = '#3D2111';

export default function RunnerEarningsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ width: 24 }} />
        <Text style={styles.headerTitle}>My earnings</Text>
        <Pressable hitSlop={10}>
          <SymbolView name="ellipsis" tintColor={TEXT_MAIN} size={24} weight="bold" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Total Today Card */}
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total today</Text>
          <Text style={styles.totalValue}>৳ 148</Text>
          <Text style={styles.totalSub}>6 tasks completed</Text>
        </View>

        {/* Weekly / Monthly Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>This week</Text>
            <Text style={styles.statValue}>৳ 810</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>This month</Text>
            <Text style={styles.statValue}>৳ 3,240</Text>
          </View>
        </View>

        {/* Recent Payouts */}
        <View style={styles.recentCard}>
          <Text style={styles.recentTitle}>Recent payouts</Text>
          
          <View style={styles.payoutRow}>
            <Text style={styles.payoutName}>Medicine run - 9:10 AM</Text>
            <Text style={styles.payoutAmount}>+৳ 16</Text>
          </View>
          <View style={styles.payoutRow}>
            <Text style={styles.payoutName}>Parcel - 8:50 AM</Text>
            <Text style={styles.payoutAmount}>+৳ 24</Text>
          </View>
          <View style={styles.payoutRow}>
            <Text style={styles.payoutName}>Grocery - 8:30 AM</Text>
            <Text style={styles.payoutAmount}>+৳ 12</Text>
          </View>

          {/* Action */}
          <Pressable style={styles.withdrawButton}>
            <Text style={styles.withdrawButtonText}>Withdraw to bKash</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: BG,
  },
  headerTitle: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN },
  content: { padding: 20, paddingBottom: 40 },
  totalCard: {
    backgroundColor: ORANGE,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: { color: '#FFF', fontSize: 16, fontWeight: '500', marginBottom: 8, opacity: 0.9 },
  totalValue: { color: '#FFF', fontSize: 40, fontWeight: '700', marginBottom: 8 },
  totalSub: { color: '#FFF', fontSize: 14, fontWeight: '500', opacity: 0.8 },
  statsGrid: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  statBox: {
    flex: 1,
    backgroundColor: CARD_BG,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 20,
    alignItems: 'center',
  },
  statLabel: { fontSize: 14, color: TEXT_MUTED, marginBottom: 8 },
  statValue: { fontSize: 22, fontWeight: '700', color: ORANGE },
  recentCard: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 20,
  },
  recentTitle: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN, marginBottom: 16 },
  payoutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  payoutName: { fontSize: 15, color: TEXT_MUTED },
  payoutAmount: { fontSize: 15, fontWeight: '700', color: '#88E060' }, // Green for payout money
  withdrawButton: {
    backgroundColor: ORANGE,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  withdrawButtonText: { color: '#FFF', fontSize: 16, fontWeight: '700' },
});
