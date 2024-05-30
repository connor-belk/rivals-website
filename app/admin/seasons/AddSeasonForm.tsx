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
      description: formData.get("description"),
    };

    const res = await fetch("/api/admin/season", {
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
        <button className="text-white px-6 py-2 border border-white rounded-xl hover:bg-slate-800 transition-all duration-150">
          Add Season
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border border-gray-600 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-white">Add Season</DialogTitle>
          <DialogDescription className="text-white">
            Add a season here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={addSeason}
          className="grid grid-cols-4 grid-rows-3 gap-2 items-center justify-center"
        >
          <label htmlFor="name" className="text-white col-span-1 row-span-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="col-span-3 px-2 py-1"
            placeholder="Season Name"
          />
          <label htmlFor="description" className="text-white col-span-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="col-span-3 px-2 py-1"
            placeholder="Optional description..."
          />
          <DialogTrigger asChild>
            <button
              type="submit"
              className="text-white px-6 py-2 border border-white rounded-xl hover:bg-slate-800 transition-all duration-150 col-start-4"
            >
              Save
            </button>
          </DialogTrigger>
        </form>
      </DialogContent>
    </Dialog>
  );
}
