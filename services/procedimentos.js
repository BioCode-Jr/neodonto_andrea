import Image from 'next/image'

const procedimentos = [
  {
    label: 'Ozonioterapia',
    icon: (
      <Image
        src='/images/procedimentos/icones/ozonioterapia.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Harmonização Facial Integrativa',
    icon: (
      <Image
        src='/images/procedimentos/icones/harmonizacao.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Implantes Cerâmicos',
    icon: (
      <Image
        src='/images/procedimentos/icones/implantes.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Restaurações Estéticas',
    icon: (
      <Image
        src='/images/procedimentos/icones/restauracao.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Cirurgias Gengivais Estéticas',
    icon: (
      <Image
        src='/images/procedimentos/icones/cirurgias.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Tratamento de Cavitações (NICO)',
    icon: (
      <Image
        src='/images/procedimentos/icones/tratamento-nico.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Remoção Segura do Amálgama',
    icon: (
      <Image
        src='/images/procedimentos/icones/remocao-amalgama.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Tratamento de Gengivite e Periodontite',
    icon: (
      <Image
        src='/images/procedimentos/icones/tratamento-gengivite.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Próteses',
    icon: (
      <Image
        src='/images/procedimentos/icones/proteses.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Clareamento Dentário',
    icon: (
      <Image
        src='/images/procedimentos/icones/clareamento.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modalContent: (
      <>
        <div className='flex flex-col justify-center items-center text-wrap text-xl gap-10 px-10'>
          <p className='text-center'>
            Você já pensou em ter dentes{' '}
            <b className='text-dark-pink'>mais brancos</b>?
          </p>
          <p className='text-center'>
            No meu consultório, oferecemos dois tipos de clareamento
            dentário: o <b className='text-dark-pink'>caseiro</b> e o{' '}
            <b className='text-dark-pink'>profissional</b>. No procedimento
            caseiro, é feito uma moldeira de silicone transparente , a
            partir de moldes do seu dente, para aplicação do gel clareador
            em casa. Já o clareamento profissional é realizado totalmente
            pelo cirurgião-dentista.
          </p>
          <b className='text-center text-dark-pink '>
            Seja qual for o método, a garantia de dentes branquinhos é a
            mesma!
          </b>
        </div>

        <Image
          src='/images/procedimentos/clareamento.png'
          width={1000}
          height={400}
          alt='Clareamento Dentário'
        />
      </>
    ),
  },
  {
    label: 'Prescrição de Canabinóides',
    icon: (
      <Image
        src='/images/procedimentos/icones/prescricao.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    label: 'Laserterapia e ILIB',
    icon: (
      <Image
        src='/images/procedimentos/icones/laserterapia.png'
        width={100}
        height={100}
        alt='Clareamento Dentário'
      />
    ),
    modal: (
      <svg
        width='100px'
        height='100px'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
          fill='#fff'
        />
      </svg>
    ),
  },
]

export { procedimentos }
