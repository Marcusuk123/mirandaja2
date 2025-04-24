export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#3b2f2f] px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">Mirandaja</h1>
        <p className="text-xl text-center mb-12">
          Vinos artesanales y secos desde Málaga.<br />Artisanal dry wines from Málaga.
        </p>
        <footer className="mt-20 border-t pt-10 text-sm text-neutral-500 text-center">
          &copy; {new Date().getFullYear()} Mirandaja. Todos los derechos reservados / All rights reserved.
        </footer>
      </section>
    </main>
  );
}