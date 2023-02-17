import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {colors} from '../../globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesScreen from '../../views/screens/favorites/FavoritesScreen';
import {RecentStackNavigator} from './RecentStackNavigator';
import {TouchableOpacity} from 'react-native';
import {HeaderIcon} from '../../views/components/HeaderIcon/HeaderIcon';

export const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: colors.BLACK}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.BLACK,
          borderTopColor: colors.GRAY,
        },
        tabBarActiveTintColor: colors.YELLOw,
        tabBarLabelStyle: {fontSize: 14},
      }}>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              name="home-outline"
              style={{
                color: focused ? colors.YELLOw : colors.WHITE,
                fontSize: 20,
                marginTop: 5,
              }}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          headerStyle: {backgroundColor: colors.BLACK},
          headerShown: true,
          headerTitleStyle: {color: colors.WHITE},
          headerTitleAlign: 'center',
          headerRight: props => <HeaderIcon />,
          title: 'Favorites',
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart-outline"
              style={{
                color: focused ? colors.YELLOw : colors.WHITE,
                fontSize: 20,
                marginTop: 5,
              }}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="RecentStackNavigator"
        component={RecentStackNavigator}
        options={{
          title: 'Recent',
          tabBarIcon: ({focused}) => (
            <Icon
              name="play-circle-outline"
              style={{
                color: focused ? colors.YELLOw : colors.WHITE,
                fontSize: 20,
                marginTop: 5,
              }}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={HomeStackNavigator}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) => (
            <Icon
              name="search-outline"
              style={{
                color: focused ? colors.YELLOw : colors.WHITE,
                fontSize: 20,
                marginTop: 5,
              }}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
