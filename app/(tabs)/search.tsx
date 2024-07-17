import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import searchbg from '../../assets/images/searchbg.jpg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';
import { Stack } from 'expo-router';

const items = [
  { label: 'Coffee & Bar', icon: 'cafe' },
  { label: 'Restaurants', icon: 'restaurant' },
  { label: 'Events', icon: 'calendar' },
  { label: 'Hotels', icon: 'bed' },
  { label: 'Tourism', icon: 'map' },
  { label: 'Shopping', icon: 'cart' },
  { label: 'Nightlife', icon: 'moon' },
  { label: 'Parks', icon: 'leaf' },
  { label: 'Museums', icon: 'book' },
  { label: 'Fitness & Gyms', icon: 'fitness' },
  { label: 'Spas & Wellness', icon: 'medkit' },
  { label: 'Transportation', icon: 'train' },
];

const recommandItem = [
  {
    title: 'Eiffel Tower',
    location: 'Paris, France',
    rating: 4.5,
    imageUrl:
      'https://images.unsplash.com/photo-1678611701556-d03a9b60cf51?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Statue of Liberty',
    location: 'New York City, USA',
    rating: 4.8,
    imageUrl:
      'https://images.unsplash.com/photo-1458222937751-f2538368fdbf?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Great Wall of China',
    location: 'Beijing, China',
    rating: 4.7,
    imageUrl:
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Machu Picchu',
    location: 'Peru',
    rating: 4.9,
    imageUrl:
      'https://images.unsplash.com/photo-1578746401323-f997c71f4096?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Taj Mahal',
    location: 'Agra, India',
    rating: 4.6,
    imageUrl:
      'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sydney Opera House',
    location: 'Sydney, Australia',
    rating: 4.4,
    imageUrl:
      'https://images.unsplash.com/photo-1590716209211-ea74d5f63573?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Colosseum',
    location: 'Rome, Italy',
    rating: 4.7,
    imageUrl:
      'https://images.unsplash.com/photo-1460722665083-c2599113f7e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Santorini',
    location: 'Greece',
    rating: 4.8,
    imageUrl:
      'https://images.unsplash.com/photo-1696519669474-3001c0e2b548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Petra',
    location: 'Jordan',
    rating: 4.5,
    imageUrl:
      'https://images.unsplash.com/photo-1705628078563-966777473473?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Niagara Falls',
    location: 'Ontario, Canada / New York, USA',
    rating: 4.6,
    imageUrl:
      'https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Search = () => {
  return (
    <>
    <Stack.Screen 
    options={{headerTransparent:true,headerTitle:"",}}
    >

    </Stack.Screen>
    <View style={styles.container}>
      {/* header */}
      <ImageBackground source={searchbg} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitleTxt}>Where are you going?</Text>
          <Text style={styles.headerSubtitleTxt}>Have a holiday you'll never forget!</Text>
        </View>
      </ImageBackground>
      <View style={styles.main}>
        <View style={styles.section}>
          <View style={styles.searchBox}>
            <View style={styles.searchBoxContent}>
              <Ionicons name="search" size={20} style={styles.icon} />
              <TextInput
                placeholder="Search for a place"
                style={styles.textInput}
              />
              <Ionicons name="filter" size={20} style={styles.icon} />
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionItems}>
            {items.map((option, index) => (
              <View style={styles.optionContainer} key={index}>
                <View style={styles.iconContainer}>
                  <Ionicons name={option.icon} size={28} />
                </View>
                <Text style={styles.optionLabel}>{option.label}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.separator}></View>
          <View style={styles.recommandContainer}>
            <Text style={styles.recommandTxt}>Recommended</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {recommandItem.map((item, index) => (
                <View style={styles.recommandBox} key={index}>
                  <ImageBackground
                    source={{ uri: item.imageUrl }}
                    style={styles.imageBackground}
                    imageStyle={styles.imageStyle}
                  >
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" color={Colors.warning} size={20} />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                    <View style={styles.recommandTitleContainer}>
                      <Text style={styles.title}>{item.title}</Text>
                      <View style={styles.locationContainer}>
                        <Ionicons name="location" size={20} color={Colors.backgroundcolor} />
                        <Text style={styles.locationText}>{item.location}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundcolor,
  },
  header: {
    width: '100%',
    height: hp('30%'), // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitleTxt: {
    fontSize: 28,
    color: "#fff",
    fontWeight: 'bold',
  },
  headerSubtitleTxt: {
    fontSize: 16,
    color: "#fff",
  },
  main: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
  },
  section: {
    marginBottom: hp('2%'),
  },
  searchBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('4%'),
    marginTop:-45,
    height:hp('7'),
    elevation:3
  },
  searchBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: wp('2%'),
    color: "grey",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: wp('2%'),
  },
  optionItems: {
    marginBottom: hp('2%'),
  },
  optionContainer: {
    alignItems: 'center',
    marginRight: wp('4%'),
  },
  iconContainer: {
    backgroundColor: Colors.acentcolor,
    padding: wp('4%'),
    borderRadius: 50,
    marginBottom: hp('1%'),
  },
  optionLabel: {
    fontSize: 12,
    color: "#000",
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: hp('2%'),
  },
  recommandContainer: {
    marginBottom: hp('2%'),
  },
  recommandTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  recommandBox: {
    marginRight: wp('4%'),
    width: wp('60%'), // Adjust the width as needed
    height: hp('35%'), // Adjust the height as needed
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    padding: wp('4%'),
  },
  imageStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  ratingText: {
    marginLeft: wp('1%'),
    color: "#fff",
  },
  recommandTitleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: wp('2%'),
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  locationText: {
    marginLeft: wp('1%'),
    color: "#fff",
  },
});

export default Search;
