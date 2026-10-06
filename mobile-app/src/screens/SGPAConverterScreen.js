import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SGPAConverterScreen() {
  const [sgpa, setSgpa] = useState(Array(8).fill(''));
  const [cgpa, setCgpa] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const navigation = useNavigation();

  const handleConvert = () => {
    const sgpaNumbers = sgpa.map(s => parseFloat(s)).filter(num => !isNaN(num));
    if (sgpaNumbers.length === 0) {
      Alert.alert('Error', 'Please enter valid SGPA values.');
      return;
    }

    const total = sgpaNumbers.reduce((a, b) => a + b, 0);
    const cgpaCalc = total / sgpaNumbers.length;
    const percentageCalc = (cgpaCalc - 0.75) * 10;

    setCgpa(cgpaCalc.toFixed(2));
    setPercentage(percentageCalc.toFixed(2));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* ✅ Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>SGPA to CGPA & Percentage</Text>

      {sgpa.map((val, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Semester ${index + 1} SGPA`}
          placeholderTextColor="#ccc"
          keyboardType="decimal-pad"
          value={val}
          onChangeText={(text) => {
            const newSgpa = [...sgpa];
            newSgpa[index] = text;
            setSgpa(newSgpa);
          }}
        />
      ))}

      <TouchableOpacity style={styles.convertBtn} onPress={handleConvert}>
        <Text style={styles.convertText}>Convert</Text>
      </TouchableOpacity>

      {cgpa && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>CGPA: {cgpa}</Text>
          <Text style={styles.resultText}>Percentage: {percentage}%</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 15,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  convertBtn: {
    backgroundColor: '#4B34D1',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  convertText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    color: '#f5c518',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
});
