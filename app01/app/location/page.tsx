export default function Location() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
      <h1 className="text-4xl font-bold font-mono">Onde nos encontrar</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Estamos localizados no coração do polo tecnológico da cidade.
        <br /><br />
        <strong>Endereço:</strong><br />
        Rua Dos Donos Do Complexo Competitivo, 6769 - Bairro do Fortnite<br />
        Aberto de Segunda a Sexta, das 07:00 às 22:00
      </p>
      <img 
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
        alt="Fachada iluminada de uma cafeteria" 
        className="rounded-xl shadow-lg mt-4 w-full h-64 object-cover"
      />
    </div>
  );
}