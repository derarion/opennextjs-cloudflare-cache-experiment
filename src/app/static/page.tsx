export default function StaticPage() {
	const renderedAt = new Date().toISOString();

	return (
		<main className="font-sans mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-8">
			<h1 className="text-2xl font-bold">Static</h1>
			<p className="text-sm opacity-70">
				Prerendered at build time. This timestamp stays the same no matter how often you reload.
			</p>
			<dl className="font-mono text-sm">
				<dt className="text-xs uppercase tracking-wide opacity-60">rendered at</dt>
				<dd className="text-base">{renderedAt}</dd>
			</dl>
		</main>
	);
}
