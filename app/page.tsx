import NavButtonHome from "@/components/NavButtonHome";

export default function Home() {
  return (
    <main className="flex flex-col max-h-[40rem] md:flex-row">
      <NavButtonHome title="Rivals" navigation="rivals" />
      <NavButtonHome title="W2W" navigation="wheel-to-wheel" />
    </main>
  );
}
