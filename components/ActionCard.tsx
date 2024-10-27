import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ActionCard() {
  function openWebSite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>What's New in React Native?</Text>
        </View>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1696358286150-532574217751?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            React Native is a framework for building native mobile apps using JavaScript. Learn what's new in the latest release.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebSite('https://reactnative.dev/')}>
            <Text style={styles.linkText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebSite('https://reactnative.dev/')}>
            <Text style={styles.linkText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 12,
    overflow: 'hidden',
  },
  elevatedCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  bodyContainer: {
    padding: 15,
  },
  bodyText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  linkText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#007BFF',
  },
});

