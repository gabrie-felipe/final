import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CadastroScreen } from "../screens/CadastroScreen";
import { HomeScreen } from "../screens/HomeScreen";


const Stack = createNativeStackNavigator()

export const RootNavigation = () => {

    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Cadastro'} component={CadastroScreen} />
        </Stack.Navigator>
    );
};