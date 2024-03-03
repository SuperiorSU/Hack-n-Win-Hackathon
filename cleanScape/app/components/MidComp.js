import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const MidComp = () => {
  return (
    <View className="mt-4 p-2 bg-white rounded-[10px] shadow-lg shadow-black-">
      <View className="flex flex-row gap-12">
        <View className="flex flex-col justify-center">
            <MaterialCommunityIcons style={{marginLeft:13}} name="dots-grid" size={34} color="red"/>
            <Text className="text-[11px]">All Products</Text>
        </View>
        <View>
            <FontAwesome5 name="shopping-basket" size={32} color="brown" style={{marginBottom:4}}/>
            <Text className="text-[11px]">Basket</Text>
        </View>
        <View>
            <FontAwesome5 name="tshirt" size={32} color="pink" style={{marginBottom:4}}/>
            <Text className="text-[11px]">T-Shirts</Text>
        </View>
        <View>
            <FontAwesome5 name="book" size={32} color="orange" style={{marginBottom:4, marginLeft:9}}/>
            <Text className="text-[11px]">Notebooks</Text>
        </View>
      
      
      </View>
    </View>
  )
}

export default MidComp