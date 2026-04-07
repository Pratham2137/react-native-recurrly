import { Stack } from "expo-router";
import "@/global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
