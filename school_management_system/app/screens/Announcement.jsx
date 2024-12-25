import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const announcements = [
  { id: '1', title: 'Announcement', message: 'The school administration is pleased to inform you that next Wednesday and Thursday are holidays on the occasion of the glorious October victory.', date: '12-Dec-2024' },
  { id: '2', title: 'Announcement', message: 'School event coming up next month.', date: '10-Dec-2024' },
  { id: '3', title: 'Announcement', message: 'Don’t miss the sports week next Friday.', date: '08-Dec-2024' },
  { id: '4', title: 'Announcement', message: 'Midterm exams schedule will be released soon.', date: '01-Dec-2024' },
  { id: '5', title: 'Announcement', message: 'Next Wednesday and Thursday are holidays.', date: '15-Nov-2024' },
  { id: '6', title: 'Announcement', message: 'New sports equipment is available in the gym starting this week.', date: '11-Dec-2024' },
  { id: '7', title: 'Announcement', message: 'The winter break will begin on December 20th.', date: '09-Dec-2024' },
  { id: '8', title: 'Announcement', message: 'A new teacher will join the math department next semester.', date: '05-Dec-2024' },
  { id: '9', title: 'Announcement', message: 'The school cafeteria has introduced new healthy menu options.', date: '03-Dec-2024' },
  { id: '10', title: 'Announcement', message: 'All students must submit their final projects by the 18th of December.', date: '02-Dec-2024' },
  { id: '11', title: 'Announcement', message: 'Reminder: Parent-teacher meetings are scheduled for this Thursday.', date: '30-Nov-2024' },
  { id: '12', title: 'Announcement', message: 'The library will be closed for maintenance on December 15th.', date: '29-Nov-2024' },
  { id: '13', title: 'Announcement', message: 'A new computer lab will open next week.', date: '27-Nov-2024' },
  { id: '14', title: 'Announcement', message: 'Join the community service event this Saturday.', date: '25-Nov-2024' },
  { id: '15', title: 'Announcement', message: 'There will be a guest lecture on AI in education this Friday.', date: '22-Nov-2024' },
  { id: '16', title: 'Announcement', message: 'The annual sports day will be held on December 10th.', date: '20-Nov-2024' },
  { id: '17', title: 'Announcement', message: 'The school will be hosting a cultural fair next month.', date: '18-Nov-2024' },
  { id: '18', title: 'Announcement', message: 'Student council elections will take place next week.', date: '15-Nov-2024' },
  { id: '19', title: 'Announcement', message: 'There is a new course on data science available for next semester.', date: '10-Nov-2024' },
];

const AnnouncementPage = () => {
  const [expandedAnnouncements, setExpandedAnnouncements] = useState({});

  const toggleExpand = (id) => {
    setExpandedAnnouncements((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderAnnouncement = (item) => {
    if (!item) return null;

    const isExpanded = expandedAnnouncements[item.id];
    const isLongMessage = item.message.length > 100;

    return (
      <View key={item.id} style={styles.card}>
        <View style={styles.cardFlag} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>
            {isExpanded || !isLongMessage
              ? item.message
              : `${item.message.slice(0, 100)}...`}
          </Text>
          {isLongMessage && (
            <TouchableOpacity onPress={() => toggleExpand(item.id)}>
              <Text style={styles.moreButton}>
                {isExpanded ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          )}
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Announcements</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>This Week</Text>
        {announcements.slice(0, 3).map((item) => renderAnnouncement(item))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Earlier This Year</Text>
        {announcements.slice(3).map((item) => renderAnnouncement(item))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    // alignItems :"center",

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A505B',

  textAlign : "center"

  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A505B',
    marginLeft: 15,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 12,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,

  },
  cardFlag: {
    width: 8,
    backgroundColor: '#148B9C',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardContent: {
    flex: 1,
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  moreButton: {
    fontSize: 14,
    color: '#148B9C',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10, // وضع "Show More" بجانب النص
  },
});

export default AnnouncementPage;
