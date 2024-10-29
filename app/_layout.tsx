import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import { PortalProvider, TamaguiProvider } from 'tamagui';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { tamaguiConfig } from '../tamagui.config';

// ignore unnecessary warning... https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting/#reduced-motion-setting-is-enabled-on-this-device
LogBox.ignoreLogs(['[Reanimated] Reduced motion setting is enabled on this device.']);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	});

	useEffect(() => {
		if (loaded) {
			// can hide splash screen here
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		// add this
		<TamaguiProvider
			config={tamaguiConfig}
			defaultTheme={colorScheme!}>
			<ThemeProvider
				value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
				children={
					<PortalProvider shouldAddRootHost>
						<Stack>
							<Stack.Screen
								name="(tabs)"
								options={{ headerShown: false }}
							/>
							{/* <Stack.Screen
						name="modal"
						options={{ presentation: 'modal' }}
						/> */}
						</Stack>
					</PortalProvider>
				}
			/>
		</TamaguiProvider>
	);
}
