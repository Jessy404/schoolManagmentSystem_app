import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
const { width, height } = Dimensions.get('window');
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function Courses() {

  const courses = [
    { id: '1', name: 'Arabic', icon: 'book' },         
    { id: '2', name: 'English', icon: 'book-open' },        
    { id: '3', name: 'Math', icon: 'calculator' },     
    { id: '4', name: 'Science', icon: 'flask-vial' },  
    { id: '5', name: 'History', icon: 'landmark' },     
    { id: '6', name: 'Geography', icon: 'globe' },    
    { id: '7', name: 'Physics', icon: 'atom' },       
    { id: '8', name: 'Chemistry', icon: 'flask' },   
    { id: '9', name: 'Art', icon: 'palette' },       
  ];

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Courses</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <View style={styles.iconContainer}>
              <FontAwesome6 name={item.icon} size={40} color="#148B9C" />
            </View>
            <Text style={styles.courseName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: "center",
  },
  circle: {
    width: width,
    height: 430,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: '#E5FCFF',
    position: 'absolute',
    top: -height * 0.2,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#148B9C',
    marginBottom: 20,
    marginTop: 60,
    textAlign: 'center',
  },
  courseCard: {
    width: width * 0.4,
    height: height * 0.25,
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    borderColor: "#0A505B",
    borderWidth: 1,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 5,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
