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
      <div className='flex gap-10 relative'>
        <div>
          <Image
            src='/images/procedimentos/clareamento/clareamento.png'
            width={2000}
            height={900}
            alt='Clareamento Dentário'
          />
        </div>

        <div className='flex flex-col justify-center items-center text-wrap gap-10 px-20 h-full relative'>
          <div className='absolute top-0' style={{ left: '-3rem' }}>
            <Image
              src='/background/border-dark-pink.svg'
              width={86.5}
              height={400}
              alt='Clareamento Dentário'
            />
          </div>
          <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative'>
            <h2 className='text-4xl text-center font-semibold text-dark-pink px-10'>
              Clareamento Dentário
            </h2>
            <div className='flex flex-col justify-center items-center text-wrap text-xl gap-6 '>
              <p className='text-justify'>
                O Clareamento Dental consiste no uso de produtos à base de
                peróxido de hidrogênio ou de carbamida que, em contato com
                os dentes, quebra as moléculas pigmentadas e{' '}
                <b className='text-dark-pink'>
                  {' '}
                  deixa o dente mais branco.
                </b>
              </p>
              <p className='text-justify'>
                Para a efetividade e segurança do tratamento, é fundamental
                que o paciente realize{' '}
                <b className='text-dark-pink'>
                  um minucioso exame clínico e radiográfico
                </b>{' '}
                para avaliar se existe alguma condição que contraindica o
                procedimento naquele momento, como nos casos da presença de
                cárie, lesão ou doença gengival.
              </p>
              <p className='text-justify'>
                O procedimento pode ser feito de{' '}
                <b className='text-dark-pink'>
                  {' '}
                  03 formas: Clareamento de Consultório; Clareamento
                  Caseiro Supervisionado; e Clareamento Misto.
                </b>
              </p>
              <p className='text-justify'>
                O Clareamento feito em consultório, ocorre através da{' '}
                <b className='text-justify text-dark-pink '>
                  {' '}
                  aplicação do gel clareador em alta concentração e a
                  quantidade de sessões para gerar resultado{' '}
                </b>
                é determinada pelo dentista. Já o clareamento realizado em
                casa, é feito com uma moldeira odontológica (feita sob
                medida) em que é colocado o gel clareador e que deve
                permanecer em contato com os dentes durante o tempo
                indicado pelo profissional.
              </p>
              <b className='text-justify text-dark-pink '>
                Seja qual for o método, a garantia de dentes branquinhos é
                a mesma!
              </b>
            </div>
          </div>
        </div>
      </div>
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
