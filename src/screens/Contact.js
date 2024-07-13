import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title_product}>Liên Hệ</Text>
      <Image
        source={{ uri: 'https://www.web24zone.com/wp-content/uploads/2022/09/2c778e_89d09c380b7b4a09bcdbcb329c4734b3_mv2.gif' }}
        style={styles.image}
      />
      <View style={styles.buttonStyle}>
        <Button
          title="Về trang chủ"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Sản phẩm"
          onPress={() => navigation.navigate('Product')}
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
  buttonStyle: {
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
  },
  image: {
    height: 180,
    objectFit: 'contain',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductsScreen;
