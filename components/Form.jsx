import Link from 'next/link'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
        {type} Publicación
        </span>
      </h1>

      <p className='desc text_left max-w-md'>
        {type} y compartir ofertas de trabajo para estudiantes del TecNM Cancún nunca fue tan sencillo!
      </p>

      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tu oferta de trabajo
          </span>
          <textarea 
            value={post.prompt}
            onChange={(e) => setPost({...post,
            prompt: e.target.value})}
            placeholder='Escribe los detalles de tu oferta aquí...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Perfil Objetivo {''}
          <span className='font-normal'>(#desarrolladorweb, #adminbasededatos, #adminredes)</span>
          </span>
          <input 
            value={post.tag}
            onChange={(e) => setPost({...post,
            tag: e.target.value})}
            placeholder='¿A qué perfil esta dirigido tu oferta?'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
              <Link href="/" className='text-gray-500 text-sm'>
              Cancelar
              </Link>
              <button
              type="submit"
              disabled={submitting}
              className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
              >
                {submitting ? `${type}ndo...` : type}
              </button>
        </div>
      </form>
    </section>
  )
}

export default Form