import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { listingtypes } from '@/types/listingtypes'
import { destinationData } from '@/data/destination'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'

const { width } = Dimensions.get('window')
const IMG_HEIGHT = 300

const ListingDetails = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  const listing = (id && (destinationData as listingtypes[]).find((item) => item.id === id)) || null
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const scrollOffset = useScrollViewOffset(scrollRef)

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1]),
        },
      ],
    }
  })

  if (!listing) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Listing not found</Text>
      </View>
    )
  }

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
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 10, padding: 4 }}
            >
              <View style={{ backgroundColor: Colors.backgroundcolor, padding: 6, borderRadius: 10 }}>
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Animated.ScrollView ref={scrollRef} contentContainerStyle={{ paddingBottom: 150 }}>
          <Animated.Image source={{ uri: listing.image }} style={[styles.image, imageAnimatedStyle]} />
          <View style={styles.contentWraper}>
            <Text style={styles.listingName}>{listing.name}</Text>
            <View style={styles.listingLocationWraper}>
              <FontAwesome name="map-marker" size={28} color={Colors.primarycolor} />
              <Text style={styles.listingLocationTxt}>{listing.location}</Text>
            </View>
            <View style={styles.heighLightWrapper}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.heighLightIcon}>
                  <Ionicons name="time" size={22} color={Colors.primarycolor} />
                </View>
                <View>
                  <Text style={styles.heighLightText}>Duration</Text>
                  <Text style={styles.heighLightTxtVal}>{listing.duration} Days</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.heighLightIcon}>
                  <FontAwesome name="users" size={22} color={Colors.primarycolor} />
                </View>
                <View>
                  <Text style={styles.heighLightText}>People</Text>
                  <Text style={styles.heighLightTxtVal}>{listing.duration}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.heighLightIcon}>
                  <Ionicons name="star" size={22} color={Colors.primarycolor} />
                </View>
                <View>
                  <Text style={styles.heighLightText}>Rating</Text>
                  <Text style={styles.heighLightTxtVal}>{listing.rating} Stars</Text>
                </View>
              </View>
            </View>
            <Text style={styles.listinDetailsText}>{listing.description}</Text>
          </View>
        </Animated.ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={[styles.footerBtn, styles.footerBookBtn]}>
          <Text style={styles.footerBtnTxt}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.footerBtn}>
          <Text style={styles.footerBtnTxt}>${listing.price}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundcolor,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  listingName: {
    fontSize: 25,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginLeft: 10,
  },
  contentWraper: {
    padding: 6,
    backgroundColor: Colors.backgroundcolor,
  },
  listingLocationWraper: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  listingLocationTxt: {
    fontSize: 15,
    marginLeft: 10,
  },
  heighLightWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  heighLightIcon: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: 'center',
  },
  heighLightText: {
    fontSize: 17,
    color: '#999',
  },
  heighLightTxtVal: {
    fontSize: 15,
    fontWeight: '600',
  },
  listinDetailsText: {
    fontSize: 17,
    letterSpacing: 0.6,
    lineHeight: 25,
    padding: 7,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    width: width,
    gap: 1,
  },
  footerBtnTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  footerBtn: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  footerBookBtn: {
    marginRight: 20,
    flex: 2,
    backgroundColor: Colors.primarycolor,
  },
})
