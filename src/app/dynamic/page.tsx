import { TIME_URL } from "@/lib/config";

export const dynamic = "force-dynamic";

export default async function DynamicPage() {
	const res = await fetch(TIME_URL, { cache: "force-cache" });
	const fetchedAt = await res.text();
	const renderedAt = new Date().toISOString();

	return (
		<main className="font-sans mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-8">
			<h1 className="text-2xl font-bold">Dynamic</h1>
			<p className="text-sm opacity-70">
				The page is rendered on every request, but the fetch inside it is cached. Reload and only
				the first timestamp moves.
			</p>
			<dl className="flex flex-col gap-4 font-mono text-sm">
				<div>
					<dt className="text-xs uppercase tracking-wide opacity-60">rendered at</dt>
					<dd className="text-base">{renderedAt}</dd>
				</div>
				<div>
					<dt className="text-xs uppercase tracking-wide opacity-60">fetched at</dt>
					<dd className="text-base">{fetchedAt}</dd>
				</div>
			</dl>
		</main>
	);
}
