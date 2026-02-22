"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ArticleCard from "./ArticleCard";

interface Article {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    group: string;
    audience: string;
    category?: string;
    readTime?: string;
  };
  slug: string;
}

interface FeaturedArticlesProps {
  articles: Article[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredArticles = articles.slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  if (featuredArticles.length === 0) {
    return null;
  }

  return (
    <section className="relative mx-4 mt-10 h-full duration-700 ease-out ">
      <div className="relative mx-auto h-full">
        <div className="grid grid-cols-12 gap-6 md:gap-12 h-full">
          <div className="order-2 col-span-12 md:col-span-7 lg:col-span-6 md:order-1">
            <div className="grid relative grid-cols-12 gap-6 md:gap-12 items-center h-full transition-transform duration-300 ease-in">
              <div className="overflow-hidden col-span-12">
                <div className="relative h-64 md:h-80">
                  {featuredArticles.map((article, index) => (
                    <div
                      key={article.slug}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <ArticleCard
                        slug={article.slug}
                        title={article.metadata.title}
                        summary={article.metadata.summary}
                        publishedAt={article.metadata.publishedAt}
                        category={article.metadata.category}
                        readTime={article.metadata.readTime}
                        image={article.metadata.image}
                        variant="featured"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="cursor-pointer flex justify-center items-center w-12 h-12 rounded bg-primary text-white hover:bg-primary/90 transition-colors"
                    aria-label="Previous article"
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none"
                      className="transform rotate-180"
                    >
                      <path 
                        d="M6 12l4-4-4-4" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="cursor-pointer flex justify-center items-center w-12 h-12 rounded bg-primary text-white hover:bg-primary/90 transition-colors"
                    aria-label="Next article"
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none"
                    >
                      <path 
                        d="M6 12l4-4-4-4" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 col-span-12 md:col-span-5 lg:col-span-6 md:order-2">
            <div className="grid grid-cols-12 gap-6 md:gap-12 relative h-full w-full">
              <div className="overflow-hidden relative col-span-12 h-full">
                <div className="relative h-64 md:h-80">
                  {featuredArticles.map((article, index) => (
                    <div
                      key={`image-${article.slug}`}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {article.metadata.image && (
                        <figure className="h-full relative overflow-hidden rounded-lg">
                          <Image
                            src={article.metadata.image}
                            alt={article.metadata.title}
                            fill
                            className="object-cover transition-transform duration-200"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                          />
                        </figure>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-0 left-0 mt-20 bottom-40 mx-auto w-full border-b border-stroke"></div>
    </section>
  );
};

export default FeaturedArticles;