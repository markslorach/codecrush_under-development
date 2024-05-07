import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Components
import ChallengeList from "@/app/(main)/components/ChallengeList";
import StatsList from "@/app/(main)/components/StatsList";
import SubHeading from "@/app/(main)/components/SubHeading";
import UserGreeting from "@/app/(main)/components/UserGreeting";
import Leaderboard from "../components/Leaderboard";

export const dynamic = "force-dynamic";

const Dashboard = () => {
  const { userId } = auth();

  const redirectAfterSignout = () => {
    if (!userId) {
      redirect("/");
    }
  };

  redirectAfterSignout();

  return (
    <main>
      <header className="mb-20">
        <UserGreeting />
      </header>
      <section className="mb-20">
        <SubHeading className="mb-5">Your Stats</SubHeading>
        <StatsList />
      </section>
      <section className="mb-10 flex gap-20">
        <div className="w-1/3">
          <SubHeading className="mb-5">Today&apos;s Challenge</SubHeading>
          <ChallengeList />
        </div>
        <div className="w-2/3">
          <SubHeading className="mb-5">Leaderboard</SubHeading>
          <Leaderboard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
