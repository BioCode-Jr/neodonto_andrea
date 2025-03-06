import React from 'react'
import Modal from './Modal'
import Image from 'next/image'

const AndreaModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className='flex items-center gap-16 px-10 py-10 relative'>
        <div className='flex-shrink-0 bg-darker-pink p-2 rounded-full'>
          <Image
            src='/images/andrea-photo.png'
            width={300}
            height={300}
            alt='Andrea'
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-justify'>
            Quando eu escolhi a Odontologia, há mais de 30 anos, não sabia
            muito bem o que essa escolha significaria. Só sabia que queria
            um curso ligado à saúde, no qual eu pudesse ser dona do meu
            próprio tempo para que, assim, fosse possivel conciliar a minha
            agenda com o sonho de ser mãe e construir uma família. Ao longo
            desses anos fui me apaixonando cada dia mais pela profissão!
            Fui descobrindo que cuidar da saúde bucal dos meus pacientes
            era muito mais que cuidar dos seus dentes. Notei que a
            verdadeira Odontologia não trata de DENTE mas sim de GENTE!
          </p>
          <p className='text-justify'>
            Sou especialista em Periodontia e, através da Medicina
            Periodontal, compreendi melhor a grande conexão entre boca e
            corpo. Também me especializei em Implantodontia, o que me
            permite “devolver dentes” aos meus pacientes por meio de
            implantes, impactando em função, saúde e melhora da autoestima.
            E, claro, não poderia faltar a pós-graduação em Estética! Uma
            das minhas grandes motivações em continuar estudando e me
            atualizando é a satisfação em devolver a espontaneidade de um
            sorriso genuíno aos que me procuram. Hoje quando penso na
            escolha que fiz, só tenho que agradecer a Deus e pedir que Ele
            abençoe sempre as minhas mãos para que, através delas, eu possa
            levar o meu melhor àqueles que confiam e se entregam a mim.
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default AndreaModal
