import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
import { useColorScheme } from 'react-native';

export default function ProfileScreen() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <SafeAreaView 
      className="flex-1 items-center justify-center bg-gray-50 dark:bg-black"
    >
      <Text className="text-2xl font-bold text-gray-900 dark:text-white">
        Profile
      </Text>
      <Text className="text-gray-500 mt-2">
        Tailwind CSS is working!
      </Text>
    </SafeAreaView>
  );
}
