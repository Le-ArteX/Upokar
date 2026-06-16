import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

const BG = '#FAFAFA';
const CARD_BG = '#FFFFFF';
const BORDER = '#EAEAEA';
const TEXT_MAIN = '#111111';
const TEXT_MUTED = '#888888';
const ORANGE = '#F36B0A';
const LIGHT_ORANGE = '#FDF3ED'; 

export default function PostTaskScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={10} style={styles.backButton}>
          <SymbolView name="arrow.left" tintColor={TEXT_MAIN} size={20} weight="semibold" />
        </Pressable>
        <Text style={styles.headerTitle}>Post a task</Text>
        <Pressable hitSlop={10}>
          <SymbolView name="ellipsis" tintColor={TEXT_MAIN} size={24} weight="bold" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* What do you need */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What do you need?</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.textArea}
              placeholder="Amar chal lagbe 5 kg, type basmoti hobe."
              placeholderTextColor={TEXT_MUTED}
              multiline
              defaultValue="Amar chal lagbe 5 kg, type basmoti hobe."
            />
            <View style={styles.aiBox}>
              <SymbolView name="sparkles" tintColor={ORANGE} size={14} />
              <Text style={styles.aiText}>AI understood: Rice purchase - 5kg Basmati</Text>
            </View>
          </View>
        </View>

        {/* Task type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Task type</Text>
          <View style={styles.card}>
            <View style={styles.chipRow}>
              <View style={[styles.chip, styles.chipActive]}>
                <SymbolView name="bag.fill" tintColor={ORANGE} size={14} />
                <Text style={[styles.chipText, styles.chipTextActive]}>Buy item</Text>
              </View>
              <View style={styles.chip}>
                <SymbolView name="shippingbox.fill" tintColor={TEXT_MUTED} size={14} />
                <Text style={styles.chipText}>Parcel pickup</Text>
              </View>
            </View>
            <View style={styles.chipRow}>
              <View style={styles.chip}>
                <SymbolView name="wrench.and.screwdriver.fill" tintColor={TEXT_MUTED} size={14} />
                <Text style={styles.chipText}>Help / Labour</Text>
              </View>
            </View>
            <View style={styles.chipRow}>
              <View style={styles.chip}>
                <SymbolView name="doc.text.fill" tintColor={TEXT_MUTED} size={14} />
                <Text style={styles.chipText}>Document run</Text>
              </View>
              <View style={styles.chip}>
                <SymbolView name="pills.fill" tintColor={TEXT_MUTED} size={14} />
                <Text style={styles.chipText}>Medicine</Text>
              </View>
            </View>
            <View style={styles.chipRow}>
              <View style={styles.chip}>
                <SymbolView name="pencil" tintColor={TEXT_MUTED} size={14} />
                <Text style={styles.chipText}>Custom</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Pickup / shop area */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pickup / shop area</Text>
          <View style={styles.card}>
            <View style={styles.inputRow}>
              <SymbolView name="mappin.circle.fill" tintColor={TEXT_MUTED} size={18} />
              <TextInput
                style={styles.input}
                value="Panthapath, Dhaka"
                placeholderTextColor={TEXT_MUTED}
              />
              <SymbolView name="pencil" tintColor={TEXT_MUTED} size={16} />
            </View>
            <Text style={styles.hintText}>Or leave blank — runner finds nearest shop</Text>
          </View>
        </View>

        {/* Deliver to */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deliver to</Text>
          <View style={styles.card}>
            <View style={styles.inputRow}>
              <SymbolView name="house.fill" tintColor={ORANGE} size={18} />
              <TextInput
                style={[styles.input, { color: ORANGE, fontWeight: '600' }]}
                value="Kalabagan, Dhaka-1205"
                placeholderTextColor={TEXT_MUTED}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Distance</Text>
                <Text style={styles.statValue}>1.2 km</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Est. time</Text>
                <Text style={styles.statValue}>~15 min</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Service fee</Text>
                <Text style={styles.statValue}>৳ 25</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable style={styles.broadcastButton}>
          <Text style={styles.broadcastButtonText}>Broadcast to nearby runners</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    backgroundColor: BG,
  },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: TEXT_MAIN },
  content: { padding: 20, paddingBottom: 40 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 15, fontWeight: '600', color: TEXT_MUTED, marginBottom: 12 },
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
  },
  textArea: {
    fontSize: 16,
    color: TEXT_MAIN,
    minHeight: 60,
    textAlignVertical: 'top',
  },
  aiBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: BORDER,
  },
  aiText: { color: ORANGE, fontSize: 13, fontWeight: '500' },
  chipRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: BG,
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  chipActive: { borderColor: ORANGE, backgroundColor: LIGHT_ORANGE },
  chipText: { color: TEXT_MUTED, fontSize: 14, fontWeight: '500' },
  chipTextActive: { color: ORANGE, fontWeight: '600' },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  input: { flex: 1, fontSize: 16, color: TEXT_MAIN, fontWeight: '500' },
  hintText: { color: TEXT_MUTED, fontSize: 13, marginTop: 12 },
  divider: { height: 1, backgroundColor: BORDER, marginVertical: 16 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statBox: { flex: 1, alignItems: 'center' },
  statLabel: { fontSize: 13, color: TEXT_MUTED, marginBottom: 4 },
  statValue: { fontSize: 16, fontWeight: '700', color: TEXT_MAIN },
  footer: { padding: 20, backgroundColor: BG, borderTopWidth: 1, borderTopColor: BORDER },
  broadcastButton: {
    backgroundColor: ORANGE,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  broadcastButtonText: { color: '#FFF', fontSize: 16, fontWeight: '700' },
});
