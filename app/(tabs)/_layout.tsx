import Colors from '@/constants/Colors'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.backgroundcolor,
            borderTopWidth: 0,
            padding: 0,
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#999',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="category"
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="space-dashboard" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  borderRadius: 10,
                  height: 50,
                }}
              >
                <Ionicons name="search-outline" size={24} color={Colors.primarycolor} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="bookmark-outline" size={28} color={color} />,
          }}
        />
      </Tabs>
    </>
  )
}
