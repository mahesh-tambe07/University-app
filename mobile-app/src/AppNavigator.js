import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUsScreen from './screens/AboutUsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import HomeScreen from './screens/HomeScreen';
import PDFListScreen from './screens/PDFListScreen';
import PDFViewerScreen from './screens/PDFViewerScreen';
import ProfileScreen from './screens/ProfileScreen';
import SGPAConverterScreen from './screens/SGPAConverterScreen';
import SubjectDetail from './screens/SubjectDetail';
import SubjectScreen from './screens/SubjectScreen';
import UserProfileScreen from './screens/UserProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Subject" component={SubjectScreen} />
        <Stack.Screen name="PDFViewer" component={PDFViewerScreen} />
        <Stack.Screen name="SubjectDetail" component={SubjectDetail} />
        <Stack.Screen name="PDFList" component={PDFListScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SGPAConverter" component={SGPAConverterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
