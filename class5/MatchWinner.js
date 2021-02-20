import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export default MatchWinner = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { group, teamName } = route.direct

  useLayoutEffect(() => {

    navigation.setOptions({
      title: group,
    })

  }, [])

  const [ myName, SetTeamName ] = useState('')

  useEffect(() => {

    if(route.direct) {
   
      SetTeamName(teamName)
    }

  }, [ route.directs ])

  return (
    <View>
      <Text>
        Team {myName}
      </Text>
    </View>
  )
}
