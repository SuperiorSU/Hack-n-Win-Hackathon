import React, { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions, Text } from 'react-native';

const Slider = ({images}) => {
  const { width } = Dimensions.get('window');
  const height = width * 0.7;

  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View>
      <ScrollView
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={true}
        style={{ width: 360, height: 205 }}>
        {images.map((image, index) => (
          <Image className="me-3 rounded-lg" 
            key={index}
            source={{ uri: image }}
            style={{ width : 360, height: 200, marginRight: 20 }}
          />
        ))}
      </ScrollView>
      {/* <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
            ●
          </Text>
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    top:1,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 20,
  },
  activeDot: {
    position: 'absolute',
    color: '#FFF',
    fontSize: 50,
  },
});

export default Slider;