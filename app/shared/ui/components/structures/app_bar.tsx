import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import Spacer from "../foundations/spacer";
import { Bars3CenterLeftIcon, BellIcon, UserCircleIcon } from "react-native-heroicons/solid";

export default function AppBar() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
            <View style={styles.leftActionsContainer}>
                <TouchableOpacity>
                    <Bars3CenterLeftIcon fill="black" size={25} />;
                </TouchableOpacity>
            </View>
            <View style={styles.rightActionsContainer}>
               <TouchableOpacity>
                    <BellIcon fill="black" size={25} />;
               </TouchableOpacity>
               <Spacer horizontal={15}/>
               <TouchableOpacity>
                    <UserCircleIcon fill="black" size={25} />;
               </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: '#fff',
    },
    leftActionsContainer: {},
    rightActionsContainer: {
        flexDirection: "row"
    }
});