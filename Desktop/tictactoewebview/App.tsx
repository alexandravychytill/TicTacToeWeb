import React from 'react';
import { View, Text} from 'react-native';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    },
    webview:{
      flex: 1,
    }
});

export default function App() {
    return (
    <View style={styles.container}>
       <WebView
       style={styles.webview}
       source={{ uri: 'https://alexandravychytill.github.io/TicTacToeWeb/' }}
     />
    </View>
);
}
