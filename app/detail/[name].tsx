import {View, Text, StyleSheet} from "react-native";
import {useLocalSearchParams} from "expo-router";

const PokemonDetail = () => {
    const {name} = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text>
                This is {name} detail
            </Text>
        </View>
    )
}

export default PokemonDetail

const styles = StyleSheet.create({
    container: {
        flex:  1,
        alignItems: 'center',
        justifyContent: "center"
    }
})