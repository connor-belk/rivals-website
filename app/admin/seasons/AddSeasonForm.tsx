"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export default function AddSeasonForm(seasonData: any) {
  const addSeason = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      startsAt: formData.get("startsAt")!.toString() + ":00.000Z",
    };

    const res = await fetch("/api/admin/seasons", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(await res.json());
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="ml-6 px-6 py-2 border border-white rounded-xl hover:bg-slate-800 transition-all duration-150">
          Add Season
        </button>
      </DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px] bg-gray-900 border border-gray-600 rounded-xl">
        <DialogHeader>
          <DialogTitle>Add Season</DialogTitle>
          <DialogDescription>
            Add a season here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={addSeason}
          className="grid grid-cols-4 grid-rows-3 gap-2 items-center justify-center"
        >
          <label htmlFor="name" className="col-span-1 row-span-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="col-span-3 px-2 py-1 text-slate-950"
            placeholder="Season Name"
          />
          <label htmlFor="startsAt" className="col-span-1">
            Start Date &#40;UTC&#41;
          </label>
          <input
            type="datetime-local"
            id="startsAt"
            name="startsAt"
            className="col-span-3 px-2 py-1 text-slate-950"
            onChange={(e) =>
              console.log(e.target.value.toString() + ":00.000Z")
            }
          />
          <DialogTrigger asChild>
            <button
              type="submit"
              className="px-6 py-2 border border-white rounded-xl hover:bg-slate-800 transition-all duration-150 col-start-4"
            >
              Save
            </button>
          </DialogTrigger>
        </form>
      </DialogContent>
    </Dialog>
  );
}
