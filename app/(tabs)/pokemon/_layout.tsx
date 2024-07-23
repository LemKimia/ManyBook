import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="pokemon-list" options={{
                headerTitle: "Pokemon List"
            }}/>
        </Stack>
    );
}
