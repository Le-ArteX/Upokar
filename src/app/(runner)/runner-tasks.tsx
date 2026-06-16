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

export default function RunnerTasksScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileBadge}>
          <Text style={styles.profileBadgeText}>ME</Text>
        </View>
        <Text style={styles.headerTitle}>Nearby tasks</Text>
        <View style={styles.onlineBadge}>
          <Text style={styles.onlineText}>Online</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Task 1 */}
        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={styles.taskInfo}>
              <Text style={styles.taskType}>Medicine pickup</Text>
              <Text style={styles.taskDesc}>Napa × 2 · Farmgate pharmacy</Text>
            </View>
            <View style={styles.payInfo}>
              <Text style={styles.payText}>+৳ 16</Text>
              <Text style={styles.distText}>0.4 km</Text>
            </View>
          </View>
          <View style={styles.cardBottomRow}>
            <View style={[styles.riskBadge, { backgroundColor: '#2A3C24' }]}>
              <Text style={[styles.riskText, { color: '#88E060' }]}>Low risk</Text>
            </View>
            <Pressable style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </Pressable>
          </View>
        </View>

        {/* Task 2 */}
        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={styles.taskInfo}>
              <Text style={styles.taskType}>Parcel pickup</Text>
              <Text style={styles.taskDesc}>Pathao courier - Elephant Road</Text>
            </View>
            <View style={styles.payInfo}>
              <Text style={styles.payText}>+৳ 24</Text>
              <Text style={styles.distText}>1.1 km</Text>
            </View>
          </View>
          <View style={styles.cardBottomRow}>
            <View style={[styles.riskBadge, { backgroundColor: '#4A3B1A' }]}>
              <Text style={[styles.riskText, { color: '#F5A623' }]}>Medium risk</Text>
            </View>
            <Pressable style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </Pressable>
          </View>
        </View>

        {/* Task 3 */}
        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={styles.taskInfo}>
              <Text style={styles.taskType}>Grocery run</Text>
              <Text style={styles.taskDesc}>Biscuits + juice - Bashundhara</Text>
            </View>
            <View style={styles.payInfo}>
              <Text style={styles.payText}>+৳ 12</Text>
              <Text style={styles.distText}>0.2 km</Text>
            </View>
          </View>
          <View style={styles.cardBottomRow}>
            <View style={[styles.riskBadge, { backgroundColor: '#2A3C24' }]}>
              <Text style={[styles.riskText, { color: '#88E060' }]}>Low risk</Text>
            </View>
            <Pressable style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Tabs Placeholder */}
      <View style={styles.bottomTabs}>
        <View style={styles.tabItem}>
          <SymbolView name="list.bullet" tintColor={ORANGE} size={24} />
          <Text style={[styles.tabText, { color: ORANGE }]}>Tasks</Text>
        </View>
        <View style={styles.tabItem}>
          <SymbolView name="map" tintColor={TEXT_MUTED} size={24} />
          <Text style={styles.tabText}>Map</Text>
        </View>
        <View style={styles.tabItem}>
          <SymbolView name="dollarsign.circle" tintColor={TEXT_MUTED} size={24} />
          <Text style={styles.tabText}>Earnings</Text>
        </View>
        <View style={styles.tabItem}>
          <SymbolView name="person" tintColor={TEXT_MUTED} size={24} />
          <Text style={styles.tabText}>Profile</Text>
        </View>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  profileBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBadgeText: { color: ORANGE, fontWeight: '700', fontSize: 12 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN },
  onlineBadge: {
    backgroundColor: '#E8F5E9', // Light green bg
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  onlineText: { color: '#1B8654', fontWeight: '700', fontSize: 13 },
  content: { padding: 20, paddingBottom: 40 },
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    marginBottom: 16,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  taskInfo: { flex: 1, paddingRight: 16 },
  taskType: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN, marginBottom: 6 },
  taskDesc: { fontSize: 14, color: TEXT_MUTED, lineHeight: 20 },
  payInfo: { alignItems: 'flex-end' },
  payText: { fontSize: 18, fontWeight: '700', color: '#88E060', marginBottom: 4 }, // Green pay
  distText: { fontSize: 13, color: TEXT_MUTED },
  cardBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  riskBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  riskText: { fontSize: 12, fontWeight: '600' },
  acceptButton: {
    backgroundColor: ORANGE,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  acceptButtonText: { color: '#FFF', fontWeight: '700', fontSize: 14 },
  bottomTabs: {
    flexDirection: 'row',
    backgroundColor: CARD_BG,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingVertical: 12,
    paddingBottom: 24,
  },
  tabItem: { flex: 1, alignItems: 'center', gap: 4 },
  tabText: { fontSize: 12, color: TEXT_MUTED, fontWeight: '500' },
});
