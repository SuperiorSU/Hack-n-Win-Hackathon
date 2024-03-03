import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Slider from './components/Slider'
import MidComp from './components/MidComp'
import Card from './components/Card'
import { AntDesign } from '@expo/vector-icons';




const index = () => {
    const image = [
        'https://blogs.worldbank.org/sites/default/files/styles/hero/public/blogs-images/2020-01/shutterstock_551163163.jpg.webp?itok=Jpxh168Y',
        'https://indiachalk.com/wp-content/uploads/2021/10/Untitled-design-31.jpg',
        'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-08/hands-make-potter-decorative-pattern-earthenware.jpg',
        'https://i.pinimg.com/736x/6a/1a/b3/6a1ab38d4885bcf8e970e0f306a2080f.jpg',
        'https://www.aspeninstitute.org/wp-content/uploads/2016/12/artisan-card.jpg'
    ]
    
  return (
    <View className="p-4 bg-slate-100">
        <View className=" flex flex-row justify-between pb-3">
            
            <Text className="mt-3 font-bold text-[20px]">Hello, Katherine</Text>
            <View className="flex flex-row gap-7">
              <Link style={{paddingTop:10}} href="/cart">
              <AntDesign  name="shoppingcart" size={26} color="grey" />
              </Link>
              <Link href='/profile'  style={{borderRadius:50}}>
            <View className="rounded-full shadow-lg max-w-[fit-content]">
              
                <Image source={{uri: "https://media.istockphoto.com/id/1396644902/photo/businesswoman-posing-and-smiling-during-a-meeting-in-an-office.jpg?s=612x612&w=0&k=20&c=7wzUE1CRFOccGnps-XZWOJIyDvqA3xGbL2c49PU5_m8="}} style={{height:48, width:48}} className="rounded-full"/>
            
            </View>
            </Link>
            </View>
            
            
                
            
        </View>
        {/* <View className="rounded-lg shadow-lg h-[300px] bg-blue-200 mt-4 mb-4">
        </View> */}
      {/* <View className="flex flex-row justify-center gap-3">
        <View className="p-2 bg-slate-300 rounded-full"></View>
        <View className="p-2 bg-slate-300 rounded-full"></View>
        <View className="p-2 bg-slate-300 rounded-full"></View>
        <View className="p-2 bg-slate-300 rounded-full"></View>
        <View className="p-2 bg-slate-300 rounded-full"></View>
        <View className="p-2 bg-slate-300 rounded-full"></View>
      </View> */}
      <ScrollView>
        <View className="mt-4 mb-4">
        <Slider images={image} className="me-3"/>
      </View>
      <View>
        <MidComp/>
      </View>
      <View>
        <Text className="pt-4 text-3xl mt-2 text-orange-500 font-medium text-center ">Categories</Text>
        <Card/>
      </View>
      </ScrollView>
      
        
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({})