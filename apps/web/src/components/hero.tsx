export function Hero() {
	return (
		<div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center overflow-hidden px-10 pt-36 pb-20 max-md:px-6 max-md:pt-28 max-md:pb-16">
			{/* Giant background letters */}
			<span
				className="pointer-events-none absolute right-[-0.05em] top-1/2 -translate-y-[52%] select-none font-sans font-black leading-none tracking-[-0.05em] max-md:hidden"
				style={{
					fontSize: "clamp(18rem, 28vw, 36rem)",
					color: "transparent",
					WebkitTextStroke: "1px rgba(255,255,255,0.04)",
				}}
				aria-hidden="true"
			>
				GL
			</span>

			{/* Tag */}
			<p className="animate-fadeUp delay-100 mb-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.12em] text-lime">
				<span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
				Obsidian plugin · Language learning
			</p>

			{/* Headline */}
			<h1
				className="animate-fadeUp delay-180 mb-10 max-w-[960px] font-sans font-black leading-[0.92] tracking-[-0.04em] text-white text-[8rem] "
				// style={{ fontSize: "clamp(3.8rem, 9vw, 8rem)" }}
			>
				Turn any text
				<br />
				<span className="text-lime"> into flashcards</span>
				<br />
				<span className="font-extralight text-muted text-[4rem] tracking-[-0.04em]">
					in your Obsidian vault — <span className="italic">instantly</span>
				</span>
			</h1>

			{/* Subtitle */}
			<p
				className="animate-fadeUp delay-260 mb-12 max-w-[460px] leading-[1.65] text-muted font-outfit"
				style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
			>
				Highlight any word in your notes or on any webpage. Glossa generates a
				structured flashcard and saves it as markdown in your Obsidian vault —
				no copy-pasting, no switching apps.
			</p>

			{/* CTA Buttons */}
			<div className="animate-fadeUp delay-340 flex flex-wrap items-center gap-5">
				<a
					href="#install"
					className="rounded-[3px] bg-lime px-8 py-[0.9rem] font-mono text-sm font-medium uppercase tracking-[0.1em] text-bg no-underline transition-opacity hover:opacity-85"
				>
					Install for free →
				</a>
				<a
					href="#features"
					className="rounded-[3px] border border-faint bg-transparent px-8 py-[0.9rem] font-mono text-sm uppercase tracking-[0.1em] text-muted no-underline transition-all hover:border-muted hover:text-white"
				>
					See features
				</a>
			</div>

			{/* Stats */}
			<div className="animate-fadeUp delay-420 mt-20 flex flex-wrap gap-12 border-t border-white/[0.07] pt-10">
				<div>
					<div className="font-sans text-3xl font-bold leading-none tracking-[-0.04em] text-white">
						Free<span className="text-lime">.</span>
					</div>
					<div className="mt-1 font-mono text-sm uppercase tracking-[0.1em] text-muted">
						Bring your own Gemini key
					</div>
				</div>
				<div>
					<div className="font-sans text-3xl font-bold leading-none tracking-[-0.04em] text-white">
						0<span className="text-lime">ms</span>
					</div>
					<div className="mt-1 font-mono text-sm uppercase tracking-[0.1em] text-muted">
						Backend latency · no proxy
					</div>
				</div>
				<div>
					<div className="font-sans text-3xl font-bold leading-none tracking-[-0.04em] text-white">
						100<span className="text-lime">%</span>
					</div>
					<div className="mt-1 font-mono text-sm uppercase tracking-[0.1em] text-muted">
						Your vault · your data
					</div>
				</div>
			</div>
		</div>
	);
}
