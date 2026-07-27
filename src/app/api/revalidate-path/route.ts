import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
	revalidatePath("/tag");
	return Response.redirect(new URL("/tag", request.url), 303);
}
