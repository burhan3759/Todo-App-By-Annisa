import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet ,TouchableOpacity} from 'react-native';

export default ScrollViewTest = () => {
  return (
    <ScrollView>

      {/* Image */}
      <Image
        style={styles.heroImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1590698933947-a202b069a861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
        }}
      />

      <View style={styles.mainContainer} >
      
        {/* Title */}
        <Text style={styles.title} >
          Image Scrolling
        </Text>

        {/* Content */}
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>

        {/* Horizontal Image View */}
      
        <ScrollView 
          horizontal={true}
          style = {{ marginBottom: 20 }}
        >
          {
            [1,2,3,4,5,6].map((_, key) => (
              <View key={key} style={styles.imageContainer}>
                <Image
                  style={styles.images}
                  source={{
                    uri: `https://picsum.photos/id/${key}/200/300`,
                  }}
                />
              </View>
            ))
          }
        </ScrollView>

        {/* Content 2 */}
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>

        <Text style={{ marginTop: 20 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>

        {/* Button */}
        <View 
          style={styles.buttonContainer}
        >
          <TouchableOpacity style={styles.buttonStyle} >
            <Text style={{ color: 'white' }} >
              I LIKE
            </Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
    color: '#4d4d4d',
    marginBottom: 20,
  },
  imageContainer: {
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  buttonContainer: { 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 20, marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: 'blue',
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
});
