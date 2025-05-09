import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
const attendanceData = {
  '2024-12-01': { status: 'present' },
  '2024-12-02': { status: 'present' },
  '2024-12-03': { status: 'present' },
  '2024-12-04': { status: 'present' },
  '2024-12-05': { status: 'present' },'2025-01-01': { status: 'present' },
  '2025-01-02': { status: 'absent' },
  '2025-01-03': { status: 'present' },
  '2025-01-04': { status: 'present' },
  '2025-01-05': { status: 'present' },
  '2025-01-06': { status: 'present' },
  '2025-01-07': { status: 'present' },
  '2025-01-08': { status: 'present' },
  '2025-01-09': { status: 'present' },
  '2025-01-10': { status: 'present' },
  '2025-01-11': { status: 'absent' },
  '2025-01-12': { status: 'present' },
  '2025-01-13': { status: 'present' },
  '2025-01-14': { status: 'present' },
  '2025-01-15': { status: 'present' },
  '2025-01-16': { status: 'absent' },
  '2025-01-17': { status: 'present' },
  '2025-01-18': { status: 'present' },
  '2025-01-19': { status: 'absent' },
  '2025-01-20': { status: 'present' },
  '2025-01-21': { status: 'present' },

};

const getMarkedDates = () => {
  const markedDates = {};
  Object.keys(attendanceData).forEach((date) => {
    const { status } = attendanceData[date];
    markedDates[date] = {
      marked: true,
      dotColor: status === 'present' ? 'green' : 'red',
      customStyles: {
        container: {
          backgroundColor: status === 'present' ? '#d4edda' : '#f8d7da',
        },
        text: {
          color: '#000',
        },
      },
    };
  });
  return markedDates;
};

const Attendance= () => {
  return (
    <View style={styles.container}>
      <View style = {styles.header} >

     
              <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#0A505B" />
        </TouchableOpacity>
      <Text style={styles.title}>Student Attendance</Text>
      </View>
      <Calendar
        markingType={'custom'}
        markedDates={getMarkedDates()}
        theme={{
          todayTextColor: '#148B9C',
          arrowColor: '#148B9C',
        }}
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0A505B',
    marginBottom: 16,
    textAlign: 'center',
    right : 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign :"center",
    marginBottom: 16,
    justifyContent: 'space-between',
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
});

export default Attendance;
