import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const CategoryButtons = ({ onCatChanged }) => {
  const scrollRef = useRef<ScrollView>(null)
  const itemRef = useRef<TouchableOpacity[] | null[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index]
    setActiveIndex(index)
    selected?.measureLayout(scrollRef.current, (x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
    })
    onCatChanged(destinationCategories[index].title)
  }

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
          gap: 20,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => {
              handleSelectCategory(index)
            }}
            style={activeIndex == index ? styles.activeCategoryBtn : styles.categorybtn}
          >
            <MaterialCommunityIcons name={item.iconName as any} size={28} color="#000" />
            <Text style={styles.categoryTxt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  categorybtn: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.backgroundcolor,
    borderWidth: 1.1,
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 3,
  },
  categoryTxt: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  activeCategoryBtn: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.acentcolor,
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 3,
  },
})

export default CategoryButtons
