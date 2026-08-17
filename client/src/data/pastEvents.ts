import conferenceData from "@/data/upcomingConference.json";
import type { MeetupEvent } from "@/lib/types";

export const conference2026PastEvent: MeetupEvent = {
  id: "wtd-kenya-conference-2026",
  title: conferenceData.event.name,
  description: conferenceData.event.theme,
  dateTime: `${conferenceData.event.date}T09:00:00+03:00`,
  venue: {
    name: conferenceData.event.venue,
    address: "Nairobi, Kenya",
  },
  link: "/conference",
  going: 100,
  actionLabel: "View Conference Recap",
  attendanceLabel: "100+ attendees",
};

export const curatedPastEvents: MeetupEvent[] = [
  conference2026PastEvent,
  {
    id: "315091151",
    title: "Tech writers as strategic enablers",
    description:
      "A session on how technical writers can evolve beyond documentation to drive strategy, advocacy, innovation, and organizational impact in the era of AI.",
    dateTime: "2026-06-23T20:00:00+03:00",
    venue: { name: "Online event", address: "Online" },
    link: "https://www.meetup.com/wtd-kenya/events/315091151/",
    going: 53,
    actionLabel: "View on Meetup",
  },
  {
    id: "314393800",
    title: "Seven habits of increasingly technical technical writers",
    description:
      "A practical session about the habits and skills that help writers from non-technical backgrounds grow into increasingly technical roles.",
    dateTime: "2026-05-12T20:00:00+03:00",
    venue: { name: "Online event", address: "Online" },
    link: "https://www.meetup.com/wtd-kenya/events/314393800/",
    going: 42,
    actionLabel: "View on Meetup",
  },
  {
    id: "305750149",
    title: "Write the Docs Kenya Conference 2025",
    description:
      "Our first full conference brought together more than a dozen speakers, including international guests, for documentation talks, connection, and community growth.",
    dateTime: "2025-06-07T08:00:00+03:00",
    venue: {
      name: "Zetech University",
      address: "Off Thika Road in Ruiru, Nairobi",
    },
    link: "https://www.meetup.com/wtd-kenya/events/305750149/",
    going: 141,
    actionLabel: "View on Meetup",
  },
  {
    id: "wtd-kenya-summit-2024",
    title: "Write the Docs Kenya Summit 2024",
    description:
      "Themed “Bridging Tech with Writing,” the summit brought documentarians and technology professionals together for talks, practical demonstrations, and networking.",
    dateTime: "2024-05-25T09:00:00+03:00",
    venue: { name: "Nairobi, Kenya", address: "Nairobi, Kenya" },
    link: "https://wtdkenya.hashnode.dev/write-the-docs-kenya-summit-2024",
    going: 0,
    actionLabel: "Read Event Recap",
    attendanceLabel: "Community summit",
  },
];
