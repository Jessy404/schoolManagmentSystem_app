import { Tabs } from 'expo-router';
import React from 'react';
import {  Image }from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons,FontAwesome , FontAwesome6,AntDesign , Feather} from '@expo/vector-icons'; // استيراد FontAwesome

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
        name="announcement"
        options={{
           tabBarStyle: { display: 'flex' } ,
          tabBarActiveTintColor: "#148B9C",
          tabBarInactiveTintColor: "#3A3535",
          title: 'Announcement',
          tabBarIcon: ({ color }) => (
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
            <Feather name="users" color={color} size={25} />
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
            <FontAwesome name="book" color={color} size={25} />
          ),
        }}
      />
            <Tabs.Screen
        name="profile"
        options={{
                 tabBarActiveTintColor: "#148B9C",
          tabBarInactiveTintColor: "#3A3535",
          title: 'profile',
          tabBarIcon: () => (
            <Image 
        source={{ 
          uri: 'https://s3-alpha-sig.figma.com/img/a5a2/90ad/33f54f271b2de59273f34e582a00e05e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNqVh7cH3r33CS2E~qWe~nq8dSrLgCkAqgd8twMqRyCz3drSK5LADjzIMamDi4894Ur9~EPoFQHZ49mQF4qoAGLAmV1L9tFWjvs~BiCyF1xY6GQVcg411shw4X~U8o~jCWvA7jJixi6iahJ9Y~OsuHokopgHLLNVOX31RuM~jzr5KhsMXafhqF3G-HpbzEK1ZeeYo3D22~xX9FQAh-6EX2526AenjlPQ-FvMEgAWzzmMS1V0JT8nTHNV3xoTCpjIXFbXri1mND5gpW4DW3Tex3NTKr32lQKHqEcbVF9sPSoMXe~wJooVEPShhq~NMIej6J39p0i9paQvEQI9X~Nv4w__' 
        }}
        style={{
          width: 25, 
          height: 25, 
          borderRadius: 12.5, 
        }}
      />
          ),
        }}
      />
    </Tabs>
  );
}
