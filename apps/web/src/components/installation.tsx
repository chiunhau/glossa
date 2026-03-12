"use client";

import { useCallback, useState } from "react";

type Tab = "brat" | "manual" | "cli";

export function Installation() {
	const [activeTab, setActiveTab] = useState<Tab>("brat");

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <explanation>
		<section
			className="mx-auto max-w-[1200px] px-10 py-28 max-md:px-6 max-md:py-20"
			id="install"
		>
			<div className="reveal">
				<p className="mb-5 font-mono text-sm uppercase tracking-[0.18em] text-lime">
					Installation
				</p>
				<h2
					className="font-sans font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
					style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
				>
					Running in
					<br />
					<span className="font-extralight text-muted">two minutes.</span>
				</h2>
				<p className="mt-4 max-w-[480px] text-base font-light leading-[1.7] text-muted">
					Not in the community directory yet — pick the method that suits you.
				</p>
			</div>

			<div className="reveal">
				{/* Tabs */}
				<div className="mt-14 flex w-fit overflow-hidden rounded-t-[5px] border border-b-0 border-white/[0.07]">
					<TabButton
						active={activeTab === "brat"}
						onClick={() => setActiveTab("brat")}
					>
						BRAT{" "}
						<span className="ml-1.5 rounded-[2px] bg-lime px-1.5 py-0.5 font-mono text-xs font-medium tracking-[0.06em] text-bg">
							rec
						</span>
					</TabButton>
					<TabButton
						active={activeTab === "manual"}
						onClick={() => setActiveTab("manual")}
					>
						Manual
					</TabButton>
					<TabButton
						active={activeTab === "cli"}
						onClick={() => setActiveTab("cli")}
					>
						CLI
					</TabButton>
				</div>

				{/* Content */}
				{activeTab === "brat" && <BratPanel />}
				{activeTab === "manual" && <ManualPanel />}
				{activeTab === "cli" && <CliPanel />}

				{/* Post-install CTA */}
				<div className="reveal mt-12 flex flex-wrap items-center justify-between gap-8 rounded-[5px] border border-white/[0.07] bg-bg2 p-9 max-md:flex-col max-md:items-start">
					<div>
						<p className="font-sans text-lg font-bold tracking-[-0.02em] text-white">
							Next: get your free Gemini API key.
						</p>
						<p className="mt-1 text-base font-light text-muted">
							Free from Google AI Studio — no credit card, takes 30 seconds.
						</p>
					</div>
					<a
						href="https://aistudio.google.com/app/apikey"
						target="_blank"
						rel="noopener noreferrer"
						className="shrink-0 rounded-[3px] bg-lime px-8 py-[0.9rem] font-mono text-sm font-medium uppercase tracking-[0.1em] text-bg no-underline transition-opacity hover:opacity-85"
					>
						Get API key →
					</a>
				</div>
			</div>
		</section>
	);
}

/* ── Tab button ── */
function TabButton({
	active,
	onClick,
	children,
}: {
	active: boolean;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`cursor-pointer whitespace-nowrap border-r border-white/[0.07] px-[1.4rem] py-[0.65rem] font-mono text-sm uppercase tracking-[0.08em] transition-all last:border-r-0 ${
				active
					? "bg-bg2 text-lime"
					: "bg-transparent text-muted hover:bg-bg2 hover:text-white"
			}`}
		>
			{children}
		</button>
	);
}

/* ── Copy button ── */
function CopyButton({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}, [text]);

	return (
		<button
			type="button"
			onClick={handleCopy}
			className={`shrink-0 cursor-pointer rounded-[2px] border px-2 py-1 font-mono text-sm tracking-[0.04em] transition-all ${
				copied
					? "border-lime text-lime"
					: "border-faint text-muted hover:border-muted hover:text-white"
			}`}
		>
			{copied ? "copied" : "copy"}
		</button>
	);
}

/* ── Step layout ── */
function Step({
	num,
	highlight,
	last,
	children,
}: {
	num: number;
	highlight?: boolean;
	last?: boolean;
	children: React.ReactNode;
}) {
	return (
		<div
			className={`relative grid grid-cols-[2rem_1fr] gap-x-4 ${
				last ? "" : "pb-7"
			}`}
		>
			{!last && (
				<div className="absolute top-8 left-[0.95rem] bottom-0 w-px bg-white/[0.07]" />
			)}
			<div
				className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-sm ${
					highlight
						? "border-lime bg-lime-dim text-lime"
						: "border-faint bg-bg text-muted"
				}`}
			>
				{num}
			</div>
			<div className="pt-1">{children}</div>
		</div>
	);
}

/* ── BRAT panel ── */
function BratPanel() {
	return (
		<div className="animate-panelIn overflow-hidden rounded-b-[5px] rounded-tr-[5px] border border-white/[0.07] bg-bg2">
			<div className="border-b border-white/[0.07] bg-bg3 px-8 py-6 max-md:px-6">
				<div className="font-sans text-lg font-bold tracking-[-0.02em] text-white">
					Install via BRAT
				</div>
				<div className="mt-1 text-base font-light text-muted">
					BRAT installs and auto-updates any GitHub-hosted Obsidian plugin. Most
					power users already have it.
				</div>
			</div>
			<div className="flex flex-col gap-0 p-8 max-md:p-6">
				<Step num={1}>
					<p className="mb-1 font-sans text-lg font-semibold tracking-[-0.01em] text-white">
						Install BRAT from Community Plugins
					</p>
					<p className="text-base font-light leading-[1.55] text-muted">
						Settings → Community Plugins → Browse → search &quot;BRAT&quot; →
						Install → Enable.
					</p>
					<div className="mt-2 rounded-[3px] border border-white/[0.07] bg-bg px-3.5 py-2.5 text-[0.8rem] font-light text-muted">
						Already have BRAT? Skip to step 2.
					</div>
				</Step>
				<Step num={2} highlight>
					<p className="mb-1 font-sans text-lg font-semibold tracking-[-0.01em] text-white">
						Add Glossa via BRAT
					</p>
					<p className="text-base font-light leading-[1.55] text-muted">
						Command palette (⌘P / Ctrl+P) →{" "}
						<strong className="font-semibold text-white">
							BRAT: Add a beta plugin
						</strong>{" "}
						→ paste:
					</p>
					<div className="mt-2 flex items-center gap-3 rounded-[3px] border border-white/[0.07] bg-bg px-3.5 py-2.5">
						<code className="flex-1 break-all font-mono text-[0.72rem] text-[#a8d8a8]">
							https://github.com/chiunhau/ai-flashcards-obsidian-plugin
						</code>
						<CopyButton text="https://github.com/chiunhau/ai-flashcards-obsidian-plugin" />
					</div>
				</Step>
				<Step num={3} last>
					<p className="mb-1 font-sans text-lg font-semibold tracking-[-0.01em] text-white">
						Enable the plugin
					</p>
					<p className="text-base font-light leading-[1.55] text-muted">
						Settings → Community Plugins → find &quot;Glossa&quot; → toggle on.
					</p>
					<div className="mt-2 rounded-[3px] border border-lime/15 bg-lime-dim px-3.5 py-2.5 text-sm font-light leading-[1.5] text-lime">
						BRAT will auto-update Glossa on every new release.
					</div>
				</Step>
			</div>
		</div>
	);
}

/* ── Manual panel ── */
function ManualPanel() {
	return (
		<div className="animate-panelIn overflow-hidden rounded-b-[5px] rounded-tr-[5px] border border-white/[0.07] bg-bg2">
			<div className="border-b border-white/[0.07] bg-bg3 px-8 py-6 max-md:px-6">
				<div className="font-sans text-lg font-bold tracking-[-0.02em] text-white">
					Manual Installation
				</div>
				<div className="mt-1 text-base font-light text-muted">
					Download three files and place them in your vault. No extra tools
					needed.
				</div>
			</div>
			<div className="flex flex-col gap-0 p-8 max-md:p-6">
				<Step num={1}>
					<p className="mb-1 font-sans text-lg font-semibold tracking-[-0.01em] text-white">
						Download the latest release files
					</p>
					<div className="mt-2 flex flex-col gap-1.5">
						{[
							{ ext: "JS", name: "main.js" },
							{ ext: "JSON", name: "manifest.json" },
							{ ext: "CSS", name: "styles.css" },
						].map((file) => (
							<a
								key={file.name}
								href="https://github.com/chiunhau/ai-flashcards-obsidian-plugin/releases"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2.5 rounded-[3px] border border-white/[0.07] bg-bg px-3 py-2 no-underline transition-colors hover:border-white/[0.12]"
							>
								<span className="rounded-[2px] border border-white/[0.07] bg-bg2 px-1.5 py-0.5 font-mono text-[0.58rem] tracking-[0.06em] text-muted">
									{file.ext}
								</span>
								<span className="flex-1 font-mono text-[0.75rem] text-lime">
									{file.name}
								</span>
							</a>
						))}
					</div>
				</Step>
				<Step num={2} highlight>
					<p className="mb-1 font-sans text-lg font-semibold tracking-[-0.01em] text-white">
						Place files in your vault
					</p>
					<p className="text-base font-light leading-[1.55] text-muted">
						Create this folder inside your vault and copy all three files into
						it:
					</p>
					<div className="mt-2 flex items-center gap-3 rounded-[3px] border border-white/[0.07] bg-bg px-3.5 py-2.5">
						<code className="flex-1 break-all font-mono text-[0.72rem] text-[#a8d8a8]">
							.obsidian/plugins/glossa-flashcards/
						</code>
						<CopyButton text=".obsidian/plugins/glossa-flashcards/" />
					</div>
					<div className="mt-2 rounded-[3px] border border-white/[0.07] bg-bg px-3.5 py-2.5 text-[0.8rem] font-light text-muted">
						<code className="font-mono">.obsidian</code> is hidden — ⌘⇧. on Mac,
						&quot;Hidden items&quot; on Windows.
					</div>
				</Step>
				<Step num={3} last>
					<p className="mb-1 font-sans text-lg font-semibold tracking-[-0.01em] text-white">
						Enable the plugin
					</p>
					<p className="text-base font-light leading-[1.55] text-muted">
						Reload Obsidian → Settings → Community Plugins → toggle on
						&quot;Glossa&quot;.
					</p>
				</Step>
			</div>
		</div>
	);
}

/* ── CLI panel ── */
function CliPanel() {
	return (
		<div className="animate-panelIn overflow-hidden rounded-b-[5px] rounded-tr-[5px] border border-white/[0.07] bg-bg2">
			<div className="border-b border-white/[0.07] bg-bg3 px-8 py-6 max-md:px-6">
				<div className="font-sans text-[1.15rem] font-bold tracking-[-0.02em] text-white">
					Terminal Installation
				</div>
				<div className="mt-1 text-[0.88rem] font-light text-muted">
					Clone directly into your vault. Best for contributors or those who
					want the latest commits.
				</div>
			</div>
			<div className="flex flex-col gap-0 p-8 max-md:p-6">
				<Step num={1} highlight>
					<p className="mb-1 font-sans text-base font-semibold tracking-[-0.01em] text-white">
						Navigate to your vault&apos;s plugins folder
					</p>
					<div className="mt-2 flex items-center gap-3 rounded-[3px] border border-white/[0.07] bg-bg px-3.5 py-2.5">
						<code className="flex-1 break-all font-mono text-sm text-[#a8d8a8]">
							cd /path/to/vault/.obsidian/plugins
						</code>
						<CopyButton text="cd /path/to/vault/.obsidian/plugins" />
					</div>
				</Step>
				<Step num={2} highlight>
					<p className="mb-1 font-sans text-base font-semibold tracking-[-0.01em] text-white">
						Clone the repository
					</p>
					<div className="mt-2 flex items-center gap-3 rounded-[3px] border border-white/[0.07] bg-bg px-3.5 py-2.5">
						<code className="flex-1 break-all font-mono text-sm text-[#a8d8a8]">
							git clone https://github.com/chiunhau/glossa-flashcards
							glossa-flashcards
						</code>
						<CopyButton text="git clone https://github.com/chiunhau/glossa-flashcards glossa-flashcards" />
					</div>
				</Step>
				<Step num={3} last>
					<p className="mb-1 font-sans text-base font-semibold tracking-[-0.01em] text-white">
						Enable the plugin
					</p>
					<p className="text-base font-light leading-[1.55] text-muted">
						Reload Obsidian → Settings → Community Plugins → toggle on
						&quot;Glossa&quot;.
					</p>
					<div className="mt-2 rounded-[3px] border border-lime/15 bg-lime-dim px-3.5 py-2.5 text-base font-light leading-[1.5] text-lime">
						To update later: <code className="font-mono">git pull</code> inside
						the folder.
					</div>
				</Step>
			</div>
		</div>
	);
}
