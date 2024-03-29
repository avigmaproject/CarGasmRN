import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from "react-native-paper";
import Label from "../components/Label";
export default function TextBox(props) {
  return (
    <View style={{ marginTop: 10 }}>
      <TextInput
        returnKeyType="done"
        mode="outlined"
        value={props.value}
        autoCapitalize="none"
        label={props.label}
        onChangeText={props.onChangeText}
        outlineColor={"#424242"}
        theme={{
          colors: {
            primary: "#424242",
            background: "#fff",
            placeholder: "#424242"
          },
          roundness: 5,
        }}
        right={props.right}
        secureTextEntry={props.secureTextEntry}
        editable={!props.editable}
        underlineColor="transparent"   // add this
        keyboardType={props.keyboardType}
        {...props}
        error={props.error}
      />

      {props.error && <Label 
        color="red"
        fontSize={15}
        label={props.error} 
      />}
    </View>
  )
}