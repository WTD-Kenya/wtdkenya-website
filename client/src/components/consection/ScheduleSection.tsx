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

const FORMAT_STYLES: Record<string, string> = {
  "Lightning talk": "bg-yellow-100 text-yellow-800",
  Workshop: "bg-purple-100 text-purple-800",
  Session: "bg-blue-100 text-blue-800",
};

const ROOM_GRID_COLS: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

type Session = (typeof conferenceData.schedule.sessions)[number];
type Break = (typeof conferenceData.schedule.breaks)[number];
type Segment = { type: "sessions"; sessions: Session[] } | { type: "break"; item: Break };

function buildSegments(sessions: Session[], breaks: Break[]): Segment[] {
  const sortedSessions = [...sessions].sort((a, b) => a.startsAt.localeCompare(b.startsAt));
  const sortedBreaks = [...breaks].sort((a, b) => a.startsAt.localeCompare(b.startsAt));

  const segments: Segment[] = [];
  let cursor = "00:00";

  for (const brk of sortedBreaks) {
    const chunk = sortedSessions.filter((s) => s.startsAt >= cursor && s.startsAt < brk.startsAt);
    if (chunk.length > 0) segments.push({ type: "sessions", sessions: chunk });
    segments.push({ type: "break", item: brk });
    cursor = brk.endsAt;
  }

  const remaining = sortedSessions.filter((s) => s.startsAt >= cursor);
  if (remaining.length > 0) segments.push({ type: "sessions", sessions: remaining });

  return segments;
}

function RoomGrid({ rooms, sessions }: { rooms: string[]; sessions: Session[] }) {
  return (
    <div className={`grid grid-cols-1 ${ROOM_GRID_COLS[rooms.length] || "md:grid-cols-2"} gap-6`}>
      {rooms.map((room) => (
        <div key={room}>
          <h3 className="text-lg font-bold text-kenya-black mb-4 text-center bg-white rounded-lg py-2 shadow-sm">
            {room}
          </h3>
          <ul className="space-y-4">
            {sessions
              .filter((session) => session.room === room)
              .map((session) => (
                <li key={session.id} className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-kenya-red">
                  <div className="text-gray-500 text-sm font-medium mb-1">
                    {formatTime(session.startsAt)} – {formatTime(session.endsAt)}
                  </div>
                  <h4 className="text-lg font-semibold text-kenya-black">{session.title}</h4>
                  <p className="text-gray-700 text-sm mt-1">{session.speakers.join(" & ")}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {session.format && (
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          FORMAT_STYLES[session.format] || "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {session.format}
                      </span>
                    )}
                    {session.level && (
                      <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-700">
                        {session.level}
                      </span>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function ScheduleSection() {
  const { rooms, sessions, breaks, date } = conferenceData.schedule;
  const segments = buildSegments(sessions, breaks);

  return (
    <section id="schedule" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-kenya-red text-center mb-2">Schedule</h2>
        <p className="text-center text-gray-600 mb-12">{formatDate(date)}</p>

        <div className="space-y-8">
          {segments.map((segment, idx) =>
            segment.type === "break" ? (
              <div
                key={segment.item.id}
                className="bg-white border-2 border-dashed border-kenya-green rounded-lg py-4 px-6 text-center"
              >
                <div className="text-gray-500 text-sm font-medium mb-1">
                  {formatTime(segment.item.startsAt)} – {formatTime(segment.item.endsAt)}
                </div>
                <h3 className="text-lg font-bold text-kenya-green">{segment.item.title}</h3>
              </div>
            ) : (
              <RoomGrid key={idx} rooms={rooms} sessions={segment.sessions} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
