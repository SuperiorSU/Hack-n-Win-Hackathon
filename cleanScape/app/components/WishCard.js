import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WishCard = (props) => {
    const { categories, setproducts, name } = props;

    // Filter categories based on the provided name
    const category = categories.find(category => category.name === name);

    // Function to handle adding products to the cart
    const addhandle = (productName) => {
        const productToAdd = category.products.find(product => product.name === productName);
        if (productToAdd) {
            setproducts(prev => [...prev, productToAdd]);
        }
    }

    return (
        <View>
            {/* Check if category exists */}
            {category && category.products.map((product, index) => (
                <View key={index}>
                    <View style={{ backgroundColor: 'white', borderRadius: 8, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={{ uri: product.image }} style={{ height: 95, width: 150, borderRadius: 8 }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.name}</Text>
                            <Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)' }}>{product.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.price}</Text>
                                <TouchableOpacity style={{ backgroundColor: 'orange', padding: 8, borderRadius: 5 }} onPress={() => addhandle(product.name)}>
                                    <Text style={{ color: 'white' }}>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default WishCard;
