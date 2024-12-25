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
        <Text style={styles.text}>We are a dedicated team focused on building a seamless school management system using the latest technologies like React Native. Our goal is to provide a platform that simplifies school operations for both teachers and students.</Text>
        <Text style={styles.text}>Our mission is to make education more accessible and efficient through innovative solutions, improving the learning experience for all.</Text>
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
