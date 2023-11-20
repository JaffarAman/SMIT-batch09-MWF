import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <View style={{ backgroundColor: "yellow", flex: 2 }}>
        <Text>10</Text>
      </View>
      <View style={{ backgroundColor: "blue", flex: 1 }}>
        <Text>20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
