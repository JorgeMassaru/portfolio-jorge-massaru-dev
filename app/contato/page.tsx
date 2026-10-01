import type { Metadata } from "next";
import { ContactForm } from "../../components/contact/ContactForm";
import { PageHeaderBlue } from "../../components/ui/PageHeaderBlue";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Jorge Massaru.",
};

// Canais alternativos ao formulário de contato.
const links = [
  {
    label: "GitHub",
    value: "github.com/JorgeMassaru",
    href: "https://github.com/JorgeMassaru",
  },
  {
    label: "E-mail",
    value: "jorge.hashiguchi2005@gmail.com",
    href: "mailto:jorge.hashiguchi2005@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jorge-hashiguchi",
    href: "https://www.linkedin.com/in/jorge-hashiguchi/",
  },
  {
    label: "Telefone",
    value: "+55 (13) 99682-8069",
    href: "tel:+5513996828069",
  },
];

export default function Contato() {
  return (
    <section className="bg-[#0066ff] px-6 pb-24 pt-32 text-white">
      <PageHeaderBlue
        title="Contato"
        description="Entre em contato comigo — respondo o quanto antes."
      />

      {/* Formulário e formas alternativas de contato. */}
      <div className="relative mx-auto mt-16 max-w-6xl">
        <div className="absolute -bottom-6 -right-4 -top-6 left-4 -z-10 rounded-3xl bg-[#0052cc] sm:-right-6 sm:left-6" />

        <div className="rounded-3xl bg-white p-8 text-zinc-900 sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ContactForm />

            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl border border-zinc-200 px-6 py-4 shadow-sm transition-colors hover:border-[#0066ff]"
                >
                  <p className="font-semibold text-zinc-900">{link.label}</p>
                  <p className="mt-1 text-sm text-zinc-500">{link.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
