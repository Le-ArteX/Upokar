import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymbolView } from 'expo-symbols';

import { Colors } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#ffffff' }} />
      
      {/* Top Header Row (Simulating the mockup header) */}
      <View style={styles.topBar}>
        <View style={{ flex: 1 }} />
        <Pressable>
          <SymbolView name="ellipsis" tintColor="#000000" size={24} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Greeting Section */}
        <Text style={styles.roleSubtitle}>CUSTOMER - HOME</Text>
        <Text style={styles.greeting}>Hi, Rafi 👋</Text>

        {/* Location Pill */}
        <Pressable style={styles.locationPill}>
          <SymbolView name="mappin.and.ellipse" tintColor={Colors.light.primary} size={18} />
          <Text style={styles.locationText}>Gulshan-1, Dhaka</Text>
        </Pressable>

        {/* Search Section */}
        <View style={styles.searchSection}>
          <Text style={styles.searchHeading}>What do you need?</Text>
          <View style={styles.searchInputContainer}>
            <SymbolView name="magnifyingglass" tintColor="#a0a0a0" size={20} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Search item or shop..."
              placeholderTextColor="#a0a0a0"
            />
          </View>
        </View>

        {/* Action Grid */}
        <View style={styles.grid}>
          <Pressable style={styles.gridCard}>
            <View style={styles.iconWrapper}>
              <SymbolView name="bag" tintColor={Colors.light.primary} size={32} />
            </View>
            <Text style={styles.gridCardText}>Buy item</Text>
          </Pressable>
          
          <Pressable style={styles.gridCard}>
            <View style={styles.iconWrapper}>
              <SymbolView name="shippingbox" tintColor={Colors.light.primary} size={32} />
            </View>
            <Text style={styles.gridCardText}>Courier pickup</Text>
          </Pressable>
        </View>

        <View style={{ flex: 1 }} />

        {/* Bottom CTA */}
        <Pressable style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Post a request</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 100, // Leave room for bottom tabs
  },
  roleSubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.light.primary,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  locationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 32,
    gap: 8,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  searchSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  searchHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.primary,
    marginBottom: 12,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#000000',
  },
  grid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 48,
  },
  gridCard: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eaeaea',
    gap: 12,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.light.backgroundSelected, // #ffece0
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridCardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  ctaButton: {
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 'auto',
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
