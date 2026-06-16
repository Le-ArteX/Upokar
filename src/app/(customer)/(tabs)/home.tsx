import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const { height } = Dimensions.get('window');

const TEXT_MAIN = '#111111';
const TEXT_MUTED = '#888888';
const ORANGE = '#F36B0A';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#EBEBEB]">
      {/* Interactive Map */}
      <MapView
        provider={PROVIDER_DEFAULT}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 23.8103, 
          longitude: 90.4125,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
      />
      
 
      <View className="absolute inset-0 items-center justify-center pointer-events-none" style={{ marginTop: -height * 0.15 }}>
        <View className="w-16 h-16 rounded-full items-center justify-center" style={{ backgroundColor: 'rgba(243, 107, 10, 0.2)' }}>
          <View className="w-4 h-4 rounded-full bg-[#F36B0A] border-[3px] border-white shadow-sm" />
        </View>
      </View>

      <SafeAreaView className="flex-1 justify-between" edges={['top']}>
      
        <View className="flex-row justify-between px-5 pt-4" pointerEvents="box-none">
          <Pressable className="w-11 h-11 rounded-full bg-white items-center justify-center shadow-md elevation-5">
            <Ionicons name="menu" color={TEXT_MAIN} size={28} />
          </Pressable>
          <Pressable className="w-11 h-11 rounded-full bg-white items-center justify-center shadow-md elevation-5">
            <Ionicons name="notifications" color={TEXT_MAIN} size={24} />
            <View className="absolute top-2.5 right-3 w-2 h-2 rounded-full bg-[#FF3B30] border border-white" />
          </Pressable>
        </View>

    
        <View 
          className="bg-[#FAFAFA] rounded-t-3xl shadow-xl elevation-10 flex-1 mt-auto"
          style={{ maxHeight: height * 0.65, shadowOffset: { width: 0, height: -4 } }}
        >
          <ScrollView 
            contentContainerClassName="px-5 pb-[100px]" 
            showsVerticalScrollIndicator={false}
          >

            <View className="w-10 h-1 bg-[#EAEAEA] rounded-full self-center mt-3 mb-5" />


          
            <Pressable 
              className="flex-row items-center bg-white px-4 py-3.5 rounded-2xl mb-6 shadow-sm"
              onPress={() => router.push('/post-task')}
            >
              <Ionicons name="search" color={TEXT_MUTED} size={22} />
              <Text className="flex-1 text-[18px] font-semibold text-[#111111] ml-3">What do you need?</Text>
              <View className="flex-row items-center bg-[#FDF3ED] px-2.5 py-1.5 rounded-full gap-1">
                <Ionicons name="time" color={ORANGE} size={14} />
                <Text className="text-[#F36B0A] text-[13px] font-bold">Now</Text>
              </View>
            </Pressable>

         
            <View className="flex-row flex-wrap justify-between mb-8">
              <Pressable className="w-[23%] items-center gap-2" onPress={() => router.push('/post-task')}>
                <View className="w-full aspect-square rounded-2xl bg-[#FDF3ED] items-center justify-center">
                  <Ionicons name="cart" color={ORANGE} size={32} />
                </View>
                <Text className="text-[13px] font-semibold text-[#111111]">Buy Item</Text>
              </Pressable>
              
              <Pressable className="w-[23%] items-center gap-2" onPress={() => router.push('/post-task')}>
                <View className="w-full aspect-square rounded-2xl bg-[#1A2A3A] items-center justify-center">
                  <Ionicons name="cube" color="#4A90E2" size={32} />
                </View>
                <Text className="text-[13px] font-semibold text-[#111111]">Parcel</Text>
              </Pressable>

              <Pressable className="w-[23%] items-center gap-2" onPress={() => router.push('/post-task')}>
                <View className="w-full aspect-square rounded-2xl bg-[#3A1A1A] items-center justify-center">
                  <Ionicons name="medical" color="#FF5C5C" size={32} />
                </View>
                <Text className="text-[13px] font-semibold text-[#111111]">Medicine</Text>
              </Pressable>

              <Pressable className="w-[23%] items-center gap-2" onPress={() => router.push('/post-task')}>
                <View className="w-full aspect-square rounded-2xl bg-[#2A3A2A] items-center justify-center">
                  <Ionicons name="construct" color="#88E060" size={32} />
                </View>
                <Text className="text-[13px] font-semibold text-[#111111]">Labour</Text>
              </Pressable>
            </View>

         
            <View className="mb-5">
              <Text className="text-[18px] font-bold text-[#111111] mb-4">Recent</Text>
              
              <Pressable className="flex-row items-center py-3">
                <View className="w-10 h-10 rounded-full bg-white items-center justify-center mr-4 shadow-sm border border-gray-100">
                  <Ionicons name="time-outline" color={TEXT_MAIN} size={20} />
                </View>
                <View className="flex-1">
                  <Text className="text-[16px] font-semibold text-[#111111] mb-1">Paracetamol × 2</Text>
                  <Text className="text-[14px] text-[#888888]">Farmgate Pharmacy</Text>
                </View>
                <Ionicons name="chevron-forward" color={TEXT_MUTED} size={20} />
              </Pressable>

              <View className="h-[1px] bg-[#EAEAEA] ml-14" />

              <Pressable className="flex-row items-center py-3">
                <View className="w-10 h-10 rounded-full bg-white items-center justify-center mr-4 shadow-sm border border-gray-100">
                  <Ionicons name="home" color={TEXT_MAIN} size={20} />
                </View>
                <View className="flex-1">
                  <Text className="text-[16px] font-semibold text-[#111111] mb-1">Home</Text>
                  <Text className="text-[14px] text-[#888888]">Kalabagan, Dhaka-1205</Text>
                </View>
                <Ionicons name="chevron-forward" color={TEXT_MUTED} size={20} />
              </Pressable>
            </View>

          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
