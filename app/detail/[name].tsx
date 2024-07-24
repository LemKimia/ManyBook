import {View, Text, StyleSheet} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {getPokemonDetails} from "@/utils/api/api";
import {useLocalSearchParams} from "expo-router";

const PokemonDetail = () => {
    const {name} = useLocalSearchParams()


    const {isLoading, error, data} = useQuery(
        {queryKey: ['PokemonDetail', name], queryFn: () => getPokemonDetails(name)},
    )

    if (isLoading) {
        return <View style={styles.container}><Text>Loading...</Text></View>
    }

    if (error) {
        return <View style={styles.container}><Text>Something is Wrong. {error.message}</Text></View>
    }


    return (
        <View style={styles.container}>
            {data && (
                <Text>
                    This is {data.name} detail
                </Text>
            )}
        </View>
    )
}

export default PokemonDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})