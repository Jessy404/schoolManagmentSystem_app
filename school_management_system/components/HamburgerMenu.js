import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HamburgerMenu = ({ onFilterSelect }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const courseTypes = ['Kindergarten', 'Primary', 'Preparatory', 'Secondary']; 

  const handleFilterSelect = (type) => {
    setMenuVisible(false);
    onFilterSelect(type); 
  };

  return (
    <View>
      {/* أيقونة الهمبرجر */}
      <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.iconContainer}>
        <Ionicons name="menu" size={24} color="#0A505B" />
      </TouchableOpacity>

   
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setMenuVisible(false)} 
        />
        <View style={styles.menu}>
          <FlatList
            data={courseTypes}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[styles.menuItem, index === courseTypes.length - 1 && styles.lastMenuItem]} // تطبيق التنسيق الخاص بالعناصر الأخيرة
                onPress={() => handleFilterSelect(item)}
              >
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 10,
    left: 10,
    top: 10,
    bottom: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  menu: {
    position: 'absolute',
    right: 5,
    marginRight: 10,
    top: 50,
    backgroundColor: '#E5FCFF',
    borderRadius: 20,
    padding: 15,
    borderColor: "#148B9C",
    // borderWidth: 1,
    elevation: 2,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#148B9C', 
  },
  lastMenuItem: {
    borderBottomWidth: 0, 
  },
  menuText: {
    fontSize: 16,
    color: '#0A505B',
    fontWeight: "bold",
  },
});

export default HamburgerMenu;
