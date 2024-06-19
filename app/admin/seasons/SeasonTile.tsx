"use client";

import { MdEdit, MdDeleteForever } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const SeasonTile = ({ season }: { season: any }) => {
  const patchSeason = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    let endsAt = formData.get("endsAt");
    if (endsAt === "") {
      endsAt = null;
    } else {
      endsAt = endsAt + ":00.000Z";
    }

    const data = {
      id: season.id,
      name: formData.get("name"),
      startsAt: formData.get("startsAt") + ":00.000Z",
      endsAt: endsAt,
    };

    const res = await fetch("/api/admin/seasons", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Season updated!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Failed to update season!");
    }
  };

  const deleteSeason = async () => {
    const data = {
      id: season.id,
    };

    const confirmed = window.confirm(
      "Are you sure you want to delete this season?"
    );
    if (!confirmed) return;

    const res = await fetch("/api/admin/seasons", {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Season deleted!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Failed to delete season!");
    }
  };

  const date = new Date(season.startsAt);
  const fullDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border border-slate-300/40 w-content p-4 m-4 relative">
      <h2 className="text-2xl font-bold">{season.name}</h2>
      <p>
        <span className="font-bold">Starts:</span> {fullDate}
      </p>
      {/* <p>
        <span className="font-bold">Description:</span>{" "}
        {season.description || "No description yet."}
      </p> */}

      <MdDeleteForever
        onClick={deleteSeason}
        className="absolute top-5 right-5 text-red-500 text-2xl cursor-pointer hover:scale-125 transition-all duration-150"
      />
      <Dialog>
        <DialogTrigger asChild>
          <MdEdit className="absolute top-5 right-14 text-yellow-500 text-2xl cursor-pointer hover:scale-125 transition-all duration-150" />
        </DialogTrigger>
        <DialogContent className="bg-black text-white [&&]:rounded-xl">
          <DialogHeader>
            <DialogTitle>Edit {season.name}</DialogTitle>
            <DialogDescription>
              Edit the details of {season.name}.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={patchSeason}
            className="grid grid-cols-2 grid-rows-4 gap-2"
          >
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={season.name}
              className="bg-inherit px-4 py-2 rounded-xl border"
            />
            <label htmlFor="">Start Date &#40;UTC&#41;</label>
            <input
              type="datetime-local"
              name="startsAt"
              id="startsAt"
              defaultValue={JSON.stringify(season.startsAt)
                .slice(1, 17)
                .toString()}
              className="bg-inherit px-4 py-2 rounded-xl border"
            />
            {/* <p>{#}</p> */}
            <label htmlFor="">End Date &#40;UTC&#41;</label>
            <input
              type="datetime-local"
              name="endsAt"
              id="endsAt"
              defaultValue={
                JSON.stringify(season.endsAt).slice(1, 17).toString() || ""
              }
              className="bg-inherit px-4 py-2 rounded-xl border"
            />
            <DialogTrigger asChild>
              <button
                type="submit"
                className="col-span-2 bg-green-700 rounded-xl hover:bg-green-600 active:bg-green-500"
              >
                Save Changes
              </button>
            </DialogTrigger>
          </form>
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  );
};

export default SeasonTile;
