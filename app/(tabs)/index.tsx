import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Link, router, Stack } from 'expo-router'
import { useHeaderHeight } from '@react-navigation/elements'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Colors from '@/constants/Colors'
import CategoryButtons from '@/Components/CategoryButtons'
import { destinationData } from '@/data/destination'
import groupData from '@/data/groups.json'
import NewListing from '@/Components/NewListing'
import GroupListings from '@/Components/GroupListings'
const Page = () => {
  const headerHeight = useHeaderHeight()
  const [category, setCategory] = useState('All')
  const onCatChanged = (category: string) => {
    setCategory(category)
    console.log('the cate>>>>', category)
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={{ width: 60, height: 65, borderColor: Colors.textcolor, borderRadius: 30 }}
              />
            </TouchableOpacity>
          ),
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.backgroundcolor,
                padding: 10,
                borderRadius: 10,
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.7,
                shadowRadius: 5,
              }}
            >
              <Ionicons name="notifications" size={28} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingText}>Explore the Beautiful world!</Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchInput}>
              <Ionicons name="search" size={18} />
              <TextInput placeholder="Search..." style={styles.textInput} />
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="options" size={28} />
            </TouchableOpacity>
          </View>
          <CategoryButtons onCatChanged={onCatChanged} />
          <NewListing category={category} listing={destinationData} />
          <GroupListings groupData={groupData} />
         <Button title='Go back' onPress={router.back}></Button>
        </ScrollView>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundcolor,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundcolor,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
  },
})
