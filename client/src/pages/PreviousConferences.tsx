import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function PreviousConferences() {
  const [data, setData] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/src/data/previousconfrence.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (error) return <div className="text-center py-16 text-red-500">{error}</div>;
  if (!data) return null;

  const years = Object.keys(data).filter((key) => key !== "allTimeSpeakers");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Previous Conferences</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the rich history of Write the Docs Kenya conferences. Each year brings together
          technical writers, developers, and documentation enthusiasts to share knowledge and best practices
          in technical documentation.
        </p>
      </section>

      {/* Year Selection Section */}
      <section className="mb-16">
        <Tabs defaultValue={years[0]} className="w-full" onValueChange={setSelectedYear}>
          <TabsList className={`grid w-full grid-cols-${years.length}`}>
            {years.map((year) => (
              <TabsTrigger key={year} value={year}>{year}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </section>

      {/* Speaker Cards Section (Table-like UI) */}
      <section className="mb-16">
        <div className="rounded-lg overflow-hidden border border-gray-200">
          {/* Header Row */}
          <div className="hidden md:flex bg-gray-100 text-gray-500 uppercase text-xs font-semibold tracking-wider px-6 py-3">
            <div className="w-1/3 flex items-center">Speaker</div>
            <div className="w-1/3 flex items-center">Presentation</div>
            <div className="w-1/3 flex items-center">Media Resources & Docs</div>
          </div>
          {/* Speaker Rows */}
          {data[selectedYear]?.speakers?.map((speaker: any, idx: number) => (
            <div
              key={speaker.id}
              className={`flex flex-col md:flex-row items-start md:items-center px-4 md:px-6 py-4 md:py-6 gap-4 md:gap-0 border-t border-gray-100 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              {/* Speaker */}
              <div className="w-full md:w-1/3 flex items-center gap-4 group">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-8 h-8 rounded-full object-cover border"
                />
                <div>
                  <span className="font-medium text-gray-900">{speaker.name}</span>
                  <div className="text-xs text-gray-500">
                    {speaker.title}
                    {speaker.company ? `, ${speaker.company}` : ''}
                  </div>
                  <div className="flex gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {speaker.linkedin && (
                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-blue-700 hover:text-blue-900"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
                      </a>
                    )}
                    {speaker.x && (
                      <a href={speaker.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-gray-700 hover:text-black"><path d="M17.53 2.47a.75.75 0 0 1 1.06 1.06l-5.22 5.22 2.94 2.94 5.22-5.22a.75.75 0 1 1 1.06 1.06l-5.22 5.22 5.22 5.22a.75.75 0 1 1-1.06 1.06l-5.22-5.22-2.94 2.94 5.22 5.22a.75.75 0 1 1-1.06 1.06l-5.22-5.22-5.22 5.22a.75.75 0 1 1-1.06-1.06l5.22-5.22-2.94-2.94-5.22 5.22a.75.75 0 1 1-1.06-1.06l5.22-5.22-5.22-5.22a.75.75 0 1 1 1.06-1.06l5.22 5.22 2.94-2.94-5.22-5.22a.75.75 0 1 1 1.06-1.06l5.22 5.22 5.22-5.22z"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Presentation */}
              <div className="w-full md:w-1/3 flex items-center">
                <span className="text-gray-800 font-normal">{speaker.topic}</span>
              </div>
              {/* Media Resources & Docs */}
              <div className="w-full md:w-1/3 flex items-center gap-4 mt-2 md:mt-0">
                {/* Slides */}
                <a
                  href={speaker.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-700 font-medium hover:underline gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21m5.25-4l.75 4m-7.5-4h10.5M4.5 17V7.75A2.25 2.25 0 016.75 5.5h10.5A2.25 2.25 0 0119.5 7.75V17" /></svg>
                  Slides
                </a>
                {/* Video Button */}
                <a
                  href={speaker.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold text-xs flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.118v7.764a1 1 0 001.234.97l6.518-1.757A1 1 0 0016 14.882V9.118a1 1 0 00-1.248-.95z" /></svg>
                  Watch Video (EN)
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All-time Speakers Gallery */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">All-time Speakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.allTimeSpeakers?.map((speaker: any) => (
            <TooltipProvider key={speaker.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative group cursor-pointer">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                        {speaker.name}
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{speaker.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </section>
    </div>
  );
} 