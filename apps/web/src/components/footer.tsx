export function Footer() {
	return (
		<footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] px-10 py-8 max-md:px-6">
			<a
				href="/"
				className="font-sans text-[1rem] font-bold tracking-[-0.03em] text-white no-underline"
			>
				glossa<span className="text-lime">.md</span>
			</a>

			<ul className="flex gap-8">
				<li>
					<a
						href="https://github.com/chiunhau/glossa-flashcards"
						target="_blank"
						rel="noopener noreferrer"
						className="font-mono text-sm uppercase tracking-[0.1em] text-muted no-underline transition-colors hover:text-white"
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						href="#pricing"
						className="font-mono text-sm uppercase tracking-[0.1em] text-muted no-underline transition-colors hover:text-white"
					>
						Pricing
					</a>
				</li>
				<li>
					<a
						href="#install"
						className="font-mono text-sm uppercase tracking-[0.1em] text-muted no-underline transition-colors hover:text-white"
					>
						Install
					</a>
				</li>
			</ul>

			<p className="font-mono text-sm tracking-[0.06em] text-faint">
				Open source · Free to use
			</p>
		</footer>
	);
}
