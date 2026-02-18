"use client";

import { useState } from "react";
import Link from "next/link";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  group: string;
  audience: string;
};

type Article = {
  metadata: Metadata;
  content: string;
  slug: string;
};

interface ArticleAsideProps {
  currentGroup: string;
  currentSlug: string;
  articles: Article[];
}

export function ArticleAside({
  currentGroup,
  currentSlug,
  articles,
}: ArticleAsideProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter articles by the current group
  const groupArticles = articles.filter(
    (article) => article.metadata.group === currentGroup,
  );

  // Sort articles alphabetically by title
  const sortedArticles = groupArticles.sort((a, b) =>
    a.metadata.title.localeCompare(b.metadata.title),
  );

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className="w-full lg:w-100 lg:shrink-0 order-first lg:order-last">
      <div className="my-5 border-t border-b lg:border lg:rounded-md lg:py-4 lg:px-6 lg:my-0 border-primary/30">
        <button
          type="button"
          className="cursor-pointer lg:cursor-default my-4 flex items-center justify-between font-medium text-lg w-full text-left bg-transparent border-none p-0"
          onClick={toggleExpansion}
          aria-controls="articles-in-section"
          aria-expanded={isExpanded}
        >
          <span>Articles in this section</span>
          <span className="lg:hidden">{isExpanded ? "−" : "+"}</span>
        </button>

        <div
          className={`${isExpanded ? "block" : "hidden"} lg:block`}
          id="articles-in-section"
        >
          <ul className="list-none">
            {sortedArticles.map((article) => {
              const isCurrentArticle = article.slug === currentSlug;

              return (
                <li key={article.slug}>
                  <Link
                    href={`/${currentGroup}/${article.slug}`}
                    className={`flex py-2 items-baseline text-base hover:no-underline ${
                      isCurrentArticle
                        ? "text-primary/60 font-medium"
                        : "text-gray-800 hover:text-primary/60"
                    }`}
                  >
                    <div className="flex items-baseline flex-1">
                      <svg
                        className="text-gray-600 fill-current mr-2 shrink-0"
                        width="12px"
                        height="12px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z" />
                      </svg>
                      {article.metadata.title}
                    </div>
                    {isCurrentArticle && (
                      <div className="w-[5%]">
                        <svg
                          className="ml-2 text-primary/60 fill-current"
                          width="12"
                          height="12"
                          viewBox="0 0 426 405"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Current article</title>
                          <polygon points="213 325 81 405 116 255 0 154 153 141 213 0 273 141 426 154 310 255 345 405" />
                        </svg>
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {sortedArticles.length === 0 && (
            <p className="text-gray-600 text-sm py-2">
              No articles found in this section.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
