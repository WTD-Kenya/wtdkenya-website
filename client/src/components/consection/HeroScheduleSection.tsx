import conferenceData from "@/data/upcomingConference.json";
import RegistrationClosedDialog from "@/components/RegistrationClosedDialog";
import ScheduleSection from "@/components/consection/ScheduleSection";

export default function HeroScheduleSection() {
  const { displayDate, venue } = conferenceData.event;

  return (
    <section id="hero" className="bg-gradient-to-br from-red-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12">
          {/* Left: Hero + condensed About */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-kenya-red mb-4">
              WTD{" "}
              <span className="text-kenya-red">KE</span>
              <span className="text-kenya-black">N</span>
              <span className="text-kenya-green">YA</span> Conference 2026
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-2">
              {displayDate} | {venue}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-kenya-black mb-4">
              Bringing together Kenya's documentation and developer community
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              A day of talks, workshops, and networking for technical writers, developers, and
              documentation enthusiasts.
            </p>
            <RegistrationClosedDialog
              trigger={
                <button className="inline-block bg-kenya-red text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-kenya-red transition">
                  Register Now
                </button>
              }
            />

            <div className="mt-10 space-y-5 border-t border-gray-200 pt-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-kenya-green">
                  Who Should Attend
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Technical writers, developers, product managers, and anyone interested in
                  documentation.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-kenya-green">
                  Key Benefits
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Networking with industry leaders, hands-on workshops, expert talks and panels,
                  and access to exclusive resources.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-kenya-green">
                  Why Attend
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Gain practical skills, connect with peers, and stay ahead in the world of
                  documentation and technical writing.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Schedule */}
          <div>
            <ScheduleSection />
          </div>
        </div>
      </div>
    </section>
  );
}
