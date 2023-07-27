import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [text, setText] = useState()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput value={text} onChangeText={text => setText(text)} placeholder='Enter your url' />
      <Text>
        {
          text && JSON.stringify(new URL(text), null, 2)
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 10
  }
});
