import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'

export default MyFlatList = () => {

  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  useEffect(() => {

    setTimeout(() => {

      setIsLoading(false)

      setData(DATA)

    }, 4000)

  }, [])

  const EmptyList = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        {
          isLoading 
          ? <Text>Fetching Data</Text>
          : <Text>List is empty dude...</Text>
        }
        
      </View> 
    )
  }

  const renderItem = ({ item }) => {
    return (
      <Text>{item.title}</Text>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
      />

    </View>
      
  )
}