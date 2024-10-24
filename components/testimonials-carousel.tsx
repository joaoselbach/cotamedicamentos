import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: "Morgana Fernandes",
      username: "@usuario",
      date: "19 de Maio 19, 2024",
      content:
        "Cota Medicamentos! Me salvou, eu precisava encontrar meu medicamento em menos de uma semana e consegui o contato deles na internet. Segundo minha oncologista, é um medicamento muito difícil de encontrar, o que me deixou muito apreensiva. Mas o atendimento foi incrível. Entrei em contato na segunda, e logo me enviaram os laboratórios parceiros, que já no dia seguinte entraram em contato comigo. Consegui um deles com um preço excelente. A economia da primeira caixa que comprei, para está vez foi de 35% menos.. Hoje, após cinco dias, recebi o medicamento conforme combinado. Todos foram super atenciosos e ótimos profissionais. Super indico e com certeza continuarei comprando com eles até conseguir a medicação judicialmente.",
      channel: "Google",
    },
    {
      img: TestimonialImg02,
      name: "Nome",
      username: "@usuario",
      date: "12 de Abril, 2024",
      content:
        "Minha mãe estava internada e eu precisava de orientações sobre como conseguir o medicamento dela, já que eu não tinha condições de comprar e nem sabia por onde começar para solicitar pelo SUS. A equipe da Cota Medicamentos me atendeu com muita atenção, explicando todo o processo e me orientando em cada etapa para conseguir o medicamento pelo SUS. Foram extremamente cuidadosos comigo e com a minha mãe. Que Deus abençoe a vida de todos eles!",
      channel: "Google",
    },
    {
      img: TestimonialImg01,
      name: "Ana Martins",
      username: "@usuario",
      date: "19 de Maio 19, 2024",
      content:
        "Eu não sei como teria conseguido o tratamento necessário sem a ajuda do Cota Medicamentos. Desde o primeiro contato, eles foram extremamente atenciosos e profissionais. Eu estava enfrentando dificuldades para encontrar um medicamento de alto custo para uma demanda judicial, e a equipe não apenas me orientou sobre o processo, mas também buscou as melhores opções de preço e fornecimento. Graças a eles, consegui o medicamento a tempo, com muito menos estresse. O atendimento personalizado fez toda a diferença, e sou muito grato por toda a ajuda!",
      channel: "Google",
    },
    {
      img: TestimonialImg02,
      name: "Nome",
      username: "@usuario",
      date: "12 de Abril, 2024",
      content:
        "Minha mãe estava internada e eu precisava de orientações sobre como conseguir o medicamento dela, já que eu não tinha condições de comprar e nem sabia por onde começar para solicitar pelo SUS. A equipe da Cota Medicamentos me atendeu com muita atenção, explicando todo o processo e me orientando em cada etapa para conseguir o medicamento pelo SUS. Foram extremamente cuidadosos comigo e com a minha mãe. Que Deus abençoe a vida de todos eles!",
      channel: "Google",
    },
  ];

  return (
    <section id="depoimentos" className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold md:text-4xl text-center">
            Depoimentos
          </h2>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-40 -z-10 -translate-x-36 opacity-60"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-[#01b1bc] to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-40 -z-10 opacity-60" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-[#01b1bc] opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-40 -z-10 opacity-60" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
