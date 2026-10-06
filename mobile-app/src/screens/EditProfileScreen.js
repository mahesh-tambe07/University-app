import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';

export default function EditProfileScreen() {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    name: '',
    branch: '',
    semester: '',
    year: '',
    college: '',
    mobile: ''
  });

  const branches = ['CSE', 'AI', 'ME', 'CE', 'EE', 'ETC'];
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  useFocusEffect(
    useCallback(() => {
      const loadProfile = async () => {
        const storedProfile = await AsyncStorage.getItem('userProfile');
        if (storedProfile) {
          setProfile(JSON.parse(storedProfile));
        }
      };
      loadProfile();
    }, [])
  );

  const showToast = (type, text1, text2) => {
    Toast.show({
      type,
      text1,
      text2,
      position: 'top',
      visibilityTime: 2500,
      topOffset: 50,
    });
  };

  const handleSave = async () => {
    const { name, branch, semester, year, college, mobile } = profile;
    if (!name || !branch || !semester || !year || !college || !mobile) {
      showToast('error', 'Incomplete Data', 'Please fill all fields');
      return;
    }

    await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
    showToast('success', 'Profile Updated', 'Your changes were saved.');

    setTimeout(() => {
      navigation.goBack();
    }, 1500);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Edit Your Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="College Name"
        placeholderTextColor="#aaa"
        value={profile.college}
        onChangeText={(text) => setProfile({ ...profile, college: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={profile.mobile}
        onChangeText={(text) => setProfile({ ...profile, mobile: text })}
      />

      <Text style={styles.label}>Branch</Text>
      <View style={styles.dropdownContainer}>
        {branches.map((b) => (
          <TouchableOpacity
            key={b}
            style={[styles.option, profile.branch === b && styles.selectedOption]}
            onPress={() => setProfile({ ...profile, branch: b })}
          >
            <Text style={styles.optionText}>{b}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Semester</Text>
      <View style={styles.dropdownContainer}>
        {semesters.map((s) => (
          <TouchableOpacity
            key={s}
            style={[styles.option, profile.semester === s && styles.selectedOption]}
            onPress={() =>
              setProfile({
                ...profile,
                semester: s,
                year: Math.ceil(Number(s) / 2).toString()
              })
            }
          >
            <Text style={styles.optionText}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 15
  },
  label: {
    color: '#aaa',
    marginVertical: 5,
    fontSize: 16
  },
  dropdownContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
    gap: 10
  },
  option: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  selectedOption: {
    backgroundColor: '#4B34D1'
  },
  optionText: {
    color: '#fff',
    fontSize: 14
  },
  button: {
    backgroundColor: '#4B34D1',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
