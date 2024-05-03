import HomeCard from "./HomeCard";
import { Brain, Trophy, Flame } from "lucide-react";

interface CardInfo {
  icon: any;
  title: string;
  description: string;
}

const cardInfo: CardInfo[] = [
  {
    icon: <Brain className="text-blue-400" />,
    title: "Boost Your Brain",
    description: "Kickstart your mind with quick, daily coding challenges.",
  },
  {
    icon: <Flame className="text-red-400" />,
    title: "Level Up",
    description: "Build your score and streak with every correct answer.",
  },
  {
    icon: <Trophy className="text-amber-400" />,
    title: "Rise to the Top",
    description: "Dominate the leaderboard and showcase your coding knowledge.",
  },
];

const HomeCardsList = () => {
  return (
    <section className="px-5 md:px-20 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center">
          Challenge yourself, climb the ranks.
        </h2>
        <div className="flex w-full gap-4 flex-wrap sm:flex-nowrap mx-auto">
          {cardInfo.map((info, idx) => (
            <HomeCard
              key={idx}
              title={info.title}
              description={info.description}
              icon={info.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCardsList;
