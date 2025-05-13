import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const validateEmail = (email) => {
          const regex = /\S+@\S+\.\S+/;
              return regex.test(email);
                };

                  const handleLogin = () => {
                      if (!email || !password) {
                            Alert.alert('Error', 'Both fields are required');
                                  return;
                                      }

                                          if (!validateEmail(email)) {
                                                Alert.alert('Error', 'Invalid email address');
                                                      return;
                                                          }

                                                              // Placeholder: replace this with actual API login logic
                                                                  Alert.alert('Success', 'You have successfully logged in!');
                                                                      console.log('Login data:', { email, password });
                                                                        };

                                                                          return (
                                                                              <View style={styles.container}>
                                                                                    <Text style={styles.title}>Login</Text>

                                                                                          <TextInput
                                                                                                  style={styles.input}
                                                                                                          placeholder="Email"
                                                                                                                  value={email}
                                                                                                                          onChangeText={setEmail}
                                                                                                                                  keyboardType="email-address"
                                                                                                                                          autoCapitalize="none"
                                                                                                                                                />

                                                                                                                                                      <TextInput
                                                                                                                                                              style={styles.input}
                                                                                                                                                                      placeholder="Password"
                                                                                                                                                                              value={password}
                                                                                                                                                                                      onChangeText={setPassword}
                                                                                                                                                                                              secureTextEntry
                                                                                                                                                                                                    />

                                                                                                                                                                                                          <Button title="Login" onPress={handleLogin} />

                                                                                                                                                                                                                <Text style={styles.signupText}>
                                                                                                                                                                                                                        Don’t have an account? <Text style={styles.link}>Sign up</Text>
                                                                                                                                                                                                                              </Text>
                                                                                                                                                                                                                                  </View>
                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                    const styles = StyleSheet.create({
                                                                                                                                                                                                                                      container: {
                                                                                                                                                                                                                                          padding: 24,
                                                                                                                                                                                                                                              flex: 1,
                                                                                                                                                                                                                                                  justifyContent: 'center',
                                                                                                                                                                                                                                                      backgroundColor: '#f0f0f0',
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                          title: {
                                                                                                                                                                                                                                                              fontSize: 24,
                                                                                                                                                                                                                                                                  marginBottom: 24,
                                                                                                                                                                                                                                                                      textAlign: 'center',
                                                                                                                                                                                                                                                                          fontWeight: 'bold',
                                                                                                                                                                                                                                                                              color: '#333',
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                  input: {
                                                                                                                                                                                                                                                                                      backgroundColor: '#fff',
                                                                                                                                                                                                                                                                                          marginBottom: 12,
                                                                                                                                                                                                                                                                                              padding: 12,
                                                                                                                                                                                                                                                                                                  borderRadius: 8,
                                                                                                                                                                                                                                                                                                      fontSize: 16,
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                          signupText: {
                                                                                                                                                                                                                                                                                                              marginTop: 16,
                                                                                                                                                                                                                                                                                                                  textAlign: 'center',
                                                                                                                                                                                                                                                                                                                      fontSize: 14,
                                                                                                                                                                                                                                                                                                                          color: '#666',
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                              link: {
                                                                                                                                                                                                                                                                                                                                  color: '#0066cc',
                                                                                                                                                                                                                                                                                                                                      textDecorationLine: 'underline',
                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                        });