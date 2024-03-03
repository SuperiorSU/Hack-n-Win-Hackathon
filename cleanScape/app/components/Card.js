import { View, Text, Image } from "react-native";
import React from "react";
import categories from "./response";
import { Link } from "expo-router";

const Card = ({ data }) => {
  // const categories = [
  //     {
  //       id: 1,
  //       name: "Home Decor",
  //       image: "https://picsum.photos/200/300?random=1",
  //       content: "Elevate your living space with our unique handcrafted home decor items, ranging from elegant vases to intricately designed wall hangings."
  //     },
  //     {
  //       id: 2,
  //       name: "Jewelry",
  //       image: "https://picsum.photos/200/300?random=2",
  //       content: "Discover artisanal jewelry pieces that reflect exquisite craftsmanship and timeless beauty, from delicate necklaces to statement rings."
  //     },
  //     {
  //       id: 3,
  //       name: "Clothing & Accessories",
  //       image: "https://picsum.photos/200/300?random=3",
  //       content: "Express your individuality with our collection of handcrafted clothing and accessories, including stylish scarves, hats, and bags."
  //     },
  //     {
  //       id: 4,
  //       name: "Art & Collectibles",
  //       image: "https://picsum.photos/200/300?random=4",
  //       content: "Explore a curated selection of art and collectibles crafted by talented artisans, from captivating paintings to unique sculptures."
  //     },
  //     {
  //       id: 5,
  //       name: "Embroidery",
  //       image: "https://picsum.photos/200/300?random=5",
  //       content: "Discover the intricate world of hand embroidery with our collection of beautifully stitched designs, from traditional motifs to modern patterns."
  //     },
  //     {
  //       id: 6,
  //       name: "Ceramics",
  //       image: "https://picsum.photos/200/300?random=6",
  //       content: "Add a touch of elegance to your home with our handcrafted ceramic pieces, including decorative vases, bowls, and tableware."
  //     },
  //     {
  //       id: 7,
  //       name: "Woodwork",
  //       image: "https://picsum.photos/200/300?random=7",
  //       content: "Experience the beauty of nature with our collection of handcrafted wooden items, including furniture, kitchenware, and decorative accents."
  //     },
  //     {
  //       id: 8,
  //       name: "Leather Goods",
  //       image: "https://picsum.photos/200/300?random=8",
  //       content: "Discover the craftsmanship of leather artisans with our range of high-quality leather goods, including wallets, bags, and belts."
  //     },
  //     {
  //       id: 9,
  //       name: "Knitted Items",
  //       image: "https://picsum.photos/200/300?random=9",
  //       content: "Stay cozy and stylish with our selection of knitted and crocheted items, including scarves, hats, and blankets, handmade with love."
  //     },
  //     {
  //       id: 10,
  //       name: "Glass Art",
  //       image: "https://picsum.photos/200/300?random=10",
  //       content: "Illuminate your space with our stunning handcrafted glass art pieces, including colorful vases, delicate ornaments, and intricate sculptures."
  //     },
  //     {
  //       id: 11,
  //       name: "Metalwork",
  //       image: "https://picsum.photos/200/300?random=11",
  //       content: "Discover the beauty of handcrafted metalwork with our collection of intricately designed sculptures, jewelry, and home decor items."
  //     },
  //     {
  //       id: 12,
  //       name: "Pottery",
  //       image: "https://picsum.photos/200/300?random=12",
  //       content: "Explore the world of pottery with our range of handmade clay creations, including mugs, bowls, and decorative ceramics."
  //     },
  //     {
  //       id: 13,
  //       name: "Fiber Art",
  //       image: "https://picsum.photos/200/300?random=13",
  //       content: "Experience the versatility of fiber art with our collection of woven tapestries, macrame wall hangings, and textile sculptures."
  //     },
  //     {
  //       id: 14,
  //       name: "Paper Crafts",
  //       image: "https://picsum.photos/200/300?random=14",
  //       content: "Get inspired by the creativity of paper craft artisans with our selection of handmade cards, journals, and origami creations."
  //     },
  //     {
  //       id: 15,
  //       name: "Weaving",
  //       image: "https://picsum.photos/200/300?random=15",
  //       content: "Immerse yourself in the art of weaving with our range of handwoven textiles, including rugs, table runners, and fabric wall hangings."
  //     },
  //     {
  //       id: 16,
  //       name: "Metal Jewelry",
  //       image: "https://picsum.photos/200/300?random=16",
  //       content: "Make a statement with our collection of handcrafted metal jewelry, featuring bold designs and intricate details, perfect for any occasion."
  //     },
  //     {
  //       id: 17,
  //       name: "Silk Painting",
  //       image: "https://picsum.photos/200/300?random=17",
  //       content: "Adorn your walls with the vibrant colors of silk painting, showcasing intricate designs and meticulous craftsmanship."
  //     },
  //     {
  //       id: 18,
  //       name: "Beadwork",
  //       image: "https://picsum.photos/200/300?random=18",
  //       content: "Discover the artistry of beadwork with our range of handmade jewelry, accessories, and decorative items, each piece meticulously crafted with beads of various shapes and colors."
  //     },
  //     {
  //       id: 19,
  //       name: "Quilting",
  //       image: "https://picsum.photos/200/300?random=19",
  //       content: "Experience the warmth and charm of handmade quilts with our collection of intricately stitched designs, perfect for adding a cozy touch to any room."
  //     },
  //     {
  //       id: 20,
  //       name: "Soap Making",
  //       image: "https://picsum.photos/200/300?random=20",
  //       content: "Indulge in luxurious handmade soaps crafted with natural ingredients and essential oils, leaving your skin feeling nourished and refreshed."
  //     }
  //     // Add more categories as needed
  //   ];
  return (
    <View className="flex flex-row justify-center flex-wrap pt-4 pb-8">
      {categories.map((data, index) => {
        return (
          <Link href={`/category/${data.name.replaceAll(" ","_")}`} className="mr-2 mb-2">
            <View
              key={index}
              className="bg-white shadow-md shadow-black p-2 rounded-md flex flex-col justify-center mx-2 my-4 w-[150px]"
            >
              <View>
                <Image
                  source={{ uri: data.image }}
                  style={{ height: 160, width: 135 }}
                  className="rounded-md"
                />
              </View>
              <View>
                <Text className="text-center text-[18px] font-bold mt-2">
                  {data.name}
                </Text>
              </View>
            </View>
          </Link>
        );
      })}
    </View>
  );
};

export default Card;
