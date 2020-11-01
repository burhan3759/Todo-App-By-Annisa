import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet, 
    Image, 
    TouchableOpacity 
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default AvoidView = () => {

    const navigation = useNavigation()

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ mobileNo, setMobileNo ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ state, setState ] = useState('')

    const [ forms, setForm ] = useState([])

    const onSubmit = () => {
    
    const id = Math.random()

    setForm([
        ...forms,
        {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            state: state,
        }
    ])
  }

  useEffect(() => {

    if(forms.length > 0) {
        navigation.navigate('FormData', {
            forms: forms
        })
    }

  }, [ forms ])

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
        <ScrollView>
            <View style ={{ flexShrink: 1 }}>
                <Image
                    style={styles.heroImage}
                    source={{
                        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F18%2FReact_Native_Logo.png&f=1&nofb=1',
                    }}
                />    
            </View>
            
            <View 
                style={{ 
                flexShrink: 1,
                margin: 15,
                justifyContent: "center",
                }}
            >

                <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#666666',
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                >
                <TextInput 
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="First Name"
                />
                </View>

                <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#666666',
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                >
                
                <TextInput 
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Last Name"
                />
                </View>
                
                <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#666666',
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                >
                
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                />
                </View>

                <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#666666',
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                >
                
                <TextInput 
                    value={mobileNo}
                    onChangeText={setMobileNo}
                    placeholder="Mobile No"
                    keyboardType="phone-pad"
                />
                </View>

                <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#666666',
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                >
                
                <TextInput 
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Address"
                />
                </View>

                <View
                style={{
                    borderWidth: 0.5,
                    borderColor: '#666666',
                    borderRadius: 5,
                    marginBottom: 10,
                }}
                >
                
                <TextInput 
                    value={state}
                    onChangeText={setState}
                    placeholder="State"
                />
                </View>
            </View>

            <TouchableOpacity 
                style={{ backgroundColor: 'yellow', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={onSubmit}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </ScrollView>


    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    heroImage: {
      width: '100%',
      height: 250,
      // resizeMode: 'contain'
    }
});