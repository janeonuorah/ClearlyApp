import React from 'react';
import {
    View,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from '../components/styles';

import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import ChatListScreen from '../screens/ChatList';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            component={HomeScreen}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: COLORS.primary,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderRadius: 15,
                    height: 80,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
            }}
            backBehavior='order'
        >

            <Tab.Screen name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    name={focused ? 'home' : 'home-outline'}
                                    style={{
                                        fontSize: focused ? 40 : 30,
                                        color: COLORS.primary
                                    }}
                                />
                            </View>
                        );
                    }
                }
                }
            />

            <Tab.Screen name="Chat"
                component={ChatListScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    name={focused ? 'chat' : 'chat-outline'}
                                    style={{
                                        fontSize: focused ? 40 : 30,
                                        color: COLORS.primary
                                    }}
                                />
                            </View>
                        );
                    }
                }
                }
            />

            <Tab.Screen name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    name={focused ? 'cog' : 'cog-outline'}
                                    style={{
                                        fontSize: focused ? 40 : 30,
                                        color: COLORS.primary
                                    }}
                                />
                            </View>
                        );
                    }
                }
                }
            />
        </Tab.Navigator >
    )
}

export default BottomTabs