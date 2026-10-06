// UserProfileScreen.js
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing';
import { useEffect, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function UserProfileScreen() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('userProfile').then(data => {
      if (data) setUser(JSON.parse(data));
    });
  }, []);

  const handleEdit = () => navigation.navigate('EditProfile');
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userProfile');
    navigation.replace('Profile');
  };
  const handleShareApp = async () => {
    try {
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(null, {
          dialogTitle: 'Share DBATU Prep App',
          message: 'Download the DBATU Prep App—syllabus, results, and more!',
        });
      } else Alert.alert('Sharing not available');
    } catch (err) { Alert.alert('Error', err.message); }
  };

  const openLink = async (url) => {
    try { await Linking.openURL(url); }
    catch { Alert.alert('Cannot open URL'); }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {user && (
          <View style={styles.profileCard}>
            <Text style={styles.name}>{user.name || 'Student'}</Text>
            <Text style={styles.subtitle}>
              BE – {(user.branch || 'N/A').toUpperCase()} | SEM {user.semester || 'N/A'}
            </Text>
            <TouchableOpacity style={styles.editBtn} onPress={handleEdit}>
              <Text style={styles.editText}>✏️ Edit Profile</Text>
            </TouchableOpacity>
          </View>
        )}

        <Option icon={<Ionicons name="book" size={24} color="#fff" />} label="Syllabus" onPress={() => openLink('https://example.com/syllabus.pdf')} />
        <Option icon={<Ionicons name="school" size={24} color="#fff" />} label="Results" onPress={() => openLink('https://example.com/results.pdf')} />
        <Option icon={<Ionicons name="calendar" size={24} color="#fff" />} label="Exam Timetable" onPress={() => openLink('https://example.com/timetable.pdf')} />
        {/* <Option icon={<Feather name="sliders" size={24} color="#fff" />} label="SGPA Converter" onPress={() => openLink('https://example.com/sgpa')} /> */}
        <Option icon={<Feather name="sliders" size={24} color="#fff" />} label="SGPA Converter" onPress={() => navigation.navigate('SGPAConverter')} />


        <View style={styles.switchRow}>
          <View style={styles.leftRow}>
            <Ionicons name="moon" size={24} color="#fff" />
            <Text style={styles.optionText}>Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <Option icon={<Ionicons name="globe" size={24} color="#fff" />} label="Website" onPress={() => openLink('https://mahesh-tambe.netlify.app/')} />
        {/* <Option icon={<Ionicons name="information-circle" size={24} color="#fff" />} label="About Us" onPress={() => openLink('https://example.com/about')} /> */}
        <Option icon={<Ionicons name="information-circle" size={24} color="#fff" />} label="About Us" onPress={() => navigation.navigate('AboutUs')} />
        <Option icon={<MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />} label="Support Us" onPress={() => openLink('https://example.com/support')} />
        <Option icon={<Feather name="share-2" size={24} color="#fff" />} label="Share App" onPress={handleShareApp} />

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>🚪 Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Option({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
      <View style={styles.leftRow}>
        {icon}
        <Text style={styles.optionText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color="#aaa" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#121212' },
  container: { padding: 20, paddingBottom: 40 },
  backBtn: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backText: { color: '#fff', fontSize: 16 },
  profileCard: { backgroundColor: '#1f1f1f', padding: 20, borderRadius: 12, marginBottom: 20, alignItems: 'center' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 16, color: '#ccc', marginTop: 6 },
  editBtn: { marginTop: 12, backgroundColor: '#4B34D1', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20 },
  editText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1f1f1f', padding: 15, borderRadius: 10, marginBottom: 12 },
  leftRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  optionText: { color: '#fff', fontSize: 16, fontWeight: '500' },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1f1f1f', padding: 15, borderRadius: 10, marginBottom: 12 },
  logoutBtn: { marginTop: 30, backgroundColor: '#ff4d4f', padding: 14, borderRadius: 10, alignItems: 'center' },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
