import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Descubre y comparte
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> ofertas de trabajo para el TecNM Cancún</span>
    </h1>
    <p className='desc text-center'>
    TecJobs es una herramienta de codigo libre que comparte ofertas de trabajo disponibles para estudiantes del TECNM Cancún
    </p>

    <Feed />
  </section>
);

export default Home;