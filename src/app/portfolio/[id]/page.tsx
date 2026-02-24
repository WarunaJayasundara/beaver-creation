import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { PORTFOLIO_IMAGES, DUMMY_IMAGES } from "@/lib/images";

const projects: Record<
  string,
  { name: string; category: string; img: string; description: string }
> = {
  "1": {
    name: "Cyber Realm — Mobile Game",
    category: "Game Dev",
    img: PORTFOLIO_IMAGES[0],
    description:
      "An immersive mobile game experience combining innovative gameplay with stunning visuals. Built with cutting-edge game development practices and optimized for engagement.",
  },
  "2": {
    name: "Brand Cosmos — 3D Reel",
    category: "3D Animation",
    img: PORTFOLIO_IMAGES[1],
    description:
      "A visual storytelling project that brings brand narratives to life through high-quality 3D animation. Captivating and inspiring audiences with every frame.",
  },
  "3": {
    name: "Nexus IoT Platform",
    category: "Engineering",
    img: PORTFOLIO_IMAGES[2],
    description:
      "Smart IoT integration platform designed for industries seeking connectivity and automation. Harnessing the power of connected devices for smarter operations.",
  },
  "4": {
    name: "Soundtrack Series — Vol. I",
    category: "Audio",
    img: PORTFOLIO_IMAGES[3],
    description:
      "Original compositions and sound design that elevate every project. From concept to final mix, our audio production delivers exceptional quality.",
  },
  "5": {
    name: "E-Commerce Portal",
    category: "Web Dev",
    img: PORTFOLIO_IMAGES[4],
    description:
      "Bespoke e-commerce website designed to tell your story, engage users, and achieve results. A digital platform built for growth.",
  },
  "6": {
    name: "Smart Automation Prototype",
    category: "R&D",
    img: PORTFOLIO_IMAGES[5],
    description:
      "Pioneering research-driven automation solution. Engineering breakthroughs for today's challenges and tomorrow's possibilities.",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];
  if (!project) notFound();

  return (
    <main className="pt-24">
      <section className="py-24 md:py-[120px] px-5 md:px-12 lg:px-[60px]">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-primary font-syne text-sm font-semibold tracking-wider uppercase mb-10 no-underline hover:gap-3 transition-all"
        >
          ← Back to Portfolio
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-video lg:aspect-[4/3] rounded overflow-hidden">
            <ImageWithFallback
              src={project.img}
              fallbackSrc={DUMMY_IMAGES.portfolio[Number(id) - 1]}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <span className="font-syne text-[0.7rem] font-bold tracking-[2px] uppercase text-primary">
              {project.category}
            </span>
            <h1 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] leading-tight text-white mt-2">
              {project.name}
            </h1>
            <p className="text-white/65 leading-relaxed mt-6">
              {project.description}
            </p>
            <Link
              href="/#contact"
              className="inline-flex mt-8 bg-primary text-white py-4 px-8 rounded-md font-syne font-bold text-[0.85rem] tracking-[2px] uppercase no-underline transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
