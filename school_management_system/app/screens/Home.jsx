import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// import { Image } from 'react-native';
const { width } = Dimensions.get('window');

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);




  const sections = [
    {
      id: '0',
      type: 'header',
      data: [{}],
      renderItem: () => (
        <View style={styles.header}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <View style={styles.action}>
            <Text style={styles.userName}>Hi , Yasmeen</Text>
            <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/a5a2/90ad/33f54f271b2de59273f34e582a00e05e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNqVh7cH3r33CS2E~qWe~nq8dSrLgCkAqgd8twMqRyCz3drSK5LADjzIMamDi4894Ur9~EPoFQHZ49mQF4qoAGLAmV1L9tFWjvs~BiCyF1xY6GQVcg411shw4X~U8o~jCWvA7jJixi6iahJ9Y~OsuHokopgHLLNVOX31RuM~jzr5KhsMXafhqF3G-HpbzEK1ZeeYo3D22~xX9FQAh-6EX2526AenjlPQ-FvMEgAWzzmMS1V0JT8nTHNV3xoTCpjIXFbXri1mND5gpW4DW3Tex3NTKr32lQKHqEcbVF9sPSoMXe~wJooVEPShhq~NMIej6J39p0i9paQvEQI9X~Nv4w__' }} style={styles.studentImage} />

          </View>
        </View>
      ),
    },
    {
      id: '1',
      type: 'announcement',
      data: [

        { id: '1', title: 'Announcement', message: 'The school administration is pleased to inform you that next Wednesday and Thursday are holidays on the occasion of the glorious October victory.' },
        { id: '2', title: 'Announcement', message: 'School event coming up next month.' },
        { id: '3', title: 'Announcement', message: 'Don’t miss the sports week next Friday.' },
        { id: '4', title: 'Announcement', message: 'Midterm exams schedule will be released soon.' },
        { id: '5', title: 'Announcement 1', message: 'Next Wednesday and Thursday are holidays.' },
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
        { id: '1', title: 'Phone', icon: 'phone' },
        { id: '2', title: 'Location', icon: 'map-pin' },
        { id: '3', title: 'Website', icon: 'globe' },
        { id: '4', title: 'About Us', icon: 'file-text' },
        { id: '5', title: 'Courses', icon: 'book' },
      ],
      renderItem: ({ item }) => (
        <TouchableOpacity style={styles.iconButton}>
          <Feather name={item.icon} size={25} color="#0A505B" />
          <Text style={styles.iconButtonTitle}>{item.title}</Text>
        </TouchableOpacity>
      ),
    },
    {
      id: '3',
      type: 'courses',
      data: [
        { id: '1', title: 'Course 1', image: 'https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5V5nwx7SQIWNaTOouhkDuM05Jo6ePcxq4g5yY5LKlN2AxLQx4W06Hy9~-zkyY0Rm~yRquH64NvDlaXB425VXXv1sFA-D0Ou02s9tmzco-Npf0UkvnBIUX6ZmOcMYI7q2QGyKk1snBwo7mrRtwoRC60KAbD4cZKDM5WGxA7Yt3cyWkpjITxzeT8g1si~8PVEodKpmUnSmTwVbmqvi3M-bUij3mQ~ege0WxKjLEVrI~a3DX9uaREgX8dxH~Mgedrfm8m9WI3cEYiIEQLVN6vScYN6SVHDfp1MocqijiIRIDA6mQgVYahNLora~Rq9n2ruNC2gPfXlQxCGmjTcKScBeQ__', rating: 4 },
        { id: '2', title: 'Course 2', image: 'https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5V5nwx7SQIWNaTOouhkDuM05Jo6ePcxq4g5yY5LKlN2AxLQx4W06Hy9~-zkyY0Rm~yRquH64NvDlaXB425VXXv1sFA-D0Ou02s9tmzco-Npf0UkvnBIUX6ZmOcMYI7q2QGyKk1snBwo7mrRtwoRC60KAbD4cZKDM5WGxA7Yt3cyWkpjITxzeT8g1si~8PVEodKpmUnSmTwVbmqvi3M-bUij3mQ~ege0WxKjLEVrI~a3DX9uaREgX8dxH~Mgedrfm8m9WI3cEYiIEQLVN6vScYN6SVHDfp1MocqijiIRIDA6mQgVYahNLora~Rq9n2ruNC2gPfXlQxCGmjTcKScBeQ__', rating: 5 },
        { id: '3', title: 'Course 3', image: 'https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5V5nwx7SQIWNaTOouhkDuM05Jo6ePcxq4g5yY5LKlN2AxLQx4W06Hy9~-zkyY0Rm~yRquH64NvDlaXB425VXXv1sFA-D0Ou02s9tmzco-Npf0UkvnBIUX6ZmOcMYI7q2QGyKk1snBwo7mrRtwoRC60KAbD4cZKDM5WGxA7Yt3cyWkpjITxzeT8g1si~8PVEodKpmUnSmTwVbmqvi3M-bUij3mQ~ege0WxKjLEVrI~a3DX9uaREgX8dxH~Mgedrfm8m9WI3cEYiIEQLVN6vScYN6SVHDfp1MocqijiIRIDA6mQgVYahNLora~Rq9n2ruNC2gPfXlQxCGmjTcKScBeQ__', rating: 5 },
        { id: '4', title: 'Course 4', image: 'https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5V5nwx7SQIWNaTOouhkDuM05Jo6ePcxq4g5yY5LKlN2AxLQx4W06Hy9~-zkyY0Rm~yRquH64NvDlaXB425VXXv1sFA-D0Ou02s9tmzco-Npf0UkvnBIUX6ZmOcMYI7q2QGyKk1snBwo7mrRtwoRC60KAbD4cZKDM5WGxA7Yt3cyWkpjITxzeT8g1si~8PVEodKpmUnSmTwVbmqvi3M-bUij3mQ~ege0WxKjLEVrI~a3DX9uaREgX8dxH~Mgedrfm8m9WI3cEYiIEQLVN6vScYN6SVHDfp1MocqijiIRIDA6mQgVYahNLora~Rq9n2ruNC2gPfXlQxCGmjTcKScBeQ__', rating: 5 },
        { id: '5', title: 'Course 5', image: 'https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5V5nwx7SQIWNaTOouhkDuM05Jo6ePcxq4g5yY5LKlN2AxLQx4W06Hy9~-zkyY0Rm~yRquH64NvDlaXB425VXXv1sFA-D0Ou02s9tmzco-Npf0UkvnBIUX6ZmOcMYI7q2QGyKk1snBwo7mrRtwoRC60KAbD4cZKDM5WGxA7Yt3cyWkpjITxzeT8g1si~8PVEodKpmUnSmTwVbmqvi3M-bUij3mQ~ege0WxKjLEVrI~a3DX9uaREgX8dxH~Mgedrfm8m9WI3cEYiIEQLVN6vScYN6SVHDfp1MocqijiIRIDA6mQgVYahNLora~Rq9n2ruNC2gPfXlQxCGmjTcKScBeQ__', rating: 2 },
        { id: '6', title: 'Course 5', image: 'https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5V5nwx7SQIWNaTOouhkDuM05Jo6ePcxq4g5yY5LKlN2AxLQx4W06Hy9~-zkyY0Rm~yRquH64NvDlaXB425VXXv1sFA-D0Ou02s9tmzco-Npf0UkvnBIUX6ZmOcMYI7q2QGyKk1snBwo7mrRtwoRC60KAbD4cZKDM5WGxA7Yt3cyWkpjITxzeT8g1si~8PVEodKpmUnSmTwVbmqvi3M-bUij3mQ~ege0WxKjLEVrI~a3DX9uaREgX8dxH~Mgedrfm8m9WI3cEYiIEQLVN6vScYN6SVHDfp1MocqijiIRIDA6mQgVYahNLora~Rq9n2ruNC2gPfXlQxCGmjTcKScBeQ__', rating: 5 },
      ],
      renderItem: ({ item }) => (
        <View style={styles.courseCard}>
          <Image source={{ uri: item.image }} style={styles.courseImage} />
          <Text style={styles.courseTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, index) => (
              <FontAwesome
                key={index}
                name={index < item.rating ? 'star' : 'star-o'}
                size={12}
                color="#FFCB5B"
                style={styles.star}
              />
            ))}
          </View>
        </View>
      ),
    },
    {
      id: '4',
      type: 'reviews',
      data: [
        {
          id: '1', name: 'Mohammed Temo', review: ' As a parent, I have been thoroughly impressed with the quality of education my child receives at this school.',
          image: 'https://s3-alpha-sig.figma.com/img/a5a2/90ad/33f54f271b2de59273f34e582a00e05e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNqVh7cH3r33CS2E~qWe~nq8dSrLgCkAqgd8twMqRyCz3drSK5LADjzIMamDi4894Ur9~EPoFQHZ49mQF4qoAGLAmV1L9tFWjvs~BiCyF1xY6GQVcg411shw4X~U8o~jCWvA7jJixi6iahJ9Y~OsuHokopgHLLNVOX31RuM~jzr5KhsMXafhqF3G-HpbzEK1ZeeYo3D22~xX9FQAh-6EX2526AenjlPQ-FvMEgAWzzmMS1V0JT8nTHNV3xoTCpjIXFbXri1mND5gpW4DW3Tex3NTKr32lQKHqEcbVF9sPSoMXe~wJooVEPShhq~NMIej6J39p0i9paQvEQI9X~Nv4w__', rating: 5
        },
        {
          id: '2', name: 'Ahmed Ali', review: 'The school has helped my son improve tremendously.',
          image: 'https://s3-alpha-sig.figma.com/img/a5a2/90ad/33f54f271b2de59273f34e582a00e05e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNqVh7cH3r33CS2E~qWe~nq8dSrLgCkAqgd8twMqRyCz3drSK5LADjzIMamDi4894Ur9~EPoFQHZ49mQF4qoAGLAmV1L9tFWjvs~BiCyF1xY6GQVcg411shw4X~U8o~jCWvA7jJixi6iahJ9Y~OsuHokopgHLLNVOX31RuM~jzr5KhsMXafhqF3G-HpbzEK1ZeeYo3D22~xX9FQAh-6EX2526AenjlPQ-FvMEgAWzzmMS1V0JT8nTHNV3xoTCpjIXFbXri1mND5gpW4DW3Tex3NTKr32lQKHqEcbVF9sPSoMXe~wJooVEPShhq~NMIej6J39p0i9paQvEQI9X~Nv4w__', rating: 4
        },
        {
          id: '3', name: 'Yasmeen ibrahim', review: 'The school has helped my son improve tremendously.',
          image: 'https://s3-alpha-sig.figma.com/img/a5a2/90ad/33f54f271b2de59273f34e582a00e05e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNqVh7cH3r33CS2E~qWe~nq8dSrLgCkAqgd8twMqRyCz3drSK5LADjzIMamDi4894Ur9~EPoFQHZ49mQF4qoAGLAmV1L9tFWjvs~BiCyF1xY6GQVcg411shw4X~U8o~jCWvA7jJixi6iahJ9Y~OsuHokopgHLLNVOX31RuM~jzr5KhsMXafhqF3G-HpbzEK1ZeeYo3D22~xX9FQAh-6EX2526AenjlPQ-FvMEgAWzzmMS1V0JT8nTHNV3xoTCpjIXFbXri1mND5gpW4DW3Tex3NTKr32lQKHqEcbVF9sPSoMXe~wJooVEPShhq~NMIej6J39p0i9paQvEQI9X~Nv4w__', rating: 4
        },
      ],
      renderItem: ({ item }) => (
        <View style={styles.reviewCard}>
          <View style={[styles.reviewer, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image source={{ uri: item.image }} style={styles.studentImage} />
            <View>
              <Text style={styles.reviewerName}>{item.name}</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <FontAwesome
                    key={index}
                    name={index < item.rating ? 'star' : 'star-o'}
                    size={12}
                    color="#FFCB5B"
                    style={styles.star}
                  />
                ))}
              </View>
            </View>
          </View>
          <Text style={styles.reviewText}>{item.review}</Text>

        </View>
      ),
    },
  ];

  const handleScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / (width * 0.85 + width * 0.075 * 2));
    setCurrentIndex(pageIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            {item.type === 'announcement' ? (
              <>
                <FlatList
                  data={item.data}
                  renderItem={item.renderItem}
                  keyExtractor={(subItem) => subItem.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  snapToAlignment="center"
                  snapToInterval={width * 0.85 + width * 0.075 * 2}
                  decelerationRate="normal"
                  onScroll={handleScroll}
                  scrollEventThrottle={16}
                />
                <View style={styles.pagination}>
                  {item.data.map((_, index) => (
                    <View
                      key={index}
                      style={[styles.dot, currentIndex === index ? styles.activeDot : styles.inactiveDot]}
                    />
                  ))}
                </View>
              </>
            ) : item.type === 'courses' ? (
              <View style={styles.courseSection}>
                <View style={styles.courseTitle1}>
                  <Text style={styles.courseTitleWord}>Your </Text>
                  <Text style={styles.courseTitleWord1}> Courses </Text>
                </View>
                <FlatList
                  data={item.data}
                  renderItem={item.renderItem}
                  keyExtractor={(subItem) => subItem.id}
                  showsHorizontalScrollIndicator={false}
                  numColumns={item.type === 'courses' ? 3 : 1}
                />
              </View>
            ) :
              item.type === 'reviews' ? (
                <View style={styles.courseSection}>
                  <View style={styles.courseTitle1}>
                    <Text style={styles.courseTitleWord}>What </Text>
                    <Text style={styles.courseTitleWord1}> parents </Text>
                    <Text style={styles.courseTitleWord}>say </Text>
                  </View>
                  <FlatList
                    data={item.data}
                    renderItem={item.renderItem}
                    horizontal
                    keyExtractor={(subItem) => subItem.id}
                    pagingEnabled
                    // snapToAlignment="center"
                    snapToInterval={width * 0.85 + width * 0.075 * 2}
                    decelerationRate="normal"
                    onScroll={handleScroll}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    numColumns={item.type === 'courses' ? 3 : 1}
                  />
                </View>
              ) : (
                <FlatList
                  data={item.data}
                  renderItem={item.renderItem}
                  keyExtractor={(subItem, index) => subItem.id || index.toString()}
                  horizontal={item.type !== 'courses' && item.type !== 'header'}
                  showsHorizontalScrollIndicator={false}

                />
              )

            }
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFF',
  },
  logo: {
    width: 50,
    height: 50,
    // top: 5,
  },
  action: {
    flexDirection: "row",
    marginLeft: 110,
    width: 160,
    height: 35,
    alignItems: "center",
    // top: 5,
  },
  studentImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'Outfit',
    lineHeight: 20,
    height: 20,
    width: 115,
  },
  sectionContainer: {
    // marginBottom: 20,
  },
  announcementCard: {
    backgroundColor: '#148B9C',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: (width * 0.075),
    width: width * 0.85,
    elevation: 3,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 134,
  },
  announcementTitle: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "Outfit",
    fontWeight: "500",
    color: '#fff',

  },
  announcementMessage: {
    fontSize: 14,
    height: 79,
    color: '#fff',
    lineHeight: 17,
    // fontFamily : "Outfit",
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: 6,
  },
  iconButton: {
    backgroundColor: '#E5FCFF',
    padding: 5,
    borderRadius: 8,
    height: 58,
    width: width * 0.15,
    alignItems: 'center',
    marginHorizontal: 9,
  },
  iconButtonTitle: {
    paddingTop: 6,
    alignItems: 'center',
    marginHorizontal: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    width: '100%',
    textAlign: 'center',
  },
  star: {
    margin: 2,

  },

  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  courseSection: {
    marginBottom: 20,
    alignItems: 'center',
    width: "80%",
    justifyContent: "center",
    textAlign: 'center',
    alignSelf: 'center',

  },
  courseTitle1: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
  },
  courseTitleWord: {
    fontSize: 20,
    fontFamily: "Outfit",
    fontStyle: "normal",
    lineHeight: 25,
    fontWeight: '600',
    color: '#000',
    textTransform: "capitalize",
  },
  courseTitleWord1: {
    fontSize: 20,
    fontFamily: "Outfit",
    fontStyle: "normal",
    lineHeight: 25,
    fontWeight: '600',
    color: '#148B9C',
    textTransform: "capitalize",
  },
  courseCard: {
    width: width * 0.25,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: "#E5FCFF",

  },

  courseImage: {
    width: 46,
    height: 51,
    padding: 10,

  },
  courseTitle: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 10,

    fontFamily: "Outfit",
    marginTop: 10,
    textAlign: 'center',
  },
  courseRating: {
    fontSize: 14,
    color: '#148B9C',
    marginTop: 5,
  },
  reviewCard: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 25,
    elevation: 2,
    width: width * 0.75,
    height: 151,
    alignSelf: 'center',
    textAlign: 'center'

  },

  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  reviewText: {
    fontSize: 12,
    marginVertical: 5,
    fontFamily: 'Outfit',
    fontStyle: 'normal',
    fontWeight: "400"
  },
  reviewRating: {
    fontSize: 12,
    color: '#148B9C',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: '#E5FCFF',
  },
  activeDot: {
    backgroundColor: '#148B9C',
  },
  inactiveDot: {
    backgroundColor: '#BBBBBB',
  },
});
