import { client } from "@/sanity/lib/client";

const SearchPage = async ({ searchParams }) => {
    const query = searchParams?.q || "";

    const groqQuery = `*[_type in ["post", "device", "review"] && 
            (title match $term || body[] match $term)
        ]{
            _id,
            title,
            "slug": slug.current,
            _type
        }`;

        const results = query ?
         await client.fetch(groqQuery, {term: `*${query}*`}, { cache: "no-store" })
         : [];

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4">
            Search results for: "{query}"
        </h1>

        {results.length > 0 ? (
            <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results.map((item) => (
                <li key={item._id}>
                <a href={`/${item.slug}`} className="block p-4 bg-gray-100 dark:text-black rounded">
                    {item.title}
                </a>
                </li>
            ))}
            </ul>
        ) : (
            <p>No results found.</p>
        )}
    </main>
  )
}

export default SearchPage