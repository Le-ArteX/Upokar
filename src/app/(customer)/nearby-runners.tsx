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

export default function NearbyRunnersScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10} style={styles.backButton}>
          <SymbolView name="arrow.left" tintColor={TEXT_MAIN} size={20} weight="semibold" />
        </Pressable>
        <Text style={styles.headerTitle}>Nearby runners</Text>
        <Text style={styles.freeCount}>23 free</Text>
      </View>

      {/* Map Area */}
      <View style={styles.mapContainer}>
        {/* Placeholder for map - dark themed */}
        <View style={styles.mapGrid} />
        
        {/* Fake Map Rings */}
        <View style={styles.ring1} />
        <View style={styles.ring2} />
        
        <View style={styles.userPin}>
          <Text style={styles.pinText}>You</Text>
        </View>

        <View style={[styles.runnerPin, { top: '30%', left: '30%' }]}>
          <Text style={styles.runnerPinText}>RA</Text>
        </View>
        <View style={[styles.runnerPin, { top: '60%', right: '30%' }]}>
          <Text style={styles.runnerPinText}>RB</Text>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        
        {/* Task Summary */}
        <View style={styles.taskCard}>
          <View style={styles.taskIconBox}>
            <SymbolView name="bag.fill" tintColor={ORANGE} size={20} />
          </View>
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>Chal lagbe 5kg basmoti</Text>
            <Text style={styles.taskDesc}>Panthapath area - max ৳380</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>Live</Text>
          </View>
        </View>

        <Text style={styles.listHeader}>3 runners nearby — tap to select</Text>

        <ScrollView contentContainerStyle={styles.runnerList} showsVerticalScrollIndicator={false}>
          {/* Runner 1 */}
          <Pressable style={styles.runnerRow}>
            <View style={styles.runnerAvatar}>
              <Text style={styles.runnerAvatarText}>RA</Text>
            </View>
            <View style={styles.runnerDetails}>
              <View style={styles.nameRow}>
                <Text style={styles.runnerName}>Rahim A.</Text>
                <SymbolView name="star.fill" tintColor={ORANGE} size={12} />
                <Text style={styles.runnerRating}>4.9</Text>
              </View>
              <Text style={styles.runnerStat}>23 tasks - On bike</Text>
            </View>
            <View style={styles.runnerDistance}>
              <Text style={styles.distValue}>0.3 km</Text>
              <Text style={styles.timeValue}>~2 min</Text>
            </View>
          </Pressable>

          <View style={styles.divider} />

          {/* Runner 2 */}
          <Pressable style={styles.runnerRow}>
            <View style={[styles.runnerAvatar, { backgroundColor: '#2B2B4A' }]}>
              <Text style={[styles.runnerAvatarText, { color: '#8E8EFA' }]}>RB</Text>
            </View>
            <View style={styles.runnerDetails}>
              <View style={styles.nameRow}>
                <Text style={styles.runnerName}>Babul K.</Text>
                <SymbolView name="star.fill" tintColor={ORANGE} size={12} />
                <Text style={styles.runnerRating}>4.7</Text>
              </View>
              <Text style={styles.runnerStat}>11 tasks - Walking</Text>
            </View>
            <View style={styles.runnerDistance}>
              <Text style={styles.distValue}>0.6 km</Text>
              <Text style={styles.timeValue}>~5 min</Text>
            </View>
          </Pressable>
        </ScrollView>
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
    backgroundColor: BG,
    zIndex: 10,
  },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN },
  freeCount: { fontSize: 14, color: ORANGE, fontWeight: '600' },
  mapContainer: {
    flex: 1,
    backgroundColor: '#111115',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapGrid: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.1,
    // Add grid lines or similar if possible
  },
  ring1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: ORANGE,
    opacity: 0.5,
  },
  ring2: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
    borderWidth: 1,
    borderColor: ORANGE,
    opacity: 0.2,
  },
  userPin: {
    backgroundColor: '#2D2D2D',
    borderWidth: 2,
    borderColor: ORANGE,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    position: 'absolute',
    zIndex: 2,
  },
  pinText: { color: TEXT_MAIN, fontWeight: '700', fontSize: 12 },
  runnerPin: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2D2D2D',
    borderWidth: 2,
    borderColor: '#4A90E2',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runnerPinText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  bottomSheet: {
    backgroundColor: CARD_BG,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 40,
    minHeight: '40%',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: BORDER,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BG,
    borderWidth: 1,
    borderColor: ORANGE,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  taskIconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: LIGHT_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  taskInfo: { flex: 1 },
  taskTitle: { fontSize: 15, fontWeight: '700', color: TEXT_MAIN, marginBottom: 4 },
  taskDesc: { fontSize: 13, color: TEXT_MUTED },
  liveBadge: {
    backgroundColor: LIGHT_ORANGE,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  liveBadgeText: { color: ORANGE, fontSize: 12, fontWeight: '700' },
  listHeader: { fontSize: 14, color: TEXT_MUTED, fontWeight: '600', marginBottom: 16 },
  runnerList: { paddingBottom: 20 },
  runnerRow: { flexDirection: 'row', alignItems: 'center' },
  runnerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: LIGHT_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  runnerAvatarText: { color: ORANGE, fontWeight: '700', fontSize: 16 },
  runnerDetails: { flex: 1, justifyContent: 'center' },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 },
  runnerName: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN },
  runnerRating: { fontSize: 14, fontWeight: '600', color: TEXT_MAIN },
  runnerStat: { fontSize: 13, color: TEXT_MUTED },
  runnerDistance: { alignItems: 'flex-end' },
  distValue: { fontSize: 15, fontWeight: '700', color: TEXT_MAIN, marginBottom: 4 },
  timeValue: { fontSize: 13, color: TEXT_MUTED },
  divider: { height: 1, backgroundColor: BORDER, marginVertical: 16 },
});
