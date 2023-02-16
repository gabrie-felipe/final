import { Button, Text, View } from "react-native";
import { styles } from "../lib/styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Para criar uma Introdução</Text>
      <Button
        title="Crie seu texto"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
};
