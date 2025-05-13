import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function SignupScreen() {
  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

        const validateEmail = (email) => {
            const regex = /\S+@\S+\.\S+/;
                return regex.test(email);
                  };

                    const handleSignup = () => {
                        if (!username || !email || !password) {
                              Alert.alert('Error', 'All fields are required');
                                    return;
                                        }

                                            if (!validateEmail(email)) {
                                                  Alert.alert('Error', 'Invalid email address');
                                                        return;
                                                            }

                                                                if (password.length < 6) {
                                                                      Alert.alert('Error', 'Password must be at least 6 characters');
                                                                            return;
                                                                                }

                                                                                    // Here you would normally send the data to an API
                                                                                        console.log('Signed up:', { username, email, password });
                                                                                            Alert.alert('Success', 'You have successfully signed up');
                                                                                              };

                                                                                                return (
                                                                                                    <View style={styles.container}>
                                                                                                          <Text style={styles.title}>Sign Up</Text>

                                                                                                                <TextInput
                                                                                                                        style={styles.input}
                                                                                                                                placeholder="Username"
                                                                                                                                        value={username}
                                                                                                                                                onChangeText={setUsername}
                                                                                                                                                      />
                                                                                                                                                            <TextInput
                                                                                                                                                                    style={styles.input}
                                                                                                                                                                            placeholder="Email"
                                                                                                                                                                                    value={email}
                                                                                                                                                                                            onChangeText={setEmail}
                                                                                                                                                                                                    keyboardType="email-address"
                                                                                                                                                                                                          />
                                                                                                                                                                                                                <TextInput
                                                                                                                                                                                                                        style={styles.input}
                                                                                                                                                                                                                                placeholder="Password"
                                                                                                                                                                                                                                        value={password}
                                                                                                                                                                                                                                                onChangeText={setPassword}
                                                                                                                                                                                                                                                        secureTextEntry
                                                                                                                                                                                                                                                              />

                                                                                                                                                                                                                                                                    <Button title="Sign Up" onPress={handleSignup} />

                                                                                                                                                                                                                                                                          <Text style={styles.loginText}>
                                                                                                                                                                                                                                                                                  Already have an account? <Text style={styles.link}>Login</Text>
                                                                                                                                                                                                                                                                                        </Text>
                                                                                                                                                                                                                                                                                            </View>
                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                              const styles = StyleSheet.create({
                                                                                                                                                                                                                                                                                                container: {
                                                                                                                                                                                                                                                                                                    padding: 24,
                                                                                                                                                                                                                                                                                                        flex: 1,
                                                                                                                                                                                                                                                                                                            justifyContent: 'center',
                                                                                                                                                                                                                                                                                                                backgroundColor: '#f2f2f2',
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
                                                                                                                                                                                                                                                                                                                                                                    loginText: {
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