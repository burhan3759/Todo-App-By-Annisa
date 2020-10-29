import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';

const PageOne = () => {

  const navigation = useNavigation()

  return (
    <View>
      <Text>
        Hello Page One
      </Text>
      
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
          width: 100,
        }}
        onPress={ () => navigation.navigate('PageTwo', {
          pageTitle: 'Hello Annisa',
          firstName: 'My ID is 27'
        }) }
      >
        <Text>
          Next Page
        </Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default PageOne
