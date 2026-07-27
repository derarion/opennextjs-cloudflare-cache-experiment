import { unstable_cache } from "next/cache";

export const dynamic = "force-dynamic";

const CACHED_TIME_TAG = "cached-time";

// Stands in for a database query: no fetch involved, so `next.tags` is not an
// option and the call has to be wrapped instead.
const readTime = unstable_cache(async () => new Date().toISOString(), ["read-time"], {
	tags: [CACHED_TIME_TAG],
});

export default async function UnstableCachePage() {
	const cachedAt = await readTime();
	const renderedAt = new Date().toISOString();

	return (
		<main className="font-sans mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-8">
			<h1 className="text-2xl font-bold">unstable_cache</h1>
			<p className="text-sm opacity-70">
				Same shape as /dynamic, but the cached value comes from a plain async function rather than
				a fetch.
			</p>
			<dl className="flex flex-col gap-4 font-mono text-sm">
				<div>
					<dt className="text-xs uppercase tracking-wide opacity-60">rendered at</dt>
					<dd className="text-base">{renderedAt}</dd>
				</div>
				<div>
					<dt className="text-xs uppercase tracking-wide opacity-60">cached at</dt>
					<dd className="text-base">{cachedAt}</dd>
				</div>
			</dl>
		</main>
	);
}
