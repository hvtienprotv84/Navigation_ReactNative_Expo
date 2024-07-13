import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FullWindowOverlay } from "react-native-screens";

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title_product}>Trang chủ</Text>
      <Image
        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/ddjk36s-36e736ed-a3f5-4ead-bc5a-2055ad79d8a7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGRqazM2cy0zNmU3MzZlZC1hM2Y1LTRlYWQtYmM1YS0yMDU1YWQ3OWQ4YTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pgxwYJcrj6fKZmowAdX5HbdvaHWItqxLpSim41_sgC4' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/dh28uuh-2afd5ded-7cd7-4b17-a3ef-d3fa0ab6c364.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGgyOHV1aC0yYWZkNWRlZC03Y2Q3LTRiMTctYTNlZi1kM2ZhMGFiNmMzNjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aewYgvGauGzDVELK8foJ_CjHL4b9rYNHSil9zFvc5pQ' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/dfredg5-0a60e875-646e-4d6c-bb91-73086f012808.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGZyZWRnNS0wYTYwZTg3NS02NDZlLTRkNmMtYmI5MS03MzA4NmYwMTI4MDguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LGN_eGL7dT0xRj4oRbyRRVay-pHbyiXHru7YoVPcRro' }}
        style={styles.image}
      />
      <View style={styles.buttonStyle}>
        <Button
          title="Sản phẩm"
          onPress={() => navigation.navigate('Product')}
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
