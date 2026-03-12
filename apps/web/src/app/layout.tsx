import type { Metadata } from "next";
import { Climate_Crisis, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";

const climateCrisis = Climate_Crisis({
	variable: "--font-climate-crisis",
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
});

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	display: "swap",
});

const dmMono = DM_Mono({
	variable: "--font-dm-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "glossa.md — Language flashcards for Obsidian",
	description:
		"Highlight any word in your notes or on any webpage. Glossa generates a structured flashcard and saves it as markdown in your Obsidian vault.",
	keywords: [
		"obsidian",
		"flashcards",
		"language learning",
		"AI",
		"vocabulary",
		"gemini",
		"plugin",
	],
	openGraph: {
		title: "glossa.md — Language flashcards for Obsidian",
		description:
			"Highlight any word. Get a flashcard in your vault, instantly.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${outfit.variable} ${dmMono.variable} ${climateCrisis.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
