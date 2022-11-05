import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slide from "../components/Slide";

type Props = {};

const { width } = Dimensions.get("window");

const Onboarding = (props: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.slider}>
				<ScrollView horizontal snapToInterval={width} decelerationRate="fast">
					<Slide label="Relaxed" />
					<Slide label="Playful" right />
					<Slide label="Excentric" />
					<Slide label="Funky" right />
				</ScrollView>
			</View>

			<View style={styles.footer}></View>
		</View>
	);
};

export default Onboarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	slider: {
		flex: 0.61,
	},

	footer: {
		flex: 1,
	},
});
