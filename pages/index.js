import Head from 'next/head'
import Header from './components/Header'
import Button from './components/Button'
import Title from './components/Title'
import Image from 'next/image'
import { WhatsApp } from '@mui/icons-material'
import Modal from './components/Modal'
import { useState } from 'react'
import Carousel from './components/Carousel'
import feedbacks from '@/services/feedbacks'
import Link from 'next/link'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsappButton'
import { procedimentos } from '@/services/procedimentos'

export default function Home() {
  const [activeModal, setActiveModal] = useState(null)

  const handleOpenModal = index => {
    setActiveModal(index)
  }

  const handleCloseModal = () => {
    setActiveModal(null)
  }

  const ondeAtendemos = Array.from({ length: 5 }, (_, i) => ({
    url: `/images/ondeAtendemos/image${i + 1}.png`,
  }))

  const galeriaSorrisos = Array.from({ length: 23 }, (_, i) => ({
    url: `/images/galeriaSorrisos/image${i + 1}.png`,
  }))

  return (
    <>
      <Head>
        <title>Andréa Vieira Martins</title>
        <link rel='icon' href='/images/logo.png' />
      </Head>
      <Header />
      <main className='flex flex-col min-h-screen w-full items-center'>
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
                  onClick={() => {
                    window.open('https://wa.me/5551989016197', '_blank')
                  }}
                />
              </div>
            </div>
            <div className='bg-border-white bg-no-repeat h-40 w-full absolute -bottom-3 right-0 bg-cover'></div>
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
          className='flex relative justify-end w-full min-h-160 bg-light-pink px-40 pb-20 '
          id='sobre'
        >
          <div className='bg-border-light-pink bg-no-repeat h-40 w-full absolute -top-36 right-0 bg-cover' />
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

        {/* Procedimentos */}

        <section
          className='flex flex-col relative justify-center w-full min-h-160 bg-white px-40 pb-40 '
          id='procedimentos'
        >
          <div className='bg-border-white-2 bg-no-repeat h-40 w-full absolute -top-40 right-0 bg-cover' />

          <div className='bg-white flex flex-wrap gap-16 justify-center px-40 py-20'>
            {procedimentos?.map((procedimento, index) => (
              <Button
                key={index}
                label={procedimento.label}
                variant={'grid'}
                onClick={() => handleOpenModal(index)}
                icon={procedimento.icon}
                row={Math.floor(index / 4) + 1}
              />
            ))}
          </div>

          {procedimentos?.map(
            (procedimento, index) =>
              activeModal === index && (
                <Modal
                  key={index}
                  isOpen={activeModal === index}
                  onClose={handleCloseModal}
                  image={procedimento.modalImage}
                >
                  {procedimento.modalContent}
                </Modal>
              )
          )}
        </section>

        {/* Galeria de Sorrisos */}

        <section className='flex flex-col justify-center w-full min-h-160 bg-light-pink gap-10 px-40 py-20 pb-40 relative'>
          <div className='bg-border-light-pink bg-no-repeat h-40 w-full absolute -top-32 right-0 bg-cover' />
          <Title title={'Galeria de Sorrisos'} />
          <Carousel slides={galeriaSorrisos} variant='image' />
        </section>

        {/* Depoimentos */}

        <section
          className='flex flex-col justify-center w-full min-h-160 bg-white gap-10 px-40 py-20 pb-20 relative'
          id='depoimentos'
        >
          <div className='bg-border-white bg-no-repeat h-40 w-full absolute -top-40 right-0 bg-cover' />

          <Carousel slides={feedbacks} variant='feedback' />
        </section>

        {/* Midias Sociais */}

        <section
          id='midias'
          className='flex flex-col relative items-center gap-40 w-full min-h-160 bg-white pt-20 pb-52 px-40 '
        >
          <Title title={'Mídias Sociais'} />
          <div className='flex gap-32 w-full'>
            <div className='flex flex-col justify-center items-center gap-10 w-1/2 relative'>
              <div className='absolute top-12 right-28 w-104 h-80 bg-pink-100 rounded-3xl'></div>
              <div className='flex flex-col gap-6 justify-center items-center w-104 h-80 bg-pink-300 rounded-3xl p-10 relative z-10'>
                <span className='text-white text-4xl text-center'>
                  Para ficar informado e atualizado sobre as novidades da
                  clínica, siga nossa página no Instagram!
                </span>
                <Link
                  href={
                    'https://www.instagram.com/draandreavieiramartins?igsh=b3RzY3phNWNwcnpt'
                  }
                  target='_blank'
                  className='text-darker-pink text-3xl underline underline-offset-8'
                >
                  Clique aqui para seguir.
                </Link>
              </div>
            </div>

            <div className=' flex flex-col  justify-center items-center  w-1/2'>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col'>
                  <span className='text-pink-grad-40 text-6xl font-semibold'>
                    30 anos
                  </span>
                  <span className='text-3xl'>
                    de trajetória profissional
                  </span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-pink-grad-40 text-6xl font-semibold'>
                    5k+
                  </span>
                  <span className='text-3xl'>seguidores no Instagram</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-pink-grad-40 text-6xl font-semibold'>
                    ∞+
                  </span>
                  <span className='text-3xl'>sorrisos garantidos</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-32 w-full'>
            <div className='flex flex-col justify-center items-center gap-10 w-1/2 '>
              <div className='w-full max-w-xl aspect-video'>
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/6rHvNb5QQiw?si=aS2r6q17HtwGDVNw'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerpolicy='strict-origin-when-cross-origin'
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className=' flex flex-col justify-center items-center w-1/2 gap-20'>
              <span className='text-4xl text-dark-pink text-wrap text-center w-104'>
                <b>Inscreva-se no meu canal</b> do YouTube e acompanhe
                conteúdos atualizados sobre odontologia.
              </span>

              <div className='flex flex-col gap-6 justify-center items-center w-104 box-border bg-dark-pink rounded-3xl p-10 relative z-10'>
                <span className='text-white text-3xl text-center font-semibold'>
                  Siga o nosso blog para saber mais sobre os procedimentos
                  as inovações da clínica!
                </span>
                <Link
                  href={
                    'https://www.instagram.com/draandreavieiramartins?igsh=b3RzY3phNWNwcnpt'
                  }
                  target='_blank'
                  className='text-white font text-2xl underline underline-offset-8'
                >
                  Clique aqui para seguir.
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Onde Atendemos */}

        <section
          className='flex flex-col justify-center w-full min-h-160 bg-light-pink gap-10 px-40 py-20 pb-40 relative'
          id='localizacao'
        >
          <div className='bg-border-light-pink bg-no-repeat h-40 w-full absolute -top-36 right-0 bg-cover' />
          <Title title={'Onde Atendemos'} />
          <Carousel slides={ondeAtendemos} variant='image' />
        </section>

        {/* Mapa */}

        <section className='flex flex-col justify-center w-full min-h-160 bg-white gap-10 px-40 py-20 pb-20 relative'>
          <div className='bg-border-white bg-no-repeat h-40 w-full absolute -top-40 right-0 bg-cover' />

          <div className='flex flex-col items-center min-h-160'>
            <span className='text-darker-pink text-3xl'>
              Rua Dona Laura nº 354 - Sala 506 - Bairro Moinhos de Vento -
              Porto Alegre - RS
            </span>
            <div className='flex justify-center items-center w-full min-h-160'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.259985822583!2d-51.20462972444682!3d-30.029398274931218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979b509e4da2f%3A0x5ddf9be364c1da75!2sRua%20Dona%20Laura%2C%20354%20-%20sala%20506%20-%20Rio%20Branco%2C%20Porto%20Alegre%20-%20RS%2C%2090430-091!5e0!3m2!1spt-BR!2sbr!4v1734533190450!5m2!1spt-BR!2sbr'
                width='80%'
                height='500px'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
                style={{
                  border: '5px solid #8c0d3b',
                  borderRadius: '40px',
                }}
              ></iframe>
            </div>
          </div>
        </section>

        <WhatsAppButton />

        {/* Footer */}

        <Footer />
      </main>
    </>
  )
}
