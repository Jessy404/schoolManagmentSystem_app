import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#0A505B" />
        </TouchableOpacity>
        <Text style={styles.title}>About Us</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>School is a place where students go to learn and develop a variety of skills and knowledge.
It typically includes a range of subjects such as math, science, literature, and social studies.
Students are often divided into grades or year levels based on their age and academic progress.
Teachers play a crucial role in guiding and inspiring students.</Text>
        <Text>Our mission is to make education more accessible and efficient through innovative solutions, improving the learning experience for all.</Text>
    
      <Text style={styles.text}>
      The history of school is a fascinating journey through different cultures and eras. Here’s a brief overview:
      Ancient Civilizations: The concept of formal education dates back to ancient civilizations like Egypt, Greece, and China. In Egypt.
        </Text>
        
        <Text style={styles.text}>
        Abou Al Hool Al Seiahi, Nazlet El-Semman, Al Haram, Giza Governorate 12557
        </Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFF', // لون خلفية فاتح
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    shadowColor: "#000", 
    shadowOpacity: 0.1, 
    shadowRadius: 10,
    elevation: 1, 
  },
  backButton: {
    padding: 12,
    borderRadius: 50, 
    // backgroundColor: '#E5FCFF', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginRight: 12,
  },
  content: {
    padding: 20,
    backgroundColor: '#E5FCFF', 
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 15,
    marginBottom: 40,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24, 
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0A505B',
    marginLeft: 16,
    letterSpacing: 1,
    alignSelf: "center",
    padding: 15,
  },
});

export default AboutUs;
