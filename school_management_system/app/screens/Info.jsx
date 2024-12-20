import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const studentInfo = [
  { id: '1', section: 'General Information', isHeader: true },
  { id: '2', title: 'Name', value: 'Yasmeen ibrahim Shapaan' },
  { id: '3', title: 'Gender', value: 'female' },
  { id: '4', title: 'Level', value: 'High School' },
  { id: '5', title: 'Grade', value: '3rd Grade' },
  { id: '6', title: 'Phone', value: '0104784894' },
  { id: '7', title: 'Address', value: '123 Main Street,Cairo' },
  { id: '8', section: 'Emergency Information', isHeader: true },
  { id: '9', title: "Father's Phone", value: '010228390393' },
  { id: '10', title: "Mother's Phone", value: '01239448574' },
  { id: '11', title: 'Blood Type', value: 'A+' },
];

const InfoScreen = () => {
  const renderItem = ({ item }) => {
    if (item.isHeader) {
      // Render section header
      return <Text style={styles.sectionTitle}>{item.section}</Text>;
    }
    // Render information card
    return (
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>{item.title}:</Text>
        <Text style={styles.infoValue}>{item.value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('../(tabs)/profile')}>
          <Ionicons name="arrow-back" size={24} color="#0A505B" />
        </TouchableOpacity>
        <Text style={styles.title}>Student Information</Text>
      </View>

      {/* FlatList with General and Emergency Info */}
      <FlatList
        data={studentInfo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0A505B',
    marginLeft: 16,
    letterSpacing: 0.5,
  },
  listContainer: {
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0A505B',
    // textAlign : "center",
    justifyContent :"center",
    alignContent :"center",
    marginVertical: 10,
    borderRadius : 15,
    // backgroundColor :"#148B9C",
    height : 40 ,

  },
  infoCard: {
    backgroundColor: '#E5FCFF',
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation : 2,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0A505B',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
});

export default InfoScreen;
