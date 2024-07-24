import {View, Text, StyleSheet, Pressable} from "react-native";
import {router} from "expo-router";
import {useQuery} from "@tanstack/react-query";
import {getPokemon} from "@/utils/api/api";

const PokemonList = () => {
    const {isLoading, error, data} = useQuery({queryKey: ['pokemon'], queryFn: getPokemon})

    if (isLoading) {
        return <View style={styles.container}><Text>Loading...</Text></View>
    }

    if (error) {
        return <View style={styles.container}><Text>Something is Wrong, Error : {error.message}</Text></View>
    }

    return (
        <View style={styles.container}>
            {data?.results.map((pokemon) => (
                <Pressable key={pokemon.name} onPress={()=>router.push({
                    pathname: "/detail/[name]",
                    params: {name: `${pokemon.name}`}
                })}>
                    <Text>{pokemon.name}</Text>
                </Pressable>
            ))}
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
