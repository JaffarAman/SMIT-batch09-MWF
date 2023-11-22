import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  // const pressTitle = (e) => {
  //   // console.log("pressTitlepressTitle" , e.);
  // };
  const [userName, setUserName] = useState("Jaffar");

  const [inputValue, setinputValue] = useState("Jaffar");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    console.log(inputValue);
    todo.push(inputValue);
    setTodo([...todo]);
    setinputValue("");
    // https://react-native-async-storage.github.io/async-storage/docs/usage/
  };

  console.log("todo", todo);
  return (
    // <View style={{
    //   backgroundColor :"red",
    //   height :"100%",
    //   paddingTop : 50,

    // }} >
    //   <Text style={{color :"white" , fontSize :25}} >HELLO WORLD </Text>
    // </View>
    // <View style={{ backgroundColor: "red", height: "100%" }}>
    //   <View style={{ backgroundColor: "orange", flex: 1 }}>
    //     <Text>1</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "purple",
    //       flex: 1,
    //       alignItems: "center",
    //       justifyContent: "center",
    //       // flexDirection: "row",
    //     }}
    //   >
    //     <Text
    //       style={{ fontSize: 50, backgroundColor: "white" }}
    //       onPress={(e) => {
    //         // console.log("HELLO REACT NATIVE");
    //         // alert("HELLO REACT NATIIVE")
    //         pressTitle(e);
    //       }}
    //       numberOfLines={1}
    //     >
    //       2
    //     </Text>
    //     {/* <TextInput
    //       placeholder="Enter your name"
    //       style={{
    //         borderWidth: 1,
    //         borderColor: "white",
    //         width: "100%",
    //         padding: 20,
    //         color: "white",
    //       }}
    //       onChangeText={(e) => setUserName(e)}
    //       value={userName}
    //       multiline
    //     /> */}
    //       <TextInput
    //       placeholder="Enter your password"
    //       style={{
    //         borderWidth: 1,
    //         borderColor: "white",
    //         width: "100%",
    //         padding: 20,
    //         color: "white",
    //       }}
    //       onChangeText={(e) => setUserName(e)}
    //       // value={userName}
    //       secureTextEntry={true}
    //       keyboardType="url"
    //     />
    //     {/* <Text style={{ fontSize: 50 }}>3</Text> */}
    //   </View>
    //   <View style={{ backgroundColor: "green", flex: 1 }}>
    //     <Text>3</Text>
    //   </View>
    // </View>

    <ScrollView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>TODO APP</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TextInput
          placeholder="Enter your Todo..."
          style={{
            borderWidth: 1,
            borderColor: "white",
            padding: 20,
            marginHorizontal: 20,
          }}
          onChangeText={(e) => setinputValue(e)}
          value={inputValue}
        />
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            flexDirection: "row",
            gap: 20,
          }}
        >
          <TouchableOpacity
            // onPress={onPressLearnMore}
            style={{
              backgroundColor: "white",
              width: 150,
              padding: 15,
              alignItems: "center",
            }}
            onPress={addTodo}
          >
            <Text style={{ fontSize: 18 }}>ADD TODO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={onPressLearnMore}
            style={{
              backgroundColor: "white",
              width: 150,
              padding: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>DELETE TODO</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 4, marginHorizontal: 20, marginTop: 20 }}>
        {todo.map((item, index) => {
          return (
            <Text style={{ fontSize: 30 }} key={index}>
              {item}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    paddingTop: 30,
  },
  heading: {},
});
