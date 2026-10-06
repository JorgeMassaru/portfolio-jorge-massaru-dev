"use client";

import Image, { type StaticImageData } from "next/image";
import { PageHeaderBlue } from "../ui/PageHeaderBlue";
import { useLanguage } from "../i18n/LanguageContext";
import formatura from "../../app/images/experiencias/foto_formatura_DSM.jpeg";
import compassCertificate from "../../app/images/experiencias/compass_certificado.png";
import bortoneDesign from "../../app/images/experiencias/tela_bortone.png";
import cmsDesign from "../../app/images/experiencias/tela_cms.png";
import brandManual from "../../app/images/experiencias/e.scola_manual_design.png";
import systemsCertificate from "../../app/images/experiencias/certificado_DS.png";

const timelineImages: (StaticImageData | undefined)[] = [
  undefined,
  formatura,
  compassCertificate,
  bortoneDesign,
  cmsDesign,
  brandManual,
  systemsCertificate,
];

const timelineLinks: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
  "https://github.com/JorgeMassaru/Imobiliaria_Bortone",
  undefined,
  undefined,
  undefined,
];

export function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0066ff] px-6 pb-20 pt-32 text-white">
      <PageHeaderBlue
        title={t.experience.title}
        description={t.experience.description}
      />

      <ol className="relative mx-auto mt-20 max-w-5xl border-l-2 border-white/40 pl-10 sm:pl-16">
        {t.experience.timeline.map((item, index) => {
          const image = timelineImages[index];
          const href = timelineLinks[index];
          const renderedImage = image && (
            <Image
              src={image}
              alt={`${t.experience.imageAlt} ${item.title}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          );

          return (
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
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-zinc-100">
                    {image && href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0"
                        aria-label={`${item.title} — ${t.experience.imageAlt}`}
                      >
                        {renderedImage}
                      </a>
                    ) : image ? (
                      renderedImage
                    ) : (
                      <span className="text-sm font-medium uppercase tracking-wide text-zinc-400">
                        {t.experience.comingSoon}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="mx-auto mt-8 max-w-5xl text-center">
        <p className="text-xs leading-relaxed text-white/60">
          <span className="font-semibold text-white/70">
            {t.experience.lpNoteTitle}
          </span>{" "}
          {t.experience.lpNote}
        </p>
      </div>
    </section>
  );
}
