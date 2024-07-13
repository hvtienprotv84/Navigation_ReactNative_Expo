import React from "react";
import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Đường dẫn đến file JSON chứa dữ liệu sản phẩm
const productsData = require('../screens/product.json');

const ProductsScreen = () => {
  const navigation = useNavigation();

  // Render một sản phẩm
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title_product}>Danh sách sản phẩm</Text>
      <FlatList
        data={productsData.products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Hiển thị 2 sản phẩm trên mỗi hàng (thay vì 3)
        contentContainerStyle={styles.productList} // Thêm style để căn chỉnh khoảng cách giữa các sản phẩm
      />
      <View style={styles.buttonStyle}>
        <Button
          title="Về trang chủ"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Liên hệ"
          onPress={() => navigation.navigate('Contact')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title_product: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  productList: {
    justifyContent: 'space-around', // Canh giữa các hàng sản phẩm
    paddingVertical: 10,
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  buttonStyle: {
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
  },
});

export default ProductsScreen;
