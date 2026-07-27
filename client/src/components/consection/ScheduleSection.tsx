import conferenceData from "@/data/upcomingConference.json";

function formatTime(time: string) {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const TRACK_GRID_COLS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2",
  4: "sm:grid-cols-2",
};

const FORMAT_STYLES: Record<string, string> = {
  "Lightning talk": "bg-yellow-100 text-yellow-800",
  Workshop: "bg-purple-100 text-purple-800",
  Session: "bg-blue-100 text-blue-800",
};

type AgendaItem = (typeof conferenceData.schedule.agenda)[number];

function TimeRange({ item }: { item: { startsAt: string; endsAt: string } }) {
  return (
    <div className="text-gray-500 text-sm font-medium mb-1">
      {formatTime(item.startsAt)} – {formatTime(item.endsAt)}
    </div>
  );
}

function FormatTags({ format, level }: { format?: string; level?: string }) {
  if (!format && !level) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-1 mb-1">
      {format && (
        <span
          className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${
            FORMAT_STYLES[format] || "bg-gray-100 text-gray-800"
          }`}
        >
          {format}
        </span>
      )}
      {level && <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700">{level}</span>}
    </div>
  );
}

function AgendaCard({ item }: { item: AgendaItem }) {
  const isBreak = item.type === "break";

  return (
    <div
      className={
        isBreak
          ? "bg-white border-2 border-dashed border-kenya-green rounded-lg p-6"
          : "bg-white rounded-lg shadow-sm p-6 border-l-4 border-kenya-red"
      }
    >
      <TimeRange item={item} />
      {"format" in item && <FormatTags format={item.format} level={"level" in item ? item.level : undefined} />}
      <h3 className={`text-xl font-bold ${isBreak ? "text-kenya-green" : "text-kenya-black"}`}>{item.title}</h3>
      {"speakers" in item && item.speakers && (
        <p className="text-gray-600 text-sm mt-1">{item.speakers.join(" & ")}</p>
      )}
      {item.location && <p className="text-gray-500 text-sm mt-1">{item.location}</p>}
      {item.description && <p className="text-gray-700 text-sm mt-2">{item.description}</p>}
      {"panelists" in item && item.panelists && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.panelists.map((panelist) => (
            <li key={panelist} className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-700">
              {panelist}
            </li>
          ))}
        </ul>
      )}

      {"items" in item && item.items && (
        <ul className="mt-4 space-y-3">
          {item.items.map((talk) => (
            <li key={talk.title} className="border-t border-gray-100 pt-3 first:border-t-0 first:pt-0">
              <TimeRange item={talk} />
              <FormatTags format={talk.format} level={talk.level} />
              <p className="font-semibold text-kenya-black">{talk.title}</p>
              <p className="text-gray-600 text-sm">{talk.speakers.join(" & ")}</p>
            </li>
          ))}
        </ul>
      )}

      {"tracks" in item && item.tracks && (
        <div className={`mt-4 grid grid-cols-1 ${TRACK_GRID_COLS[item.tracks.length] || "sm:grid-cols-2"} gap-4`}>
          {item.tracks.map((track) => (
            <div key={track.label} className="bg-green-50 rounded-lg p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-kenya-green mb-1">
                {track.label}
              </div>
              <FormatTags format={track.format} level={track.level} />
              <p className="font-semibold text-kenya-black text-sm">{track.topic}</p>
              <p className="text-gray-600 text-sm mt-1">{track.facilitator}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ScheduleSection() {
  const { agenda, date } = conferenceData.schedule;
  const { theme } = conferenceData.event;

  return (
    <div className="md:sticky md:top-24">
      <h2 className="text-2xl font-bold text-kenya-red mb-1">Schedule</h2>
      <p className="text-gray-600 text-sm">{formatDate(date)}</p>
      {theme && <p className="text-gray-600 italic text-sm mt-1 mb-4">{theme}</p>}

      <div className="space-y-6 mt-4 md:max-h-[70vh] md:overflow-y-auto md:pr-2">
        {agenda.map((item) => (
          <AgendaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
