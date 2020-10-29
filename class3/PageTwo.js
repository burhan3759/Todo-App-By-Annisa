import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text , TouchableOpacity} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export default PageTwo = () => {
  
  const navigation = useNavigation()
  const route = useRoute()

  const { pageTitle, firstName } = route.params

  useLayoutEffect(() => {

    navigation.setOptions({
      title: pageTitle,
    })

  }, [])

  const [ myName, SetMyName ] = useState('')

  useEffect(() => {

    if(route.params) {
      SetMyName(firstName)
    }

  }, [ route.params ])

  return (
    <View>
      
      <Text>
        Hello {myName}
      </Text>
      
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
          width: 110,
        }}
        onPress={ () => navigation.navigate('PageThree') }
      >
        <Text
          style={{
            color: 'white'
          }}
        >
          Go To Page 3
        </Text>
      </TouchableOpacity>
    </View>
  )
}
