export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
      <h1 className="text-4xl font-bold font-mono">Bem-vindo ao Code & Coffee</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        O ambiente perfeito para você focar no seu código enquanto degusta um café especial.
        Wi-Fi de alta velocidade e tomadas em todas as mesas!
      </p>
      <img 
        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" 
        alt="Xícara de café com latte art" 
        className="rounded-xl shadow-lg mt-4 w-full h-64 object-cover"
      />
    </div>
  );
}