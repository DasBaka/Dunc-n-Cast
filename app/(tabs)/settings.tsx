import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text, View } from 'tamagui';

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<Ionicons
					size={310}
					name="code-slash"
					style={styles.headerImage}
				/>
			}>
			<View style={styles.titleContainer}>
				<Text>Explore</Text>
			</View>
			<Text>This app includes example code to help you get started.</Text>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
