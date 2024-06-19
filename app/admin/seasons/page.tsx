import { prisma } from "@/lib/prisma";
import AddSeasonForm from "./AddSeasonForm";
import SeasonTile from "./SeasonTile";

const getSeasons = async () => {
  const seasons = await prisma.season.findMany();
  return seasons;
};

const SeasonsPage = async () => {
  const seasons = await getSeasons();

  return (
    <div className="text-white mt-5">
      <h1 className="text-center text-3xl">Seasons</h1>
      <AddSeasonForm />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {seasons.map((season) => (
          <SeasonTile key={season.id} season={season} />
        ))}
      </div>
    </div>
  );
};

export default SeasonsPage;
