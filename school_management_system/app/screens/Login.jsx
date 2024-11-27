import { Pressable, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Text, View } from 'react-native';
import { Stack, router } from 'expo-router';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font'; 
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [fontLoaded, setFontLoaded] = useState(false); 

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Outfit': require('../assets/fonts/Outfit-Regular.ttf'), 
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  const handelSignin = () => {
    router.replace('../(tabs)/home');
  };

  
  const handellock = () => {
    setShowPassword(!showPassword); 
  };
  if (!fontLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (

    <View style={styles.container2} >
      <View style={styles.container}>

        <View style={styles.circle} />
        <Text style={styles.title1} >
          School Team
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={-100}
      >
        <View style={styles.container1}>
          <Text style={styles.title}> Login </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Email "
              placeholderTextColor="#3A3535"
              value={email}
              onChangeText={setEmail}
            />
            <EvilIcons name="user" color={"black"} size={30} style={styles.icon1} />
            <TextInput
              style={styles.input}
              placeholder=" Password "
              placeholderTextColor="#3A3535"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword} 
            />
            <Pressable onPress={handellock}>
              <EvilIcons
                name={showPassword ? "unlock" : "lock"} 
                color={"black"}
                size={30}
                style={styles.icon2}
              />
            </Pressable>
          </View>
          <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={handelSignin}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#3A3535",
    fontWeight: "bold",
    alignContent: "center",
  },
  icon1: {
    position: 'absolute',
    left: 30, 
    marginTop: height * 0.028,
    
  },
  icon2: {
    position: 'absolute',
    marginTop : -50 ,
  marginLeft : -10 ,
  },
  container2: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    marginTop: -120,
    backgroundColor: '#FFFFFF',
    height: height * 0.4,
    width: width * 0.8,
    left: 40,
    gap: 20,
    // shadowColor: "#00000040",
    borderRadius: 30,
    // shadowOpacity: '#00000040',
    elevation: 20,
  },
  inputView: {
    gap: 20,
    width: width * 0.8,
    // height : height*0.05,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    marginBottom: 5

  },
  input: {
    height: height * 0.06,
    width: width * 0.7,
    paddingHorizontal: 40,
    borderColor: "#0A505B",
    borderWidth: 2,
    borderRadius: 20,
    // padding: 15,
    fontfamily: 'Roboto',
    fontstyle: "normal",
    fontweight: 400,
    fontsize: 16,
    lineheight: 10,
    top: height * 0.015,
    left: -20,
    flexdirection: 'row',
  },
  title: {
    position: 'absolute',
    fontSize: moderateScale(30),
    color: "#148B9C",
    width: width * 0.3,
    height: height * 0.4,
    alignItems: 'center',
    fontFamily: "Outfit",
    lineHeight: 50,
    fontStyle: 'normal',
    fontWeight: 'bold',
    top: 3,
  },
  title1: {
    position: 'absolute',
    fontSize: moderateScale(48),
    width: width,
    height: 60,
    left: 38,
    alignContent: 'center',
    top: 50,
    alignItems: 'center',
    fontFamily: "Outfit",
    lineHeight: 60,
    fontStyle: 'normal',
    fontWeight: '400',
    color: "#000000",
  },


  button: {
    position: 'relative',
    backgroundColor: "#148B9C",
    width: width * 0.70,
    height: height * 0.06,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    backgroundColor: '#FFFFFF',
  },
  circle: {
    width: width,
    height: 430,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: '#E5FCFF',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
