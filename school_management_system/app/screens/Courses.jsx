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
import FontAwesome from "react-native-vector-icons/FontAwesome";

const App = () => {
  // جميع الكورسات
  const allCourses = [
    { id: "1", title: "Introduction to C++ [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 4 },
    { id: "2", title: "Mathematics Basics [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 3 },
    { id: "3", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 5 },
    { id: "4", title: "Introduction to Python [3rd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 2 },
    { id: "5", title: "Science for Kids [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 4 },
    { id: "6", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 5 },
    { id: "7", title: "Introduction to Python [3rd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 3 },
  // ];
    { id: "8", title: "Science for Kids [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 4 },
    { id: "9", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 5 },
    { id: "10", title: "Introduction to Python [3rd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 2 },
    { id: "11", title: "Science for Kids [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 4 },
  ];

  // الكورسات الخاصة بي
  const myCourses = [
    { id: "1", title: "Introduction to C [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 4 },
    { id: "3", title: "English Language [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 5 },
    { id: "5", title: "Science for Kids [2nd Primary]", teacher: "Teacher Name", image: "https://s3-alpha-sig.figma.com/img/4e19/2fb7/d2883bc94d7779c24d4c27b60d015331?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKKZr6iFTUZcIdBcI0oLWS6gyLQdia3Q4WIBBaQcGShB~klHA2z97xlrsLD93wuRGErKFpE2Mfz75rEXUfPT7EpYXFYClWBUN3MOVimMpxQdMnwNZuWJl7qcroR73hR37pPAPtVcY01LjzYyg6FLRo3e6yDXGTcOGI9cAPmr~Mpcv9ZxrGY7xucW3sf8VGLfmQtwqRhtA8Kulkz-e1qSg-7o0zIUwAuYTgj4uhFvWose8NVubWc9vHOZWiSddynxiDy4lrYjlJKeSmJNRqRBXM2GJ20XaY2fOWplB7cPupnoOeVmB6Nx3gIijplKy6aV8vQydYs0j0K3s4jkqwioSw__", rating: 4 },
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
       showsVerticalScrollIndicator ={false}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <View style = {styles.imageView}>
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
        {/* أيقونة البحث */}
        <TouchableOpacity onPress={() => setSearchVisible(!isSearchVisible)}>
          <Ionicons name="search" size={24} color="#0A505B" />
        </TouchableOpacity>
      </View>
      {/* مربع البحث */}
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
      {/* التبويبات */}
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
    marginBottom: 20,
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
    width : 33 ,
    height : 37 ,
  },
  imageView :{
justifyContent : 'center',
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 16,
    backgroundColor: '#E5FCFF',
    alignContent : 'center',
    alignItems:"center",
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
    gap : 5,
    height: 12,
    width: 80,
  },
});

export default App;
