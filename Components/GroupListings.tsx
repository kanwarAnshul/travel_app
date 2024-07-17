import { FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/grouptypes'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({ groupData }) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.itemTxt}>{item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="star" size={20} color={Colors.primarycolor} />
            <Text style={styles.itemRating}>{item.rating}</Text>
            <Text style={styles.itemReviews}>({item.reviews})</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Group 2</Text>
      <FlatList data={groupData} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.backgroundcolor,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemRating: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },
  itemReviews: {
    fontSize: 14,
    color: '#999',
  },
})
