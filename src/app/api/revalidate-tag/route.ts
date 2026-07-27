import { revalidateTag } from "next/cache";
import { TIME_TAG } from "@/lib/config";

export async function POST(request: Request) {
	// Next.js 16 requires a profile. Named profiles such as "max" postpone the
	// invalidation instead of applying it now; `expire: 0` is what takes effect
	// immediately.
	revalidateTag(TIME_TAG, { expire: 0 });
	return Response.redirect(new URL("/tag", request.url), 303);
}
