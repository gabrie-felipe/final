import { useState } from "react";
import { Text, View, Button } from "react-native";
import { Paragraph, TextInput,  } from "react-native-paper";
import { styles } from "../lib/styles";

export const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [intro, setIntro] = useState("");
  const [problema, setProblema] = useState("");
  const [argu1, setArgu1] = useState("");
  const [argu2, setArgu2] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Modelo de Introdução</Text>

      <Paragraph style={styles.paragraph}>
        Conhecida como "Cidadã", por ter sido concebida no processo de
        redemocratização, a Constituição Federal foi promulgada em 1988 com a
        promessa de assegurar os direitos de todos os brasileiros. No entanto,
        apesar da garantia constitucional, nota-se que {nome} configura-se como
        uma falha no princípio da isomonia, pois {intro}. Sendo assim,
        percebe-se que o(a) {problema} possui raízes amarga no País motivadas
        não só pelo(a) {argu1}, mas também pelo(a) {argu2}.
      </Paragraph>

      <Text>Digite o tema do texto</Text>
      <TextInput label="Escreva o Tema" value={nome} onChangeText={setNome} />
      <Text>Digite uma introdução para o tema</Text>
      <TextInput
        label="Escreva a Introdução"
        value={intro}
        onChangeText={setIntro}
      />
      <Text>Digite o problema do tema</Text>
      <TextInput
        label="Escreva um Problema"
        value={problema}
        onChangeText={setProblema}
      />
      <Text>Digite o primeiro argumento</Text>
      <TextInput
        label="Escreva o Argumento"
        value={argu1}
        onChangeText={setArgu1}
      />
      <Text>Digite o segundo argumento</Text>
      <TextInput
        style={styles.digite}
        label="Escreva o Argumento"
        value={argu2}
        onChangeText={setArgu2}
      />

      <Button
        title="VOlte ao Inicio"
        
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
