// screens/SubjectScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SubjectScreen({ route }) {
  const { subject } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subject}</Text>

      <Button title="📘 MCQs" onPress={() => {}} />
      <Button title="📝 Notes & Books" onPress={() => {}} />
      <Button title="📄 PYQs" onPress={() => {}} />
      <Button title="✅ PYQ Solutions" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
});
