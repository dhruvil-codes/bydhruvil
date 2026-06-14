export interface SubstackRecommendation {
  id: string;
  title: string;
  publication: string;
  author?: string;
  description?: string;
  url: string;
  readTime?: string;
  category: string;
  heroImage: string;
  accentColor: string; // Keep support for accentColor if we want to retain custom elements
  borderColor: string;
}

export const substacksData: SubstackRecommendation[] = [
  {
    id: "procrastination",
    title: "Give Me 14 Minutes And I'll Destroy Your Procrastination Forever",
    publication: "Rian Sweet Doris",
    url: "https://open.substack.com/pub/riansweetdoris/p/give-me-14-minutes-and-ill-destroy?r=2jp5te&utm_campaign=post-expanded-share&utm_medium=post%20viewer",
    category: "AI Engineering",
    heroImage: "/stack/article-1.png",
    accentColor: "rgba(59, 130, 246, 0.12)",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    id: "original-thoughts",
    title: "How To Start Having Original Thoughts.",
    publication: "Feifei's Substack",
    url: "https://open.substack.com/pub/feifeiwrites/p/how-to-start-having-original-thoughts?r=2jp5te&utm_campaign=post-expanded-share&utm_medium=post%20viewer",
    category: "Software Career",
    heroImage: "/stack/article-2.png",
    accentColor: "rgba(249, 115, 22, 0.12)",
    borderColor: "group-hover:border-orange-500/30",
  },
  {
    id: "game-theory",
    title: "Game Theory Will Change Your Life: The Invisible Rules Running Every Interaction",
    publication: "Ixcarus",
    url: "https://open.substack.com/pub/ixcarus/p/game-theory-will-change-your-life?r=2jp5te&utm_campaign=post-expanded-share&utm_medium=post%20viewer",
    category: "Deep Learning",
    heroImage: "/stack/article-3.png",
    accentColor: "rgba(168, 85, 247, 0.12)",
    borderColor: "group-hover:border-purple-500/30",
  },
  {
    id: "labor-illusion",
    title: "The Labor Illusion in AI",
    publication: "AI+ Founders Community",
    url: "https://open.substack.com/pub/aiplusfounderscommunity/p/the-labor-illusion-in-ai?r=2jp5te&utm_campaign=post-expanded-share&utm_medium=web",
    category: "Alignment",
    heroImage: "/stack/article-4.png",
    accentColor: "rgba(16, 185, 129, 0.12)",
    borderColor: "group-hover:border-emerald-500/30",
  },
  {
    id: "second-brain",
    title: "Andrej Karpathy Just Showed Us How to Build an AI Second Brain. Here's How To Do It.",
    publication: "Matt Paige",
    url: "https://mattpaige68.substack.com/p/andrej-karpathy-just-showed-us-how",
    category: "AI Engineering",
    heroImage: "/stack/article-5.png",
    accentColor: "rgba(59, 130, 246, 0.12)",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    id: "trick-brain",
    title: "How to Trick Your Brain into Doing Difficult Things",
    publication: "Brain Health Decoded",
    url: "https://open.substack.com/pub/brainhealthdecoded/p/how-to-trick-your-brain-into-doing?utm_campaign=post-expanded-share&utm_medium=web",
    category: "Software Career",
    heroImage: "/stack/article-6.png",
    accentColor: "rgba(249, 115, 22, 0.12)",
    borderColor: "group-hover:border-orange-500/30",
  },
];
