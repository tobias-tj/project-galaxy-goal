import HeroBody from "@/components/Hero";
import HeroDetails from "@/components/HeroDetails";

export default function Home() {
  return (
    <main className="h-full w-full">
    <div className="flex flex-col gap-6">
      <HeroBody/>
      <HeroDetails/>
    </div>
    </main>
  );
}
