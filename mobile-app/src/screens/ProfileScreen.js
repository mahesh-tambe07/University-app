// // screens/ProfileScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// export default function ProfileScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [college, setCollege] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [branch, setBranch] = useState('');
//   const [year, setYear] = useState('');
//   const [semester, setSemester] = useState('');

// const handleSave = async () => {
//   if (!name || !college || !mobile || !branch || !year || !semester) {
//     Alert.alert('Please fill all fields');
//     return;
//   }

//   if (!/^\d{10}$/.test(mobile)) {
//     Alert.alert('Mobile number must be exactly 10 digits');
//     return;
//   }

//   const profile = { name, college, mobile, branch, year, semester };

//   try {
//     // ✅ Save to AsyncStorage
//     await AsyncStorage.setItem('userProfile', JSON.stringify(profile));

//     // ✅ Navigate to Home
//     navigation.replace('Home');
//   } catch (error) {
//     Alert.alert('Error saving profile', error.message);
//   }
// };


// const getSemestersForYear = () => {
//     switch (year) {
//       case '1': return ['1', '2'];
//       case '2': return ['3', '4'];
//       case '3': return ['5', '6'];
//       case '4': return ['7', '8'];
//       default: return [];
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>👤 Create Profile</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Full Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="College Name"
//         value={college}
//         onChangeText={setCollege}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobile}
//         onChangeText={setMobile}
//         keyboardType="phone-pad"
//         maxLength={10}
//       />

//       {/* Branch Picker */}
//       <View style={styles.pickerWrapper}>
//         <Picker
//           selectedValue={branch}
//           onValueChange={setBranch}
//         >
//           <Picker.Item label="Select Branch" value="" />
//           <Picker.Item label="Computer Science" value="CSE" />
//           <Picker.Item label=" AI & ML " value="AI" />
//           <Picker.Item label="Mechanical Engineering" value="ME" />
//           <Picker.Item label="Civil Engineering" value="CE" />
//           <Picker.Item label="Electrical Engineering" value="EE" />
//           <Picker.Item label="Electronics and Telecommunication" value="ETC" />
//         </Picker>
//       </View>

//       {/* Year Picker */}
//       <View style={styles.pickerWrapper}>
//         <Picker
//           selectedValue={year}
//           onValueChange={(value) => {
//             setYear(value);
//             setSemester(''); // reset semester when year changes
//           }}
//         >
//           <Picker.Item label="Select Year" value="" />
//           <Picker.Item label="1st Year" value="1" />
//           <Picker.Item label="2nd Year" value="2" />
//           <Picker.Item label="3rd Year" value="3" />
//           <Picker.Item label="4th Year" value="4" />
//         </Picker>
//       </View>

//       {/* Semester Picker (based on year) */}
//       {year !== '' && (
//         <View style={styles.pickerWrapper}>
//           <Picker
//             selectedValue={semester}
//             onValueChange={setSemester}
//           >
//             <Picker.Item label="Select Semester" value="" />
//             {getSemestersForYear().map((sem) => (
//               <Picker.Item key={sem} label={`Semester ${sem}`} value={sem} />
//             ))}
//           </Picker>
//         </View>
//       )}

//       <Button title="Save Profile" onPress={handleSave} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
//   input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 },
//   pickerWrapper: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 15,
//     overflow: 'hidden',
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [mobile, setMobile] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const handleSave = async () => {
    if (!name || !college || !mobile || !branch || !year || !semester) {
      Alert.alert('Please fill all fields');
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      Alert.alert('Mobile number must be exactly 10 digits');
      return;
    }

    const profile = { name, college, mobile, branch, year, semester };

    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Error saving profile', error.message);
    }
  };

  const getSemestersForYear = () => {
    switch (year) {
      case '1': return ['1', '2'];
      case '2': return ['3', '4'];
      case '3': return ['5', '6'];
      case '4': return ['7', '8'];
      default: return [];
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>College</Text>
      <TextInput
        style={styles.input}
        placeholder="College Name"
        placeholderTextColor="#888"
        value={college}
        onChangeText={setCollege}
      />

      <Text style={styles.label}>Mobile</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#888"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Text style={styles.label}>Branch</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={branch}
          onValueChange={setBranch}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Select Branch" value="" />
          <Picker.Item label="Computer Science" value="CSE" />
          <Picker.Item label="AI & ML" value="AI" />
          <Picker.Item label="Mechanical Engineering" value="ME" />
          <Picker.Item label="Civil Engineering" value="CE" />
          <Picker.Item label="Electrical Engineering" value="EE" />
          <Picker.Item label="Electronics and Telecommunication" value="ETC" />
        </Picker>
      </View>

      <Text style={styles.label}>Year</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={year}
          onValueChange={(value) => {
            setYear(value);
            setSemester('');
          }}
          style={styles.picker}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Select Year" value="" />
          <Picker.Item label="1st Year" value="1" />
          <Picker.Item label="2nd Year" value="2" />
          <Picker.Item label="3rd Year" value="3" />
          <Picker.Item label="4th Year" value="4" />
        </Picker>
      </View>

      {year !== '' && (
        <>
          <Text style={styles.label}>Semester</Text>
          <View style={styles.semesterButtons}>
            {getSemestersForYear().map((sem) => (
              <TouchableOpacity
                key={sem}
                style={[
                  styles.semesterButton,
                  semester === sem && styles.semesterButtonSelected,
                ]}
                onPress={() => setSemester(sem)}
              >
                <Text style={styles.semesterButtonText}>Sem {sem}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    color: '#ccc',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  pickerWrapper: {
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  picker: {
    color: '#fff',
    height: 50,
  },
  semesterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  semesterButton: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    padding: 12,
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  semesterButtonSelected: {
    backgroundColor: '#4B34D1',
  },
  semesterButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#4B34D1',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
