import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import Colors from '@/constants/Colors'
import { Link, router } from 'expo-router'

const GettingStarted = () => {
  const backgroundImage = require('../assets/images/bgimage.jpg')
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Discover Your <Text style={styles.boldTitle}>Next Adventure</Text>
          </Text>
        </View>
        {/* main */}
        <View style={styles.main}>
          <View style={styles.section1}></View>
          <View style={styles.section2}></View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => {
              router.navigate('Login')
            }}
          >
            <Text style={styles.signInBtnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createAccount}
            onPress={() => {
              router.navigate('Signup')
            }}
          >
            <Text style={styles.createAccountTxt}>Create Account</Text>
          </TouchableOpacity>
          <Link href="(tabs)" style={styles.link}>
            <Text style={styles.skipText}>Skip</Text>
          </Link>
        </View>
      </View>
    </ImageBackground>
  )
}

export default GettingStarted

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 2,
    position: 'relative',
  },
  title: {
    padding: 14,
    marginTop: 125,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
  },
  boldTitle: {
    fontSize: 55,
    position: 'absolute',
    color: Colors.acentcolor,
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  header: { flex: 2 },
  main: {
    flex: 1,
  },
  section1: {
    flex: 1,
  },
  section2: {
    flex: 1,
  },
  signInBtn: {
    height: 50,
    width: 350,
    borderRadius: 10,
    backgroundColor: Colors.acentcolor, // Add background color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Add some margin if needed
  },
  signInBtnText: {
    color: '#000', // Text color to make it visible
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccount: {
    height: 50,
    width: 350,
    borderRadius: 10,
    backgroundColor: '#000', // Add background color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Adjust margin as needed
  },
  createAccountTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 122,
  },
  skipText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    marginTop: 12,
  },
})
