import { StyleSheet, Text, View, Dimensions, Image, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Announcement() {
  // قائمة الإعلانات التي تريدين عرضها
  const announcements = [
    { id: '1', text: 'إعلان 1: نشاط جديد يبدأ قريباً!' },
    { id: '2', text: 'إعلان 2: يوم مفتوح للطلاب وأولياء الأمور.' },
    { id: '3', text: 'إعلان 3: التقديم على الأنشطة اللاصفية مفتوح الآن!' },
  ];

  return (
    <View style={styles.container}>
      {/* لوجو دائري في الأعلى */}
      <View style={styles.circle}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
      
      {/* قسم الإعلانات */}
      <View style={styles.announcementContainer}>
        <Text style={styles.title}>Announcements</Text>
        <FlatList
          data={announcements}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.announcementItem}>
              <Text style={styles.announcementText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  circle: {
    width: width,
    height: 200,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#E5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  announcementContainer: {
    flex: 1,
    width: width * 0.9,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: -50,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#148B9C',
    textAlign: 'center',
    marginBottom: 20,
  },
  announcementItem: {
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  announcementText: {
    fontSize: 16,
    color: '#3A3535',
  },
});
