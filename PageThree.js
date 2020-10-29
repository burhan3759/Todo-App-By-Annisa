import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default PageThree = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>
        Hello Page Three
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
          width: 200,
          
        }}
        onPress={() => navigation.navigate('PageOne')}
      >
        <Text
          style={{
            color: 'white'
          }}
        >
          Go To Main Page
        </Text>
      </TouchableOpacity>
    </View>
  )
}
