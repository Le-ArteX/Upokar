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

export default function RunnerSendPhotoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10} style={styles.backButton}>
          <SymbolView name="arrow.left" tintColor={TEXT_MAIN} size={20} weight="semibold" />
        </Pressable>
        <Text style={styles.headerTitle}>Send item photo</Text>
        <Pressable hitSlop={10}>
          <SymbolView name="ellipsis" tintColor={TEXT_MAIN} size={24} weight="bold" />
        </Pressable>
      </View>

      <View style={styles.content}>
        
        {/* Task Details Card */}
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Task: Napa 500mg × 2</Text>
          <Text style={styles.taskSub}>Farmgate Pharmacy - 0.4 km</Text>
        </View>

        {/* Photo Upload Area */}
        <Pressable style={styles.photoArea}>
          <View style={styles.cameraIconBox}>
            <SymbolView name="camera.fill" tintColor={ORANGE} size={32} />
          </View>
          <Text style={styles.photoTitle}>Tap to take photo</Text>
          <Text style={styles.photoSub}>Show item clearly with price tag</Text>
        </Pressable>

        {/* Warning Notice */}
        <View style={styles.noticeBox}>
          <SymbolView name="arrow.triangle.2.circlepath" tintColor={ORANGE} size={20} />
          <Text style={styles.noticeText}>Customer must confirm{'\n'}before you buy</Text>
        </View>

        <View style={{ flex: 1 }} />

        {/* Bottom CTA */}
        <Pressable style={styles.actionButton}>
          <SymbolView name="camera.fill" tintColor={TEXT_MUTED} size={18} />
          <Text style={styles.actionButtonText}>Take Photo First</Text>
        </Pressable>

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
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN },
  content: { flex: 1, padding: 20 },
  taskCard: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 20,
    marginBottom: 20,
  },
  taskTitle: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN, marginBottom: 6 },
  taskSub: { fontSize: 14, color: TEXT_MUTED },
  photoArea: {
    borderWidth: 2,
    borderColor: ORANGE,
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: LIGHT_ORANGE,
  },
  cameraIconBox: {
    backgroundColor: BG,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  photoTitle: { fontSize: 18, fontWeight: '700', color: ORANGE, marginBottom: 8 },
  photoSub: { fontSize: 14, color: TEXT_MUTED, textAlign: 'center' },
  noticeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    borderRadius: 12,
    gap: 16,
  },
  noticeText: { fontSize: 14, fontWeight: '600', color: TEXT_MAIN, lineHeight: 20 },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: BORDER,
    paddingVertical: 18,
    borderRadius: 12,
    gap: 8,
    marginBottom: 20,
  },
  actionButtonText: { color: TEXT_MUTED, fontSize: 16, fontWeight: '700' },
});
