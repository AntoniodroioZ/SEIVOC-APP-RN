import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Inicio from "./screens/Inicio";
import Login from "./screens/Login";
import Registro from "./screens/Registro";
import RutaActivity from "./screens/RutaActivity";
import RegistroComplementario from "./screens/RegistroComplementario";
import ViewMainData from "./screens/ViewMainData";

import * as RN from 'react-native';

const Stack = createNativeStackNavigator();

const StackMain = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="ViewMainData" component={ViewMainData} /> */}
            <Stack.Screen name="Inicio" options={{
                title: 'SEIVOC',
            }} component={Inicio} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro} />
            <Stack.Screen name="RutaActivity" component={RutaActivity} />
            <Stack.Screen name="RegistroComplementario" component={RegistroComplementario} />
            <Stack.Screen name="ViewMainData" component={ViewMainData} options={{
                title: "SEIVOC", headerBackVisible:false
            }} />
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <StackMain />
            {/* <ViewMainData /> */}
        </NavigationContainer>
    );
}

export default Navigation;