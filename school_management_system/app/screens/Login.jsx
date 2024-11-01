import { Pressable, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Text, View } from 'react-native';
import { Stack, router } from 'expo-router';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font'; // احرص على استيرادها هنا
import Feather from 'react-native-vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false); // إضافة حالة تحميل الخط

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Outfit': require('../assets/fonts/Outfit-Regular.ttf'), // تأكد من المسار الصحيح
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  const handelSignin = () => {
    router.replace('../(tabs)/courses');
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
          <Feather name="user" color={"black"} size={24} style={styles.icon1} />
          <TextInput
            style={styles.input}
            placeholder=" Password "
            placeholderTextColor="#3A3535"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Feather name="lock" color={"black"} size={24} style={styles.icon2} />
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handelSignin}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
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
    left: 53,
    top: 12,

  },
  icon2: {
    position: 'absolute',
    left: 53,
    top: 88,

  },
  container2: {
    // alignItems: "center",
    // justifyContent: "center",
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
    paddingTop: 70,
    backgroundColor: '#FFFFFF',
    height: 350,
    width: width * 0.8,
    left: 40,
    top: 291,
    position: 'absolute',
    gap: 20,
    shadowColor: "#00000040",
    borderRadius: 30,
    shadowOpacity: '#00000040',
    elevation: 20,
  },
  inputView: {
    gap: 20,
    width: width * 0.85,
    // height : height*0.05,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    marginBottom: 5

  },
  input: {
    height: 55,
    // width : 250 ,
    paddingHorizontal: 40,
    borderColor: "#0A505B",
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    fontfamily: 'Roboto',
    fontstyle: "normal",
    fontweight: 400,
    fontsize: 16,
    lineheight: 10,
    flexdirection : 'row',
  },
  title: {
    position: 'absolute',
    fontSize: moderateScale(35),
    color: "#148B9C",
    width: width * 0.3,
    height: height * 0.4,
    alignItems: 'center',
    fontFamily: "Outfit",
    lineHeight: 50,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  title1: {
    position: 'absolute',
    fontSize: moderateScale(48),
    width: 360,
    height: 60,
    left: 38,
    alignContent :'center',
    top: 90,
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
    marginBottom: 15,
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
    width: 430,
    height: 430,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 280,
    backgroundColor: '#E5FCFF',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
