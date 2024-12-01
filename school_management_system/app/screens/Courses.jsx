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
import { Ionicons } from "@expo/vector-icons"; // مكتبة الأيقونات

const App = () => {
  // جميع الكورسات
  const allCourses = [
    { id: "1", title: "Introduction to C++ [2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "2", title: "Mathematics Basics [2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "3", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "4", title: "Introduction to Python [3rd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "5", title: "Science for Kids [2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "6", title: "Advanced C++ [3rd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "7", title: "Physics Basics [4th Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "8", title: "Creative Writing [3rd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "9", title: "Introduction to Robotics [5th Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "10", title: "Art and Crafts [2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
  ];

  // الكورسات الخاصة بي
  const myCourses = [
    { id: "1", title: "Introduction to C[2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "3", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
    { id: "5", title: "Science for Kids [2nd Primary]", teacher: "Teacher Name", image: "https://via.placeholder.com/50" },
  ];

  const [currentTab, setCurrentTab] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [isSearchVisible, setSearchVisible] = useState(false);

  // فلترة الكورسات بناءً على البحث
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
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <View>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseTeacher}>{item.teacher}</Text>
            </View>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* العنوان */}
      <View style={styles.header}>
        <Text style={styles.title}>My Courses</Text>
        {/* أيقونة البحث */}
        {isSearchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search courses..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      )}
        <TouchableOpacity onPress={() => setSearchVisible(!isSearchVisible)}>
          <Ionicons name="search" size={20} color="#0A505B" />
        </TouchableOpacity>
      

      {/* مربع البحث (يظهر فقط عند الضغط على الأيقونة) */}
  
</View>
      {/* التبويبات */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            currentTab === "my" && styles.activeTab,
          ]}
          onPress={() => setCurrentTab("my")}
        >
          <Text
            style={[
              styles.tabText,
              currentTab === "my" && styles.activeTabText,
            ]}
          >
            My Courses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            currentTab === "all" && styles.activeTab,
          ]}
          onPress={() => setCurrentTab("all")}
        >
          <Text
            style={[
              styles.tabText,
              currentTab === "all" && styles.activeTabText,
            ]}
          >
            All Courses
          </Text>
        </TouchableOpacity>
      </View>

      {/* قائمة الكورسات */}
      {renderCourses()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    // paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 30,
    marginHorizontal : 10 ,
    marginTop : 18 ,
   
  },
  title: {
    fontSize: 16,
    left: 4,
    lineHeight : 20 ,
    fontWeight: "bold",
    color: "#0A505B",
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 25,
    // marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: "#148B9C",
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 20,
    width : 276 ,
    height : 31 ,
    alignItems : "center",
    alignSelf : "center"
  },
  tabButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#148B9C",
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#148B9C",
  },
  tabText: {
    color: "#148B9C",
    height: 18 ,
fontFamily : "Outfit",
fontWeight : "700",
    fontSize : 14 ,
  },
  activeTabText: {
    color: "#fff",
  },
  courseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  courseImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
    padding : 10 ,
    marginRight: 15,
  },
  courseTitle: {
    fontSize: 14,
    lineHeight : 18 ,
    width : 216 ,
    fontWeight: "bold",
  
  },
  courseTeacher: {
    fontSize: 14,
    color: "#666",
  },
});

export default App;

