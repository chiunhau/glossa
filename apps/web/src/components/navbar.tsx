export function Navbar() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/[0.07] bg-[#0a0a0a]/90 px-10 py-[1.1rem] backdrop-blur-[16px]">
			<a
				href="/"
				className="font-sans text-lg font-bold tracking-[-0.03em] text-white no-underline"
			>
				glossa<span className="text-lime">.md</span>
			</a>

			<ul className="hidden items-center gap-10 md:flex">
				<li>
					<a
						href="#features"
						className="font-mono text-base uppercase tracking-[0.08em] text-muted no-underline transition-colors hover:text-white"
					>
						Features
					</a>
				</li>
				<li>
					<a
						href="#install"
						className="font-mono text-base uppercase tracking-[0.08em] text-muted no-underline transition-colors hover:text-white"
					>
						Install
					</a>
				</li>
				<li>
					<a
						href="#pricing"
						className="font-mono text-base uppercase tracking-[0.08em] text-muted no-underline transition-colors hover:text-white"
					>
						Pricing
					</a>
				</li>
			</ul>

			<a
				href="#install"
				className="rounded-[3px] bg-lime px-[1.3rem] py-[0.55rem] font-mono text-base font-medium uppercase tracking-[0.08em] text-bg no-underline transition-opacity hover:opacity-85"
			>
				Install free
			</a>
		</nav>
	);
}
