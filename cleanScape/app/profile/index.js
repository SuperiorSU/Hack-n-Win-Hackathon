import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
const index = () => {
  return (
   
    <View className=" bg-slate-100">
      <View className=" flex flex-row justify-between pb-2">
            <Link href="/">
              <View className="ms-4 mt-4 pt-4">
            <AntDesign style={{marginLeft:15}} name="arrowleft" size={24} color="black" />
              </View>
            </Link> 
        </View>  
        <ScrollView >
          <View className="p-4 pb-16">
        <View className="pt-3 pb-4 mt-3 mb-3 rounded-lg bg-orange-500 flex flex-col ">
          <View className="flex justify-center w-[120px] h-[120px] bg-white rounded-full"
          style={{height: 126, width: 126,marginLeft:'auto', marginRight:'auto'}} 
          >
            <Image source={{uri: "https://media.istockphoto.com/id/1396644902/photo/businesswoman-posing-and-smiling-during-a-meeting-in-an-office.jpg?s=612x612&w=0&k=20&c=7wzUE1CRFOccGnps-XZWOJIyDvqA3xGbL2c49PU5_m8="}} style={{height: 120, width: 120,zIndex:2,borderColor:'white',marginLeft:'auto', marginRight:'auto'}} className="rounded-full"/>
          </View>
          <Text className="text-white text-center font-bold text-[20px] pt-2 pb-1">Katherine Morgan</Text>
          <Text className="text-white text-center">Regular User</Text>
          <View className="flex flex-row gap-9 mt-2 mb-2 justify-center">
            <View>
            
              <Octicons name="container" size={30} color="white" style={{marginLeft:5}} />
              <Text className="text-white pt-1">Orders</Text>
              </View>
            <View>
              <AntDesign name="edit" size={30} color="white" style={{marginLeft:15}} />
              <Text className="text-white pt-1">Edit Profile</Text>
              </View>
            <View>
            <AntDesign name="shoppingcart" size={30} color="white" style={{marginLeft:7}}/>
              <Text className="text-white pt-1">Your Cart</Text>
              </View>
          </View>
        </View>
         
            <View className="bg-white p-2 rounded-lg">
          <Text className="text-[20px] pb-4 text-black/60 font-medium "> Account Settings</Text>
          <View className=" text-medium p-1 pb-4">
            <Text className="ps-4 text-[16px]">
            <EvilIcons name="location" size={22} color="orange" /> Saved Address</Text> 

          </View>
          <View className=" text-medium p-1 pb-4">
            <Text className="ps-4 text-[16px]">
          <Entypo name="language" size={22} color="orange" />  Select Language</Text> 
          </View>
          <View className=" text-medium p-1 pb-4">
          <Text className="ps-4 text-[16px]">
            <AntDesign name="wallet" size={20} color="orange" style={{marginTop: 5}} />  Saved Cards & Wallet</Text> 
          </View>
          <View className=" text-medium p-1 pb-4">
          <Text className="ps-4 text-[16px]">
            <MaterialCommunityIcons name="bell-badge" size={20} color="orange" style={{marginTop: 5}} />  Notification</Text> 
          </View>
        </View>
        <View className="bg-white p-2 rounded-lg mt-4">
          <Text className="text-[20px] pb-4 text-black/60 font-medium "> My Activity</Text>
          <View className=" text-medium p-1 pb-4">
            <Text className="ps-4 text-[16px]">
            <Entypo name="chat" size={22} color="orange" />  Question & Answers</Text> 

          </View>
          <View className=" text-medium p-1 pb-4">
            <Text className="ps-4 text-[16px]">
          <FontAwesome name="pencil-square-o" size={22} color="orange" />  Reviews</Text> 
          </View>
          
        </View>
        <View className="bg-white p-2 rounded-lg mt-4">
          <Text className="text-[20px] pb-4 text-black/60 font-medium "> Earn with Makers' Market</Text>
          <View className=" text-medium p-1 pb-4">
            <Text className="ps-4 text-[16px]">
            <Entypo name="shop" size={22} color="orange" />  Sell Products</Text> 

          </View>
        </View>
        <View className="bg-white p-2 rounded-lg mt-4">
          <Text className="text-[20px] pb-4 text-black/60 font-medium "> FeedBack & Info</Text>
          <View className=" text-medium p-1 pb-4">
            <Text className="ps-4 text-[16px]">
            <MaterialIcons name="feedback" size={22} color="orange" />  Terms, Policies and Conditions</Text> 

          </View>
        </View>
        </View>
          </ScrollView>
        
      
      
    </View>
  )
}

export default index