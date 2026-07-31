export default function InspiredBy() {
  const creators = [
    {
      name: "CodeWithHarry",
      description: "YouTuber known for beginner-friendly programming tutorials",
      url: "https://www.youtube.com/@CodeWithHarry",
    },
    {
      name: "Shraddha Kapoor",
      description: "Actress and inspiration",
      url: "https://www.instagram.com/shraddhakapoor/",
    },
  ];

  return (
    <section className="w-full py-10 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Inspired By</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {creators.map((creator) => (
          
            key={creator.name}
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 hover:bg-gray-700 transition rounded-xl p-6 w-64"
          >
            <h3 className="text-lg font-semibold mb-2">{creator.name}</h3>
            <p className="text-sm text-gray-300">{creator.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}