"use client";

import toast, { Toaster } from "react-hot-toast";

export default function UserEditForm({ userData }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      id: userData.id,
      xboxId: formData.get("xboxId"),
      age: formData.get("age"),
      bio: formData.get("bio"),
      points: formData.get("points"),
      isAdmin: formData.get("isAdmin"),
    };

    const res = await fetch("/api/admin/user", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("User updated!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Failed to update user!");
    }
  };
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <p className="text-3xl font-bold">Update User Data:</p>
      <form
        onSubmit={updateUser}
        className="flex flex-col gap-2 items-center justify-between max-w-[30rem] w-full px-4 py-8 rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="xboxId" className="text-lg">
            Xbox Gamertag
          </label>
          <input
            type="text"
            name="xboxId"
            id="xboxId"
            defaultValue={userData.xboxId}
            className="text-black px-4 py-2 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="age" className="text-lg">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            defaultValue={userData.age}
            className="text-black px-4 py-2 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="bio" className="text-lg">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            defaultValue={userData.bio}
            className="text-black px-4 py-2 rounded-xl w-full h-32"
          ></textarea>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="points" className="text-lg">
            Points
          </label>
          <input
            type="number"
            name="points"
            id="points"
            defaultValue={userData.points}
            className="text-black px-4 py-2 rounded-xl"
          />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <label htmlFor="isAdmin" className="text-lg">
            Admin
          </label>
          <input
            type="checkbox"
            name="isAdmin"
            id="isAdmin"
            defaultChecked={userData?.isAdmin}
            className="w-4 h-4 rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="col-span-2 px-5 py-2 bg-green-300 text-black font-bold rounded-xl hover:bg-green-400 active:bg-green-500 transition-all duration-150 ease-in-out"
        >
          Update
        </button>
      </form>
      <Toaster />
    </div>
  );
}
