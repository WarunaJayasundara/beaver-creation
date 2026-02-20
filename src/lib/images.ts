/**
 * Image paths for uploads in public/images/
 * If you upload a file → that image is shown.
 * If not → dummy image below is shown.
 * See public/images/README.md for folder locations.
 */

export const IMAGES = {
  logo: "/images/logo/logo.png",
  hero: { background: "/images/hero/hero-bg.jpg" },
  about: { team: "/images/about/about-team.jpg" },
  portfolio: {
    project1: "/images/portfolio/project-1.jpg",
    project2: "/images/portfolio/project-2.jpg",
    project3: "/images/portfolio/project-3.jpg",
    project4: "/images/portfolio/project-4.jpg",
    project5: "/images/portfolio/project-5.jpg",
    project6: "/images/portfolio/project-6.jpg",
  },
  services: {
    creativeMedia: "/images/services/creative-media-bg.jpg",
    digitalPlatforms: "/images/services/digital-platforms-bg.jpg",
    smartEngineering: "/images/services/smart-engineering-bg.jpg",
    rnd: "/images/services/rnd-bg.jpg",
  },
} as const;

/** Dummy images when nothing is uploaded to the folder */
export const DUMMY_IMAGES = {
  hero: {
    background: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&q=80",
  },
  about: {
    team: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  portfolio: [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
  ],
  services: {
    creativeMedia: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1600&q=80",
    digitalPlatforms: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80",
    smartEngineering: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    rnd: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&q=80",
  },
} as const;

export const PORTFOLIO_IMAGES = [
  IMAGES.portfolio.project1,
  IMAGES.portfolio.project2,
  IMAGES.portfolio.project3,
  IMAGES.portfolio.project4,
  IMAGES.portfolio.project5,
  IMAGES.portfolio.project6,
] as const;
