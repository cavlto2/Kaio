export default function Menu() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl w-full">
      <h1 className="text-4xl font-bold font-mono">Nosso Menu</h1>
      
      <div className="flex flex-col w-full gap-4 text-left bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold">Cafés (Combustível)</h2>
        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
          <li>Espresso Array - R$ 8,67</li>
          <li>Cappuccino Loop - R$ 14,67</li>
          <li>Cold Brew Assíncrono - R$ 16,67</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">Comidas (Snacks)</h2>
        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
          <li>Croissant de Dados - R$ 12,67</li>
          <li>Pão de Queijo em Nuvem - R$ 10,67</li>
        </ul>
      </div>

      <img 
  src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800" 
  alt="Grãos de café e equipamento de extração" 
  className="rounded-xl shadow-lg mt-4 w-full h-64 object-cover"
/>
    </div>
  );
}