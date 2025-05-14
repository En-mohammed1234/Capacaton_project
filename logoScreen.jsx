import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
      <View style={styles.container}>
            <Image
                    source={{ uri: 'https://github.com/En-mohammed1234/Capacaton_project/raw/main/logo_screen%20.png' }}
                            style={styles.logo}
                                  />
                                        <Text style={styles.title}>Welcome to the Home Screen!</Text>
                                              <Text style={styles.subtitle}>Explore the app features below.</Text>
                                                  </View>
                                                    );
                                                    };

                                                    export default HomeScreen;

                                                    const styles = StyleSheet.create({
                                                      container: {
                                                          flex: 1,
                                                              backgroundColor: '#f7f9fc',
                                                                  alignItems: 'center',
                                                                      justifyContent: 'center',
                                                                          padding: 20,
                                                                            },
                                                                              logo: {
                                                                                  width: 140,
                                                                                      height: 140,
                                                                                          borderRadius: 12,
                                                                                              marginBottom: 20,
                                                                                                },
                                                                                                  title: {
                                                                                                      fontSize: 26,
                                                                                                          fontWeight: 'bold',
                                                                                                              color: '#333',
                                                                                                                  marginBottom: 10,
                                                                                                                    },
                                                                                                                      subtitle: {
                                                                                                                          fontSize: 16,
                                                                                                                              color: '#777',
                                                                                                                                },
                                                                                                                                });