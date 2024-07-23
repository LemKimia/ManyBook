import {Stack, useLocalSearchParams} from "expo-router";

export default function RootLayout() {
    const {name} = useLocalSearchParams()

    return (
        <Stack>
            <Stack.Screen name="[name]" options={{ title: `${name} detail`}} />
        </Stack>
    );
}
