export const revalidate = 30;

export default function IsrPage() {
	const renderedAt = new Date().toISOString();

	return (
		<main className="font-sans mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-8">
			<h1 className="text-2xl font-bold">ISR</h1>
			<p className="text-sm opacity-70">
				Revalidates every 30 seconds. Once stale, the first request still gets the old timestamp
				while a new one is rendered in the background.
			</p>
			<dl className="font-mono text-sm">
				<dt className="text-xs uppercase tracking-wide opacity-60">rendered at</dt>
				<dd className="text-base">{renderedAt}</dd>
			</dl>
		</main>
	);
}
