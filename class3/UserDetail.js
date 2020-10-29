import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export default UserDetail = () => {
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
    </View>
  )
}
