export function Features() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <explanation>
		<section
			className="mx-auto max-w-[1200px] px-10 py-28 max-md:px-6 max-md:py-20"
			id="features"
		>
			<div className="reveal">
				<p className="mb-5 font-mono text-sm uppercase tracking-[0.18em] text-lime">
					Features
				</p>
				<h2
					className="font-sans font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
					style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
				>
					Everything you need.
					<br />
					<span className="font-extralight text-muted">
						Nothing you don&apos;t.
					</span>
				</h2>
			</div>

			{/* Bento grid */}
			<div className="reveal mt-16 grid grid-cols-12 gap-px overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.07] max-[900px]:grid-cols-1">
				{/* 01 · Core (large left) */}
				<div className="col-span-5 row-span-2 bg-bg2 p-[2.2rem] transition-colors hover:bg-bg3 max-[900px]:col-span-1 max-[900px]:row-span-1">
					<div className="mb-2.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-lime">
						01 · Core
					</div>
					<div className="mb-2 font-sans text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
						AI-generated flashcard notes
					</div>
					<div className="text-base font-light leading-[1.6] text-muted">
						Highlight any word or phrase, right-click, done. Gemini returns the
						dictionary form, grammar class, translation, and example sentences —
						all saved as a markdown note in your vault.
					</div>
					{/* Mini flashcard */}
					<div className="mt-7 rounded-md border border-white/[0.12] bg-bg3 p-5">
						<div className="font-sans text-2xl font-bold leading-none tracking-[-0.03em] text-white">
							haluaminen
						</div>
						<div className="mt-1 font-mono text-sm uppercase tracking-[0.1em] text-lime">
							verb · infinitive
						</div>
						<div className="my-3 h-px bg-white/[0.07]" />
						<div className="text-base font-light italic text-muted">
							to want, to desire
						</div>
						<div className="mt-2.5 border-l-2 border-lime/25 pl-2.5 text-sm leading-[1.5] text-white/[0.35]">
							Haluan oppia suomea joka päivä.
						</div>
					</div>
				</div>

				{/* 02 · Vault-native */}
				<div className="col-span-7 bg-bg2 p-[2.2rem] transition-colors hover:bg-bg3 max-[900px]:col-span-1">
					<div className="mb-2.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-lime">
						02 · Vault-native
					</div>
					<div className="mb-2 font-sans text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
						Backlinks, not just cards
					</div>
					<div className="text-base font-light leading-[1.6] text-muted">
						Selected text becomes a wiki-link. Your reading notes stay connected
						to every word you learned — visible in your graph, searchable,
						linked forever.
					</div>
					<div className="mt-4 rounded bg-bg p-4 font-mono text-sm leading-[1.85] text-white/40">
						<span className="text-white/20"># In your reading note</span>
						<br />
						Luin [[<span className="text-lime">haluaminen</span>
						|haluamisesta]] tänään.
						<br />
						<br />
						<span className="text-white/20"># Graph view</span>
						<br />
						[[<span className="text-lime">haluaminen</span>]] ←{" "}
						<span className="text-[#a8d8a8]">Finnish notes.md</span>
						<br />
						[[<span className="text-lime">kirjoittaa</span>]] ←{" "}
						<span className="text-[#a8d8a8]">Book review.md</span>
					</div>
				</div>

				{/* 03 · Flexible */}
				<div className="col-span-4 bg-bg2 p-[2.2rem] transition-colors hover:bg-bg3 max-[900px]:col-span-1">
					<div className="mb-2.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-lime">
						03 · Flexible
					</div>
					<div className="mb-2 font-sans text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
						Custom fields & prompts
					</div>
					<div className="text-base font-light leading-[1.6] text-muted">
						Define exactly what the AI returns. Add etymology, register,
						conjugation — anything.
					</div>
					<div className="mt-4 flex flex-wrap gap-1.5">
						{["dictionary_form", "word_class", "translation"].map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-lime bg-lime-dim px-2.5 py-1 font-mono text-sm tracking-[0.05em] text-lime"
							>
								{tag}
							</span>
						))}
						{["etymology", "register", "conjugation"].map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-faint px-2.5 py-1 font-mono text-sm tracking-[0.05em] text-muted"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* 04 · Practice */}
				<div className="col-span-3 bg-bg2 p-[2.2rem] transition-colors hover:bg-bg3 max-[900px]:col-span-1">
					<div className="mb-2.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-lime">
						04 · Practice
					</div>
					<div className="mb-2 font-sans text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
						Built-in flip-card sessions
					</div>
					<div className="text-base font-light leading-[1.6] text-muted">
						Filter by note, word class, or group.
					</div>
					<div className="mt-4 flex flex-col gap-2">
						{[
							["Space", "Reveal"],
							["→", "Know it"],
							["←", "Don't know"],
						].map(([key, desc]) => (
							<div key={key} className="flex items-center gap-3">
								<span className="min-w-[3.5rem] rounded-[3px] border border-white/[0.12] bg-bg px-2 py-1 text-center font-mono text-sm text-white">
									{key}
								</span>
								<span className="text-sm font-light text-muted">{desc}</span>
							</div>
						))}
					</div>
				</div>

				{/* 05 · Browser */}
				<div className="col-span-5 bg-bg2 p-[2.2rem] transition-colors hover:bg-bg3 max-[900px]:col-span-1">
					<div className="mb-2.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-lime">
						05 · Browser
					</div>
					<div className="mb-2 font-sans text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
						Flashcard from any webpage
					</div>
					<div className="text-base font-light leading-[1.6] text-muted">
						Chrome, Brave, Edge extension. Select text anywhere on the web, card
						lands in your vault.
					</div>
					<div className="mt-4 flex items-center gap-2.5">
						<div className="flex-1 rounded-[5px] border border-white/[0.12] bg-bg px-3.5 py-2.5">
							<div className="mb-2 h-[5px] w-[65%] rounded-[3px] bg-faint" />
							<span className="rounded-[2px] bg-lime px-1.5 py-0.5 font-mono text-sm text-bg">
								schadenfreude
							</span>
						</div>
						<div className="text-[1.1rem] text-lime">→</div>
						<div className="rounded-[5px] border border-lime-mid bg-bg px-3.5 py-2.5 font-mono text-sm text-lime">
							vault ✓
						</div>
					</div>
				</div>

				{/* 06 · Privacy */}
				<div className="col-span-7 bg-bg2 p-[2.2rem] transition-colors hover:bg-bg3 max-[900px]:col-span-1">
					<div className="mb-2.5 font-sans text-sm font-bold uppercase tracking-[0.14em] text-lime">
						06 · Privacy
					</div>
					<div className="mb-2 font-sans text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
						Your key. Your data. No middleman.
					</div>
					<div className="text-base font-light leading-[1.6] text-muted">
						Glossa calls Gemini directly from the plugin. No proxy, no server,
						no account. Your vault never leaves your machine. The free Gemini
						API key is all you need.
					</div>
					<div className="mt-4 rounded bg-bg p-4 font-mono text-sm leading-[1.85] text-white/40">
						<span className="text-[#f6c90e]">model</span>:{" "}
						<span className="text-[#a8d8a8]">gemini-2.5-flash-lite</span>
						<br />
						<span className="text-[#f6c90e]">key</span>:{" "}
						<span className="text-[#a8d8a8]">your own · free · direct</span>
						<br />
						<span className="text-[#f6c90e]">proxy</span>:{" "}
						<span className="text-white/20">none</span>
					</div>
				</div>
			</div>
		</section>
	);
}
