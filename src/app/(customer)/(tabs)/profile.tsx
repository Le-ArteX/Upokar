import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const ORANGE = '#F36B0A';
const TEXT_MAIN = '#111111';
const TEXT_MUTED = '#888888';

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { id: '1', title: 'My Tasks', icon: 'list', color: '#4A90E2' },
    { id: '2', title: 'Payment Methods', icon: 'card', color: '#88E060' },
    { id: '3', title: 'Saved Addresses', icon: 'location', color: ORANGE },
    { id: '4', title: 'Help & Support', icon: 'help-circle-outline', color: '#FF5C5C' },
    { id: '5', title: 'Settings', icon: 'settings', color: TEXT_MUTED },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]" edges={['top']}>
      <ScrollView 
        contentContainerClassName="px-5 pt-4 pb-[100px]" 
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text className="text-[28px] font-bold text-[#111111] mb-6 font-['Urbanist-Bold']">Account</Text>

        {/* Profile Card */}
        <View className="bg-white rounded-3xl p-5 shadow-sm elevation-2 mb-8 flex-row items-center border border-gray-100">
          <View className="w-16 h-16 rounded-full bg-[#FDF3ED] items-center justify-center mr-4" style={{ borderWidth: 1, borderColor: 'rgba(243, 107, 10, 0.2)' }}>
            <Ionicons name="person" size={32} color={ORANGE} />
          </View>
          <View className="flex-1">
            <Text className="text-[20px] font-bold text-[#111111] font-['Urbanist-Bold']">Arif Hossain</Text>
            <Text className="text-[14px] text-[#888888] mt-1 font-['Urbanist-Regular']">+880 1712-345678</Text>
          </View>
          <Pressable className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center">
            <Ionicons name="pencil" size={18} color={TEXT_MAIN} />
          </Pressable>
        </View>

        {/* Menu Options */}
        <View className="bg-white rounded-3xl p-2 shadow-sm elevation-2 border border-gray-100 mb-8">
          {menuItems.map((item, index) => (
            <Pressable 
              key={item.id}
              className={`flex-row items-center p-3 ${index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <View 
                className="w-12 h-12 rounded-2xl items-center justify-center mr-4"
                style={{ backgroundColor: '#F5F5F5' }} 
              >
                <Ionicons name={item.icon as any} size={22} color={item.color} />
              </View>
              <Text className="flex-1 text-[16px] font-semibold text-[#111111] font-['Urbanist-Bold']">
                {item.title}
              </Text>
              <Ionicons name="chevron-forward" size={20} color={TEXT_MUTED} />
            </Pressable>
          ))}
        </View>

        {/* Logout Button */}
        <Pressable 
          className="flex-row items-center justify-center bg-[#FFF0F0] py-4 rounded-2xl"
          style={{ borderWidth: 1, borderColor: 'rgba(255, 92, 92, 0.2)' }}
          onPress={() => router.replace('/login')} // Assuming login is at root
        >
          <Ionicons name="log-out-outline" size={20} color="#FF5C5C" />
          <Text className="text-[16px] font-bold text-[#FF5C5C] ml-2 font-['Urbanist-Bold']">
            Log Out
          </Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}
