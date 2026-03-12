import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Installation } from "@/components/installation";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { RevealProvider } from "@/components/reveal-provider";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<div className="mx-auto max-w-[1200px] border-t border-white/[0.07]" />
				<RevealProvider>
					<Features />
					<Installation />
					<Pricing />
				</RevealProvider>
			</main>
			<Footer />
		</>
	);
}
