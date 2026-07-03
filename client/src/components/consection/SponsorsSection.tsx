interface Sponsor {
  name: string;
  logo: string | null;
  website: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Write the Docs Global",
    logo: "https://pbs.twimg.com/media/Gss-sp3WEAAJXdq?format=png&name=360x360",
    website: "https://www.writethedocs.org",
  },
  {
    name: "Master In Communication and Media",
    logo: "https://pbs.twimg.com/media/GstBchOWoAAohPt?format=jpg&name=large",
    website: "https://mcmstudy.org",
  },
  {
    name: "KCA University",
    logo: null,
    website: "https://www.kca.ac.ke",
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-12">Our Partners & Supporters</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              {sponsor.logo ? (
                <img src={sponsor.logo} alt={sponsor.name} className="h-16 max-w-[180px] object-contain mx-auto" />
              ) : (
                <div className="h-16 w-[180px] flex items-center justify-center text-gray-500 text-sm font-semibold">
                  {sponsor.name}
                </div>
              )}
              <p className="mt-2 text-gray-700 font-medium">{sponsor.name}</p>
            </a>
          ))}
        </div>

        <p className="mt-12 text-lg text-gray-700">
          Interested in sponsoring our event? <a href="mailto:wtdkenya@gmail.com" className="text-kenya-red hover:underline">Get in touch</a> to learn more about sponsorship opportunities.
        </p>
      </div>
    </section>
  );
}
