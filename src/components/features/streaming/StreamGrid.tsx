import StreamCard from "./StreamCard";

// Mock data for streams
const streamData = [
  {
    id: "1",
    title: "Tony's Adventure Classics: Legend of Zelda Retro Play",
    streamerName: "Big Bender",
    game: "Valorant",
    viewerCount: "1.2k",
    thumbnail: "",
    isLive: true,
  },
  {
    id: "2", 
    title: "Carl's Shooter Extravaganza: Rainbow Six Siege",
    streamerName: "Localita",
    game: "Valorant",
    viewerCount: "2.8k",
    thumbnail: "",
    isLive: true,
  },
  {
    id: "3",
    title: "No Man's Sky: Black Hole Exploration",
    streamerName: "Qorver", 
    game: "Valorant",
    viewerCount: "5.7k",
    thumbnail: "",
    isLive: true,
  },
  {
    id: "4",
    title: "Max Plays Rocket League: Chat Controls the Car",
    streamerName: "Knuckles",
    game: "Valorant", 
    viewerCount: "4.5k",
    thumbnail: "",
    isLive: true,
  },
  {
    id: "5",
    title: "Community Choice: Fortnite – Solo Squads Challenge",
    streamerName: "Gargoyle",
    game: "Valorant",
    viewerCount: "1.2k", 
    thumbnail: "",
    isLive: true,
  },
];

export default function StreamGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {streamData.map((stream) => (
        <StreamCard
          key={stream.id}
          title={stream.title}
          streamerName={stream.streamerName}
          game={stream.game}
          viewerCount={stream.viewerCount}
          thumbnail={stream.thumbnail}
          isLive={stream.isLive}
        />
      ))}
    </div>
  );
}
