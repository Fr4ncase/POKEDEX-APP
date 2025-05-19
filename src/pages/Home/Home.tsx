import { PokeballIcon } from "@/assets/PokeballIcon"

function Home() {
  return (
    <header className="bg-primary flex items-center gap-x-[16px]">
      <PokeballIcon />
      <h1 className="text-headline leading-headline text-gray-white font-bold">Pokédex</h1>
    </header>
  )
}

export default Home