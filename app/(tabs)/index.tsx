import {Text, View, StyleSheet, Pressable} from "react-native";
import {Link} from 'expo-router'

const Index = () => {
    return (
            <View style={styles.container}>
                <Text>Hello Good Morning Player</Text>
                <View>
                    <Text>Fun fact placeholder</Text>
                </View>
                <View>
                    <View>
                        <Link href={"/pokemon/pokemon-list"} asChild>
                            <Pressable>
                                <Text>See All</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View>
                        <Pressable>
                            <Text>Catch one!</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
    );
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})