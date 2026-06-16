import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BRAND_ORANGE = '#F36B0A';
const BG_WHITE = '#FFFFFF';
const INACTIVE_GRAY = '#888888';
const ACTIVE_BG = '#FDF3ED';

function CustomTabBar({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      position: 'absolute',
      // Dynamically calculate bottom spacing based on the device's system taskbar height
      bottom: Math.max(insets.bottom, 16) + 8,
      left: 20,
      right: 20,
      backgroundColor: BG_WHITE,
      height: 72,
      borderRadius: 36,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 10,
      borderWidth: 0,
    }}>
      {state.routes.map((route: any, index: number) => {
      
        if (route.name === 'explore' || route.name === 'index') return null;

        const isFocused = state.index === index;
        
        let iconName: any = 'home';
        let label = 'Home';

        if (route.name === 'home') {
          iconName = isFocused ? 'home' : 'home-outline';
          label = 'Home';
        } else if (route.name === 'activity') {
          iconName = isFocused ? 'document-text' : 'document-text-outline';
          label = 'Activity';
        } else if (route.name === 'inbox') {
          iconName = isFocused ? 'chatbubbles' : 'chatbubbles-outline';
          label = 'Inbox';
        } else if (route.name === 'profile') {
          iconName = isFocused ? 'person' : 'person-outline';
          label = 'Account';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <View style={{ 
              width: 56, 
              height: 30, 
              borderRadius: 15, 
              backgroundColor: isFocused ? ACTIVE_BG : 'transparent', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Ionicons name={iconName} color={isFocused ? BRAND_ORANGE : INACTIVE_GRAY} size={20} />
            </View>
            <Text style={{ 
              color: isFocused ? BRAND_ORANGE : INACTIVE_GRAY, 
              fontSize: 10, 
              fontWeight: '600', 
              marginTop: 2 
            }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function AppTabs() {
  return (
    <Tabs
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        }
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="explore" options={{ href: null }} />
      <Tabs.Screen name="activity" />
      <Tabs.Screen name="inbox" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
