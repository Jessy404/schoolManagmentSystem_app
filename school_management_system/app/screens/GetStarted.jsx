// Import necessary libraries
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
const { width, height } = Dimensions.get('window');

export default function GetStarted () {
//   const navigation = useNavigation();
  const handelbotton = () => {
    router.push("/Account/login");
  };

//   useEffect(() => {
//     // Set a timeout to navigate to Home/Login screen after 3 seconds
//     const timer = setTimeout(() => {
//       router.replace('./');
//     }, 3000);

//     return () => clearTimeout(timer); // Cleanup timer on unmount
//   }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        // resizeMode="cover"
      />
      <Pressable style={styles.button} onPress={handelbotton}>
        <Text style={styles.buttonText}>Lets go</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    position: 'absolute', 
    top: '90%', 
    left: '70%', 
    transform: [{ translateX: -width * 0.40 }, { translateY: -height * 0.04 }], 
    width: width * 0.40,
    height: height * 0.08,
    backgroundColor: "#2ac3f0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


