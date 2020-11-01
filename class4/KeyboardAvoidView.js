import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'

export default AvoidView = () => {

  const [ myInput, setMyInput ] = useState('')
  const [ firsName, setFirsName ] = useState('')

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >

      <View style={{ margin: 15, flexGrow: 1 }}>

        <View style={{ flex: 1 }}>
          <Text>
            Hi Avoid View
          </Text>

          <Text>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>

          <Text>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>

        <View
          style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'flex-end' }}
        >

          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#666666',
              borderRadius: 5,
              marginTop: 20,
              justifyContent: 'center',
            }}
          >
            <TextInput 
              value={myInput}
              onChangeText={setMyInput}
              placeholder="Key in here"
            />
          </View>
        </View>
          
      </View>
    </KeyboardAvoidingView>
  )
}