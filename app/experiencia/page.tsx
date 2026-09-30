import Image from "next/image";
import { PageHeaderBlue } from "../../components/ui/PageHeaderBlue";
import FormaturaDSMImg from "../images/experiencias/foto_formatura_DSM.jpeg";
import CompassCetificado from "../images/experiencias/compass_certificado.png";
import FotoBortone from "../images/experiencias/tela_bortone.png";
import EscolaManual from "../images/experiencias/e.scola_manual_design.png";
import CertificadoDS from "../images/experiencias/certificado_DS.png";
import TelaCMS from "../images/experiencias/tela_cms.png";

const timeline = [
  {
    period: "Univesp — Atual",
    title: "Engenharia de Computação",
    description: "Formação em andamento, em paralelo à atuação profissional.",
    img: undefined,
  },
  {
    period: "FATEC — 2026",
    title: "Formado em DSM",
    description:
      "Desenvolvimento de Software Multiplataforma concluído em julho de 2026, com passagem por front-end, back-end, cloud e engenharia de software.",
    img: FormaturaDSMImg,
    href: undefined,
  },
  {
    period: "Compass UOL — Estágio",
    title: "Projeto de Bolsas",
    description:
      "Programei bastante com Java e Spring Boot durante a FATEC, ganhando prática real de back-end em um ambiente profissional.",
    img: CompassCetificado,
    href: undefined,
  },
  {
    period: "LP 26/1",
    title: "Líder de Design",
    description:
      "Responsável pela criação e manutenção do Design System do projeto: paleta de cores, tipografia, componentes e padrões visuais para toda a equipe. Entregável: Design System completo.",
    img: FotoBortone,
    href: "https://github.com/JorgeMassaru/Imobiliaria_Bortone"
  },
  {
    period: "LP 25/2",
    title: "Designer do CMS",
    description:
      "Responsável pelo design completo da interface do módulo CMS, garantindo consistência visual e boa experiência de uso. Entregável: Interface CMS.",
    img: TelaCMS,
    href: undefined
  },
  {
    period: "LP 25/1",
    title: "Designer da Tribo Principal",
    description:
      "Responsável pela conceituação visual principal do projeto. Criei o manual da marca e produzi referências para orientar os demais designers da equipe. Entregável: Manual de Marca e Diretrizes Visuais.",
    img: EscolaManual,
    href: undefined
  },
  {
    period: "SENAI Registro",
    title: "Técnico em Desenvolvimento de Sistemas",
    description:
      'Projeto Integrador em grupo: "Comanda Menu", um app de serviço de comanda para restaurantes, desenvolvido em PHP. TCC: Balança solidária com Arduino, que mede peso e envia dados para um app web. Entregáveis: App de Comanda e Balança Solidária.',
    img: CertificadoDS,
    href: undefined
  },
];

export default function Experiencia() {
  return (
    <section className="bg-[#0066ff] px-6 pb-20 pt-32 text-white">
      <PageHeaderBlue
        title="Histórico"
        description="Conheça alguns dos projetos que desenvolvi ao longo da minha formação e experiência."
      />

      <ol className="relative mx-auto mt-20 max-w-5xl border-l-2 border-white/40 pl-10 sm:pl-16">
        {timeline.map((item) => (
          <li key={item.period} className="relative pb-16 last:pb-0">
            <span className="absolute -left-[calc(2.5rem+9px)] top-1 h-4 w-4 rounded-full bg-white sm:-left-[calc(4rem+9px)]" />

            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                  {item.period}
                </p>
                <h2 className="mt-1 text-2xl font-bold uppercase">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-md text-white/90">
                  {item.description}
                </p>
              </div>


              <div className="rounded-xl bg-white p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={`Imagem relacionada a ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
