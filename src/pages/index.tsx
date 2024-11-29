import React, { useEffect, useState } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Background3D from "../components/Background3D";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

interface ArtworkItem {
  title: string;
  description: string;
  category: string;
  image: string;
  quote?: string;
  details?: string;
  dimensions?: string;
  year?: string;
}

interface ArtworkSection {
  title: string;
  description: string;
  quote: string;
  artworks: ArtworkItem[];
}

const artworkSections: ArtworkSection[] = [
  {
    title: "Canvas Art",
    description:
      "A collection of my acrylic paintings on canvas, exploring various themes and emotions through color and texture.",
    quote: "Each brushstroke is a whisper of the soul",
    artworks: [
      {
        title: "Enigma",
        description: "A journey through the anxious mind",
        category: "Canvas",
        image: "/images/paintings/EnigmaEdit.png",
        dimensions: '24" × 36"',
        year: "2020",
        details: "Anxiety and contemplation on canvas",
      },
      {
        title: "Gray Pride",
        description: "A vibrant celebration of identity through color and form",
        category: "Canvas",
        image: "/images/paintings/RajDoshiSign.jpg",
        dimensions: '16" × 20"',
        year: "2021",
        details: "A discovery of the rainbow palette on canvas",
      },
      {
        title: "Color Of Dreams",
        description: "Colors form a canvas of dreams",
        category: "Canvas",
        image: "/images/paintings/COLOROFDREAMEDIT.jpg",
        dimensions: '11" × 14"',
        year: "2022",
        details: "Inspired by Van gogh Starry Night",
      },

      {
        title: "Fairy Topia",
        description: "The land of fairies and enchantment",
        category: "Canvas",
        image: "/images/paintings/FairyTopiaEdit.jpg",
        dimensions: '24" × 36"',
        year: "2019",
        details: "Liberty and freedom on canvas",
      },
      {
        title: "Demon Slayer",
        description: "Anime-inspired art",
        category: "Canvas",
        image: "/images/paintings/DemonSlayerEdit.jpg",
        dimensions: '16" × 20"',
        year: "2020",
        details: `"I want to change. I want to be a competent person" ~ Zenitsu`,
      },
      {
        title: "Unrequited",
        description: "Love at first sight",
        category: "Canvas",
        image: "/images/paintings/UnrequitedEdit.jpg",
        dimensions: '11" × 14"',
        year: "2021",
        details: "Romeo and Juliet",
      },
      {
        title: "Jungkook Sketch",
        description: "Pencil Sketch",
        category: "Canvas",
        image: "/images/paintings/JUNGKOOKEDIT.jpg",
        dimensions: '8" × 11"',
        year: "2019",
        details: "K-POP",
      },
      {
        title: "Jimin Sketch",
        description: "Pencil Sketch",
        category: "Canvas",
        image: "/images/paintings/JIMIN.jpg",
        dimensions: '8" × 11"',
        year: "2019",
        details: "K-POP",
      },
    ],
  },
  {
    title: "Acrylic Painting",
    description:
      "Vibrant acrylic artworks that explore depth, texture, and emotion through layered techniques.",
    quote: "Colors dance and emotions flow through every layer",
    artworks: [
      {
        title: "Simpsons",
        description: "The Simpson effect",
        category: "Acrylic",
        image: "/images/Acrylic/SIMPSON.jpg",
        dimensions: '11" × 16"',
        year: "2019",
        details: `"It takes two to lie: one to lie and one to listen" ~ Homer Simpson`,
      },
      {
        title: "JOJO",
        description: "JOJO's bizarre adventures",
        category: "Acrylic",
        image: "/images/Acrylic/JOJI.jpg",
        dimensions: '8" × 11"',
        year: "2020",
        details: `"Even In This Rotten World, I Still Want To Walk Down A Path I Can Believe In!" ~ JoJo`,
      },
      {
        title: "Buddha",
        description: "Buddha's teachings",
        category: "Acrylic",
        image: "/images/Acrylic/BUDDHA.jpg",
        dimensions: '8" × 11"',
        year: "2020",
        details: "Peaceful Buddha",
      },
    ],
  },
  {
    title: "Fabric Painting",
    description:
      "Unique pieces that bring art into everyday life  **All the pieces below are commission work**",
    quote: "Wearing art is the ultimate form of self-expression",
    artworks: [
      {
        title: "The Colorful Feathers",
        description: "A celebration of Nature's colors",
        category: "Fabric",
        image: "/images/totebags/Peacock.jpg",
        dimensions: '14" × 16"',
        year: "2024",
        details: "Hand-painted using specialized fabric paints for durability",
      },
      {
        title: "Peaceful Swan",
        description: "Elegant design capturing grace in motion",
        category: "Fabric",
        image: "/images/totebags/Swan.jpg",
        dimensions: '15" × 16"',
        year: "2023",
        details:
          "Created using a combination of painting and dyeing techniques",
      },
      {
        title: "Beauty Of The Sea",
        description: "The endless beauty of the sea",
        category: "Fabric",
        image: "/images/totebags/Fish.jpg",
        dimensions: '14" × 16"',
        year: "2023",
        details: "Hand-painted using specialized fabric paints for durability",
      },
    ],
  },
  {
    title: "Mural Art",
    description: "MOOD INDIGO X IIT BOMBAY",
    quote: "Art that transforms spaces and tells stories",
    artworks: [
      {
        title: "IIT Bombay Mural 1",
        description: "A mural for IIT BOMBAY for their annual fest MOOD INDIGO",
        category: "Mural",
        image: "/images/Mood Indigo/FULLVIEW.jpg",
        dimensions: "Large Scale",
        year: "2023",
        details: "Created for Mood Indigo annual festival",
      },
      {
        title: "IIT Bombay Mural 2",
        description: "A mural for IIT BOMBAY for their annual fest MOOD INDIGO",
        category: "Mural",
        image: "/images/Mood Indigo/MOODIND.jpg",
        dimensions: "Large Scale",
        year: "2023",
        details: "Created for Mood Indigo annual festival",
      },
    ],
  },
  {
    title: "Graffiti Art",
    description: "THE WINGS OF SERENITY",
    quote: "Where concrete walls become canvases of expression",
    artworks: [
      {
        title: "THE WINGS OF SERENITY",
        description:
          "A vibrant graffiti piece that brings life to urban spaces",
        category: "Graffiti",
        image: "/images/Wall murals/Wings.jpg",
      },
    ],
  },
  {
    title: "Apparel Design",
    description: "IRRATIONAL (COMMISSIONED T-SHIRT ART)",
    quote: "Wearable art that tells a story",
    artworks: [
      {
        title: "Custom Commission",
        description:
          "A unique t-shirt design crafted for individual expression",
        category: "Apparel",
        image: "/images/tshirts/OutOfmymind.jpg",
      },
    ],
  },
  {
    title: "Clay Article",
    description: "NIGHT OF THE STARS",
    quote: "Where hands shape stories in clay",
    artworks: [
      {
        title: "Ceramic Expression",
        description: "A handcrafted piece that explores the treasures of Night",
        category: "Clay",
        image: "/images/Individual Items/ClayArticle.jpg",
      },
    ],
  },
  {
    title: "SFX Makeup",
    description: "TRANSFORMATIVE ARTISTRY",
    quote: "Where imagination meets skin canvas",
    artworks: [
      {
        title: "Wounds Of Blood",
        description: "An artistic blend to give a real look",
        category: "Makeup",
        image: "/images/SFX/cheek.jpg",
      },
      {
        title: "Hurting Beauty",
        description: "A haunting blend of blood and wounds",
        category: "Makeup",
        image: "/images/SFX/Mouth1.jpg",
      },
      {
        title: "Skeletal Beauty",
        description: "Facial transformation",
        category: "Makeup",
        image: "/images/SFX/Skeleton2.jpg",
      },
      {
        title: "Gothic Dreams",
        description: "Where darkness meets elegance in makeup design",
        category: "Makeup",
        image: "/images/SFX/Skeleton.jpg",
      },
    ],
  },
  {
    title: "Artistic Reflection",
    description: "",
    quote: `"In every stroke of creativity, I find a piece of myself. Art is my voice, my journey, and my endless exploration of what could be."`,
    artworks: [
      {
        title: "Artistic Journey",
        description: "",
        category: "Quote",
        image: "/images/paintings/RajDoshiSign.jpg",
      },
    ],
  },
  {
    title: "Commissions",
    description: "Two Slots per Month",
    quote:
      "To maintain quality and provide my clients with the attention they deserve, I limit my availability to just two commission slots each month. However, for tote bags, I accept commissions on a bulk order basis.",
    artworks: [
      {
        title: "Commission Showcase",
        description: "",
        category: "Commission",
        image: "/images/totebags/Fish2.jpg",
      },
    ],
  },
  {
    title: "Timeline",
    description: "Custom Art Journey",
    quote:
      "Pricing and timeline will depend on the difficulty of the commissioned artwork. Feel free to message me for inquiries.",
    artworks: [
      {
        title: "Art Process",
        description: "",
        category: "Timeline",
        image: "/images/paintings/pinkTree.jpg",
      },
    ],
  },
];

const ArtworkDisplay = ({ artwork }: { artwork: ArtworkItem }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >
    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="relative h-full"
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          className="object-cover w-full h-full"
        />
      </motion.div>
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
        <h3 className="text-2xl font-bold text-purple-200 mb-2">
          {artwork.title}
        </h3>
        <p className="text-purple-300/90 mb-2">{artwork.description}</p>
        {artwork.details && (
          <p className="text-purple-300/80 text-sm mb-2">{artwork.details}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {artwork.dimensions && (
            <span className="text-xs text-purple-400 border border-purple-400/50 rounded-full px-3 py-1">
              {artwork.dimensions}
            </span>
          )}
          {artwork.year && (
            <span className="text-xs text-purple-400 border border-purple-400/50 rounded-full px-3 py-1">
              {artwork.year}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    [1, 0]
  );

  // Floating animation variants
  const floatingAnimation = {
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse",
    },
  };

  // Hover animation variants
  const hoverScale = {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  // Stagger animation for lists
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    // Add keyframes for progress bar and glow animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes progressBar {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(200%);
        }
      }
      @keyframes glow {
        0% {
          box-shadow: 0 0 5px rgba(167, 139, 250, 0.1);
        }
        50% {
          box-shadow: 0 0 20px rgba(167, 139, 250, 0.2);
        }
        100% {
          box-shadow: 0 0 5px rgba(167, 139, 250, 0.1);
        }
      }
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      @keyframes pulse {
        0%, 100% {
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ruth Saldanha - Artist Portfolio</title>
        <meta
          name="description"
          content="Explore the artistic world of Ruth Saldanha"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background3D />

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <motion.div
          className="relative z-10 h-screen flex flex-col justify-center items-center text-center space-y-8 px-6 md:px-8"
          style={{ opacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-londrina text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-purple-200 tracking-wide bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent transition-all duration-500 ease-in-out"
          >
            Ruth Saldanha
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <p className="font-alexbrush text-2xl sm:text-3xl md:text-4xl text-purple-200/90">
              "Art is not what you see, but what you make others see"
            </p>
            <p className="font-playfair text-xs sm:text-sm md:text-base text-purple-300/60">
              — Edgar Degas
            </p>
          </motion.div>
        </motion.div>

        {/* Index Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 py-16 sm:py-24"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              className="space-y-12"
            >
              {/* Section Title */}
              <div className="text-center space-y-4">
                <motion.h2
                  variants={itemAnimation}
                  className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider"
                >
                  Portfolio Index
                </motion.h2>
                <motion.p
                  variants={itemAnimation}
                  className="font-lexend text-lg text-purple-200/80"
                >
                  Explore my artistic journey through these sections
                </motion.p>
              </div>

              {/* Index Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Artistic Reflection",
                    description: "My journey and philosophy as an artist",
                    icon: "🎨",
                    sectionId: "artistic-reflection",
                  },
                  {
                    title: "Canvas Art",
                    description: "Explore my acrylic paintings collection",
                    icon: "🖼️",
                    sectionId: "canvas-art",
                  },
                  {
                    title: "Graffiti Art",
                    description: "Making the world more beautiful!",
                    icon: "🖌️",
                    sectionId: "graffiti-art",
                  },
                  {
                    title: "Clay Art",
                    description: "Hand-crafted ceramic creations",
                    icon: "🏺",
                    sectionId: "clay-art",
                  },
                  {
                    title: "Mural Art",
                    description: "Exploring the power of murals!",
                    icon: "🧱",
                    sectionId: "mural-art",
                  },
                  {
                    title: "SFX Makeup",
                    description: "Special effects and artistic makeup",
                    icon: "💄",
                    sectionId: "sfx-makeup",
                  },
                  {
                    title: "Timeline",
                    description: "How much time I need",
                    icon: "⌚",
                    sectionId: "timeline",
                  },
                  {
                    title: "Contact",
                    description: "Let's create something together",
                    icon: "✉️",
                    sectionId: "contact",
                  },
                  {
                    title: "Explore More",
                    description: "Keep scrolling for more!",
                    icon: "→",
                    
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemAnimation}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => {
                      const element = document.getElementById(item.sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {/* Pre-rendered gradient background instead of dynamic blur */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5" />

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative p-6 border border-purple-500/10 bg-purple-900/10 hover:bg-purple-900/20 transition-all duration-300">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h3 className="font-lexend text-xl text-purple-200 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-purple-200/70 text-sm mb-8">
                        {item.description}
                      </p>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-purple-300/50 text-sm">
                          Scroll to view →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Scroll Indicator */}
        <motion.div
          className="fixed bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20"
          style={{ opacity: scrollIndicatorOpacity }}
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span className="font-lexend text-xs sm:text-sm tracking-wider text-purple-200/70">
            Scroll
          </span>
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-purple-200/70 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative h-screen flex items-center justify-center py-16 sm:py-24"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />

          <div className="container relative mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="relative h-[500px] w-full"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 -inset-x-12 -inset-y-12 rounded-[3rem]">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-fuchsia-500/30 to-purple-600/30 blur-[6rem] animate-glow-pulse" />
                </div>

                <div className="relative h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/artist/PFP.jpg"
                    alt="Ruth Saldanha"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="space-y-6 md:space-y-8"
              >
                <h2 className="font-limelight text-3xl md:text-4xl text-purple-200 tracking-wider">
                  Visual Artist
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="font-lexend font-light text-base md:text-lg lg:text-xl text-purple-200/90 leading-relaxed">
                    For me, painting is more than just creating art—it's a way
                    of connecting with emotions and stories that words can't
                    express.
                  </p>
                  <p className="font-lexend font-light text-base md:text-lg lg:text-xl text-purple-200/90 leading-relaxed">
                    Over the past years, this journey has been a mix of
                    exploration, growth, and discovery, shaping both my craft
                    and who I am as a person.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* My Canvas Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex items-center justify-center py-16 sm:py-24 px-6 sm:px-8 bg-black/10 mt-16 sm:mt-24"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="space-y-8"
              >
                <div className="space-y-3">
                  <h2 className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider">
                    MY CANVAS
                  </h2>
                  <h3 className="font-lexend text-xl md:text-2xl text-purple-300/90">
                    I specialize in acrylic on canvas and fabric
                  </h3>
                </div>

                <p className="font-lexend font-light text-lg text-purple-200/90 leading-relaxed">
                  While I've been trained in various mediums, I've discovered a
                  profound connection to traditional painting. There's something
                  powerful about how it conveys so much of the artist's essence
                  to the audience. Interestingly, I find this communication
                  flows even more naturally in abstract works with plaster of
                  paris (POP). I also enjoy painting on fabric pieces, as it
                  allows others to carry and showcase my art around the world,
                  adding a new dimension to its reach and impact.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="relative h-[600px] w-full"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 -inset-x-12 -inset-y-12 rounded-[3rem]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/10 to-pink-500/20 blur-[6rem] animate-glow-pulse" />
                </div>

                <div className="relative h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/artist/RuthLadder.jpg"
                    alt="Ruth Saldanha working on a canvas"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Artwork Sections */}
        {artworkSections.map((section, sectionIndex) =>
          section.title === "Mural Art" || section.title === "Graffiti Art" ? (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-8"
              id={(() => {
                switch (section.title) {
                  case "Mural Art":
                    return "mural-art";
                  case "Graffiti Art":
                    return "graffiti-art";

                  default:
                    return undefined;
                }
              })()}
            >
              <div className="container mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider">
                    {section.title}
                  </h2>
                  <h3 className="font-lexend text-xl md:text-2xl text-purple-300/90">
                    {section.description}
                  </h3>
                </div>

                {section.title === "Mural Art" ? (
                  // Mural Art Layout - Two images in grid
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {section.artworks.map((artwork, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative group"
                      >
                        {/* Glow effects */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500"></div>

                        {/* Image container */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                          <motion.img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                            whileHover={{ scale: 1.0 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Graffiti Art Layout - Single centered image
                  <div className="max-w-4xl mx-auto mb-8">
                    {section.artworks.map((artwork, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative group"
                      >
                        {/* Glow effects */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500"></div>

                        {/* Image container */}
                        <div className="relative aspect-video overflow-hidden rounded-2xl">
                          <motion.img
                            src={artwork.image}
                            alt={artwork.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                            whileHover={{ scale: 1.0 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-lexend text-center max-w-3xl mx-auto space-y-8"
                >
                  <p className="text-lg text-purple-200/90">
                    {section.artworks[0].description}
                  </p>

                  <div className="relative group">
                    {/* Glow effects */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-all duration-300"></div>

                    {/* Main content */}
                    <div className="relative bg-purple-900/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/15 shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                      <div className="grid grid-cols-3 gap-6">
                        {section.title === "Graffiti Art" ? (
                          <>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                                Style
                              </span>
                              <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                                Urban Art
                              </span>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                                Location
                              </span>
                              <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                                Street Art
                              </span>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                                Year
                              </span>
                              <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                                2023
                              </span>
                            </motion.div>
                          </>
                        ) : (
                          <>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                                Title
                              </span>
                              <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                                Rewired Reality
                              </span>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                                Style
                              </span>
                              <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                                Illusion
                              </span>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                                Year
                              </span>
                              <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
                                2023
                              </span>
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          ) : section.title === "Apparel Design" ? (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-8 relative"
              id={(() => {
                switch (section.title) {
                  case "Apparel Design":
                    return "apparel-design";

                  default:
                    return undefined;
                }
              })()}
            >
              <div className="container mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider">
                    {section.title}
                  </h2>
                  <h3 className="font-lexend text-xl md:text-2xl text-purple-300/90">
                    {section.description}
                  </h3>
                </div>

                {/* T-shirt Design Layout */}
                <div className="relative max-w-3xl mx-auto">
                  <div className="relative group">
                    {/* Simplified glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Main content container */}
                    <div className="relative bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10">
                      {/* Image container */}
                      <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-2xl">
                        <img
                          src={section.artworks[0].image}
                          alt={section.artworks[0].title}
                          className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Commission details */}
                      <div className="space-y-6 text-center">
                        <p className="text-lg text-purple-200/90 font-lexend">
                          {section.artworks[0].description}
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                          <div className="space-y-2 group">
                            <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                              Type
                            </span>
                            <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                              Commission
                            </span>
                          </div>
                          <div className="space-y-2 group">
                            <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                              Style
                            </span>
                            <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 whitespace-pre-line group-hover:scale-105 transition-transform duration-300">
                              Y2K STREETSTYLE
                            </span>
                          </div>
                          <div className="space-y-2 group">
                            <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                              Year
                            </span>
                            <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                              2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : section.title === "Clay Article" ? (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
              id={(() => {
                switch (section.title) {
                  case "Clay Article":
                    return "clay-art";

                  default:
                    return undefined;
                }
              })()}
            >
              {/* Simplified background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>

              <div className="container mx-auto max-w-6xl relative">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider">
                    {section.title}
                  </h2>
                  <h3 className="font-lexend text-xl md:text-2xl text-purple-300/90">
                    {section.description}
                  </h3>
                </div>

                {/* Clay Artwork Display */}
                <div className="relative max-w-3xl mx-auto">
                  <div className="relative group">
                    {/* Simplified glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Main content container */}
                    <div className="relative bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10">
                      {/* Image container */}
                      <div className="relative mb-8 overflow-hidden">
                        <div className="aspect-square relative z-10">
                          <img
                            src={section.artworks[0].image}
                            alt={section.artworks[0].title}
                            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-102 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Artwork details */}
                      <div className="space-y-6 text-center">
                        <p className="text-lg text-purple-200/90 font-lexend">
                          {section.artworks[0].description}
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                          <div className="space-y-2 group">
                            <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                              Concept
                            </span>
                            <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                              Starry Night
                            </span>
                          </div>
                          <div className="space-y-2 group">
                            <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                              Technique
                            </span>
                            <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                              Hand-Built
                            </span>
                          </div>
                          <div className="space-y-2 group">
                            <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                              Year
                            </span>
                            <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                              2023
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : section.title === "SFX Makeup" ? (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
              id={(() => {
                switch (section.title) {
                  case "SFX Makeup":
                    return "sfx-makeup";
                  default:
                    return undefined;
                }
              })()}
            >
              {/* Simplified background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>

              <div className="container mx-auto max-w-6xl relative">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider">
                    {section.title}
                  </h2>
                  <h3 className="font-lexend text-xl md:text-2xl text-purple-300/90">
                    {section.description}
                  </h3>
                </div>

                {/* Optimized Makeup Display Grid */}
                <div className="relative max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {section.artworks.map((artwork, index) => (
                      <div key={index} className="relative group">
                        {/* Simplified glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Image container */}
                        <div className="relative bg-purple-900/5 rounded-2xl p-6 border border-purple-500/10">
                          <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-xl">
                            <img
                              src={artwork.image}
                              alt={artwork.title}
                              className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>

                          {/* Image caption */}
                          <div className="text-center">
                            <h4 className="font-lexend text-lg text-purple-200/90 mb-2">
                              {artwork.title}
                            </h4>
                            <p className="text-sm text-purple-300/70">
                              {artwork.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Simplified specifications */}
                  <div className="relative mt-12">
                    <div className="relative bg-purple-900/5 rounded-2xl p-6 border border-purple-500/10">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2 group">
                          <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                            Category
                          </span>
                          <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                            Special Effects
                          </span>
                        </div>
                        <div className="space-y-2 group">
                          <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                            Medium
                          </span>
                          <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                            Makeup and Other Items
                          </span>
                        </div>
                        <div className="space-y-2 group">
                          <span className="block text-purple-300/60 text-sm uppercase tracking-wider">
                            Year
                          </span>
                          <span className="block text-purple-200 font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200 group-hover:scale-105 transition-transform duration-300">
                            Since 2019
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : section.title === "Commissions" ? (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center px-6 sm:px-8 py-16 sm:py-24 relative"
              id={(() => {
                switch (section.title) {
                  case "Commissions":
                    return "commissions";

                  default:
                    return undefined;
                }
              })()}
            >
              <div className="relative w-full max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
                >
                  {/* Left side - Image with overlapping title */}
                  <div className="relative w-full lg:w-2/5">
                    {/* Decorative elements */}
                    <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

                    {/* Title with gradient */}
                    <h2 className="text-5xl sm:text-6xl font-bold text-center lg:text-left mb-8 lg:mb-0 lg:absolute lg:-top-10 lg:left-4 z-10">
                      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                        {section.title}
                      </span>
                    </h2>

                    {/* Image container */}
                    <div className="relative mt-4 lg:mt-12 rounded-2xl overflow-hidden aspect-square lg:h-[500px] shadow-2xl shadow-purple-500/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <img
                        src={section.artworks[0].image}
                        alt={section.artworks[0].title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="w-full lg:w-3/5 space-y-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative space-y-6"
                    >
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-transparent rounded-lg blur-sm"></div>
                        <h3 className="relative font-lexend text-xl sm:text-2xl lg:text-3xl text-purple-200/90 leading-relaxed">
                          {section.description}
                        </h3>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-x-2 -inset-y-4 bg-gradient-to-r from-purple-900/30 to-transparent rounded-lg"></div>
                        <p className="relative text-base sm:text-lg text-purple-200/80 leading-relaxed px-4 py-2">
                          {section.quote}
                        </p>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
                    </motion.div>

                    {/* Additional content for mobile */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="lg:hidden relative mt-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative p-4 rounded-lg bg-purple-900/10 backdrop-blur-sm border border-purple-500/10">
                          <span className="block text-sm text-purple-300/60 uppercase tracking-wider mb-1">
                            Service
                          </span>
                          <span className="block text-base text-purple-200">
                            Custom Artwork
                          </span>
                        </div>
                        <div className="relative p-4 rounded-lg bg-purple-900/10 backdrop-blur-sm border border-purple-500/10">
                          <span className="block text-sm text-purple-300/60 uppercase tracking-wider mb-1">
                            Timeline
                          </span>
                          <span className="block text-base text-purple-200">
                            2-4 Weeks
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          ) : section.title === "Artistic Reflection" ? (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-8 relative"
              id={(() => {
                switch (section.title) {
                  case "Artistic Reflection":
                    return "artistic-reflection";

                  default:
                    return undefined;
                }
              })()}
            >
              <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <h2 className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider">
                        Artistic Reflection
                      </h2>
                      <div className="h-1 w-24 sm:w-20 md:w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                      <p className="font-lexend text-lg md:text-xl text-purple-200/90 leading-relaxed">
                        Every brushstroke tells a story, every color holds an
                        emotion. Through my art, I explore the depths of human
                        experience and transform them into visual narratives
                        that resonate with the soul.
                      </p>
                      <p className="font-lexend text-lg md:text-xl text-purple-200/90 leading-relaxed">
                        My journey as an artist has been a continuous evolution
                        of style and technique, always seeking new ways to
                        express the ineffable through the medium of paint and
                        canvas.
                      </p>
                      <div className="inline-block">
                        <span className="font-alexbrush text-2xl md:text-3xl text-purple-300/90 italic">
                          "Art is the journey of a free soul"
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image with floating animation */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{
                      opacity: { duration: 0.8 },
                      x: { duration: 0.8 },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      },
                    }}
                    viewport={{ once: true }}
                    className="relative h-[600px] w-full"
                    animate={{
                      y: [0, -20, 0],
                    }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 -inset-x-12 -inset-y-12 rounded-[3rem]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/10 to-pink-500/20 blur-[6rem] animate-glow-pulse" />
                    </div>

                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src="/images/paintings/RajDoshiSign.jpg"
                        alt="Artistic Reflection"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          ) : section.title === "Timeline" ? (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-8 relative"
              id={(() => {
                switch (section.title) {
                  case "Timeline":
                    return "timeline";

                  default:
                    return undefined;
                }
              })()}
            >
              <div className="relative w-full max-w-7xl mx-auto px-4 py-24">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

                  {/* Main content container */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Title with creative styling */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative mb-20"
                    >
                      <div className="relative flex items-center gap-6">
                        {/* Left decorative line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100px" }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-[2px] bg-gradient-to-r from-transparent to-purple-400"
                        />

                        {/* Title */}
                        <motion.h2
                          initial={{ y: 20 }}
                          whileInView={{ y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-7xl font-bold relative"
                        >
                          <span className="relative inline-block">
                            {/* Text with gradient effect */}
                            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                              {section.title}
                            </span>
                          </span>
                        </motion.h2>

                        {/* Right decorative line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100px" }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-[2px] bg-gradient-to-l from-transparent to-purple-400"
                        />
                      </div>

                      {/* Progress bar replacing subtitle */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 relative w-[300px] mx-auto"
                      >
                        <div className="h-[3px] bg-purple-900/30 rounded-full overflow-hidden">
                          <div
                            className="h-full w-[50%] bg-gradient-to-r from-transparent via-purple-400 to-transparent relative -translate-x-full"
                            style={{
                              animation:
                                "progressBar 1.5s ease-in-out infinite",
                            }}
                          ></div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Content layout */}
                    <div className="flex flex-col md:flex-row items-center gap-16 relative">
                      {/* Left side - Circular image */}
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-80 h-80"
                      >
                        {/* Rotating border effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 animate-[spin_8s_linear_infinite]"></div>
                        <div className="absolute inset-1 rounded-full bg-black"></div>
                        <div className="absolute inset-2 rounded-full overflow-hidden">
                          <img
                            src={section.artworks[0].image}
                            alt={section.artworks[0].title}
                            className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                          />
                        </div>
                      </motion.div>

                      {/* Right side - Text content with timeline dots */}
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-xl relative"
                      >
                        {/* Decorative timeline dots */}
                        <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400/50"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-400/50"></div>
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400/50"></div>
                        </div>

                        {/* Text content */}
                        <div className="space-y-6 pl-8">
                          <p className="font-lexend text-lg md:text-xl text-purple-200/90 leading-relaxed">
                            {section.quote}
                          </p>

                          <div className="space-y-4">
                            <div className="h-px w-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-transparent"></div>
                            <p className="font-alexbrush text-2xl text-purple-300/80 italic">
                              Quality is the art of being consistent
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key={sectionIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="min-h-screen py-20 px-8"
              id={(() => {
                switch (section.title) {
                  case "Artistic Reflection":
                    return "artistic-reflection";
                  case "Canvas Art":
                    return "canvas-art";
                  case "Clay Art":
                    return "clay-art";
                  case "SFX Makeup":
                    return "sfx-makeup";
                  case "Timeline":
                    return "timeline";
                  case "Contact":
                    return "contact";
                  default:
                    return undefined;
                }
              })()}
            >
              <div className="container mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="font-limelight text-4xl md:text-5xl text-purple-200 tracking-wider">
                    {section.title}
                  </h2>
                  <p className="text-xl text-purple-300/80">
                    {section.description}
                  </p>
                  <p className="font-alexbrush text-3xl md:text-4xl text-purple-200/90">
                    "{section.quote}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                  {section.artworks.map((artwork, index) => (
                    <motion.div
                      key={artwork.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="max-w-[300px] mx-auto w-full"
                    >
                      <ArtworkDisplay artwork={artwork} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )
        )}

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
          id="contact"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8 px-4 sm:px-6 md:px-0"
              >
                <div className="space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-limelight text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:text-transparent transition-all duration-500 ease-in-out"
                  >
                    Let's Create Together
                  </motion.h2>
                  <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <p className="font-lexend text-base sm:text-lg text-purple-200/90 leading-relaxed">
                    Whether you're interested in commissioning a unique piece or
                    exploring collaborative opportunities, I'd love to hear from
                    you.
                  </p>
                  <p className="font-alexbrush text-xl sm:text-2xl text-purple-300/80 italic">
                    Every masterpiece begins with a conversation
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  <div className="h-px w-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-transparent"></div>
                  <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                    {[
                      {
                        name: "Instagram",
                        icon: FaInstagram,
                        gradient: "from-purple-500 via-pink-500 to-orange-500",
                        url: "https://www.instagram.com/hues.by.ruth/",
                      },
                      {
                        name: "LinkedIn",
                        icon: FaLinkedinIn,
                        gradient: "from-blue-500 via-purple-500 to-pink-500",
                        url: "https://www.linkedin.com/in/ruth-saldanha-1a0b31184/",
                      },
                    ].map((platform) => (
                      <motion.a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="group flex items-center space-x-2 sm:space-x-3"
                      >
                        <div className="relative">
                          <div
                            className={`absolute inset-0 rounded-lg bg-gradient-to-tr ${platform.gradient} opacity-40 blur-[2px] group-hover:opacity-60 transition-opacity duration-300`}
                          ></div>
                          <div className="relative bg-black/40 backdrop-blur-sm p-2 sm:p-3 rounded-lg">
                            <platform.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                          </div>
                        </div>
                        <span className="text-xs sm:text-sm font-lexend text-purple-300/80 group-hover:text-purple-200 transition-colors duration-300 relative">
                          {platform.name}
                          <span
                            className={`absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r ${platform.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                          ></span>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="relative px-4 sm:px-6 md:px-0"
              >
                <div className="relative bg-purple-900/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-500/10">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 -inset-x-2 sm:-inset-x-4 -inset-y-2 sm:-inset-y-4 bg-gradient-to-tr from-purple-500/5 via-transparent to-pink-500/5 rounded-xl sm:rounded-2xl blur-lg"></div>

                  {/* Contact Options */}
                  <div className="relative space-y-4 sm:space-y-6">
                    <motion.a
                      href="mailto:ruthsaldanha07@gmail.com"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full px-6 sm:px-8 py-3 sm:py-4 text-center font-lexend text-base sm:text-lg text-purple-900 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg sm:rounded-xl hover:from-purple-300 hover:to-pink-300 transition-all duration-300 shadow-lg hover:shadow-xl animate-[glow_3s_ease-in-out_infinite]"
                    >
                      Email Me (ruthsaldanha07@gmail.com)
                    </motion.a>

                    <div className="text-center">
                      <span className="font-alexbrush text-lg sm:text-xl text-purple-300/60">
                        or
                      </span>
                    </div>

                    <motion.a
                      href="tel:+919322580591"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full px-6 sm:px-8 py-3 sm:py-4 text-center font-lexend text-base sm:text-lg text-purple-200 border-2 border-purple-500/20 rounded-lg sm:rounded-xl hover:bg-purple-500/10 transition-all duration-300 hover:border-purple-500/40"
                    >
                      Schedule a Call (+91 9322580591)
                    </motion.a>

                    <p className="text-center font-lexend text-xs sm:text-sm text-purple-300/60 mt-4">
                      Available Monday to Friday, 9am - 6pm IST
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
