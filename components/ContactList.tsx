import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList = [
    {
      uid: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      status: 'Exploring new coding techniques every day',
    },
    {
      uid: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      status: 'Teaching makes me a better coder',
    },
    {
      uid: 3,
      name: 'Catherine Lee',
      email: 'catherine.lee@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      status: 'Always learning, always growing',
    },
    {
      uid: 4,
      name: 'David Kim',
      email: 'david.kim@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      status: 'Code, coffee, repeat!',
    },
    {
      uid: 5,
      name: 'Emma Brown',
      email: 'emma.brown@example.com',
      photoUrl: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68f',
      status: 'Turning ideas into reality with code',
    },
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Contact List</Text>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {contactList.map(({ uid, name, email, photoUrl, status }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: photoUrl }} style={styles.userImage} />
            <View style={styles.cardText}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userEmail}>{email}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    color: '#333',
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  cardText: {
    marginLeft: 12,
    flexShrink: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 2,
  },
  userStatus: {
    fontSize: 13,
    color: '#95A5A6',
  },
});
