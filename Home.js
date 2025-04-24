export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#3b2f2f] px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">Mirandaja</h1>
        <p className="text-xl text-center mb-12">
          Vinos artesanales y secos desde Málaga.<br />Artisanal dry wines from Málaga.
        </p>

        <div className="flex justify-center mb-10">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Grapes_icon.svg/512px-Grapes_icon.svg.png" alt="Mirandaja logo" className="w-24 h-24 opacity-80" />
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-4 text-center">Sobre mí / About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-center">
            Soy Marcos Miranda, enólogo formado en California, Burdeos y Reino Unido. He vuelto a mi tierra para crear vinos sinceros, modernos y con alma.
            <br />
            I’m Marcos Miranda, a winemaker trained in California, Bordeaux and the UK. I returned home to create honest, modern wines full of soul.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">Galería / Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1603780219831-53e29b42b39d" className="rounded shadow" alt="Vineyard" />
            <img src="https://images.unsplash.com/photo-1616546233864-cda69b6d53e3" className="rounded shadow" alt="Wine process" />
            <img src="https://images.unsplash.com/photo-1514369112349-47e03c98c66e" className="rounded shadow" alt="Bottles" />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-2">Blanco Seco PX</h2>
            <p>
              Vino blanco seco elaborado con Pedro Ximénez. Sorprendentemente fresco, con notas florales y minerales. <br />
              Dry white wine made from Pedro Ximénez. Fresh, floral and beautifully mineral.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-2">Tinto de autor</h2>
            <p>
              Un tinto elegante elaborado con Syrah y Tempranillo. Redondo, frutal, con crianza ligera. <br />
              An elegant red blend of Syrah and Tempranillo. Fruit-forward and lightly aged.
            </p>
          </div>
        </section>

        <section className="mb-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Síguenos / Follow Us</h2>
          <a href="#" className="inline-block mx-2 px-4 py-2 bg-[#3b2f2f] text-white rounded hover:bg-[#5b4747]">Instagram</a>
          <a href="#" className="inline-block mx-2 px-4 py-2 bg-[#3b2f2f] text-white rounded hover:bg-[#5b4747]">Facebook</a>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contacto / Contact</h2>
          <form className="max-w-xl mx-auto grid gap-4">
            <input type="text" placeholder="Nombre / Name" className="border p-2 rounded" />
            <input type="email" placeholder="Correo / Email" className="border p-2 rounded" />
            <textarea placeholder="Mensaje / Message" rows={4} className="border p-2 rounded"></textarea>
            <button className="bg-[#3b2f2f] text-white px-4 py-2 rounded hover:bg-[#5b4747]">Enviar / Send</button>
          </form>
        </section>

        <footer className="mt-20 border-t pt-10 text-sm text-neutral-500 text-center">
          &copy; {new Date().getFullYear()} Mirandaja. Todos los derechos reservados / All rights reserved.
        </footer>
      </section>
    </main>
  );
}