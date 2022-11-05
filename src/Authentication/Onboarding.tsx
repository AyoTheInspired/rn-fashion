import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Slide, { SLIDE_HEIGHT } from "../components/Slide";

type Props = {};

const { width, height } = Dimensions.get("window");

const Onboarding = (props: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.slider}>
				<ScrollView
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}>
					<Slide label="Relaxed" />
					<Slide label="Playful" right />
					<Slide label="Excentric" />
					<Slide label="Funky" right />
				</ScrollView>
			</View>
			<View style={styles.footer}>
				<View
					style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }}
				/>

				<View
					style={{
						flex: 1,
						backgroundColor: "white",
						borderTopLeftRadius: 75,
					}}></View>
			</View>
		</View>
	);
};

export default Onboarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},

	slider: {
		height: SLIDE_HEIGHT,
		backgroundColor: "cyan",
		borderBottomRightRadius: 75,
	},

	footer: {
		flex: 1,
	},
});
