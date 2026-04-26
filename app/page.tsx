import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Phone,
  SealCheck,
  Sparkle,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import { BenefitsGrid } from "@/components/benefits-grid";
import { CountUpStats } from "@/components/count-up-stats";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { ProjectGallery } from "@/components/project-gallery";
import { SiteHeader } from "@/components/site-header";
import {
  businessInfo,
  faqs,
  navItems,
  projects,
  revestimientoBenefits,
  services,
  siteUrl,
  socialLinks,
  stats,
  whatsappHref,
} from "@/lib/site-data";

const heroImage = "/images/ipool-hero.webp";

const socialIcons = [FacebookLogo, InstagramLogo, TiktokLogo];
const serviceLabels = ["Revestimiento", "Mantención", "Resina", "Adicionales"];

export default function Home() {
  const serviceOffers = services.map((service) => ({
    "@type": "Offer",
    url: `${siteUrl}/#servicios`,
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: businessInfo.areaServed.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
      provider: {
        "@id": `${siteUrl}/#localbusiness`,
      },
    },
  }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          name: businessInfo.name,
          image: businessInfo.image,
          logo: businessInfo.logo,
          telephone: businessInfo.phone,
          email: businessInfo.email,
          areaServed: businessInfo.areaServed.map((area) => ({
            "@type": "AdministrativeArea",
            name: area,
          })),
          url: siteUrl,
          description: businessInfo.description,
          priceRange: "$$",
          sameAs: socialLinks.map((social) => social.href),
          makesOffer: serviceOffers,
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          url: siteUrl,
          name: businessInfo.shortName,
          inLanguage: "es-CL",
          publisher: {
            "@id": `${siteUrl}/#localbusiness`,
          },
        },
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/#webpage`,
          url: siteUrl,
          name: "Revestimiento, limpieza y mantención de piscinas | iPool",
          description: businessInfo.description,
          isPartOf: {
            "@id": `${siteUrl}/#website`,
          },
          about: {
            "@id": `${siteUrl}/#localbusiness`,
          },
          inLanguage: "es-CL",
        },
        {
          "@type": "FAQPage",
          "@id": `${siteUrl}/#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    },
  ];

  const serviceJsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    areaServed: service.title.includes("Mantención")
      ? ["Santiago", "Región Metropolitana"]
      : [
          "Santiago",
          "Región Metropolitana",
          "Rancagua",
          "Región de O'Higgins",
          "Valparaíso",
          "Región de Valparaíso",
        ],
    serviceType: service.title,
  }));

  const allJsonLd = [...jsonLd, ...serviceJsonLd];

  return (
    <>
      {allJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <SiteHeader />
      <main id="inicio" className="overflow-hidden bg-[#eef5ff]">
        <section className="relative min-h-[42rem] overflow-hidden px-4 pb-12 pt-28 sm:min-h-[44rem] md:min-h-[48rem] md:px-6 md:pt-32 lg:min-h-[100dvh]">
          <Image
            src={heroImage}
            alt="Piscina residencial con agua cristalina y terraza moderna"
            fill
            priority
            fetchPriority="high"
            quality={68}
            sizes="100vw"
            className="object-cover object-[63%_center] sm:object-[58%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-white/45 md:bg-white/45" />
          <div className="water-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto grid min-h-[calc(42rem-10rem)] w-full min-w-0 max-w-7xl items-center sm:min-h-[calc(44rem-10rem)] md:min-h-[calc(48rem-10rem)] lg:min-h-[calc(100dvh-10rem)]">
            <div className="reveal-up w-full min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-[56rem]">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white/78 px-3 py-2 text-xs font-extrabold text-[#2f5eac] backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm">
                <Sparkle
                  className="text-[#ffb600]"
                  size={16}
                  weight="fill"
                  aria-hidden
                />
                <span className="truncate">
                  Revestimiento, limpieza y mantención
                </span>
              </div>
              <h1 className="max-w-[min(100%,8.8ch)] text-wrap font-[var(--font-display)] text-[clamp(2.2rem,9.7vw,3rem)] font-black leading-[1] tracking-tight text-[#12242c] sm:max-w-[13ch] sm:text-6xl sm:leading-[0.94] md:max-w-[14ch] md:text-7xl lg:max-w-[15ch] lg:text-8xl">
                Haz que tu piscina{" "}
                <br className="sm:hidden" />
                <span className="marker-highlight">brille todo el año.</span>
              </h1>
              <p className="mt-5 max-w-[36rem] text-base font-extrabold leading-7 text-[#102a36] sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
                Nosotros nos encargamos del revestimiento y la mantención para que tú solo disfrutes.
              </p>
              <div className="mt-10 flex w-fit items-center gap-3 rounded-2xl bg-white/72 px-4 py-2 text-xs font-black leading-6 text-[#102a36] backdrop-blur-md sm:text-base">
                <SealCheck
                  className="text-[#ffb600]"
                  size={20}
                  weight="fill"
                  aria-hidden
                />
                <span>Piscinas cristalinas e impecables listas para usar.</span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappHref}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#4b85e2] px-5 text-sm font-black text-white shadow-[0_18px_44px_-28px_rgba(75,133,226,0.74)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5eac] active:translate-y-0 sm:w-auto sm:px-6"
                >
                  Hablemos por WhatsApp
                  <ArrowRight size={18} weight="bold" aria-hidden />
                </Link>
                <Link
                  href="#proyectos"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#12242c]/15 bg-white/70 px-5 text-sm font-black text-[#12242c] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white active:translate-y-0 sm:w-auto sm:px-6"
                >
                  Ver proyectos
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="quienes-somos"
          className="px-4 py-8 sm:py-10 md:px-6 md:py-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_-70px_rgba(75,133,226,0.65)] sm:p-6 lg:p-8">
              <div className="grid gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
                <div className="flex flex-col">
                  <div className="max-w-3xl">
                    <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[0.68rem] font-black tracking-[0.16em] text-[#4b85e2] sm:text-xs">
                      iPOOL SERVICIOS DE PISCINAS
                    </p>
                    <h2 className="mt-5 font-[var(--font-display)] text-3xl font-black tracking-tight text-[#12242c] sm:text-4xl md:text-5xl">
                      No solo mantenemos tu piscina: cuidamos tu tranquilidad.
                    </h2>
                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                      Somos <strong>iPool</strong>, una empresa familiar con más
                      de 7 años de experiencia en el rubro piscinero. Partimos
                      pintando piscinas de hormigón y luego pasamos a generar
                      los más bellos revestimientos en fibra de vidrio,
                      obteniendo resultados de la más alta calidad, con trabajos
                      duraderos en el tiempo.
                    </p>
                    <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                      A través de los años, hemos ido afinando nuestra técnica
                      para ofrecer servicios cada vez mejores y más completos,
                      incorporando recientemente la limpieza y mantención de
                      piscinas. Nos destacamos por la pasión y el alma que le
                      ponemos a cada proyecto, porque sabemos que cada piscina
                      es única y que cada una de ellas representa parte de tu
                      hogar.
                    </p>
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={whatsappHref}
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#4b85e2] px-5 text-sm font-black text-white shadow-[0_18px_44px_-28px_rgba(75,133,226,0.74)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5eac] active:translate-y-0 sm:w-auto"
                    >
                      Cotizar ahora
                      <ArrowRight size={18} weight="bold" aria-hidden />
                    </Link>
                    <Link
                      href="#servicios"
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#4b85e2]/30 px-5 text-sm font-black text-[#2f5eac] transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef5ff] active:translate-y-0 sm:w-auto"
                    >
                      Ver servicios
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] bg-[#eef5ff] sm:min-h-[24rem] lg:min-h-full">
                  <Image
                    src="/images/mantencion-piscina.webp"
                    alt="Piscina mantenida por iPool con agua limpia y entorno residencial"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#2f5eac] backdrop-blur-md">
                    Servicio familiar
                  </div>
                </div>
              </div>
              <div className="mt-7 border-t border-slate-200 pt-6">
                <CountUpStats items={stats} />
              </div>
            </div>
          </div>
        </section>

        <section
          id="beneficios"
          className="px-4 py-8 sm:py-10 md:px-6 md:py-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_-70px_rgba(75,133,226,0.65)] sm:p-6 lg:p-8">
              <div className="grid gap-5 md:grid-cols-[0.82fr_1.18fr] md:items-end">
                <div>
                  <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#4b85e2] sm:text-xs">
                    Beneficios del revestimiento
                  </p>
                  <h2 className="mt-5 font-[var(--font-display)] text-3xl font-black tracking-tight text-[#12242c] sm:text-4xl md:text-5xl">
                    FRP Plástico Reforzado
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:justify-self-end">
                  Olvídate de pintar tu piscina todos los años, en iPool te
                  ofrecemos la solución definitiva para tu piscina. Con
                  materiales de la más alta calidad haremos que tu piscina no
                  tenga que volver a pintarse cada temporada y eliminará
                  cualquier tipo de grietas o filtraciones{" "}
                  <span className="rounded-full bg-[#ffb600] px-2 py-1 text-sm font-black uppercase tracking-[0.08em] text-[#12242c]">
                    ¡No sigas perdiendo agua!
                  </span>
                </p>
              </div>
              <div className="mt-10">
                <BenefitsGrid items={revestimientoBenefits} />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="px-4 py-8 sm:py-10 md:px-6 md:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_-70px_rgba(75,133,226,0.65)] sm:p-6 lg:p-8">
              <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
                <div>
                  <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#4b85e2] sm:text-xs">
                    Nuestros servicios
                  </p>
                  <h2 className="mt-5 font-[var(--font-display)] text-3xl font-black tracking-tight text-[#12242c] sm:text-4xl md:text-5xl">
                    Servicios para recuperar, mantener y preparar tu piscina.
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:justify-self-end">
                  Combinamos recuperación estructural, agua clara y mantención
                  preventiva para que la piscina se vea bien y funcione como
                  corresponde durante todo el año.
                </p>
              </div>
              <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
                {services.map((service, index) => (
                  <article
                    key={service.title}
                    className="overflow-hidden rounded-[1.75rem] border border-[#d5e4f7] bg-[#f3f8ff] shadow-[0_24px_80px_-64px_rgba(75,133,226,0.5)]"
                  >
                    <div className="relative aspect-[16/11] sm:aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 sm:p-6 md:p-8">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#4b85e2] sm:text-sm">
                        {serviceLabels[index] ?? "Servicio"}
                      </p>
                      <h3 className="mt-3 font-[var(--font-display)] text-2xl font-black tracking-tight text-[#12242c] sm:text-3xl md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-[44rem] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-base font-semibold text-slate-700"
                          >
                            <SealCheck
                              className="mt-0.5 shrink-0 text-[#ffb600]"
                              size={23}
                              weight="fill"
                              aria-hidden
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}

              </div>
                <section
                  className="py-8 sm:py-10 md:py-12"
                  aria-label="Zonas de atención iPool"
                >
                  <div className="mx-auto max-w-7xl">
                    <div className="grid gap-4 rounded-[1.75rem] border border-[#d5e4f7] bg-white p-4 shadow-[0_24px_80px_-64px_rgba(75,133,226,0.5)] sm:grid-cols-2 sm:p-6 lg:p-8">
                      <div className="rounded-[1.25rem] bg-[#f3f8ff] p-5">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4b85e2]">
                          Mantenciones
                        </p>
                        <h2 className="mt-3 font-[var(--font-display)] text-2xl font-black tracking-tight text-[#12242c] sm:text-3xl">
                          Solo en Región Metropolitana
                        </h2>
                        <p className="mt-3 text-base leading-7 text-slate-600">
                          Servicio a domicilio para limpieza, mantención y
                          puesta a punto dentro de la RM.
                        </p>
                      </div>
                      <div className="rounded-[1.25rem] bg-[#f3f8ff] p-5">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4b85e2]">
                          Revestimientos
                        </p>
                        <h2 className="mt-3 font-[var(--font-display)] text-2xl font-black tracking-tight text-[#12242c] sm:text-3xl">
                          Fibra de vidrio en +4 regiones
                        </h2>
                        <p className="mt-3 text-base leading-7 text-slate-600">
                          Evaluamos trabajos de revestimiento en la zona centro
                          según alcance y disponibilidad del proyecto.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
          </div>
        </section>

        <section id="proyectos" className="px-4 py-8 sm:py-10 md:px-6 md:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_-70px_rgba(75,133,226,0.65)] sm:p-6 lg:p-8">
              <div className="mb-10 grid gap-5 sm:mb-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <div>
                  <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#4b85e2] sm:text-xs">
                    Proyectos
                  </p>
                  <h2 className="mt-5 font-[var(--font-display)] text-3xl font-black tracking-tight text-[#12242c] sm:text-4xl md:text-5xl">
                    Antes y después con contexto real.
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:justify-self-end">
                  Cada tarjeta abre una ficha con ubicación, servicios
                  realizados y una comparativa visual. Las fotos actuales
                  funcionan como base editable para reemplazar por material del
                  cliente.
                </p>
              </div>
              <ProjectGallery items={projects} />
            </div>
          </div>
        </section>

        <section id="preguntas" className="px-4 py-8 sm:py-10 md:px-6 md:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_-70px_rgba(75,133,226,0.65)] sm:p-6 lg:p-8">
              <div className="grid gap-6 md:grid-cols-[0.74fr_1.26fr] md:items-start">
                <div>
                  <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#4b85e2] sm:text-xs">
                    Preguntas frecuentes
                  </p>
                  <h2 className="mt-5 font-[var(--font-display)] text-3xl font-black tracking-tight text-[#12242c] sm:text-4xl md:text-5xl">
                    Lo que conviene saber antes de cotizar tu piscina.
                  </h2>
                  <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    Respuestas directas sobre revestimiento en fibra de vidrio,
                    limpieza, mantención y reparación de filtraciones para
                    piscinas residenciales.
                  </p>
                </div>
                <div className="grid gap-3">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-[1.25rem] border border-[#d5e4f7] bg-[#f7fbff] p-4 open:bg-white sm:p-5"
                    >
                      <summary className="cursor-pointer list-none font-[var(--font-display)] text-lg font-black text-[#12242c] marker:hidden sm:text-xl">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="px-4 pb-10 pt-8 sm:pb-14 sm:pt-10 md:px-6 md:pb-16 md:pt-12"
        >
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#12242c] text-white shadow-[0_40px_120px_-70px_rgba(75,133,226,0.55)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 sm:p-7 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#4b85e2] sm:text-sm">
                Contáctanos
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                No esperes más.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Llámanos o escríbenos a nuestro WhatsApp para cotizar cualquiera
                de nuestros servicios. Estaremos encantados de atender tu
                requerimiento.
              </p>
              <div className="mt-8 grid gap-4 break-words text-sm text-white/82 sm:text-base">
                <p className="flex items-center gap-3">
                  <Phone size={22} weight="bold" aria-hidden />
                  {businessInfo.phone}
                </p>
                <p className="flex items-center gap-3">
                  <EnvelopeSimple size={22} weight="bold" aria-hidden />
                  {businessInfo.email}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[index];

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-extrabold text-white/82 transition hover:border-[#4b85e2] hover:bg-white/8 hover:text-white"
                    >
                      <Icon size={18} weight="bold" aria-hidden />
                      {social.value}
                    </Link>
                  );
                })}
              </div>
              <Link
                href={whatsappHref}
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4b85e2] px-6 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5eac] active:translate-y-0"
              >
                WhatsApp
                <ArrowRight size={18} weight="bold" aria-hidden />
              </Link>
            </div>
            <div className="relative min-h-[24rem] overflow-hidden bg-[#4b85e2] sm:min-h-[34rem] lg:min-h-full">
              <Image
                src="/images/contact.png"
                alt="Técnico de limpieza de piscinas listo para atender una cotización"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[58%_center] sm:object-[56%_center] lg:object-[54%_center]"
              />
              <div className="absolute inset-0 bg-[#12242c]/8" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#12242c] px-4 py-10 text-white md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
            <div>
              <Image
                src="/images/ipool-logo-sticker.png"
                alt="iPool"
                width={160}
                height={121}
                className="h-auto w-36"
              />
              <p className="mt-5 max-w-sm text-base leading-7 text-white/72">
                Revestimiento, limpieza y mantención de piscinas para que
                disfrutes agua clara durante todo el año.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[index];

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} de iPool`}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/76 transition hover:border-[#4b85e2] hover:bg-[#4b85e2] hover:text-white"
                    >
                      <Icon size={19} weight="bold" aria-hidden />
                    </Link>
                  );
                })}
              </div>
              <Link
                href={whatsappHref}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4b85e2] px-5 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2f5eac] active:translate-y-0"
              >
                Cotizar por WhatsApp
                <ArrowRight size={18} weight="bold" aria-hidden />
              </Link>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffb600]">
                Secciones
              </p>
              <nav className="mt-5 grid gap-3 text-sm font-extrabold text-white/74">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffb600]">
                Servicios
              </p>
              <div className="mt-5 grid gap-3 text-sm font-extrabold text-white/74">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href="#servicios"
                    className="transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffb600]">
                Contacto
              </p>
              <div className="mt-5 grid gap-4 text-sm font-semibold text-white/76">
                <p className="flex items-center gap-3">
                  <Phone size={20} weight="bold" aria-hidden />
                  {businessInfo.phone}
                </p>
                <p className="flex items-center gap-3 break-all">
                  <EnvelopeSimple size={20} weight="bold" aria-hidden />
                  {businessInfo.email}
                </p>
                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[index];

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 transition hover:text-white"
                    >
                      <Icon size={20} weight="bold" aria-hidden />
                      {social.value}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 p-4">
                <p className="text-sm font-extrabold text-white">
                  Zonas de servicio
                </p>
                <p className="mt-2 text-sm leading-6 text-white/64">
                  Atendemos y cotizamos a domicilio:
                  mantenciones solo en Región Metropolitana y revestimientos en
                  fibra de vidrio en más de 4 regiones según evaluación.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/54 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 iPool Servicios de Piscinas</p>
            <p>Diseñado para cotizar, mostrar servicios y ganar confianza.</p>
          </div>
        </div>
      </footer>
      <FloatingWhatsapp />
    </>
  );
}
