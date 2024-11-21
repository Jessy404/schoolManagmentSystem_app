import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Home() {

  const sections = [
    {
      id: '0',
      type: 'header',
      data: [{}], 
      renderItem: () => (
        <View style={styles.header}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.userName}>Hi, Student Name</Text>
          <Image source={require('../assets/images/user.png')} style={styles.studentImage} />
        </View>
      ),
    },
    {
      id: '1',
      type: 'announcement',
      data: [
        { id: '1', title: 'Announcement 1', message: 'Next Wednesday and Thursday are holidays.' },
        { id: '2', title: 'Announcement 2', message: 'School event coming up next month.' },
      ],
      renderItem: ({ item }) => (
        <View style={styles.announcementCard}>
          <Text style={styles.announcementTitle}>{item.title}</Text>
          <Text style={styles.announcementMessage}>{item.message}</Text>
        </View>
      ),
    },
    {
      id: '2',
      type: 'icons',
      data: [
        { id: '1', title: '📱 Mobile' },
        { id: '2', title: '🌐 Website' },
      ],
      renderItem: ({ item }) => (
        <TouchableOpacity style={styles.iconButton}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ),
    },
    {
      id: '3',
      type: 'courses',
      data: [
        { id: '1', title: 'Course 1', image: 'https://via.placeholder.com/150', rating: 4 },
        { id: '2', title: 'Course 2', image: 'https://via.placeholder.com/150', rating: 5 },
        { id: '3', title: 'Course 2', image: 'https://via.placeholder.com/150', rating: 5 },
        { id: '4', title: 'Course 2', image: 'https://via.placeholder.com/150', rating: 5 },
        { id: '5', title: 'Course 2', image: 'https://via.placeholder.com/150', rating: 5 },
      ],
      renderItem: ({ item }) => (
        <View style={styles.courseCard}>
          <Image source={{ uri: item.image }} style={styles.courseImage} />
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseRating}>⭐ {item.rating}</Text>
        </View>
      ),
    },
    {
      id: '4',
      type: 'reviews',
      data: [
        { id: '1', name: 'Mohammed Temo', review: 'As a parent, I have been thoroughly impressed...', rating: 5 },
        { id: '2', name: 'Ahmed Ali', review: 'The school has helped my son improve tremendously.', rating: 4 },
      ],
      renderItem: ({ item }) => (
        <View style={styles.reviewCard}>
          <Text style={styles.reviewerName}>{item.name}</Text>
          <Text style={styles.reviewText}>{item.review}</Text>
          <Text style={styles.reviewRating}>⭐ {item.rating}</Text>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      {/* قائمة الأقسام */}
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            <FlatList
              data={item.data}
              renderItem={item.renderItem}
              keyExtractor={(subItem, index) => subItem.id || index.toString()} // للتأكد من وجود مفتاح فريد للهيدر
              horizontal={item.type !== 'courses' && item.type !== 'header'}
              showsHorizontalScrollIndicator={false}
              numColumns={item.type === 'courses' ? 2 : 1}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  studentImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
    color: '#000',
    fontWeight: "500",
    fontFamily : 'Outfit',
    lineHeight : 20,
    height : 20 ,
    width : 115 ,
    flexGrow :0,
    marginLeft :200 ,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  // sectionTitle: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginVertical: 10,
  //   marginLeft: 20,
  // },
  announcementCard: {
    backgroundColor: '#148B9C',
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    width: width * 0.8,
    elevation: 5,
  },
  announcementTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  announcementMessage: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  iconButton: {
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  courseCard: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    width: '45%',
    elevation: 3,
    alignItems: 'center',
  },
  courseImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  courseTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseRating: {
    marginTop: 5,
    fontSize: 14,
    color: '#FFD700',
  },
  reviewCard: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
    marginRight: 10,
    elevation: 3,
  },
  reviewerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 16,
    marginVertical: 5,
  },
  reviewRating: {
    fontSize: 14,
    color: '#FFD700',
  },
});
