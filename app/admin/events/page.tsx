import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventTile from "./_components/EventTile";
import AddEventForm from "./_components/AddEventForm";

import { getRivalsEvents, getW2WEvents, getSeasons } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventsPage = async () => {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  const rivalsEvents = await getRivalsEvents();
  const wheelToWheelEvents = await getW2WEvents();
  const seasons = await getSeasons();

  // console.log(rivalsEvents);
  // console.log(wheelToWheelEvents);

  return (
    <div className="text-white">
      <h2 className="text-center text-3xl font-bold">Events Page</h2>
      {/* <p className="text-center">
        Create a new event Button That opens a popover with tabs in it lol...The
        page full of tabs...
      </p> */}
      <div className="mt-4 flex flex-col gap-2 items-center justify-center">
        <AddEventForm seasons={seasons} />
      </div>

      {/* This is where the events will be fetched and displayed */}
      <Tabs
        defaultValue="rivals"
        className="max-w-[768px] mx-auto border border-white/20 rounded-xl p-2 m-2 self"
      >
        <TabsList className="grid w-full h-full grid-cols-2 bg-gray-800 rounded-xl">
          <TabsTrigger value="rivals" className="rounded-xl text-lg">
            Rivals
          </TabsTrigger>
          <TabsTrigger value="wheeltowheel" className="rounded-xl text-lg">
            Wheel to Wheel
          </TabsTrigger>
        </TabsList>
        <TabsContent value="rivals" className="bg-gray-700 rounded-xl p-2">
          {rivalsEvents.map((rivalsEvent: any) => (
            <EventTile
              key={rivalsEvent.id}
              eventType={"rivals"}
              event={rivalsEvent}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="wheeltowheel"
          className="bg-gray-700 rounded-xl p-2"
        >
          {wheelToWheelEvents.map((wheelToWheelEvent: any) => (
            <EventTile
              key={wheelToWheelEvent.id}
              eventType={"wheeltowheel"}
              event={wheelToWheelEvent}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsPage;
