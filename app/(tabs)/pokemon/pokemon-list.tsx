import {View, Text, StyleSheet, Pressable} from "react-native";
import {router} from "expo-router";

const PokemonList = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Pressable onPress={()=>router.push({
                pathname: "/detail/[name]",
                params: {name: "Pikachu"}
            })}>
                <Text>Go to Pikachu</Text>
            </Pressable>
        </View>
    )
}

export default PokemonList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
