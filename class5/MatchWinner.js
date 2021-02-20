import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export default MatchWinner = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { group, teamName } = route.params

  useLayoutEffect(() => {

    navigation.setOptions({
      title: group,
    })

  }, [])

  const [ myName, SetTeamName ] = useState('')

  useEffect(() => {

    if(route.params) {
      SetTeamName(group)
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
