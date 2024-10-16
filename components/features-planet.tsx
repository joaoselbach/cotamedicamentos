import { Clock, Users, Verified } from "lucide-react"

export default function FeaturesPlanet() {
  return (
    <section id="contact" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Solicite um Orçamento para demanda judicial
            </h2>
            <p className="text-gray-400">Deixe suas informações e receba uma cotação dos medicamentos que você precisa.</p>
          </div>
          <div className="flex pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="max-w-[50%]">
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-gray-300"
                      htmlFor="name"
                    >
                      Nome completo
                    </label>
                    <input
                      id="name"
                      className="form-input bg-gray-700 border-gray-600 w-full py-2"
                      type="text"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-gray-300"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      className="form-input bg-gray-700 border-gray-600 w-full py-2"
                      type="email"
                      placeholder="email@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-gray-300"
                      htmlFor="phone"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone"
                      className="form-input bg-gray-700 border-gray-600 w-full py-2"
                      type="text"
                      placeholder="(DD) 9 9999-9999"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <button className="btn w-full bg-gradient-to-t from-[#009ba5] to-[#01b1bc] bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
                    Enviar
                  </button>
                </div>
              </form>

              <div className="mt-6 text-left">
                <p className="text-sm text-gray-400">
                  Ao enviar esse formulário, você concorda com os{" "}
                  <a
                    className="whitespace-nowrap font-medium text-gray-300 underline hover:no-underline"
                    href="#0"
                  >
                    Termos de uso
                  </a>{" "}
                  e{" "}
                  <a
                    className="whitespace-nowrap font-medium text-gray-300 underline hover:no-underline"
                    href="#0"
                  >
                    Política de privacidade
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="max-w-[50%]">
              a
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-[#01b1bc]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Cotações gratuita</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Receba as cotações de forma gratuita de medicamentos de alto custo com total transparência.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Clock
                  className="stroke-[#01b1bc]"
                  width={16} height={16}
                />
                <span>Agilidade no Atendimento:</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Receba as cotações em até 24 horas para demandas judiciais e tratamentos urgentes.

              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-[#01b1bc]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>Apoio Personalizado:</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Atendimento dedicado, adaptado às necessidades dos pacientes e profissionais de saúde.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Users width={16} height={16} className="stroke-[#01b1bc]" />
                <span>Rede de Parceiros Qualificados:</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Parceria com farmácias e fornecedores especializados em medicamentos de alto custo.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-[#01b1bc]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                </svg>
                <span>Suporte Jurídico Especializado:</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Orientação para garantir acesso a medicamentos através de ações judiciais.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <Verified
                  className="stroke-[#01b1bc]"
                  height={16}
                  width={16}
                />
                <span>Confiança e Segurança:</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Operamos com total sigilo e ética para garantir a tranquilidade no seu tratamento.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
