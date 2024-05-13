import NavButtonHome from "@/components/NavButtonHome";

export default function Home() {
  return (
    <main className="flex flex-col max-h-[40rem] md:flex-row gap-1">
      <NavButtonHome title="Rivals" navigation="rivals" image="rivals-bg.jpg" />

      <NavButtonHome
        title="W2W"
        navigation="wheel-to-wheel"
        image="wheel-to-wheel-bg(2).jpg"
      />
    </main>
  );
}
