import Image from 'next/image'

const procedimentos = [
  {
    label: 'Ozonioterapia',
    icon: (
      <Image
        src='/images/procedimentos/icones/ozonioterapia.png'
        width={100}
        height={100}
        alt='Ozonioterapia'
      />
    ),
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative  w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Ozonioterapia
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 flex-wrap'
            style={{ padding: '0 4.5rem' }}
          >
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
          src='/images/procedimentos/ozonioterapia/ozonioterapia.png'
          width={2000}
          height={400}
          alt='Ozonioterapia'
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
        alt='Harmonização Facial Integrativa'
      />
    ),
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Harmonização Facial Integrativa
          </h2>
          <div
            className='flex flex-col justify-center  text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              A Estética Facial Regenerativa se concentra não apenas em
              melhorar a aparência externa, mas também em{' '}
              <b className='text-dark-pink'>
                promover a regeneração celular e a saúde da pele de dentro
                para fora.
              </b>{' '}
              Ao contrário de simplesmente mascarar imperfeições ou sinais
              de envelhecimento, busca{' '}
              <b className='text-dark-pink'>
                ativar os processos naturais de cura e renovação do corpo
              </b>{' '}
              para melhorar a qualidade da pele e combater os efeitos do
              tempo.
            </p>
            <p className='text-justify'>
              Uma opção
              <b className='text-dark-pink'> autógena e natural</b> para o
              rejuvenescimento facial, que ganhou destaque nos últimos
              anos, tem sido o uso de concentrados de plaquetas: plasma
              rico em plaquetas e fibrina rica em plaquetas, os chamados
              biofillers.
            </p>
            <p className='text-justify'>
              Nessa abordagem, substituímos as técnicas artificiais de
              preenchimento por células biológicas, obtidas por meio da
              centrifugação de uma amostra sanguínea do paciente.
            </p>
            <p className='text-justify'>
              A utilização da Fibrina Rica em Plaquetas (I-PRF) na
              Harmonização Facial promove um efeito <i> anti-aging </i> por
              <b className='text-dark-pink'>
                {' '}
                otimizar o reparo e propiciar um microambiente
                reorganizado,
              </b>{' '}
              com renovação vascular e celular, onde acontece um aumento
              expressivo de estímulo da produção de colágeno e elastina.
            </p>
            <p className='text-justify'>
              A técnica vem demonstrando resultados incríveis, como:
            </p>
            <ul
              className='flex flex-col justify-center gap-3 text-justify'
              style={{ listStyleType: 'disc', paddingLeft: '2rem' }}
            >
              <li>Rejuvenescimento periorbital;</li>
              <li>Redução de rugas e linhas finas;</li>
              <li>Melhora da Textura e Firmeza da pele;</li>
              <li>Hidratação profunda;</li>
              <li>Brilho e viço natural;</li>
              <li>Melhora da flacidez e Contorno facial.</li>
            </ul>
            <p className='text-justify'>
              Tudo isso com segurança e ausência de rejeição ao material,
              já que se utiliza de{' '}
              <b className='text-dark-pink'>recursos do próprio corpo.</b>
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/harmonizacao/harmonizacao.png'
          width={2000}
          height={400}
          alt='Harmonização Facial Integrativa'
        />
      </div>
    ),
  },
  {
    label: 'Implantes Cerâmicos',
    icon: (
      <Image
        src='/images/procedimentos/icones/implantes.png'
        width={100}
        height={100}
        alt='Implantes Cerâmicos'
      />
    ),
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Implantes Cerâmicos
          </h2>
          <div
            className='flex flex-col justify-center  text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              Os altos padrões estéticos e a crescente incidência de
              alergias ao titânio levaram à pesquisa de outros materiais
              como possíveis substitutos. Após numerosos estudos, e
              utilizada há mais de três décadas em cirurgias ortopédicas, a
              zircônia ganhou seu lugar como uma excelente alternativa para
              o titânio na Implantodontia.
            </p>
            <p className='text-justify'>
              Essas cerâmicas de zircônia{' '}
              <b className='text-dark-pink'>
                são materiais quimicamente inertes e não provocam reações
                adversas locais ou sistêmicas.
              </b>{' '}
              Dentre suas muitas características, podemos citar:
            </p>
            <ul
              className='flex flex-col justify-center gap-3 text-justify'
              style={{ listStyleType: 'disc', paddingLeft: '2rem' }}
            >
              <li>
                <b className='text-dark-pink'>Ausência</b> de toxicidade;
              </li>
              <li>
                <b className='text-dark-pink'>Biocompatibilidade</b> com a
                gengiva;
              </li>
              <li>
                Acumula <b className='text-dark-pink'>menos placa</b>{' '}
                bacteriana;
              </li>
              <li>
                Trabalho <b className='text-dark-pink'>livre de metal</b>;
              </li>
              <li>
                Cor branca,{' '}
                <b className='text-dark-pink'>
                  imitando os dentes naturais
                </b>
                , o que é excelente em áreas estéticas, principalmente em
                pacientes com gengiva fina;
              </li>
              <li>
                <b className='text-dark-pink'>Resistente</b> à corrosão;
              </li>
              <li>
                Não causa <b className='text-dark-pink'></b>galvanismo;
              </li>
              <li>
                <b className='text-dark-pink'>Baixa condutividade</b>{' '}
                térmica;
              </li>
              <li>
                <b className='text-dark-pink'></b>Alta resistência ao
                choque térmico e a altas temperaturas.
              </li>
            </ul>
            <p className='text-justify'>
              Os Implantes Cerâmicas já são uma realidade e vieram para
              ficar, sendo uma excelente opção como substitutos ao dente
              perdido.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/implantes/implantes.png'
          width={2000}
          height={400}
          alt='Implantes Cerâmicos'
        />
      </div>
    ),
  },
  {
    label: 'Restaurações Estéticas',
    icon: (
      <Image
        src='/images/procedimentos/icones/restauracao.png'
        width={100}
        height={100}
        alt='Restaurações Estéticas'
      />
    ),
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Restaurações Estéticas
          </h2>
          <div
            className='flex flex-col justify-center  text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              As restaurações são reconstruções (pequenas ou grandes) de
              uma parte do dente que foi perdida devido a alguma fratura,
              desgaste ou cárie. O material utilizado nessas restaurações é
              a resina composta,{' '}
              <b className='text-dark-pink'>
                capaz de imitar a cor, o brilho e a aparência geral dos
                dentes, garantindo um resultado estético e natural.
              </b>{' '}
              Em caso de restaurações muito grandes em tamanho, executadas
              de maneira indireta, uma peça de cerâmica - outro material
              que garante a naturalidade da restauração - é acomodada no
              local do dente a ser restaurado.
            </p>
            <p className='text-justify'>
              Ainda dentro das restaurações estéticas existem as facetas em
              resina. Ela é colocada de maneira a contornar o dente
              presente em boca, podendo dar ao elemento um novo formato e
              uma nova coloração. Na maioria dos casos, o desgaste
              realizado no dente é mínimo, sendo considerado um
              procedimento minimamente invasivo às estruturas dentárias.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/restauracao/restauracao.png'
          width={2000}
          height={400}
          alt='Restaurações Estéticas'
        />
      </div>
    ),
  },
  {
    label: 'Cirurgias Gengivais Estéticas',
    icon: (
      <Image
        src='/images/procedimentos/icones/cirurgias.png'
        width={100}
        height={100}
        alt='Cirurgias Gengivais Estéticas'
      />
    ),
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Cirurgias Gengivais Estéticas
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              Muitas vezes o principal responsável por comprometer a
              estética de um sorriso não é o dente em si - e sim, o
              <b className='text-dark-pink'>
                {' '}
                excesso ou falta de gengiva ao seu redor.
              </b>{' '}
              Nesses casos, as Cirurgias Plásticas Gengivais são excelentes
              opções para harmonizar o sorriso,{' '}
              <b className='text-dark-pink'>
                associando benefícios estéticos e funcionais.
              </b>
            </p>
            <p className='text-justify'>
              A Gengivoplastia é indicada quando o paciente precisa
              aumentar a coroa clínica, ou seja, aumentar a área visível do
              dente, que está encoberta pela gengiva. Esse procedimento tem
              sido muito procurado também por questões estéticas, já que a
              cirurgia realça o contorno dos dentes, contribuindo assim
              para um sorriso mais bela e atraente.
            </p>
            <p className='text-justify'>
              Os tratamentos com Enxertos Gengivais são ideias para
              reabilitação de pacientes com retração, escurecimento ou
              perdas traumáticas de tecido gengival. Além disso, pode ser
              indicado para correção estética de falhas anatômicas da
              gengiva. É um procedimento que consiste na inserção cirúrgica
              de um enxerto gengival - do próprio paciente ou sintético,
              dependendo do caso. A Fibrina Rica em Plaquetas (PRF) é uma
              ferramenta biológica de alto benéficio nas cirurgias de
              recobrimento gengival, otimizando o reparo e a cicatrização
              devido à liberação de citocinas e fatores de crescimento.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/cirurgia/cirurgia.png'
          width={2000}
          height={400}
          alt='Cirurgias Gengivais Estéticas'
        />
      </div>
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
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Tratamento de Cavitações (NICO)
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              As Cavitações, também chamadas de Osteonecrose Degenerativa
              Gordurosa no Osso Maxilar, ou NICO, são regiões intraósseas
              onde houve uma{' '}
              <b className='text-dark-pink'>
                má cicatrização após algum tipo de intervenção,
              </b>{' '}
              como na extração de sisos ou outros dentes. No lugar de um
              osso saudável forma-se uma lesão com tecido gorduroso e
              necrótico, que secreta citocinas inflamatórias, alertando e
              sobrecarregando o Sistema Imunológico a todo momento.
            </p>
            <p className='text-justify'>
              Essas lesões podem estar associadas à{' '}
              <b className='text-dark-pink'>dor crônica</b>, mas também
              podem ser silenciosas e relacionadas a diversas outras
              patologias. Devido à dificuldade de detecção radiológica, o
              diagnóstico das cavitações exige uma avaliação clínica
              detelhada e, em alguns casos, exames mais específicos.
            </p>
            <p className='text-justify'>
              Atualmente o principal tratamento de cavitação é cirúrgico. A
              ideia é{' '}
              <b className='text-dark-pink'>
                acessar a área, remover o osso degradado e proporcionar
                condições para que a região cicatrize{' '}
              </b>
              de forma saudável e eficiente.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/nico/nico.png'
          width={2000}
          height={400}
          alt='Tratamento de Cavitações (NICO)'
        />
      </div>
    ),
  },
  {
    label: 'Remoção Segura do Amálgama',
    icon: (
      <Image
        src='/images/procedimentos/icones/remocao-amalgama.png'
        width={100}
        height={100}
        alt='Remoção Segura do Amálgama'
      />
    ),
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Remoção Segura do Amálgama
          </h2>
          <div
            className='flex flex-col justify-center  text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              As restaurações de amálgama são as{' '}
              <b className='text-dark-pink'>restaurações metálicas,</b>{' '}
              prateadas, frequentemente usadas pela sua alta durabilidade e
              baixo custo, até o aparecimento das resinas compostas. O
              Amálgama é uma liga onde 50% da composição é feita de
              mercúrio, uma substância extremamente volátil e tóxica ao
              organismo humano. Dia a dia, as restaurações de amálgama vão
              liberando pequenas quantidades de vapor de mercúrio que são
              absorvidos pelo nosso organismo e que{' '}
              <b className='text-dark-pink'>
                podem impactar na saúde geral.
              </b>
            </p>
            <p className='text-justify'>
              Além do mercúrio, existe ainda um outro problema.{' '}
              <b className='text-dark-pink'>
                O amálgama dental pertence a uma classe de materiais que
                somente ocupam o espaço que foi perdido;
              </b>{' '}
              ele não foi criado para interagir com o dente remanescente ou
              para protegê-lo. Como o amálgama é muito duro, ele
              dificilmente quebra. Quando outras forças de mastigação ou
              compressão incidirem sobre o dente, o amálgama poder empurrar
              as paredes dentárias já fragilizadas causando a fratura.
              Apenas 28% dos casos de fratura serão reparáveis,
              possibilitando uma nova restauração. Os 72% restantes são
              casos em que a fratura condena o dente a uma extração.
            </p>

            <p className='text-justify'>
              A Remoção Segura do Amálgama é uma técnica para{' '}
              <b className='text-dark-pink'>
                minimizar os riscos de exposição ao mercúrio
              </b>{' '}
              durante a troca dessas restaurações.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/remocao/remocao.png'
          width={2000}
          height={400}
          alt='Remoção Segura do Amálgama'
        />
      </div>
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
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Tratamento de Gengivite e Periodontite
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              O primeiro estágio da doença periodontal é o sangramento
              gengival. Em alguns casos, se não tratada ou mal tratada,
              essa Gengivite pode evoluir para a Periodontite, que é
              caracterizada pela perda do osso que segura o dente. Como
              consequência, o dente vai perdendo o seu suporte, fica
              &quot;frouxo&quot; e o paciente pode vir a perdê-lo.
            </p>
            <p className='text-justify'>
              Em alguns casos, ocorre a retração da gengiva, mas em sua
              grande maioria a doença se manifesta sem sinais clínicos
              expressivos. O grande desafio dessa condição é que a pessoa
              não sente dor, e só perceberá que tem um problema grave
              quando a doença periodontal estiver muito avançada.
            </p>
            <p className='text-justify'>
              <b className='text-dark-pink'>
                O tratamento periodontal consiste em diminuir e controlar a
                placa bacteriana bucal, por meio da raspagem e alisamento
                radicular profissional, e pela orientação acerca de hábitos
                de higiene e cuidados orais que o paciente deve fazer em
                casa.{' '}
              </b>
              Além disso, é muito importante o olhar integrativo, avaliando
              se existe alguma condição sistêmica que possa ser um gatilho
              para o desenvolvimento da Doença Periodontal.
            </p>
            <p className='text-justify'>
              Os estudos mostram que as infecções periodontais, além de
              promoverem alterações bucias, impactam na saúde do corpo e
              vice-versa. Essa associação da Doença Periodontal com as
              doenças sistêmicas se dá pela presença de mecanismos
              inflamátorios e imunológicos semelhantes e em sinergismo
              entre si. Condições como Diabetes Mellitus, Infecções
              Respiratórias, Artrite Reumatóide, Doenças Cardiovasculares,
              Doenças Degenerativas, Acidente Vascular Cerebral, Partos
              Prematuros e Bebês de Baixo Peso, são alguns exemplos dessa
              relação.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/gengivite/gengivite.png'
          width={2000}
          height={400}
          alt='Tratamento de Gengivite e Periodontite'
        />
      </div>
    ),
  },
  {
    label: 'Próteses',
    icon: (
      <Image
        src='/images/procedimentos/icones/proteses.png'
        width={100}
        height={100}
        alt='Próteses'
      />
    ),
    modalContent: (
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Próteses
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              Muito além da estética facial, os dentes são fundamentais
              para a manutenção de diversas funções fisiológicas do nosso
              corpo, como mastigação, a fala, a postura e a respiração.
            </p>
            <p className='text-justify'>
              Quando um ou mais dentes são perdidos, as próteses dentárias
              <b className='text-dark-pink'>
                {' '}
                otimizam essas funções, melhoram a autoestima e a qualidade
                de vida.
              </b>{' '}
              A mastigação não é apenas uma questão de prazer ao comer, mas
              também desempenha um papel crucial na saúde do sistema
              digestivo, uma vez que alimentos bem mastigados são mais
              facilmente digeridos pelo estômago e intestinos.
            </p>
            <p className='text-justify'>
              A mandíbula é o único osso do crânio que apresenta movimento.
              Por isso, qualquer alteração na sua movimentação influência
              na postura da cabeça, que por sua vez afeta a postura da
              coluna vertebral.
            </p>
            <p className='text-justify'>
              Existem diversos tipos de próteses dentárias (
              <b className=' text-dark-pink '>
                sobre implantes, total, parcial, fixa, removível
              </b>
              ) e o modelo ideal irá depender das particularidades do caso
              e das necessidades de cada paciente.
            </p>
          </div>
        </div>

        <Image
          src='/images/procedimentos/protese/protese.png'
          width={2000}
          height={400}
          alt='Próteses'
        />
      </div>
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
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Clareamento Dentário
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
            <p className='text-justify'>
              O Clareamento Dental consiste no uso de produtos à base de
              peróxido de hidrogênio ou de carbamida que, em contato com os
              dentes, quebra as moléculas pigmentadas e{' '}
              <b className='text-dark-pink'> deixa o dente mais branco.</b>
            </p>
            <p className='text-justify'>
              Para a efetividade e segurança do tratamento, é fundamental
              que o paciente realize{' '}
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
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Prescrição com Canabinóides
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
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
          src='/images/procedimentos/cannabis/cannabis.png'
          width={2000}
          height={400}
          alt='Prescrição de Canabinóides'
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
      <div className='flex flex-col justify-center items-center text-wrap gap-10 h-full relative w-full'>
        <div className='flex flex-col justify-center items-center text-wrap text-xl  px-10'>
          <h2 className='text-4xl text-center font-semibold text-dark-pink px-10 py-10'>
            Laserterapia e ILIB
          </h2>
          <div
            className='flex flex-col justify-center items-center text-wrap text-xl gap-6 px-10 '
            style={{ padding: '0 4.5rem' }}
          >
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
          src='/images/procedimentos/laserterapia/laserterapia.png'
          width={2000}
          height={400}
          alt='Laserterapia e ILIB'
        />
      </div>
    ),
  },
]

export { procedimentos }
