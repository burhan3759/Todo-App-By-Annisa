import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


// 1. Class component - NO MORE
// 2. Function component
// 3. Stateless component

// Style
// 1. Flex

const App = () => {

  return (

    <View
      style={styles.mainContainer}
    > 
      
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'space-evenly',
          alignItems: "center",
          flexDirection: 'row-reverse',
        }}
      >
        
        <Text
          style={[
            styles.primaryTextSytle,
            styles.helloWorldTextStyle,
          ]}
        >
          Hello World
        </Text>
        
        <Text
          style={[
            styles.primaryTextSytle,
            styles.welcomeToSkolaCodeText,
          ]}
        >
          Welcome to SkolaCode
        </Text>
      
      </View>
      
      <View
        style={{
          flex: 0.3, 
          backgroundColor: '#eeeeee',
          justifyContent: 'flex-end',
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        
        <Text
          style={[
            styles.primaryTextSytle,
            styles.welcomeToSkolaCodeText,
            { color: 'black', backgroundColor: '#666666' }
          ]}
        >
          Let's learn flex
        </Text>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,

    backgroundColor: 'red',
  },
  primaryTextSytle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  helloWorldTextStyle: {
    color: 'blue',
    backgroundColor: 'yellow'
  },
  welcomeToSkolaCodeText: {
    color: 'lightblue',
  },
})


export default App