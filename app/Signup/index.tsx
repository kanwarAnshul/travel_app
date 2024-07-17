import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import { Feather, FontAwesome } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import travelImage from '@/assets/images/signupBackground (2).png'

const { width } = Dimensions.get('window')
const IMG_HEIGHT = 350

const SignUpPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, padding: 4 }}
            >
              <View style={{ backgroundColor: Colors.backgroundcolor, padding: 6, borderRadius: 10 }}>
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
      <View style={styles.container}>
        {/* HEADER   */}
        <View style={styles.header}>
          <ImageBackground source={travelImage} resizeMode="cover" style={[styles.header, styles.headerImage]}>
            <View style={styles.header}></View>
          </ImageBackground>
        </View>
        {/* MAIN  */}
        <View style={styles.main}>
          <View style={styles.section1}>
            <Text style={styles.title}>SignUp</Text>
            <Text style={styles.subTitle}>Log in to start your adventure</Text>
            <View style={styles.emailInputContainer}>
              <Text style={styles.emailText}>Username</Text>
              <TextInput
                style={styles.emailInput}
                placeholder="Enter name"
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                // value={email}
                // onChangeText={setEmail}
              />
            </View>
            <View style={styles.emailInputContainer}>
              <Text style={styles.emailText}>Email</Text>
              <TextInput
                style={styles.emailInput}
                placeholder="Enter your email"
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                // value={email}
                // onChangeText={setEmail}
              />
            </View>
            <View style={styles.passwordInputContainer}>
              <Text style={styles.emailText}>Password</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#888"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'visible-password'}
                // value={email}
                // onChangeText={setEmail}
              />
             
            </View>
            <View style={styles.passwordInputContainer}>
              <Text style={styles.emailText}>Confirm Password</Text>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirm Password"
                placeholderTextColor="#888"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'visible-password'}
           
              />
             
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => {
                  router.navigate('(tabs)')
                }}
              >
                <Text style={styles.signInBtnText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundcolor,
  },
  header: {
    flex: 2,
    backgroundColor: 'transparent',
  },
  headerImage: {
    width: width,
    height: IMG_HEIGHT,
  },
  main: {
    flex: 5.8,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    backgroundColor: Colors.acentcolor,
  },
  section1: {
    flex: 1,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 13,
  },
  subTitle: {
    fontSize: 15,
  },
  emailText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailInputContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 40,
    marginBottom: -25,
  },
  emailInput: {
    width: 350,
    height: 50,
    borderRadius: 24,
    paddingLeft: 22,
    backgroundColor: Colors.backgroundcolor,
  },
  passwordInputContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 40,
    marginBottom: -25,
  },
  passwordInput: {
    width: 350,
    height: 50,
    borderRadius: 24,
    paddingLeft: 22,
    backgroundColor: Colors.backgroundcolor,
  },
  forgetPassword: {
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginTop: 10,
  },
  buttonContainer: {
    width: 350,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    
    // backgroundColor:Colors.success
  },
  signInBtn: {
    marginTop: 60,
    height: 50,
    width: 320,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0, // Add some margin if needed
  },
  signInBtnText: {
    color: '#fff', // Text color to make it visible
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
    width: 350,
    marginTop: 32,
  },
  bottomText: {
    fontSize: 17,
    fontWeight: '600',
  },
  icon: {
    fontSize: 25,
  },
})
