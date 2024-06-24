"use client";

import toast, { Toaster } from "react-hot-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddEventForm = ({ seasons }: { seasons: any }) => {
  const addRivalsEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      seasonId: formData.get("season"),
      track: formData.get("track"),
      vehicle: formData.get("vehicle"),
      endsAt: formData.get("endsAt") + ":00.000Z",
    };

    const res = await fetch("/api/admin/events/rivals", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Rivals event added!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Failed to add event!");
    }
  };

  const addW2WEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      seasonId: formData.get("season"),
      track: formData.get("track"),
      vehicle: formData.get("vehicle"),
      dateTime: formData.get("dateTime") + ":00.000Z",
    };

    const res = await fetch("/api/admin/events/wheeltowheel", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Wheel to Wheel event added!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Failed to add event!");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="max-w-[768px] mx-auto">
          <button className="text-center text-lg my-2 w-[768px] bg-green-700 px-6 py-2 rounded-xl hover:bg-green-600 active:bg-green-500 transition-all duration-150 font-bold">
            Add an Event
          </button>
        </DialogTrigger>
        <DialogContent className="[&&]:rounded-xl">
          <DialogHeader className="text-white text-xl font-bold">
            Add an Event
          </DialogHeader>
          <Tabs
            defaultValue="rivals"
            className="w=[768px] border border-white/20 rounded-xl"
          >
            <TabsList className="grid w-full h-fit grid-cols-2 bg-gray-800 rounded-xl text-white items-center justify-center p-1">
              <TabsTrigger value="rivals" className="rounded-xl text-lg">
                Rivals
              </TabsTrigger>
              <TabsTrigger value="w2w" className="rounded-xl text-lg">
                Wheel to Wheel
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rivals" className="bg-gray-700 rounded-xl p-2">
              <form onSubmit={addRivalsEvent} className="flex flex-col gap-2">
                <label htmlFor="season" className="text-white">
                  Season
                </label>
                <select
                  name="season"
                  id="season"
                  defaultValue={"2"}
                  className="text-center py-1 rounded-xl"
                >
                  {/* map over the seasons array  */}
                  {seasons.map((season: any) => (
                    <option key={season.id} value={season.id}>
                      {season.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="track" className="text-white">
                  Track
                </label>
                <input
                  type="text"
                  name="track"
                  id="track"
                  placeholder="Full Track Name and Variation"
                  className="rounded-xl px-4 py-1 text-center"
                />
                <label htmlFor="vehicle" className="text-white">
                  Vehicle
                </label>
                <input
                  type="text"
                  name="vehicle"
                  id="vehicle"
                  placeholder="Full Vehicle Name and PI Rating"
                  className="rounded-xl px-4 py-1 text-center"
                />
                <label htmlFor="endsAt" className="text-white">
                  End Date/Time &#40;UTC&#41;
                </label>
                <input
                  type="datetime-local"
                  name="endsAt"
                  id="endsAt"
                  className="rounded-xl px-4 py-1 text-center"
                />
                <DialogTrigger>
                  <input
                    type="submit"
                    className="w-full bg-green-700 px-6 py-2 rounded-xl mt-3 hover:cursor-pointer hover:bg-green-600 active:bg-green-500 transition-all duration-150 font-bold"
                    value={"Add Event"}
                  />
                </DialogTrigger>
              </form>
            </TabsContent>
            <TabsContent value="w2w" className="bg-gray-700 rounded-xl p-2">
              <form onSubmit={addW2WEvent} className="flex flex-col gap-2">
                <label htmlFor="season" className="text-white">
                  Season
                </label>
                <select
                  name="season"
                  id="season"
                  defaultValue={"1"}
                  className="rounded-xl px-4 py-1 text-center"
                >
                  {/* map over the seasons array  */}
                  {seasons.map((season: any) => (
                    <option key={season.id} value={season.id}>
                      {season.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="track" className="text-white">
                  Track
                </label>
                <input
                  type="text"
                  name="track"
                  id="track"
                  placeholder="Full Track Name and Variation"
                  className="rounded-xl px-4 py-1 text-center"
                />
                <label htmlFor="vehicle" className="text-white">
                  Vehicle
                </label>
                <input
                  type="text"
                  name="vehicle"
                  id="vehicle"
                  placeholder="Series/Vehicle Class"
                  className="rounded-xl px-4 py-1 text-center"
                />
                <label htmlFor="dateTime" className="text-white">
                  End Date/Time &#40;UTC&#41;
                </label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  id="dateTime"
                  className="rounded-xl px-4 py-1 text-center"
                />
                <DialogTrigger>
                  <input
                    type="submit"
                    className="w-full bg-green-700 px-6 py-2 rounded-xl mt-3 hover:cursor-pointer hover:bg-green-600 active:bg-green-500 transition-all duration-150 font-bold"
                    value={"Add Event"}
                  />
                </DialogTrigger>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <Toaster />
    </>
  );
};

export default AddEventForm;
