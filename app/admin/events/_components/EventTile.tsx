"use client";

import { MdEdit, MdDeleteForever } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventTile = ({ eventType, event }: { eventType: any; event: any }) => {
  const deleteEvent = async () => {
    const data = {
      id: event.id,
    };

    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmed) return;

    const url = `/api/admin/events/${eventType}`;
    // console.log(data, url);

    const res = await fetch("/api/admin/events/" + eventType, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Event deleted!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Failed to delete event!");
    }
  };

  const patchEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `/api/admin/events/${eventType}`;
    // console.log(url);

    const formData = new FormData(e.currentTarget);
    let data;

    if (eventType === "rivals") {
      data = {
        id: event.id,
        // seasonId: formData.get("season"),
        track: formData.get("track"),
        vehicle: formData.get("vehicle"),
        endsAt: formData.get("endsAt") + ":00.000Z",
      };
    } else if (eventType === "wheeltowheel") {
      data = {
        id: event.id,
        // seasonId: formData.get("season"),
        track: formData.get("track"),
        vehicle: formData.get("vehicle"),
        dateTime: formData.get("datetime") + ":00.000Z",
      };
    } else {
      throw new Error("Invalid event type");
    }

    // console.log(data);

    const res = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(res);

    if (res.ok) {
      toast.success("Event updated!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Failed to update event!");
    }
  };

  return (
    <div className="w-full rounded-xl border border-slate-300/40 p-4 relative mb-2">
      <h2>{event.title}</h2>
      <p>{event.track}</p>
      <p>{event.vehicle}</p>
      {eventType === "rivals" ? (
        <p>{event.endsAt.toString()}</p>
      ) : (
        // <p>{event.dateTime.toString()}</p>
        <p>{event.dateTime.toString()}</p>
      )}
      <MdDeleteForever
        onClick={deleteEvent}
        className="absolute top-5 right-5 text-red-500 text-2xl cursor-pointer hover:scale-125 transition-all duration-150"
      />
      <Dialog>
        <DialogTrigger asChild>
          <p>
            <MdEdit className="absolute top-5 right-14 text-yellow-500 text-2xl cursor-pointer hover:scale-125 transition-all duration-150" />
          </p>
        </DialogTrigger>
        <DialogContent className="[&&]:rounded-xl border-gray-300/40 bg-gray-900">
          <DialogHeader className="text-white mb-3">
            <DialogTitle className="text-2xl text-center">
              Edit Event
            </DialogTitle>
            <DialogDescription className="text-center">
              Edit the details of this event.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={patchEvent}
            className="grid grid-cols-2 grid-rows-4 gap-5 items-center justify-center"
          >
            {/* season is not editable for events. If season needs to be changed, you must delete the event and create a new one */}
            <label htmlFor="track" className="text-white text-xl">
              Track
            </label>
            <input
              type="text"
              name="track"
              id="track"
              defaultValue={event.track}
              className="px-4 py-2 rounded-xl border"
            />
            <label htmlFor="vehicle" className="text-white text-xl">
              Vehicle
            </label>
            <input
              type="text"
              name="vehicle"
              id="vehicle"
              defaultValue={event.vehicle}
              className="px-4 py-2 rounded-xl border"
            />
            {eventType === "rivals" ? (
              <>
                <label htmlFor="endsAt" className="text-white text-xl">
                  End Date/Time &#40;UTC&#41;
                </label>
                <input
                  type="datetime-local"
                  name="endsAt"
                  id="endsAt"
                  defaultValue={JSON.stringify(event.endsAt).slice(1, 17)}
                  className="px-4 py-2 rounded-xl border"
                />
              </>
            ) : (
              <>
                <label htmlFor="dateTime" className="text-white text-xl">
                  End Date/Time &#40;UTC&#41;
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  id="datetime"
                  defaultValue={JSON.stringify(event.dateTime).slice(1, 17)}
                  className="px-4 py-2 rounded-xl border"
                />
              </>
            )}
            <DialogTrigger className="col-span-2 w-full text-xl font-bold px-6 py-2 rounded-xl bg-green-700 hover:bg-green-600 active:bg-green-500 transition-all duration-150 hover:cursor-pointer">
              <input
                type="submit"
                value="Update Event"
                className="hover:cursor-pointer"
              />
            </DialogTrigger>
          </form>
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  );
};

export default EventTile;
