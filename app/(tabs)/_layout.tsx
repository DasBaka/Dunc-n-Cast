import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
			}}>
			<Tabs.Screen
				name="library"
				options={{
					title: 'Library',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'library' : 'library-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="filter"
				options={{
					title: 'Filter',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'funnel' : 'funnel-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Player',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'musical-notes' : 'musical-notes-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="playlist"
				options={{
					title: 'Playlist',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'list' : 'list-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: 'Settings',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'settings' : 'settings-outline'}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
