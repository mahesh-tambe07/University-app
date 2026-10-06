// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import * as FileSystem from 'expo-file-system';
// import * as Sharing from 'expo-sharing';
// import * as StorageAccessFramework from 'expo-file-system';

// let isSharing = false;

// export default function PDFListScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { title, viewUrls, downloadUrls } = route.params;

//   const downloadAndShare = async (url) => {
//     if (isSharing) return;
//     isSharing = true;

//     try {
//       const fileName = `mcq_${Date.now()}.pdf`;
//       const downloadPath = FileSystem.cacheDirectory + fileName;

//       const downloadResumable = FileSystem.createDownloadResumable(url, downloadPath);
//       const { uri } = await downloadResumable.downloadAsync();
//       if (!uri) throw new Error('Download failed. URI is null');

//       const permissions = await StorageAccessFramework.StorageAccessFramework.requestDirectoryPermissionsAsync();
//       if (!permissions.granted) {
//         Alert.alert('Permission Denied', 'Storage access is required to save the file');
//         return;
//       }

//       const folderUri = permissions.directoryUri;
//       const destFileUri = await StorageAccessFramework.StorageAccessFramework.createFileAsync(
//         folderUri,
//         fileName,
//         'application/pdf'
//       );

//       const base64Data = await FileSystem.readAsStringAsync(uri, {
//         encoding: FileSystem.EncodingType.Base64,
//       });

//       await FileSystem.writeAsStringAsync(destFileUri, base64Data, {
//         encoding: FileSystem.EncodingType.Base64,
//       });

//       Alert.alert('✅ Success', 'PDF saved to selected folder');

//       if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(uri);
//       } else {
//         Alert.alert('⚠️ Sharing not supported');
//       }
//     } catch (err) {
//       console.error('❌ Error saving or sharing:', err);
//       Alert.alert('❌ Error', err.message || 'Something went wrong');
//     } finally {
//       isSharing = false;
//     }
//   };

//   const renderItem = ({ item, index }) => (
//     <View style={styles.card}>
//       <TouchableOpacity
//         style={styles.viewButton}
//         onPress={() => navigation.navigate('PDFViewer', { url: item })}
//       >
//         <Text style={styles.btnText}>📖 View PDF {index + 1}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.downloadButton}
//         onPress={() => downloadAndShare(downloadUrls[index])}
//       >
//         <Text style={styles.btnText}>⬇️ Download & Share</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* ✅ Back Button */}
//       <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={22} color="#fff" />
//         <Text style={styles.backText}></Text>
//       </TouchableOpacity>

//       <Text style={styles.title}>{title}</Text>

//       <FlatList
//         data={viewUrls}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//     padding: 20,
//   },
//   backBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//     marginBottom: 15,
//     marginTop: 10, // Adjust as needed
//   },
//   backText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: '#1f1f1f',
//     padding: 18,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   viewButton: {
//     backgroundColor: '#4B34D1',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   downloadButton: {
//     backgroundColor: '#16a34a',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 12,
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '600',
//   },
// });

import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import * as StorageAccessFramework from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-root-toast'; // ✅ Toast Import

let isSharing = false;

export default function PDFListScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { title, viewUrls, downloadUrls } = route.params;
  const [toast, setToast] = useState(null);

  const showToast = (message, bgColor = '#16a34a') => {
    if (toast) Toast.hide(toast);
    const newToast = Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      backgroundColor: bgColor,
      textColor: '#fff',
      containerStyle: {
        borderRadius: 8,
        marginTop: 40,
        marginHorizontal: 20,
        paddingHorizontal: 12,
      },
    });
    setToast(newToast);
  };

  const downloadAndShare = async (url) => {
    if (isSharing) return;
    isSharing = true;

    try {
      const fileName = `mcq_${Date.now()}.pdf`;
      const downloadPath = FileSystem.cacheDirectory + fileName;

      const downloadResumable = FileSystem.createDownloadResumable(url, downloadPath);
      const { uri } = await downloadResumable.downloadAsync();
      if (!uri) throw new Error('Download failed. URI is null');

      const permissions = await StorageAccessFramework.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (!permissions.granted) {
        Alert.alert('Permission Denied', 'Storage access is required to save the file');
        return;
      }

      const folderUri = permissions.directoryUri;
      const destFileUri = await StorageAccessFramework.StorageAccessFramework.createFileAsync(
        folderUri,
        fileName,
        'application/pdf'
      );

      const base64Data = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      await FileSystem.writeAsStringAsync(destFileUri, base64Data, {
        encoding: FileSystem.EncodingType.Base64,
      });

      showToast('✅ PDF saved successfully');

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else {
        showToast('⚠️ Sharing not supported', '#f97316');
      }
    } catch (err) {
      console.error('❌ Error saving or sharing:', err);
      showToast('❌ Error: ' + (err.message || 'Something went wrong'), '#dc2626');
    } finally {
      isSharing = false;
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => navigation.navigate('PDFViewer', { url: item })}
      >
        <Text style={styles.btnText}>📖 View PDF {index + 1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.downloadButton}
        onPress={() => downloadAndShare(downloadUrls[index])}
      >
        <Text style={styles.btnText}>⬇️ Download & Share</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
        <Text style={styles.backText}></Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={viewUrls}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
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
    gap: 6,
    marginBottom: 15,
    marginTop: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  viewButton: {
    backgroundColor: '#4B34D1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
