import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export default FormData = () => {
  
  const navigation = useNavigation()
  const route = useRoute()

  const { forms } = route.params

  return (
    <View>

      {
        forms.map((each, key) => (
          <Text key={key}>
            Hello {each.firstName} {each.lastName}
          </Text>
        ))
      }
    </View>
  )
}