import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HamburgerMenu from '../../components/HamburgerMenu'; 
import { router } from "expo-router";

const App = () => {
  // const handleFilterSelect = (type) => {
  //   setSelectedFilter(type);
  //   console.log(`Selected filter: ${type}`); // هنا يمكنك تصفية الكورسات فعليًا
  // };
   const  screenType  = router.params;
  // جميع الكورسات
  const allCourses = [
    { id: "1", title: "Arabic Language [2nd Secondary ]", teacher: "Teacher Name", image: "https://www.shareicon.net/data/128x128/2015/09/02/94618_arabic_512x512.png", rating: 4 },
    { id: "2", title: "Mathematics[2nd Primary]", teacher: "Teacher Name", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Deus_mathematics.png", rating: 3 },
    { id: "3", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 5 },
   { id: "4", title: "Chemistry  [2nd Secondary]", teacher: "Teacher Name", image: "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png", rating: 4 },
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
  
  ];
  const myCourses = [
    { id: "1", title: "Arabic Language [2nd Secondary ]", teacher: "Mrs/Yasmeen", image: "https://www.shareicon.net/data/128x128/2015/09/02/94618_arabic_512x512.png", rating: 4 },
    { id: "2", title: "Mathematics[2nd Secondary]", teacher: "Mrs/Mariam", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Deus_mathematics.png", rating: 3 },
    { id: "3", title: "English Language [2nd Secondary]", teacher: "Mrs/rania", image: "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png", rating: 5 },
    { id: "18", title: "physics [2nd Secondary ]", teacher: "Mr/Mohamed", image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png", rating: 4 },
    { id: "6", title: "History [2nd Secondary]", teacher: "Mr/said", image: "https://cdn-icons-png.flaticon.com/512/2234/2234697.png", rating: 5 },
   
    ];

  const [currentTab, setCurrentTab] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [isSearchVisible, setSearchVisible] = useState(false);

  const filteredCourses = () => {
    const courses = currentTab === "all" ? allCourses : myCourses;
    return courses.filter((course) =>
      course.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const renderCourses = () => {
    const courses = filteredCourses();
    return (
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <View style={styles.imageView}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseTeacher}>{item.teacher}</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <FontAwesome
                    key={index}
                    name={index < item.rating ? "star" : "star-o"}
                    size={12}
                    color="#FFCB5B"
                  />
                ))}
              </View>
            </View>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>My Courses</Text>
        <TouchableOpacity onPress={() => setSearchVisible(!isSearchVisible)}>
          <Ionicons name="search" size={24} color="#0A505B" />
        </TouchableOpacity>
      </View>
      {isSearchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholder="Search courses..."
            placeholderTextColor="#888"
          />
        </View>
      )}
     <View>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, currentTab === "my" && styles.activeTab]}
          onPress={() => setCurrentTab("my")}
        >
          <Text
            style={[styles.tabText, currentTab === "my" && styles.activeTabText]}
          >
            My Courses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, currentTab === "all" && styles.activeTab]}
          onPress={() => setCurrentTab("all")}
        >
          <Text
            style={[styles.tabText, currentTab === "all" && styles.activeTabText]}
          >
            All Courses
          </Text>
          
        </TouchableOpacity>
        {currentTab === 'all' && <HamburgerMenu />}
      </View>
      {renderCourses()}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    height: 22,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A505B",
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "#148B9C",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#333",
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 35,
    top: 20,
    width: 276,
    height: 31,
    alignItems: "center",
    alignSelf: "center",
  },
  tabButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#148B9C",
    borderRadius: 20,
    marginHorizontal: 10,
    height: 31,
    width: 123,
    top: -10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#148B9C",
  },
  tabText: {
    color: "#148B9C",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff",
  },
  courseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  courseImage: {
    width: 50,
    height: 50,
  },
  imageView: {
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 16,
    backgroundColor: '#E5FCFF',
    alignContent: 'center',
    alignItems: "center",
    borderRadius: 20,
  },
  courseTitle: {
    fontSize: 14,
    fontFamily: "Outfit",
    fontWeight: "700",
    lineHeight: 18,
    width: 216,
  },
  courseTeacher: {
    fontSize: 11,
    height: 14,
    fontWeight: "400",
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 4,
    gap: 5,
    height: 12,
    width: 80,
  },
  
});

export default App;
