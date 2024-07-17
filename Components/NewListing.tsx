import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { listingtypes } from '@/types/listingtypes'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

const NewListing = ({listing,category}) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      console.log('the updating listings>>>',category)
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
      }, 200)
    }, [category])
  
    const renderItems: ListRenderItem<listingtypes> = ({ item }) => {
      return (
        <>
        <Link href={`/listing/${item.id}`} asChild>
          <TouchableOpacity>
            <View style={styles.items}>
              <Image source={{ uri: item.image }} style={styles.images} />
              <View style={styles.bookmark}>
                <Ionicons name="bookmark-outline" size={20} color="#fff" />
              </View>
              <Text style={styles.listItemTxt} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 70 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primarycolor} />
                  <Text>{item.location}</Text>
                </View>
                <Text style={styles.itemLocationTxt}>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
        </>
      )
    }
    return (
      <View>
        <FlatList
          data={loading? [] : listing}
          renderItem={renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
}

export default NewListing

const styles = StyleSheet.create({
    items: {
      backgroundColor: Colors.backgroundcolor,
      padding: 10,
      borderRadius: 10,
      marginRight: 20,
      width: 250,
      marginBottom: 10,
      shadowColor: '#171717',
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.7,
      shadowRadius: 5,
      elevation: 3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    images: {
      width: 200,
      height: 200,
      borderRadius: 10,
    },
    bookmark: {
      position: 'absolute',
      top: 175,
      right: 20,
      backgroundColor: Colors.primarycolor,
      padding: 10,
      borderRadius: 30,
    },
    listItemTxt: {
      marginTop: 12,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    itemLocationTxt: {
      fontSize: 17,
      fontWeight: 'bold',
      color: Colors.primarycolor,
    },
  });
  
  