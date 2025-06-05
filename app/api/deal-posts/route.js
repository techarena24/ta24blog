const { fetchedDealsPosts } = require("@/lib/fetchedDealsApi");

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const start = parseInt(searchParams.get("start") || "0", 20);
    const end = parseInt(searchParams.get("end") || "5", 20);

    const posts = await fetchedDealsPosts(start, end);
    return new Response(JSON.stringify(posts), {
        headers: { "Content-Type": "application/json" },
    });
}