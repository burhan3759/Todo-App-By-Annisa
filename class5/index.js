import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image,FlatList,TouchableOpacity } from 'react-native';
// import SvgUri from 'react-native-svg-uri';
// import testSvg from './test.svg';

export default ClassFive = () => {


  const [upcomingTenMatches, setUpcomingTenMatches] = useState([])
  const [Country, setCountry] = useState([])

  const REAL_MADRID = 86

  const getImgurToken = () => {
    fetch(`https://api.football-data.org/v2/competitions/PL/matches/?matchday=10&limit=5`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 'd6658f7613f64867acf9f606a40d431b',
      }
    })
    .then(function (resp) {

      // Return the response as JSON
      const response = resp.json();

      return response
    })
    .then(function (data) {
      // Log the API data
      //console.log('data: ', data);

      const getMatchesOnly = data.matches

      if(getMatchesOnly) {
        setUpcomingTenMatches(getMatchesOnly)
      }
    })
    .catch(function (err) {

      // Log any errors
      console.log('something went wrong', err);
      setUpcomingTenMatches([])
    });
  }

  const getCountry = () => {
    fetch(`https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 'd6658f7613f64867acf9f606a40d431b',
      }
    })
    .then(function (resp) {

      // Return the response as JSON
      const response = resp.json();

      return response
    })
    .then(function (data) {
      // Log the API data
    //   console.log('data: ', data2.matches);

      const getMatchesOnly = data.matches

      if(getMatchesOnly) {
        setCountry(getMatchesOnly)
      }
    })
    .catch(function (err) {

      // Log any errors
      console.log('something went wrong', err);
      setCountry([])
    });
  }


  useEffect(() => {
    getImgurToken()
  }, [])
  useEffect(() => {
    getCountry()
  }, [])

    

//         {/* Today Lesson */}
//         {/* API - Free API from internet */}
//         {/* FETCH - this is used to call the api */}

//         {/* What need to have
//             1. Oppenant name, country
//             2. Date of calsh
//             3. Show image of competition flag
//             4. load 5 first, then have a button to load another 5
//         */}

//     </View>
//     </ScrollView>
//   )
// const renderItem = ({ item }) => {
//     console.log(item)
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingLeft: 20 }}>
              
                <Text style={{ marginTop: 20 }}>
                    Football Matches
                </Text>
        
                {/* TODO: Loop the api */}
                {
        
                  upcomingTenMatches.map((each, key) => (
                    
                    <View
                      key={key}
                    >
                    
                      {/* <Image 
                        source={{ uri: each.matches.area.ensignUrl }}
                        style={{ resizeMode: 'contain', height: 200, width: 200 }}
                      /> */}
                      
                      <Text>
                        {/* Flag URL: {each.competition.area.ensignUrl} */}
                      </Text>
                        
                      <Text>
                        {key+1} {each.group} {/* ( {each.competition.area.name} ) */}
                       
                        
                      </Text>
                      <Text>
                        AWAY TEAM : {each.awayTeam.name}
                      </Text>
                      <Text>
                        HOME TEAM : {each.homeTeam.name}
                        
                      </Text>
                      <Text>Date Of Clash : {each.season.startDate}</Text>
                      
        
                      
                    </View>
                   
                  ))
                  
                }
        </View>
        <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                alignItems: 'center',
                padding: 10,
                marginTop: 10,
                width: 100,
              }}
             
            >
              <Text>
                Next Page
              </Text>
    </TouchableOpacity>
     </ScrollView>
      
    )
  
}
