import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Profile from './Profile';

const scores = [
  { id: '1', date: '30 2024', subject: 'Science', type: 'final', teacher: 'Mrs/Maryam', score: '50/100', color: '#148B9C' },
  { id: '2', date: '05 2024', subject: 'Math', type: 'final', teacher: 'Mrs/Maryam', score: '20/60', color: 'red' },
  { id: '3', date: '10 2024', subject: 'Arabic', type: 'midterm', teacher: 'Mrs/Maryam', score: '0/10', color: 'red' },
  { id: '4', date: '15 2024', subject: 'Physics', type: 'final', teacher: 'Mr/John', score: '70/100', color: '#148B9C' },
  { id: '5', date: '01 2024', subject: 'Chemistry', type: 'midterm', teacher: 'Mrs/Susan', score: '45/50', color: '#148B9C' },
  { id: '6', date: '17 2024', subject: 'History', type: 'final', teacher: 'Mr/Ahmed', score: '30/70', color: 'red' },
];

const ScoresScreen = () => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.replace('../(tabs)/profile')}>
            <Ionicons name="arrow-back" size={24} color="#0A505B" />
          </TouchableOpacity>
          <Text style={styles.title}>Your Scores</Text>
        </View>
      <View style={styles.headerRow}>
        <Text style={styles.columnHeader}>Date</Text>
        <Text style={styles.columnHeader}>Subject</Text>
        <Text style={styles.columnHeader}>Type</Text>
        <Text style={styles.columnHeader}>Teacher</Text>
        <Text style={styles.columnHeader}>Score</Text>
      </View>
      <FlatList
        data={scores}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.date}</Text>
            <Text style={styles.cell}>{item.subject}</Text>
            <Text style={styles.cell}>{item.type}</Text>
            <Text style={styles.cell}>{item.teacher}</Text>
            <Text style={[styles.cell, { color: item.color }]}>{item.score}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF', 
      padding: 16,
    },
    backButton: {
      padding: 12,
      borderRadius: 10,
      marginBottom: 20,
      alignSelf: 'flex-start',
      backgroundColor: '#FFFFFF', 
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: '#0A505B',
      marginBottom: 16,
      textAlign: 'center',
      letterSpacing: 0.5,  // تحسين المسافات بين الحروف
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#148B9C',
      paddingVertical: 14,
      paddingHorizontal: 10,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#0A505B',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    columnHeader: {
      flex: 1,
      fontSize: 13,
      fontWeight: '600',
      color: "#FFF",
      textAlign: 'center',
      textTransform: 'uppercase', 
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 75,
      backgroundColor: '#E5FCFF',
      padding: 14,
      borderRadius: 10,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    cell: {
      flex: 1,
      fontSize: 12,
      color: '#555',
      textAlign: 'center',
      fontWeight: '500',
    },
  });
  

export default ScoresScreen;
