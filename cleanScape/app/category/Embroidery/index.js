import { View, Text ,ScrollView} from 'react-native'
import React , { useState} from 'react'
import { Link } from 'expo-router';
import WishCard from "../../components/WishCard";
import categories from '../../components/response'
import { AntDesign } from "@expo/vector-icons";

const index = () => {
  return (
    <View className="bg-slate-100 p-4">
    <View className=" flex flex-row justify-between pb-2">
      <Link href="/">
        <View className="ms-4 mt-4 pt-1 pb-4">
          <AntDesign
            style={{ marginLeft: 15 }}
            name="arrowleft"
            size={24}
            color="black"
          />
        </View>
          <Text className="text-[20px] font-medium text-black"></Text>
      </Link>
    </View>
    <ScrollView>
      <View className="p-4 pb-16">
          <View>
              
               <WishCard name='Embroidery' categories={categories}/>
              
          </View>
      </View>
    </ScrollView>
  </View>
  )
}

export default index