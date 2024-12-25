import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView,  Dimensions,} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
const { width, height } = Dimensions.get('window');
const PROFILE_DATA = {
    name: "yasmin ibrahim",
    grade: "2nd Primary",
    attendanceDaysLeft: "10 Days Left",
    profileImage: "https://s3-alpha-sig.figma.com/img/a5a2/90ad/33f54f271b2de59273f34e582a00e05e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNqVh7cH3r33CS2E~qWe~nq8dSrLgCkAqgd8twMqRyCz3drSK5LADjzIMamDi4894Ur9~EPoFQHZ49mQF4qoAGLAmV1L9tFWjvs~BiCyF1xY6GQVcg411shw4X~U8o~jCWvA7jJixi6iahJ9Y~OsuHokopgHLLNVOX31RuM~jzr5KhsMXafhqF3G-HpbzEK1ZeeYo3D22~xX9FQAh-6EX2526AenjlPQ-FvMEgAWzzmMS1V0JT8nTHNV3xoTCpjIXFbXri1mND5gpW4DW3Tex3NTKr32lQKHqEcbVF9sPSoMXe~wJooVEPShhq~NMIej6J39p0i9paQvEQI9X~Nv4w__"
};

const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Account</Text>
            </View>

            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image source={{ uri: PROFILE_DATA.profileImage }} style={styles.profileImage} />
                <View style={styles.profileData}>
                    <Text style={styles.profileName}>{PROFILE_DATA.name}</Text>
                    <Text style={styles.profileGrade}>{PROFILE_DATA.grade}</Text>
                </View>
            </View>

            {/* Attendance Section */}
            <View style={styles.attendanceCard}>
                <View style={styles.attendanceHeader}>
                    <Text style={styles.attendanceTitle}>Your Attendance</Text>
                </View>
                <View style={styles.balanceValues}>
                    <Text style={styles.balanceAmount}>{PROFILE_DATA.attendanceDaysLeft}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.attendanceButton }onPress={() => router.push('../Account/Attendance')} >
                        <Text style={styles.buttonText}>View All Attendance</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Options List */}
            <View style={styles.optionsContainer}>
                <OptionItem title="Scores" icon="file-alt"  onPress={() =>router.push('../Account/Scores')} />
                <OptionItem title="Schedule" icon="calendar-alt" onPress={() => router.push('../Account/Schedule')} />
                <OptionItem title="Info" icon="info"  onPress={() => router.push('../Account/info')} />
                <OptionItem title="About Us" icon="building-columns"  onPress={() => router.push('../Account/AboutUs')} />
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton}   onPress={() =>router.push('../Account/login')} >
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

// Reusable Option Item Component
const OptionItem = ({ title, icon, onPress }) => (
    <TouchableOpacity style={styles.optionItem} onPress={onPress}>
        <FontAwesome6 name={icon} size={20} color="#0A505B" />
        <Text style={styles.optionText}>{title}</Text>
        <FontAwesome6 name="chevron-right" size={16} color="#000" style={styles.optionArrow} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0A505B",
    },
    settingsIcon: {
        marginRight: 10,
    },

    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
    },

    profileData: {
        flexDirection: "column",
        marginHorizontal: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#D3D3D3",
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0A505B",
    },
    profileGrade: {
        fontSize: 16,
        color: "#000",
    },

    attendanceCard: {
        backgroundColor: "#148B9C",
        margin: 20,
        padding: 20,
        borderRadius: 30,
        elevation: 7,
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        // bottom : -10 ,
        marginBottom : -5,
        marginTop : 10

    },
    attendanceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
    },
    attendanceTitle: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    balanceValues: {
        marginVertical: 10,
    },
    balanceAmount: {
        fontSize: 30,
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10,
    },

    attendanceButton: {
        backgroundColor: "#FFF",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
    },

    optionsContainer: {
        margin: 20,
    },
    optionItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#E5FCFF",
        borderRadius: 15,
        elevation: 2,
        height: 60,
    },
    optionText: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: "400",
        // color: "#0A505B",
        flex: 1,
    },
    optionArrow: {
        marginLeft: 10,
        color: "#0A505B",
    },

    logoutButton: {
        position: 'relative',
        backgroundColor: "#D32F2F",
        width: width * 0.70,
        height: height * 0.06,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf :"center"
    },
    logoutText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Profile;
