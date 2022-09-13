import  React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
export default function ButtonX({text, onPress})
{
  return(
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}> {text}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  
  buttonText:{
    color: "black",
    fontWeight: "bold",
    backgroundColor: 'red',
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    

  },
  buttonContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
  },
})
