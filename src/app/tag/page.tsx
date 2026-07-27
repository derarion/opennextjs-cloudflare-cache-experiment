import { TIME_TAG, TIME_URL } from "@/lib/config";

export default async function TagPage() {
	// `fetch` is no-store by default since Next.js 15; tagging alone does not
	// put the response in the data cache.
	const res = await fetch(TIME_URL, { cache: "force-cache", next: { tags: [TIME_TAG] } });
	const fetchedAt = await res.text();
	const renderedAt = new Date().toISOString();

	return (
		<main className="font-sans mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-8">
			<h1 className="text-2xl font-bold">Tag</h1>
			<p className="text-sm opacity-70">
				Prerendered, and the fetch below is tagged <code>{TIME_TAG}</code>. Both timestamps stay put
				until something invalidates them.
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
			<div className="flex gap-3">
				<form action="/api/revalidate-tag" method="post">
					<button className="rounded border px-3 py-2 text-sm" type="submit">
						revalidateTag(&quot;{TIME_TAG}&quot;)
					</button>
				</form>
				<form action="/api/revalidate-path" method="post">
					<button className="rounded border px-3 py-2 text-sm" type="submit">
						revalidatePath(&quot;/tag&quot;)
					</button>
				</form>
			</div>
		</main>
	);
}
