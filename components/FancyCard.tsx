import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1696358286150-532574217751?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Fall in Canada</Text>
          <Text style={styles.cardLabel}>British Columbia, BC</Text>
          <Text style={styles.cardDescription}>
            Fall in Vancouver’s valleys is a breathtaking tapestry of colors that
            transforms the landscape into a scenic wonderland. Cooler temperatures and misty mornings bring out brilliant shades in the trees, set against evergreen forests and a mountainous backdrop.
          </Text>
          <Text style={styles.cardFooter}>British Columbia, BC</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headingText: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 12,
    marginHorizontal: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardElevated: {
    paddingBottom: 12,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardBody: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 12,
    color: '#A0AEC0',
    fontStyle: 'italic',
  },
});
