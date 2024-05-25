import { prisma } from "@/lib/prisma";
import AddSeasonForm from "./AddSeasonForm";

const getAllSeasons = async () => {
  const seasonArray = [];
  console.log("Fetching seasons...");
  const seasons = await prisma.season.findMany();
  for (const season in seasons) {
    seasonArray.push(seasons[season]);
  }
  console.log("Fetched seasons!");
  return seasonArray;
};

const SeasonsPage = async () => {
  const seasons = await getAllSeasons();
  return (
    <div>
      <h1 className="text-white">Seasons</h1>
      <AddSeasonForm />
      <div>
        {seasons.map((season) => (
          <div key={season.id} className="text-white">
            <h2>{season.name}</h2>
            <p>{season.description || "No description yet."}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonsPage;
