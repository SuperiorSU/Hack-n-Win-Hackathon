import { View, Text } from 'react-native'
import React from 'react'
import WishCard from '../components/WishCard'

const index = ({inWishlist}) => {
  return (
    <View>
      {
        !inWishlist?<WishCard/>:<Text>No Itmes in Your Wishlist</Text>
      }
    </View>
  )
}

export default index