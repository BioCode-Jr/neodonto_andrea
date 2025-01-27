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
    modalImage: '/images/procedimentos/ozonioterapia/ozonioterapia.png',
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Ozonioterapia
          </h2>
          <div className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '>
            <p className='text-justify'>
              Quando falamos em Ozonioterapia, nos referimos à uma mistura
              gasosa composta por oxigênio de alta pureza e ozônio, obtida
              a partir de uma descarga elétrica através de um gerador de
              ozônio medicinal.
            </p>
            <p className='text-justify'>
              Essa mistura gasosa apresenta muitos benefícios quando
              utilizada na Odontologia, pois além de seu{' '}
              <b className='text-dark-pink'> efeito antimicrobiano</b>,
              matando vírus, bactérias e fungos, o ozônio aumenta a
              oxigenação tecidual, ativa o{' '}
              <b className='text-dark-pink'>
                sistema antioxidante e modula o sistema imunológico.
              </b>
            </p>
            <p className='text-justify'>
              No tratamento odontológico, a Ozonioterapia otimiza os
              resultados dos procedimentos convencionais. Dentre as muitas
              vantagens que o uso do ozônio representa na Odontologia,
              podemos citar:
            </p>
            <ul
              className='flex flex-col justify-center gap-3 text-justify'
              style={{ listStyleType: 'disc', paddingLeft: '2rem' }}
            >
              <li>É um potente antisséptico;</li>
              <li>
                Elimina fungos que, normalmente, aderem às dentaduras ou
                próteses;
              </li>
              <li>Melhora a textura e flacidez da pele;</li>
              <li>
                Diminui o sangramento durante as cirurgias; Reduz a dor e a
                sensibilidade após procedimentos cirúrgicos;
              </li>
              <li>Auxilia no tratamento de necrose do osso maxilar;</li>
              <li>
                Melhora a cicatrização e acelera o processo de reparo
                tecidual pós cirurgias;
              </li>
              <li>
                Promove a redução de micro-organismos nas lesões cariosas;
              </li>
              <li>
                Age na desinfecção de bolsas periodontais e lesões ao redor
                de implantes;
              </li>
              <li>
                Combate as infecções relacionadas aos problemas de canal;
              </li>
              <li>
                Diminui a dor e auxilia no tratamento dos distúrbios da
                articulação temporomandibular (ATM);
              </li>
              <li>
                Acelera a cicatrização das lesões herpéticas e da mucosite
                oral.
              </li>
            </ul>
          </div>
        </div>

        <Image
          src='/images/procedimentos/clareamento/clareamento.png'
          width={2000}
          height={400}
          alt='Clareamento Dentário'
        />
      </div>
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
    modalImage: '/images/procedimentos/clareamento/clareamento.png',
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Clareamento Dentário
          </h2>
          <div className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '>
            <p className='text-justify'>
              O Clareamento Dental consiste no uso de produtos à base de
              peróxido de hidrogênio ou de carbamida que, em contato com os
              dentes, quebra as moléculas pigmentadas e{' '}
              <b className='text-dark-pink'> deixa o dente mais branco.</b>
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
                03 formas: Clareamento de Consultório; Clareamento Caseiro
                Supervisionado; e Clareamento Misto.
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
              permanecer em contato com os dentes durante o tempo indicado
              pelo profissional.
            </p>
            <b className='text-justify text-dark-pink '>
              Seja qual for o método, a garantia de dentes branquinhos é a
              mesma!
            </b>
          </div>
        </div>

        <Image
          src='/images/procedimentos/clareamento/clareamento.png'
          width={2000}
          height={400}
          alt='Clareamento Dentário'
        />
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
        alt='Prescrição de Canabinóides'
      />
    ),
    modalImage: '/images/procedimentos/prescricao/canabinoides.png',
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Prescrição com Canabinóides
          </h2>
          <div className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '>
            <p className='text-justify'>
              O Sistema Endocanabinóide, descoberto no início da década de
              1990, está presente em todos os seres humanos e animais
              vertebrados, e é responsável por regular e equilibrar todos
              os demais sistemas do organismo.
            </p>
            <p className='text-justify'>
              Os Canabinóides são compostos químicos que se ligam aos
              <b className='text-dark-pink'>
                {' '}
                receptores do Sistema Endocanabinóide
              </b>{' '}
              e, quando estimulados, são capazes de{' '}
              <b className='text-dark-pink'>
                exercer ações analgésicas, anti-inflamatórias,
                ansiolíticas, anti-eméticas e neuroprotetoras.
              </b>
            </p>
            <p className='text-justify'>
              Existem 03 tipos:{' '}
              <b className='text-dark-pink'>Endocanabinóides</b>{' '}
              (produzidos pelo próprio corpo);{' '}
              <b className='text-dark-pink'>Fitocanabinóides</b> (presentes
              na planta Cannabis Medicinal); e{' '}
              <b className='text-dark-pink'>Canabinóides Sintéticos </b>
              (produzidos em laboratório).
            </p>
            <p className='text-justify'>
              O leque de opções do uso terapêutico dos fitocanabinóides na
              Odontologia tem se expandido nos últimos anos e, cada vez
              mais, os estudos mostram{' '}
              <b className=' text-dark-pink '>
                efeitos promissores na melhoria de sintomas em diversos
                quadros
              </b>
              . As aplicações vão desde a dor crônica, harmonização
              orofacial, cicatrização de tecidos bucais e controle de
              bactérias, até a patologias relacionadas à modulação da
              ansiedade, como o bruxismo.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/clareamento/clareamento.png'
          width={2000}
          height={400}
          alt='Clareamento Dentário'
        />
      </div>
    ),
  },
  {
    label: 'Laserterapia e ILIB',
    icon: (
      <Image
        src='/images/procedimentos/icones/laserterapia.png'
        width={100}
        height={100}
        alt='Laserterapia e ILIB'
      />
    ),
    modalImage: '/images/procedimentos/laserterapia/laserterapia.png',
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Laserterapia e ILIB
          </h2>
          <div className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '>
            <p className='text-justify'>
              Na Odontologia, o laser de baixa intensidade é utilizado no
              <b className='text-dark-pink'>
                tratamento e prevenção de afecções orofaciais
              </b>
              , tal como cuidados pós-cirúrgicos, reparação de aftas,
              xerostomia (boca seca), herpes, pericoronarite (inflamação na
              região dos sisos), alveolite (infecção após extração
              dentária), tratamento de hipersensibilidade dentinária,
              disfunções temporomandibulares, dores orofaciais, entre
              outras.
            </p>
            <p className='text-justify'>
              A Terapia ILIB (Intravascular Laser Irradiation of Blood) é
              uma técnica que{' '}
              <b className='text-dark-pink'>irradia laser terapêutico</b>{' '}
              para a artéria radial, sendo assim jogada na corrente
              sanguínea, de forma não-invasiva. O objetivo é estimular a
              formação da enzima superóxido dismutase, fundamental na
              quebra dos radicais livres, causadores do envelhecimento do
              corpo e da pele. Portanto, o{' '}
              <b className='text-dark-pink'>
                tratamento tem importante função antioxidante
              </b>
              ! A terapia possui ação vasodilatadora, aumenta a oxigenação,
              nutre os tecidos, remove toxinas e melhora o processo da
              homeostase.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/clareamento/clareamento.png'
          width={2000}
          height={400}
          alt='Clareamento Dentário'
        />
      </div>
    ),
  },
]

export { procedimentos }
