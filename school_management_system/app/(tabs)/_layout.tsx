import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons,FontAwesome , FontAwesome6,AntDesign} from '@expo/vector-icons'; // استيراد FontAwesome
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarActiveTintColor: "#148B9C",
          tabBarInactiveTintColor: "#3A3535",
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" color={color} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
           tabBarStyle: { display: 'flex' } ,
          tabBarActiveTintColor: "#148B9C",
          tabBarInactiveTintColor: "#3A3535",
          title: 'Announcement',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name ="medapps" color={color} size={25} />
          ),
     
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarActiveTintColor: "#148B9C",
          tabBarInactiveTintColor: "#3A3535",
          title: 'Community',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="users-between-lines" color={color} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
                 tabBarActiveTintColor: "#148B9C",
          tabBarInactiveTintColor: "#3A3535",
          title: 'Courses',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book" color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
}
