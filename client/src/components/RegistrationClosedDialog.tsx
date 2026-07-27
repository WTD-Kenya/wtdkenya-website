import type { ReactNode } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCountdown } from "@/hooks/useCountdown";
import conferenceData from "@/data/upcomingConference.json";

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg px-3 py-2 min-w-[64px]">
      <span className="text-2xl font-bold text-kenya-black">{value.toString().padStart(2, "0")}</span>
      <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
    </div>
  );
}

interface RegistrationClosedDialogProps {
  trigger: ReactNode;
}

export default function RegistrationClosedDialog({ trigger }: RegistrationClosedDialogProps) {
  const { event, schedule } = conferenceData;
  const eventStart = `${event.date}T${schedule.agenda[0].startsAt}:00`;
  const { days, hours, minutes, seconds, hasPassed } = useCountdown(eventStart);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="text-center">
        <DialogHeader>
          <DialogTitle className="text-kenya-red text-xl">Registration is Closed</DialogTitle>
          <DialogDescription>
            {hasPassed
              ? `${event.name} is happening now — see you there!`
              : `Registration for ${event.name} has closed. Here's how long until we kick off at ${event.venue}:`}
          </DialogDescription>
        </DialogHeader>

        {!hasPassed && (
          <div className="flex justify-center gap-3 py-4">
            <TimeUnit value={days} label="Days" />
            <TimeUnit value={hours} label="Hours" />
            <TimeUnit value={minutes} label="Min" />
            <TimeUnit value={seconds} label="Sec" />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
