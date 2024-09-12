import Head from 'next/head'
import Header from './components/Header'
import Button from './components/Button'
import Title from './components/Title'

import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
import { WhatsApp } from '@mui/icons-material'

// Importando a fonte Roboto com pesos 400 e 700
const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Andréa Vieira Martins</title>
        <link rel='icon' href='/images/logo.png' />
      </Head>
      <Header />
      <main
        className={`${josefin.className} flex flex-col min-h-screen w-full items-center`}
      >
        {/* Inicio */}

        <section id='#' className='w-full'>
          <div className='flex flex-col relative items-end justify-center w-full h-224 bg-home-image bg-no-repeat bg-cover px-80 '>
            <div className='absolute inset-0 bg-pink-300 opacity-50' />
            <div className='flex flex-col items-center justify-center w-144 h-60 bg-pink-300 shadow-2xl rounded-3xl p-10 relative'>
              <p className='text-4xl text-white text-wrap text-center'>
                Conheça a Odontologia que não trata apenas de{' '}
                <span className='text-dark-pink font-bold'>DENTE</span>, e
                sim de{' '}
                <span className='text-dark-pink font-bold'>GENTE</span>.
              </p>
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
                <Button
                  label='FALE CONOSCO'
                  variant={'primary'}
                  onClick={() => alert('Clicou')}
                />
              </div>
            </div>
            <div className='bg-border-white bg-no-repeat h-40 w-full absolute bottom-0 right-0 bg-cover'></div>
          </div>

          <div className='flex flex-col relative items-center gap-16 w-full min-h-160 bg-white pt-20 pb-52 px-40 '>
            <Title title={'A Odontologia Integrativa'} />
            <div className='flex gap-32'>
              <div className=' flex flex-col gap-10 w-1/2'>
                <p className='text-2xl text-black text-wrap text-justify'>
                  <span className='text-dark-pink font-bold'>A</span>{' '}
                  Odontologia Integrativa é uma proposta que considera o
                  paciente como um todo, levando em conta os diversos
                  fatores sistêmicos e ambientais que interferem na Saúde
                  Bucal. É uma forma de atendimento onde há um grande
                  respeito às individualidades biológicas e necessidades de
                  cada um. Dentro dessa prática, é possível entender que a
                  boca vai muito além dos dentes, língua e gengiva, e como
                  o desequilíbrio desses pode causar consequências no
                  organismo todo.
                </p>
                <p className='text-2xl text-black text-wrap text-justify'>
                  <span className='text-dark-pink font-bold'>F</span>ornece
                  suporte para que o próprio indivíduo contribua para o seu
                  processo de cura, estimulando a capacidade neural de
                  autorregulação que o corpo humano possui. Nesse conceito,
                  unimos os tratamentos já consagrados na Odontologia com
                  as técnicas e cuidados mais seguros e menos tóxicos ao
                  organismo.
                </p>
              </div>
              <div className='w-1/2 flex flex-col items-center gap-10'>
                <p className='text-2xl text-black text-wrap text-justify'>
                  <span className='text-dark-pink font-bold'>U</span>
                  tilizamos de abordagens multidisciplinares como por
                  exemplo:{' '}
                  <span className='text-pink-400'>
                    Laserterapia, Laserpuntura, Concentrados sanguíneos
                    (L-PRF), Aromaterapia, Terapia Neural, Homeopatia,
                    Conceitos de Biofísica, Musicoterapia,
                  </span>{' '}
                  entre outros. Buscando sempre promever uma atenção
                  integral para a saúde plena do paciente.
                </p>
                <div className='relative'>
                  <Image
                    src='/images/ilustracao-dente-mao.svg'
                    width={300}
                    height={300}
                    quality={100}
                    alt='Odontologia Integrativa'
                  />
                  <div className='absolute bottom-3 left-1/2 transform w-104 flex justify-center -translate-x-1/2 translate-y-1/2'>
                    <Button
                      label='Quer saber mais?'
                      secondLabel='Venha conversar conosco!'
                      variant={'secondary'}
                      icon={<WhatsApp fontSize='large' />}
                      onClick={() => alert('Clicou')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}

        <section
          className='flex relative justify-end w-full min-h-160 bg-light-pink px-40 '
          id='sobre'
        >
          <div className='bg-border-light-pink bg-no-repeat h-40 w-full absolute -top-40 right-0 bg-cover' />
          <div className=' absolute -left-20 -top-24 bg-dark-pink rounded-full'>
            <Image
              src='/images/andrea-photo.png'
              width={674}
              height={674}
              quality={100}
              alt='Imagem da Andrea'
              className='border-32 border-dark-pink rounded-full outline-none'
            />
          </div>
          <div className='flex w-3/5 justify-end '>
            <div className='min-h-160 bg-light-pink py-20 '>
              <div className='flex flex-col items-center gap-16 px-20  '>
                <Title title={'Dra. Andréa Vieira Martins'} />

                <p className='text-2xl text-dark-pink text-wrap text-justify'>
                  “Quando eu escolhi a Odontologia, não sabia muito bem o
                  que essa escolha significaria. Só sabia que queria um
                  curso ligado à saúde, no qual eu pudesse ser dona do meu
                  próprio tempo para que, assim, eu pudesse conciliar a
                  minha agenda com o sonho de ser mãe e construir uma
                  família. Ao longo desses anos fui me apaixonando cada dia
                  mais pela profissão! Fui descobrindo que cuidar da saúde
                  bucal dos meus pacientes era muito mais que cuidar dos
                  seus dentes. Notei que a verdadeira Odontologia não trata
                  de DENTE mas sim de GENTE!”
                </p>
                <div className='flex self-end'>
                  <Button
                    label='LEIA MAIS AQUI'
                    variant={'primary'}
                    onClick={() => alert('Clicou')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}

        <section
          className='flex flex-col relative  justify-center w-full min-h-160 bg-white px-40 '
          id='sobre'
        ></section>
      </main>
    </>
  )
}

{
  /* <Button
label='Clique aqui'
variant={'grid'}
onClick={() => alert('Clicou')}
icon={
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
      fill='#000000'
    />
  </svg>
}
column={1}
/>
<Button
label='Clique aqui'
variant={'grid'}
onClick={() => alert('Clicou')}
column={2}
/>
<Button
label='Clique aqui'
variant={'grid'}
onClick={() => alert('Clicou')}
column={3}
/>
<Button
label='Clique aqui'
variant={'grid'}
onClick={() => alert('Clicou')}
column={4}
/>

<Button
label='Clique aqui'
variant={'primary'}
onClick={() => alert('Clicou')}
icon={
  <svg
    width='20px'
    height='20px'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M16 2H0V14H16V2ZM5 10.5C6.38071 10.5 7.5 9.38071 7.5 8C7.5 6.61929 6.38071 5.5 5 5.5C3.61929 5.5 2.5 6.61929 2.5 8C2.5 9.38071 3.61929 10.5 5 10.5ZM10 5H14V7H10V5ZM14 9H10V11H14V9Z'
      fill='#000000'
    />
  </svg>
}
/> */
}
