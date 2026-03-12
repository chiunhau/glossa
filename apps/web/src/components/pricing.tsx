export function Pricing() {
	return (
		<div className="border-t border-b border-white/[0.07] bg-bg2">
			{/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
			<section
				className="mx-auto max-w-[1200px] px-10 py-28 max-md:px-6 max-md:py-20"
				id="pricing"
			>
				<div className="reveal">
					<p className="mb-5 font-mono text-sm uppercase tracking-[0.18em] text-lime">
						Pricing
					</p>
					<h2
						className="font-sans font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
						style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
					>
						Pay once.
						<br />
						<span className="font-extralight text-muted">Own it forever.</span>
					</h2>
					<p className="mt-4  text-base font-light leading-[1.7] text-muted">
						Bring your own free Gemini key. No subscriptions. No backend costs
						passed to you.
					</p>
				</div>

				{/* Pricing grid */}
				<div className="reveal mt-16 grid grid-cols-2 overflow-hidden rounded-md border border-white/[0.07] max-[680px]:grid-cols-1">
					{/* Free tier */}
					<div className="border-r border-white/[0.07] p-11 max-[680px]:border-r-0 max-[680px]:border-b">
						<div className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.12em] text-muted">
							Free
						</div>
						<div className="mb-1 font-sans text-5xl font-black leading-none tracking-[-0.05em] text-white">
							Free
						</div>
						<div className="mb-10 font-mono text-sm uppercase tracking-[0.1em] text-muted">
							Forever · BYOK
						</div>
						<div className="mb-8 h-px bg-white/[0.07]" />
						<ul className="mb-10 flex flex-col gap-3.5">
							{[
								{ text: "30 flashcard generations / month", active: true },
								{ text: "Unlimited practice sessions", active: true },
								{ text: "Basic practice filters", active: true },
								{ text: "Your own Gemini API key", active: true },
								{ text: "Custom prompts & output fields", active: false },
								{ text: "Note body templates", active: false },
								{ text: "Browser extension", active: false },
								{ text: "All practice filter fields", active: false },
							].map((item) => (
								<li
									key={item.text}
									className={`flex items-start gap-3 text-base font-light leading-[1.4] ${
										item.active ? "text-white" : "text-faint"
									}`}
								>
									<span
										className={`mt-0.5 shrink-0 font-mono text-sm ${
											item.active ? "text-lime" : "text-faint"
										}`}
									>
										{item.active ? "✓" : "—"}
									</span>
									{item.text}
								</li>
							))}
						</ul>
						<a
							href="#install"
							className="block w-full rounded-[3px] border border-faint py-[0.9rem] text-center font-mono text-sm uppercase tracking-[0.1em] text-muted no-underline transition-all hover:border-muted hover:text-white"
						>
							Install free →
						</a>
					</div>

					{/* Pro tier */}
					<div className="relative bg-bg3 p-11">
						<span className="absolute top-5 right-5 rounded-[2px] border border-faint bg-bg2 px-2.5 py-1 font-mono text-sm uppercase tracking-[0.12em] text-muted">
							Coming soon
						</span>
						<div className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.12em] text-lime">
							Pro
						</div>
						<div className="mb-1 font-sans text-5xl font-black leading-none tracking-[-0.05em] text-white">
							<sup className="text-3xl font-bold">$</sup>15
						</div>
						<div className="mb-10 font-mono text-sm uppercase tracking-[0.1em] text-muted">
							One-time · BYOK · Lifetime
						</div>
						<div className="mb-8 h-px bg-white/[0.07]" />
						<ul className="mb-10 flex flex-col gap-3.5">
							{[
								"Unlimited flashcard generations",
								"Unlimited practice sessions",
								"All practice filter fields",
								"Your own Gemini API key",
								"Custom prompts & output fields",
								"Note body templates",
								"Browser extension",
								"Priority email support",
							].map((text) => (
								<li
									key={text}
									className="flex items-start gap-3 text-base font-light leading-[1.4] text-white"
								>
									<span className="mt-0.5 shrink-0 font-mono text-sm text-lime">
										✓
									</span>
									{text}
								</li>
							))}
						</ul>
						<a
							// biome-ignore lint/a11y/useValidAnchor: <explanation>
							href="#"
							className="block w-full rounded-[3px] border border-lime bg-lime py-[0.9rem] text-center font-mono text-sm font-medium uppercase tracking-[0.1em] text-bg no-underline transition-opacity hover:opacity-85"
						>
							Notify me when available
						</a>
					</div>
				</div>

				<p className="reveal mt-6 text-center font-mono text-sm uppercase tracking-[0.08em] text-faint">
					Pro Proxy tier (no API key needed) · coming after early traction
				</p>
			</section>
		</div>
	);
}
