import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default Userlist = () => {
  const navigation = useNavigation()

  const [ firstName, setFirstName ] = useState('')

  return (
    <View>
      
      <Text>
        Users List
      </Text>

      <TextInput 
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter Name Here"
      />
      
      {
        [
          {
            pageTitle: 'Hello Adam',
            firstName: 'Adam'
          },
          {
            pageTitle: 'Hello Bob',
            firstName: 'Bob'
          },
          {
            pageTitle: 'Hello Calvin',
            firstName: 'Calvin'
          }
        ].map((each, key) => (
          
          <TouchableOpacity
            key={key}
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              padding: 10,
              marginTop: 10,
              width: 200,
              
            }}
            onPress={ () => navigation.navigate('UserDetail', {
              pageTitle: each.pageTitle,
              firstName: each.firstName
            }) }
          >
            <Text
              style={{
                color: 'white'
              }}
            >
              Choose {each.firstName}
            </Text>
          </TouchableOpacity>

        ))
      }

      {
        firstName !== '' &&
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            alignItems: 'center',
            padding: 10,
            marginTop: 10,
            width: 200,
            
          }}
          onPress={ () => navigation.navigate('UserDetail', {
            pageTitle: 'Hello ' + firstName,
            firstName: firstName
          }) }
        >
          <Text
            style={{
              color: 'white'
            }}
          >
            Choose {firstName}
          </Text>
        </TouchableOpacity>
      }
    </View>
  )
}
