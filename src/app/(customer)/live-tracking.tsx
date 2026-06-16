import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

const BG = '#0A0A0A';
const CARD_BG = '#1A1A1A';
const BORDER = '#333333';
const TEXT_MAIN = '#FFFFFF';
const TEXT_MUTED = '#A0A0A0';
const ORANGE = '#F36B0A';
const LIGHT_ORANGE = '#3D2111';

export default function LiveTrackingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Rahim is on the way</Text>
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>Live</Text>
          </View>
        </View>
        <Pressable hitSlop={10}>
          <SymbolView name="ellipsis" tintColor={TEXT_MAIN} size={24} weight="bold" />
        </Pressable>
      </View>

      {/* Map Area */}
      <View style={styles.mapContainer}>
        {/* Placeholder for Map Grid */}
        <View style={styles.mapGrid} />

        {/* Route Line */}
        <View style={styles.routeLineHorizontal} />
        <View style={styles.routeLineVertical} />

        {/* Pins */}
        <View style={[styles.runnerPin, { top: '35%', left: '25%' }]}>
          <Text style={styles.runnerPinText}>R</Text>
        </View>

        <View style={[styles.destPin, { top: '65%', left: '25%' }]} />

        {/* Floating ETA Badge on Map */}
        <View style={styles.floatingEta}>
          <Text style={styles.floatingEtaLabel}>Remaining</Text>
          <Text style={styles.floatingEtaValue}>0.4 km</Text>
        </View>

        {/* Legend */}
        <View style={styles.legendCard}>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: '#4A90E2' }]} />
            <Text style={styles.legendText}>Runner</Text>
          </View>
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: '#FF3B30' }]} />
            <Text style={styles.legendText}>Deliver to</Text>
          </View>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        
        {/* Runner Info */}
        <View style={styles.runnerRow}>
          <View style={styles.runnerAvatar}>
            <Text style={styles.runnerAvatarText}>RA</Text>
          </View>
          <View style={styles.runnerDetails}>
            <Text style={styles.runnerName}>Rahim{'\n'}Ahmed</Text>
            <View style={styles.statsRow}>
              <SymbolView name="star.fill" tintColor={ORANGE} size={12} />
              <Text style={styles.runnerStat}> 4.9 · 23 tasks · On bike</Text>
            </View>
          </View>
          <View style={styles.etaBox}>
            <Text style={styles.etaLabel}>ETA</Text>
            <Text style={styles.etaValue}>~4 min</Text>
          </View>
        </View>

        {/* Distance Grid */}
        <View style={styles.distanceGrid}>
          <View style={styles.distanceBox}>
            <Text style={styles.distLabel}>To shop</Text>
            <Text style={styles.distValue}>0.4 km</Text>
          </View>
          <View style={styles.distanceBox}>
            <Text style={styles.distLabel}>Shop → you</Text>
            <Text style={styles.distValue}>1.2 km</Text>
          </View>
          <View style={[styles.distanceBox, { backgroundColor: LIGHT_ORANGE, borderColor: ORANGE }]}>
            <Text style={[styles.distLabel, { color: ORANGE }]}>Total</Text>
            <Text style={[styles.distValue, { color: ORANGE }]}>1.6 km</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionGrid}>
          <Pressable style={styles.actionButton}>
            <SymbolView name="message" tintColor={TEXT_MAIN} size={18} />
            <Text style={styles.actionButtonText}>Chat</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <SymbolView name="phone" tintColor={TEXT_MAIN} size={18} />
            <Text style={styles.actionButtonText}>Call</Text>
          </Pressable>
          <Pressable style={[styles.actionButton, styles.cancelButton]}>
            <SymbolView name="xmark" tintColor="#FF5C5C" size={18} />
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
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
    backgroundColor: BG,
    zIndex: 10,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN },
  liveBadge: {
    backgroundColor: LIGHT_ORANGE,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  liveBadgeText: { color: ORANGE, fontSize: 12, fontWeight: '700' },
  mapContainer: {
    flex: 1,
    backgroundColor: '#111115',
    position: 'relative',
  },
  mapGrid: { ...StyleSheet.absoluteFillObject, opacity: 0.1 },
  routeLineHorizontal: {
    position: 'absolute',
    top: '36%',
    left: '28%',
    width: '40%',
    height: 4,
    backgroundColor: ORANGE,
  },
  routeLineVertical: {
    position: 'absolute',
    top: '36%',
    left: '26%',
    width: 4,
    height: '30%',
    backgroundColor: ORANGE,
  },
  runnerPin: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4A90E2',
    borderWidth: 2,
    borderColor: '#FFF',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  runnerPinText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  destPin: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FF3B30',
    borderWidth: 2,
    borderColor: '#FFF',
    position: 'absolute',
  },
  floatingEta: {
    position: 'absolute',
    top: '20%',
    right: '20%',
    backgroundColor: CARD_BG,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
  },
  floatingEtaLabel: { fontSize: 12, color: TEXT_MUTED, marginBottom: 2 },
  floatingEtaValue: { fontSize: 14, fontWeight: '700', color: ORANGE },
  legendCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: CARD_BG,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    gap: 8,
  },
  legendRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendText: { color: TEXT_MAIN, fontSize: 12, fontWeight: '500' },
  bottomSheet: {
    backgroundColor: CARD_BG,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: BORDER,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  runnerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  runnerAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  runnerAvatarText: { color: '#FFF', fontWeight: '700', fontSize: 18 },
  runnerDetails: { flex: 1 },
  runnerName: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN, marginBottom: 4 },
  statsRow: { flexDirection: 'row', alignItems: 'center' },
  runnerStat: { fontSize: 13, color: TEXT_MUTED },
  etaBox: {
    backgroundColor: LIGHT_ORANGE,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  etaLabel: { color: TEXT_MUTED, fontSize: 12, marginBottom: 2 },
  etaValue: { color: ORANGE, fontSize: 16, fontWeight: '700' },
  distanceGrid: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  distanceBox: {
    flex: 1,
    backgroundColor: BG,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  distLabel: { fontSize: 12, color: TEXT_MUTED, marginBottom: 4 },
  distValue: { fontSize: 15, fontWeight: '700', color: TEXT_MAIN },
  actionGrid: { flexDirection: 'row', gap: 12 },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: BG,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
  },
  actionButtonText: { color: TEXT_MAIN, fontSize: 15, fontWeight: '600' },
  cancelButton: { backgroundColor: '#2C1A1A', borderColor: '#4A2A2A' },
  cancelButtonText: { color: '#FF5C5C', fontSize: 15, fontWeight: '600' },
});
