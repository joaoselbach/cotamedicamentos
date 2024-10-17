import { FaWhatsapp } from "react-icons/fa";
import Accordion from "./accordion";

export default function FeaturesHome() {
  return (
    <section id="orientacao" className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-[#01b1bc] to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-2 text-center md:pb-8">
            <h2 className="mb-1 text-3xl font-bold md:text-4xl">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="text-lg text-gray-500 mb-4">
              Saiba como garantir seus direitos e acessar os medicamentos que você precisa por meio de processos judiciais. Nossa equipe de especialistas está pronta para ajudar.
            </p>
          </div>
          <div className="space-y-2 mx-auto">
            <Accordion title="Como conseguir medicamentos de alto custo pelo SUS?" id="faqs-0">
              <p className="px-4 pb-3">Para obter medicamentos de alto custo pelo SUS, o paciente precisa de um laudo médico detalhado, prescrição médica, documentos pessoais (RG, CPF, comprovante de residência) e o Cartão Nacional de Saúde.</p>
              <p className="px-4 pb-3">Com esses documentos, o paciente deve comparecer a uma unidade de saúde ou farmácia especializada do SUS.</p>
            </Accordion>

            <Accordion title="O SUS é obrigado a fornecer todos os medicamentos de alto custo?" id="faqs-1">
              <p className="px-4 pb-3">O SUS fornece medicamentos que estão incluídos na Relação Nacional de Medicamentos Essenciais (RENAME).</p>
              <p className="px-4 pb-3">Caso o medicamento prescrito não esteja nessa lista, o paciente pode buscar outras alternativas, como a judicialização do medicamento.</p>
            </Accordion>

            <Accordion title="Quando é necessário entrar com uma ação judicial para obter medicamentos de alto custo?" id="faqs-2">
              <p className="px-4 pb-3">A ação judicial pode ser necessária quando o medicamento não está disponível no SUS ou quando não é fornecido na quantidade adequada.</p>
              <p className="px-4 pb-3">O paciente pode acionar o estado, município ou a União para garantir o fornecimento do medicamento.</p>
            </Accordion>

            <Accordion title="Como iniciar um processo judicial para obtenção de medicamentos de alto custo?" id="faqs-3">
              <p className="px-4 pb-3">Antes de entrar com uma ação judicial, é importante que o paciente tenha tentado obter o medicamento diretamente pelo SUS ou pelo plano de saúde. Para isso, deve apresentar a prescrição médica e a documentação necessária. Caso o fornecimento seja negado, seja por falta de disponibilidade ou por não estar incluído na lista de cobertura, o paciente pode buscar apoio jurídico.</p>
              <p className="px-4 pb-3">A partir dessa negativa, o paciente pode procurar um advogado ou a Defensoria Pública. Será necessário levar a prescrição médica, laudos e exames que comprovem a necessidade do medicamento, além da negativa formal do SUS ou do plano de saúde. Com esses documentos, o advogado poderá iniciar o processo judicial solicitando o fornecimento do medicamento.</p>
            </Accordion>

            <Accordion title="Quanto tempo leva para conseguir um medicamento através de ação judicial?" id="faqs-4">
              <p className="px-4 pb-3">O tempo varia, mas em casos urgentes, pode-se solicitar uma liminar, uma decisão judicial provisória, que permite ao paciente receber o medicamento rapidamente, enquanto o processo segue seu curso.</p>
            </Accordion>

            <Accordion title="O que é uma liminar e como ela funciona?" id="faqs-5">
              <p className="px-4 pb-3">A liminar é uma decisão provisória concedida pelo juiz antes do julgamento final da ação. Ela pode ser solicitada quando o paciente corre risco de vida ou de agravamento da doença se não tiver acesso imediato ao medicamento.</p>
            </Accordion>

            <Accordion title="Posso pedir reembolso por medicamentos que comprei antes da decisão judicial?" id="faqs-6">
              <p className="px-4 pb-3">Sim, é possível solicitar o reembolso. O advogado deve incluir no processo os comprovantes de pagamento, receitas médicas e notas fiscais, pedindo que o governo reembolse o valor gasto com os medicamentos.</p>
            </Accordion>

            <Accordion title="Os planos de saúde são obrigados a cobrir medicamentos de alto custo?" id="faqs-7">
              <p className="px-4 pb-3">Planos de saúde são obrigados a fornecer medicamentos relacionados a tratamentos cobertos pelo plano, desde que estejam incluídos no rol de procedimentos da ANS (Agência Nacional de Saúde Suplementar).</p>
              <p className="px-4 pb-3">Medicamentos para uso domiciliar, exceto para tratamentos oncológicos orais e doenças crônicas, normalmente não são cobertos.</p>
            </Accordion>

            <Accordion title="Como funciona o fornecimento de medicamentos de alto custo após a decisão judicial?" id="faqs-8">
              <p className="px-4 pb-3">Após obter uma decisão judicial favorável (especialmente se for concedida uma liminar), o governo (municipal, estadual ou federal) ou o plano de saúde será obrigado a fornecer o medicamento solicitado. O paciente geralmente será notificado por meio de seu advogado ou Defensoria Pública sobre a decisão e os próximos passos.</p>
              <br />
              <p className="px-4 pb-3"><span className="font-bold text-gray-700">Execução da decisão judicial:</span> Com a decisão em mãos, o advogado deve solicitar a execução da sentença. Isso significa que ele irá comunicar ao órgão público ou ao plano de saúde a obrigação de fornecer o medicamento. O juiz pode estipular prazos para o cumprimento dessa decisão, e, em casos de descumprimento, podem ser aplicadas multas diárias.</p>
              <br />
              <p className="px-4 pb-3"><span className="font-bold text-gray-700">Entrega do medicamento:</span> Em caso de decisão contra o SUS, o medicamento poderá ser retirado em uma das farmácias de alto custo, também conhecidas como Farmácias de Componente Especializado da Assistência Farmacêutica, ou diretamente em uma unidade de saúde indicada pelo juiz. É comum que o paciente seja informado do local e horário para retirada do medicamento.</p>
              <br />
              <p className="px-4 pb-3"><span className="font-bold text-gray-700">Farmácias de alto custo:</span> O paciente deverá se dirigir a uma farmácia especializada indicada pelo SUS. Caso o medicamento precise ser importado ou seja de difícil acesso, o governo poderá ser obrigado a fazer a compra diretamente e o paciente será informado quando o medicamento estiver disponível.</p>
              <br />
              <p className="px-4 pb-3"><span className="font-bold text-gray-700">Renovação do fornecimento:</span> Em tratamentos contínuos, o paciente deve acompanhar se a decisão judicial inclui a renovação periódica do fornecimento do medicamento. Caso contrário, será necessário entrar com nova solicitação ou fazer a renovação da prescrição médica, a depender das orientações do advogado. O fornecimento poderá ser contínuo enquanto durar o tratamento, mas o paciente deve se manter em contato com o advogado para garantir que o medicamento continue a ser fornecido dentro do prazo.</p>
              <br />
              <p className="px-4 pb-3"><span className="font-bold text-gray-700">Descumprimento da decisão judicial:</span> Se o governo ou o plano de saúde não cumprir a decisão judicial dentro do prazo estipulado, o advogado poderá entrar com um pedido de cumprimento forçado. Nesse caso, o juiz pode aplicar penalidades ao órgão responsável, como multas diárias ou até o bloqueio de valores das contas públicas para garantir a compra do medicamento.</p>
            </Accordion>

            <Accordion title="Qualquer pessoa pode solicitar medicamento pelo SUS?" id="faqs-9">
              <p className="px-4 pb-3">Sim, qualquer pessoa pode solicitar medicamentos pelo SUS (Sistema Único de Saúde), desde que atenda a certos critérios e siga os procedimentos adequados. Aqui estão alguns pontos importantes sobre o processo:</p>

              <p className="px-4 pb-3">Necessidade de Prescrição Médica: Para solicitar um medicamento, é necessário ter uma prescrição médica que comprove a necessidade do tratamento. O médico deve especificar o nome do medicamento, a dosagem e a duração do tratamento.</p>

              <p className="px-4 pb-3">Documentação Necessária: Além da receita, o paciente deve apresentar documentos pessoais, como:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>RG e CPF</li>
                <li>Cartão Nacional de Saúde</li>
                <li>Comprovante de residência</li>
              </ul>

              <p className="px-4 pb-3"><strong>Unidade de Saúde:</strong> <span>O paciente deve procurar uma unidade de saúde ou farmácia especializada que faça parte da rede do SUS. Em alguns casos, medicamentos de alto custo podem ser encontrados apenas em Farmácias de Componente Especializado da Assistência Farmacêutica (CEAF).</span></p>

              <p className="px-4 pb-3">Medicamentos na RENAME: O SUS fornece medicamentos que estão listados na Relação Nacional de Medicamentos Essenciais (RENAME). Se o medicamento prescrito não estiver nessa lista, o paciente pode buscar alternativas, como a judicialização do pedido.</p>

              <p className="px-4 pb-3">Acompanhamento Médico: É importante que o paciente mantenha um acompanhamento médico regular, que pode ser solicitado pelo profissional de saúde a cada novo ciclo de tratamento, especialmente em casos de medicamentos de uso contínuo.</p>

              <p className="px-4 pb-3">Prioridade para Casos Especiais: Pacientes em situações de emergência, ou que tenham doenças raras ou crônicas, podem ter prioridade no acesso a determinados medicamentos.</p>

              <p className="px-4 pb-3">Portanto, qualquer pessoa pode solicitar medicamentos pelo SUS, desde que siga os procedimentos adequados e tenha a documentação necessária.</p>
            </Accordion>
          </div>
          <a
            className="mt-6 m-auto flex items-center gap-2 font-bold lg:max-w-[250px] btn group mb-4 w-full bg-green-500 hover:bg-green-600 text-white"
            href="https://wa.me/5511934201262?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20achar%20o%20meu%20medicamento!"
          >
            <FaWhatsapp size={20} />
            Mudar para fale com nosso especialista{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
