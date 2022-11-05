import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
	label: string;
	bgColor: string;
	right?: boolean;
};

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;
const Slide = ({ label, right, bgColor }: Props) => {
	const transform = [
		{ translateY: (SLIDE_HEIGHT - 100) / 2 },
		{
			translateX: right ? width / 2 - 50 : -width / 2 + 50,
		},
		{ rotate: right ? "-90deg" : "90deg" },
	];

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: bgColor,
					position: "relative",
				},
			]}>
			<View
				style={[
					styles.titleContainer,
					{
						transform,
					},
				]}>
				<Text style={styles.title}>{label}</Text>
			</View>
		</View>
	);
};

export default Slide;

const styles = StyleSheet.create({
	container: {
		width,
	},

	title: {
		fontSize: 80,
		lineHeight: 80,
		color: "white",
		textAlign: "center",
	},

	titleContainer: {
		height: 100,
		justifyContent: "center",
		transform: [{ translateY: (SLIDE_HEIGHT - 100) / 2 }],
	},
});
