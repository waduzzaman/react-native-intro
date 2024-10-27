import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1696358286150-532574217751?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imgStyle}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Fall in Canada</Text>
          <Text style={styles.cardLabel}>British Colombia, BC</Text>
          <Text style={styles.cardDescription}>Fall in Vancouvers valleys is a breathtaking tapestry of colors that transforms the landscape into a scenic wonderland. With cooler temperatures and misty mornings, the trees shift into brilliant shades of red, orange, yellow, and gold, offering a stunning contrast against the evergreen forests and mountainous backdrop. The deciduous trees, especially maples, oaks, and aspens, are ablaze with warm hues that make a striking impression against the lush greens of conifers and ferns still holding onto summers last remnants. </Text>
          <Text style={styles.cardFooter}>British Colombia, BC</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 10,
      },
  card: {},
  cardElevated: {
    elevation: 10,
  },
  imgStyle: {
    width: 500,
    height: 250,
    padding: 5,
    margin: 8,
  },

  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 14,
  },  
  cardDescription: {
    fontSize: 14,
  },
  cardFooter:{
    fontSize: 14,
    fontStyle:'italic',
    color:'blue',
  }
});
