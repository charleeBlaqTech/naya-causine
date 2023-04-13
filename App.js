import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,
  SafeAreaView, Image, TouchableHighlight, TouchableNativeFeedback, Button, Platform
} from 'react-native';


export default function App() {

  const handlePress=()=>{
    console.log('text clicked');
  }
  return (
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },

  containerFlex:{
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#000',
  }
});
