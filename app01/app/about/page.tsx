export default function About() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
      <h1 className="text-4xl font-bold font-mono">Sobre Nós</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        O Code & Coffee foi fundado em 2026 por dois desenvolvedores exaustos que só queriam
        um lugar tranquilo para compilar seus projetos. Nossa missão é fornecer o melhor
        ambiente possível para nômades digitais e programadores locais.
      </p>
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
        alt="Pessoas trabalhando juntas em laptops" 
        className="rounded-xl shadow-lg mt-4 w-full h-64 object-cover"
      />
    </div>
  );
}