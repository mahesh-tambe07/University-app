import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AboutUsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>DBATU Prep 🎓</Text>
        <Text style={styles.description}>
          DBATU Prep is your one-stop destination for all academic needs of DBATU students.
        </Text>

        <Text style={styles.details}>
          Many students waste hours searching for the right academic resources. 
          DBATU Prep solves this by providing organized, reliable, and updated content in one app — fully ad-free and super easy to use!
        </Text>

        <Text style={styles.sectionTitle}>DBATU Prep provides:</Text>
        <Text style={styles.bullet}>- Semester-wise & branch-wise notes</Text>
        <Text style={styles.bullet}>- Previous Year Question Papers (PYQs)</Text>
        <Text style={styles.bullet}>- Updated university syllabus</Text>
        <Text style={styles.bullet}>- Latest exam timetables</Text>
        <Text style={styles.bullet}>- Useful tools like SGPA to CGPA converter</Text>
        <Text style={styles.bullet}>- Important academic notifications</Text>

        <Text style={styles.developedBy}>Developed By :</Text>
        <Text style={styles.developerNames}>Mahesh Tambe</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 6,
    marginTop: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 10,
  },
  details: {
    color: '#aaa',
    fontSize: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  bullet: {
    color: '#ccc',
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 5,
  },
  developedBy: {
    marginTop: 25,
    color: '#8ab4f8',
    fontWeight: 'bold',
    fontSize: 15,
  },
  developerNames: {
    color: '#fff',
    fontSize: 15,
    marginTop: 4,
  },
});
