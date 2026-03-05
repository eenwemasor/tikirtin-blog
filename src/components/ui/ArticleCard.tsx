import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/date";

interface ArticleCardProps {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  category?: string;
  readTime?: string;
  image?: string;
  variant?: "default" | "featured" | "compact";
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  slug,
  title,
  summary,
  publishedAt,
  category,
  readTime,
  image,
  variant = "default",
}) => {
  if (variant === "compact") {
    return (
      <article className="border-b border-stroke last:border-b-0 hover:border-b-2">
        <Link
          href={`/${category}/${slug}`}
          className="block py-6 transition-colors"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-light md:font-normal text-gray uppercase">
              {category || "ARTICLE"}
            </span>
            <span className="text-xs text-normal">{readTime || "5 mins"}</span>
          </div>
          <h3 className="mb-2 text-lg md:text-xl leading-6 md:leading-7 font-medium text-black hover:text-primary transition-colors max-w-[70%]">
            {title}
          </h3>
          <div className="flex items-center text-xs text-normal mt-2">
            <span>{formatDate(publishedAt)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="fill-current mx-2"
            >
              <rect x="5.5" y="5.5" width="5" height="5" fill="#1D1D1B"></rect>
            </svg>
            <span>By The Tikirtin Team</span>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <div className="flex relative flex-col gap-y-4 justify-center">
        <p className="flex gap-1 items-center px-2 py-1 bg-background w-fit rounded text-xs">
          <span>
            {category
              ?.replaceAll("-", " ")
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ") || "ARTICLE"}
          </span>
          <span>|</span>
          <span>{readTime || "5 mins"}</span>
        </p>
        <h2 className="text-xl md:text-2xl font-medium leading-7 md:leading-8 text-black">
          {title}
        </h2>
        <p className="text-base md:text-lg leading-6 md:leading-7 text-normal">
          {summary}
        </p>
        <Link
          href={`/${category}/${slug}`}
          className="flex justify-start items-center text-primary hover:text-primary/80 transition-colors"
        >
          <div className="inline-flex items-center text-base md:text-lg font-normal mb-10">
            <span>Read article</span>
            <div className="ml-2 transform rotate-135">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="transition-transform hover:translate-x-1"
              >
                <path
                  d="M15.8,9H2.2 M8.2,2.2L2.2,9l5.9,6.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <article>
      <Link
        href={`/${category}/${slug}`}
        className="block transition-transform hover:scale-105"
      >
        {image && (
          <figure className="relative overflow-hidden mb-6 aspect-312/188 lg:aspect-384/232 rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-200 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
        )}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-light md:font-normal text-gray uppercase">
            {category || "ARTICLE"}
          </span>
          <span className="text-xs text-normal">{readTime || "5 mins"}</span>
        </div>
        <h3 className="mb-2 text-lg md:text-xl leading-6 md:leading-7 font-medium text-black hover:text-primary transition-colors">
          {title}
        </h3>
      </Link>
      <div className="flex items-center text-xs text-normal mt-2">
        <span>{formatDate(publishedAt)}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="fill-current mx-2"
        >
          <rect x="5.5" y="5.5" width="5" height="5" fill="#1D1D1B"></rect>
        </svg>
        <span>By The Tikirtin Team</span>
      </div>
    </article>
  );
};

export default ArticleCard;
