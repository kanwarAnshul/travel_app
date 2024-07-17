import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import profileHeaderBackground from '@/assets/images/newProfile.png'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
const { width } = Dimensions.get('window')
const height = 400

const Profile = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, padding: 4, marginLeft: 10 }}
              onPress={() => {
                router.back()
              }}
            >
              <View style={{ backgroundColor: Colors.backgroundcolor, padding: 6, borderRadius: 10 }}>
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <ImageBackground
            source={profileHeaderBackground}
            resizeMode="cover"
            style={[styles.header, styles.headerImage]}
          >
            <View style={styles.header}></View>
          </ImageBackground>
        </View>
        {/* Main */}
        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.profileImageWrapper}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1634671452706-9b746f493b90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.profileName}>John Doe e34 </Text>
            <View style={styles.optionsContainer}>
              <View style={styles.profileOptionsContainer}>
                <Ionicons name="ticket" color={Colors.textcolor} style={styles.Icons} />
                <Text style={styles.optionText}>My tickets</Text>
                <Link href="myticket" style={styles.linker}>
                  <FontAwesome5 name="angle-right" style={styles.Icons} />
                </Link>
              </View>
              <View style={styles.profileOptionsContainer}>
                <Ionicons name="card" color={Colors.textcolor} style={styles.Icons} />
                <Text style={styles.optionText}>My cards</Text>
                <Link href="mycards" style={styles.linker}>
                  <FontAwesome5 name="angle-right" style={styles.Icons} />
                </Link>
              </View>
              <View style={styles.profileOptionsContainer}>
                <Ionicons name="language" color={Colors.textcolor} style={styles.Icons} />
                <View style={styles.optionTextContainer}>
                  <Text style={styles.langText}>Language preference</Text>
                </View>
                <Link href="languagepreference" style={styles.linker}>
                  <FontAwesome5 name="angle-right" style={styles.Icons} />
                </Link>
              </View>
              <View style={styles.profileOptionsContainer}>
                <Ionicons name="person" color={Colors.textcolor} style={styles.Icons} />
                <Text style={styles.contact}>Contact us</Text>
                <Link href="contact" style={styles.linker}>
                  <FontAwesome5 name="angle-right" style={styles.Icons} />
                </Link>
              </View>
              <View style={styles.profileOptionsContainer}>
                <Ionicons name="shield-checkmark" color={Colors.textcolor} style={styles.Icons} />
                <Text style={styles.policy}>Privacy policy</Text>
                <Link href="privacypolicy" style={styles.linker}>
                  <FontAwesome5 name="angle-right" style={styles.Icons} />
                </Link>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.logout}
                onPress={() => {
                  router.navigate('Login')
                }}
              >
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
  },
  headerImage: {
    height: height,
    width: width,
  },
  main: {
    flex: 6,
    borderTopLeftRadius: 195,
    borderTopRightRadius: 195,
    backgroundColor: Colors.acentcolor,
  },
  section: {
    flex: 6,
    borderTopLeftRadius: 195,
    borderTopRightRadius: 195,
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.primarycolor,
    overflow: 'hidden',
    backgroundColor: Colors.backgroundcolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: -55,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.textcolor,
  },
  optionsContainer: {
    marginTop: 82,
  },
  profileOptionsContainer: {
    height: hp('6%'),
    width: wp('90%'),
    backgroundColor: Colors.backgroundcolor,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  Icons: {
    fontSize: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  optionTextContainer: {
    marginLeft: -90,
  },
  langText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  optionText: {
    marginLeft: -190,
    fontWeight: 'bold',
    fontSize: 18,
  },
  linker: {
    marginRight: 20,
  },
  contact: {
    marginLeft: -175,
    fontWeight: 'bold',
    fontSize: 18,
  },
  policy: {
    marginLeft: -145,
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    width: 350,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  logout: {
    marginTop: 60,
    height: 50,
    width: 320,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  logoutText: {
    color: '#fff', // Text color to make it visible
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default Profile
