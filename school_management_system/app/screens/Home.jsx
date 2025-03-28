import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions , Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';
// import { Image } from 'react-native';
const { width } = Dimensions.get('window');

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
 <View style = {styles.iconVeiw}>
  
  <TouchableOpacity style={styles.iconButton} onPress={() => {
              if (item.title === 'About Us') {
                router.push('../Account/AboutUs');
              }
              if (item.title === 'Courses') {
                router.push('../(tabs)/courses');
            
                }
              
            }}>
          <Feather name={item.icon} size={25} color="#0A505B" />
          <Text style={styles.iconButtonTitle}>{item.title}</Text>
        </TouchableOpacity>
 </View>
   
      ),
    },
    {
      id: '3',
      type: 'courses',
      data: [
        { id: "3", title: "English Language [2nd Secondary]", teacher: "Teacher Name", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 5 },
        { id: "18", title: "physics [2nd Secondary ]", teacher: "Teacher Name", image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png", rating: 4 },  { id: "5", title: "Chemistry  [2nd Secondary]", teacher: "Teacher Name", image: "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png", rating: 4 },
        { id: "6", title: "History [2nd Secondary]", teacher: "Teacher Name", image: "https://cdn-icons-png.flaticon.com/512/2234/2234697.png", rating: 5 },
        { id: "1", title: "Arabic Language [2nd Secondary ]", teacher: "Teacher Name", image: "https://www.shareicon.net/data/128x128/2015/09/02/94618_arabic_512x512.png", rating: 4 },
        { id: "2", title: "Mathematics[2nd Secondary]", teacher: "Teacher Name", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Deus_mathematics.png", rating: 3 },

       ],      renderItem: ({ item }) => (
        <View style={styles.courseCard}>
          <View style ={styles.imageVeiw}>
          <Image source={{ uri: item.image }} style={styles.courseImage} />
          </View>
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
      type: 'AllCourses',
      data: [
        { id: "4", title: "Chemistry  [2nd Secondary]", teacher: "Teacher Name", image: "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png", rating: 4 },
     
        { id: "1", title: "Arabic Language [2nd Secondary ]", teacher: "Teacher Name", image: "https://www.shareicon.net/data/128x128/2015/09/02/94618_arabic_512x512.png", rating: 4 },
        { id: "2", title: "Mathematics[2nd Primary]", teacher: "Teacher Name", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Deus_mathematics.png", rating: 3 },
        { id: "3", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 5 },
          { id: "18", title: "physics [2nd Secondary ]", teacher: "Teacher Name", image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png", rating: 4 },
        { id: "6", title: "Science  [6th Primary]", teacher: "Teacher Name", image: "https://w7.pngwing.com/pngs/327/423/png-transparent-science-symbol-engineering-science-engineering-chemistry-sign-thumbnail.png", rating: 4 },
        { id: "7", title: "English Language [3rd Primary]", teacher: "Teacher Name", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 5 },
        { id: "8", title: "Introduction to Python [3rd Secondary ]", teacher: "Teacher Name", image: "https://img.icons8.com/?size=256&id=13441&format=png", rating: 3 },
        { id: "9", title: "Science [5th Primary]", teacher: "Teacher Name", image: "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png", rating: 4 },
        { id: "10", title: "English Language [2nd Secondary ]", teacher: "Teacher Name", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 4 },
        { id: "11", title: "physics [3rd Secondary ]", teacher: "Teacher Name", image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png", rating: 4 },
        { id: "12", title: "physics [2nd Secondary ]", teacher: "Teacher Name", image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png", rating: 4 },
        { id: "13", title: "English Language [3rd Primary]", teacher: "Teacher Name", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 5 },
        { id: "14", title: "Introduction to Python [3rd Secondary ]", teacher: "Teacher Name", image: "https://img.icons8.com/?size=256&id=13441&format=png", rating: 3 },
        { id: "15", title: "Science [4th Primary]", teacher: "Teacher Name", image: "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png", rating: 4 },
        { id: "16", title: "English Language [2nd Secondary ]", teacher: "Teacher Name", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 4 },
        { id: "17", title: "physics [3rd Secondary ]", teacher: "Teacher Name", image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png", rating: 4 },
       ],
      renderItem: ({ item }) => (
        <View style={styles.allcourseCard}>
          <View style ={styles.imageVeiw}>
          <Image source={{ uri: item.image }} style={styles.courseImage} />
          </View>
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
      id: '5',
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
                <Pressable style={styles.courseTitle1}   onPress={() => router.push('../(tabs)/courses')} >
                  <Text style={styles.courseTitleWord}>My </Text>
                  <Text style={styles.courseTitleWord1}> Courses </Text>
                </Pressable>
                <FlatList
                  data={item.data}
                  horizontal
                  renderItem={item.renderItem}
                  keyExtractor={(subItem) => subItem.id}
                  showsHorizontalScrollIndicator={false}
         
                />
              </View>
            ) :
            item.type === 'AllCourses' ? (
              <View style={styles.allcourseSection}>
                <Pressable style={styles.allcourseTitle1}   onPress={() => router.push('../(tabs)/courses')} >
                  <Text style={styles.courseTitleWord}>All</Text>
                  <Text style={styles.courseTitleWord1}> Courses </Text>
                </Pressable>
                <FlatList
                  data={item.data}
                  horizontal
                  renderItem={item.renderItem}
                  keyExtractor={(subItem) => subItem.id}
                  showsHorizontalScrollIndicator={false}
         
                />
              </View>
            ) :
              item.type === 'reviews' ? (
                <View style={styles. reviewSection}>
                  <View style={styles.reveiwTitle}>
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
                    snapToInterval={width * 0.75+ width * 0.025 * 2}
                    decelerationRate="normal"
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
    top: -5,
  },
  action: {
    flexDirection: "row",
    width: 160,
    height: 35,
    left : 40 ,
    alignItems: "center",
    top: -5,
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
    width: 62,
    alignItems: 'center',
    justifyContent : "center",
    marginHorizontal: 6,
    right : -6,
    // left : 10 ,
    alignSelf : "center",
  },
  iconVeiw : {
    justifyContent :'center',
    alignItems :'center',
    alignSelf :"center"
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
    marginLeft : 40 ,
  },
reviewSection: {
    marginBottom: 20,
    alignItems: 'center',
    width: "80%",
    justifyContent: "center",
    textAlign: 'center',
    alignSelf: 'center',

  },
  courseSection: {
    marginBottom: 20,
    alignItems: 'center',
    width: "90%",
    justifyContent: "center",
    textAlign: 'center',
    alignSelf: 'center',
    padding : 10 ,

  },
  allcourseSection: {
    marginBottom: 20,
    alignItems: 'center',
    width: "90%",
    justifyContent: "center",
    textAlign: 'center',
    alignSelf: 'center',
    // padding : 10 ,
    marginTop : -20 ,

  },
  courseTitle1: {
    flexDirection: "row",
    alignItems: 'flex-start',
    // marginVertical: 10,
    right : 110 ,
    top: 10 ,
  },
  allcourseTitle1: {
    flexDirection: "row",
    alignItems: 'flex-start',
    // marginVertical: 10,
    right : 110 ,
    top: -20 ,
  },
  reveiwTitle: {
    flexDirection: "row",
    alignItems: 'center',
    top : -30 ,
    // marginVertical: 10,
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
    width: 192,
    height : 156 ,
    marginVertical: 30,
    marginHorizontal : 5 ,
    right : 15 ,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#148B9C',
    top : 5,

  },
  allcourseCard: {
    width: 192,
    height : 156 ,
    marginVertical: 30,
    marginHorizontal : 5 ,
    right : 15 ,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#148B9C',
    top : -20 ,

  },
imageVeiw:{
  width : 170 ,
  height :120 ,
  backgroundColor: "#E5FCFF",
  padding : 20,
  justifyContent: 'center',
alignContent :'center'
},
  courseImage: {
    width:92,
    height: 92,
    padding: 10,
    backgroundColor: "#E5FCFF",
    alignSelf :'center'
  },
  courseTitle: {
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 14,
    fontFamily: "Outfit",
    marginTop: 20,
    textAlign: 'left',
    width: 170,
   fontStyle :'normal',
  
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
