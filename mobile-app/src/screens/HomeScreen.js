// HomeScreen.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// ✅ Subject to Image Mapping (make sure these files exist)
const subjectImages = {
  // 'Engineering Math I': require('../../assets/subject-icons/m1.png'),
  default: require('../../assets/subject-icons/default.png')
};


const subjectMap = {
  CSE: {
    1: ['Engineering Math I', 'Engineering Physics','Engineering Graphics', 'Energy & Environment Eng','Engineering Mechanics','C language','Engineering Math II','Engineering Chemistry','Communication Skills'],
    2: ['Engineering Mathematics III', 'Discrete Mathematics', 'Data Structures', 'Computer Architecture & Organization','OOP C++','OOP Java','Design & Analysis of Algor','Operating Systems', 'Basics Human Rights','Probability & Statistics','DLD & Microprocessor'],
    3: ['Database Systems', 'Theory of Computations', 'Software Engineering', 'Human Computer Interaction',  'Numerical Methods', 'Economics & Management', 'Business Communication', 'Compiler Design', 'Computer Networks', 'Machine Learning', 'Geographic Information Sys', 'Internet of Things', 'Embedded Systems', 'Development Engineering', 'Employability & Skill Develo', 'Consumer Behavior'],
    4: ['Artificial Intelligence', 'Cloud Computing', 'Bioinformatics Distributed Sys', 'Big Data Analytics', 'Cryptography & Network Security' ,'Business Intelligence', 'Blockchain Technology', 'Virtual Reality', 'Deep Learning', 'Design Thinking']
  },
  AI: {
    1: ['Engineering Math I', 'Engineering Physics','Engineering Graphics', 'Energy & Environment Eng','Engineering Mechanics','C language','Engineering Math II','Engineering Chemistry','Communication Skills'],
    2: ['Engineering Mathematics III', 'Discrete Mathematics', 'Data Structures', 'Computer Archit & Organ','OOP C++', ' OOP Java' ,'Design & Analysis of Algor','Operating Systems','Basics Human Rights','Probability & Statistics','DLD & Microprocessor'],
    3: ['CN & CC','Machine Learning','Economics & Management','Business Communication','Knowledge Reasoning & AI Ethics','Advanced Database System','Soft Computing','Sensors & Robotics Techn','Advanced Java','Data Mining & Warehousing','Digital Communi & Info Theory','Software Engin & Testing','Virtual Reality','Deep Learning','Advanced Machine Learning','Geographical Information Sys','Recommender Sys','Industry 4.0 & Automation','Web Development','Big Data Analytics','Cryptography & Network Security','Agile Methodology','Augmented Reality','Development Eng','Employability & Skills Develo','Consumer Behavior'],
    4: ['Natural Language Processing ','Advanced Computer Vision','Data Engineering','Time Series Forecasting','IOT & Data Analytics','Distributed Systems','Full Stack Development','Design Thinking','Block chain Technology', 'Bioinformatics','Mobile Application Development']
  },
  ME: {
    1: ['Engineering Math I', 'Engineering Physics','Engineering Graphics', 'Energy & Environment Eng','Engineering Mechanics','C language','Engineering Math II','Engineering Chemistry','Communication Skills'],
    2: ['Engineering Mathematics III','Machine Draw & Comput-aided Draft','Thermodynamics','Fluid Mechanics','Materials Science & Metallurgy','Basic Human Rights','Physics of Eng Materials','Applied Chemistry','Interpersonal Skills','Theory of Machines & MechanismsI','Strength of Materials','Manufacturing ProcessesI','Applied Thermodynamics','Numerical Methods in Eng','Biology for Engineers','Renewable Energy Sources'],
    3: ['Machine DesignI','Manufact ProcesseII','Theory of Machines & MechanismsII','Heat Transfer','Metrology & Quality Control','Sheet Metal Process & Products','Sustainable Development','Non-Conventional Machining','Mechanical Measurements','Manufacturing ProcessesIII','IC Engines & Refriger & Air-conditi','Machine DesignII','Fluid Machinery','Design of Experiments','Wind Energy','Engineering Economics','Entrepren Development','Quantit Techni in Proj Manage','Development Eng','Manufact Automation','Steam & Gas Turbines','Industrial Product Design','Intellectual Property Rights','Additive Manufactu Proces'],
    4: ['Mechatronics','Industrial Eng & Management','CAD/CAM','Power Plant Techn','Finite Element Analysis','Mechanical Vibrations','Surface Eng','Human Resource Management','Design of Heat Exchangers']
  },
  
  CE: {
    1: ['Engineering Math I', 'Engineering Physics','Engineering Graphics', 'Energy & Environment Eng','Engineering Mechanics','C language','Engineering Math II','Engineering Chemistry','Communication Skills'],
    2: ['Engineering Mathematics III','Mechanics of Solids','Building Constr & Draw','Hydraulics-I','Surveying','Building Plan & Draw','Environmental Engin','Structural MechanicsI','Water Resources Eng','HydraulicsII','Eng Geology'],
    3: ['Design of Steel Struct','Geotechnical Eng','Struct MechanicsII','Concrete Techn','Project Management','Advanced Environmental Engg','Applied Geology','Hydraulic Eng Design','Advanced Water Resources','Geomatics','Town & Urban Plan','Material Testing & Eval','Constr Economics & Finance','Design of RC Struct','Foundation Eng','Transportation Eng','Industrial Waste Treatment','Managerial Techniques','Open Channel Flow','Water Power Eng','Ground Improve Techniq','Structural Audit','Intelligent Transportation Sys','Plastic Analysis of Struct','Numerical Methods in Civil Engg','Eng Management','Environmental Impact Assessment','Basic Human Rights','Business Communi & Presenta Skills','Composite Materials','Experimental Stress Analysis','Operation Research','Application of Remote Sensing and Geog Info Syst','Civionics: Instrumentation & Sensor Techno for Civil Eng','Planning for Sustainable Development','Development Engineering'],
    4: ['Design of RCC Structures- II & Prestressed concrete structures','Solid Waste Management','Railway and Bridge Engineering','Professional Practices','Ground Improvement Techniques','Earthquake Engineering','Town & Urban Planning','Valuation of Land & Building','Rehabilitation and Retrofitting of Structures','Environmental Policies and Legislation']
  },
  
  EE: {
    1: ['Engineering Math I', 'Engineering Physics','Engineering Graphics', 'Energy & Environment Eng','Engineering Mechanics','C language','Engineering Math II','Engineering Chemistry','Communication Skills'],
    2: ['Engineering Mathematics III','Electrical Machines-I','Electrical & Electronics Measure','Eng Material Science','Network Theory','Power System','Electrical MachineII','Analog & Digital Electronics','Electromagnetic Field Theory','Signals & System','Advance Renewable Energy Sources','Electronic Devices & Circuits'],
    3: ['Power System Analysis','Microprocessor & Microcontroller','Power Electronics','HVDC','Power Quality Issues','Industrial Automation','Embedded System','Electrical Safety','Condition Monitoring of Electric Apparatus','Switchgear Protection','Electrical Machine Design','Control System Eng','Flexible AC Transmission Sys','Smart Grid Techno','Modeling Simulation & Control of Electric Drives','E-waste Management','Power Plant Eng','Sensor Technology','Lightning Interaction with Power Sys'],
    4: ['High Voltage Engineering','Power System Operation and Control','Mechtronics','IOT','Electrical Utilization'],
  },

  ETC: {
    1: ['Engineering Math I', 'Engineering Physics','Engineering Graphics', 'Energy & Environment Eng','Engineering Mechanics','C language','Engineering Math II','Engineering Chemistry','Communication Skills'],
    2: ['Engineering Mathematics III','Electronic Devices & Circuits','Digital Electronics','Employability & Skill Develo','Innovation & Entrepr','Universal Human ValuesII','Signals & Systems','Microprocessors','Network Theory','PCB Designing','Patents & IPR','Constitution of India'],
    3: ['Digital Signal Processing','Electromagnetic Wave Theory','Analog Communication','Fiber Optic Communic','Control System','Advanced Mobile Communi','Analog Circuits','Digital Communication','Digital Audio Proces','Digital Image Process','Intro to Adaptive Signal Processing','Microwave Theory & Techni','RF Circuit Design','Wireless Sensor Networks','Bsic Concepts  Film & Video Editi'],
    4: ['Computer Networks','Antennas & Wave Propagation','Biomedical Electronics','Embedded Sys Design','Intro to Inform Theory','Intro to MEMS','Satellite Communication','Intro to Coding Theory','Research Methodology','VLSI Design','DSA Using Java Programming','UAV in Eng Applications','Data Compression & Encrypt']
  },
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const loadProfile = async () => {
        setLoading(true);
        try {
          const passedProfile = route.params?.profile;
          if (passedProfile) {
            await AsyncStorage.setItem('userProfile', JSON.stringify(passedProfile));
            setProfile(passedProfile);
          } else {
            const storedProfile = await AsyncStorage.getItem('userProfile');
            if (storedProfile) {
              setProfile(JSON.parse(storedProfile));
            }
          }
        } catch (err) {
          console.error('Error loading profile:', err);
        } finally {
          setLoading(false);
        }
      };
      loadProfile();
    }, [route.params])
  );

  const subjects =
    profile?.branch && profile?.year
      ? subjectMap?.[profile.branch]?.[profile.year] || []
      : [];

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.noData}>Loading Profile...</Text>
      </SafeAreaView>
    );
  }

  if (!profile) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.noData}>No profile found. Please login again.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hey {profile?.name || 'Student'}</Text>
          <Text style={styles.subtitle}>Select Subject</Text>
        </View>
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => {
            if (profile) {
              navigation.navigate('UserProfile', { profile });
            }
          }}
        >
          <Text style={styles.avatarText}>
            {typeof profile?.name === 'string' && profile.name.length > 0
              ? profile.name.charAt(0).toUpperCase()
              : '?'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Subject List */}
      <FlatList
        data={subjects}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.cardList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('SubjectDetail', {
                subject: item,
                profile,
              })
            }
          >
            <View style={styles.cardContent}>
              <Image
                source={subjectImages[item] || subjectImages.default}
                style={styles.thumbnail}
              />
              <View>
                <Text style={styles.cardTitle}>{item}</Text>
                <Text style={styles.cardSubtitle}>Tap to explore materials</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.noData}>No subjects found for selected profile.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#4B34D1',
    padding: 20,
    paddingTop: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
  avatar: {
    backgroundColor: '#F47174',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardList: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    resizeMode: 'contain',
    backgroundColor: '#333',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#aaa',
    fontSize: 12,
  },
  noData: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
    fontSize: 16,
  },
  centered: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
});