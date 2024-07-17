import CategoryButtons from '@/Components/CategoryButtons'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import groupData from '@/data/groups.json'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native'
import NewListing from '@/Components/NewListing'
import GroupListings from '@/Components/GroupListings'

const categories = [
  { id: '1', title: 'Beaches', image: require('../../assets/images/beaches.jpg') },
  { id: '2', title: 'Mountains', image: require('../../assets/images/mountain.jpg') },
  { id: '3', title: 'Cities', image: require('../../assets/images/cities.jpg') },
  { id: '4', title: 'Forests', image: require('../../assets/images/forest.jpg') },
  { id: '5', title: 'lakes', image: require('../../assets/images/lakes.jpg') },
  { id: '4', title: 'historical sites', image: require('../../assets/images/history.jpg') },
  { id: '4', title: 'National parks', image: require('../../assets/images/park.jpg') },
  { id: '4', title: 'Islands', image: require('../../assets/images/island.jpg') },
  { id: '4', title: 'Deserts', image: require('../../assets/images/deserts.jpg') },
  // Add more categories as needed
]

const Category = () => {
  const [category, setCategory] = useState('All')
  const onCatChanged = (category) => {
    setCategory(category)
    console.log('the cate>>>>', category)
  }

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={() => alert(item.title)}>
      <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={{ borderRadius: 10 }}>
        <View style={styles.overlay} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )

  return (
    <>
      <Stack.Screen options={{ headerTransparent: true, headerTitle: '' }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Explore{'\n'}
            <Text style={styles.headingBold}>Categories</Text>
          </Text>
          <View style={styles.searchContainer}>
            {/* Uncomment and import Icon component if you want to use an icon */}
            {/* <Icon name="search" size={20} color="#888" /> */}
            <TextInput style={styles.searchInput} placeholder="Search categories" placeholderTextColor="#888" />
          </View>
          <CategoryButtons onCatChanged={onCatChanged} />
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  headingBold: {
    fontWeight: 'bold',
    fontSize: 45,
    color: Colors.acentcolor,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  categoryItem: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  categoryTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default Category
