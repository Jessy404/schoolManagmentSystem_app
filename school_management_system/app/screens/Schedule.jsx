import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const schedule = [
  { time: '08:00 - 09:00', monday: 'Math', tuesday: 'Physics', wednesday: 'Chem', thursday: 'History', friday: 'PE' },
  { time: '09:00 - 10:00', monday: 'English', tuesday: 'Math', wednesday: 'Biology', thursday: 'English', friday: 'Physics' },
  { time: '10:00 - 11:00', monday: 'Chem', tuesday: 'Biology', wednesday: 'Math', thursday: 'PE', friday: 'Chem' },
  { time: '11:00 - 12:00', monday: 'PE', tuesday: 'History', wednesday: 'Math', thursday: 'English', friday: 'Biology' },
  { time: '12:00 - 01:00', monday: 'Lunch Break', tuesday: 'Lunch Break', wednesday: 'Lunch Break', thursday: 'Lunch Break', friday: 'Lunch Break' },
  { time: '01:00 - 02:00', monday: 'Physics', tuesday: 'Chem', wednesday: 'History', thursday: 'Biology', friday: 'English' },
];

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Title */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#0A505B" />
        </TouchableOpacity>
        <Text style={styles.title}>Student Schedule</Text>
      </View>

      {/* Column Headers */}
      <View style={styles.headerRow}>
        <Text style={styles.columnHeader}>Time</Text>
        <Text style={styles.columnHeader}>Mon</Text>
        <Text style={styles.columnHeader}>Tue</Text>
        <Text style={styles.columnHeader}>Wed</Text>
        <Text style={styles.columnHeader}>Thu</Text>
        <Text style={styles.columnHeader}>Fri</Text>
      </View>

      {/* Schedule List */}
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.time}</Text>
            <Text style={styles.cell}>{item.monday}</Text>
            <Text style={styles.cell}>{item.tuesday}</Text>
            <Text style={styles.cell}>{item.wednesday}</Text>
            <Text style={styles.cell}>{item.thursday}</Text>
            <Text style={styles.cell}>{item.friday}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0A505B',
    flex: 1,
    textAlign: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#148B9C',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  columnHeader: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#E5FCFF',
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default ScheduleScreen;
