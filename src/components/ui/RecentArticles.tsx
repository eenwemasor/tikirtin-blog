import React from "react";
import ArticleCard from "./ArticleCard";
import Button from "./Button";

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

interface RecentArticlesProps {
  articles: Article[];
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  const recentArticles = articles.slice(0, 10);
  const featuredRecent = recentArticles.slice(0, 2);
  const compactRecent = recentArticles.slice(2);

  return (
    <section className="px-4 md:px-0 pt-20 pb-16 mx-auto lg:pb-24">
      <div className="mx-auto">
        <div className="flex relative flex-col lg:flex-row">
          {/* Mobile Title */}
          <div className="px-4 text-center lg:hidden md:px-0 mb-8">
            <h2 className="mb-6 lg:mb-8 text-2xl md:text-4xl font-bold text-primary">
              Our most recent articles
            </h2>
            <div className="text-base md:text-lg mb-4 md:mb-6 text-normal">
              <p>
                Heres our latest selection of articles on running your events
                effectively with minimal fuss.
              </p>
            </div>
            <p className="pb-8 md:pb-10 text-sm text-normal">
              Last update:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="sticky top-20 lg:top-25 z-10 w-full md:self-start bg-white lg:w-auto">
            <div className="grid gap-x-6 md:gap-x-12 md:grid-cols-12 lg:grid-cols-8 lg:mr-6">
              {/* Desktop Title */}
              <div className="hidden col-span-12 text-center duration-500 ease-out lg:col-span-4 lg:text-left lg:px-0 lg:block opacity-100 translate-y-0">
                <h2 className="mb-6 lg:mb-8 text-2xl md:text-4xl font-bold text-primary">
                  Our most recent articles
                </h2>
                <div className="text-base md:text-lg mb-4 md:mb-6 text-normal">
                  <p>
                    {`Here's our latest selection of articles on running your
                    events effectively with minimal fuss.`}
                  </p>
                </div>
                <p className="pb-8 md:pb-10 text-sm text-normal">
                  Last update:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Featured Articles with Images */}
              <div className="col-span-12 duration-500 ease-out delay-150 lg:col-span-4 opacity-100 translate-y-0">
                {/* Mobile Carousel */}
                <div className="grid md:hidden">
                  <div className="relative space-y-6">
                    {featuredRecent.map((article) => (
                      <div key={article.slug} className="w-full">
                        <ArticleCard
                          slug={article.slug}
                          title={article.metadata.title}
                          summary={article.metadata.summary}
                          publishedAt={article.metadata.publishedAt}
                          category={article.metadata.category}
                          readTime={article.metadata.readTime}
                          image={article.metadata.image}
                          variant="default"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:flex flex-row gap-6 mb-10 md:col-span-6 lg:col-span-4 lg:flex-col lg:gap-12 lg:px-0">
                  {featuredRecent.map((article) => (
                    <div key={article.slug} className="w-full">
                      <ArticleCard
                        slug={article.slug}
                        title={article.metadata.title}
                        summary={article.metadata.summary}
                        publishedAt={article.metadata.publishedAt}
                        category={article.metadata.category}
                        readTime={article.metadata.readTime}
                        image={article.metadata.image}
                        variant="default"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compact Article List */}
          <div className="grid col-start-8 gap-x-6 md:gap-x-12 px-4 w-full md:grid-cols-4 md:px-0 lg:w-3/5">
            <div className="flex-wrap col-span-12 lg:col-span-4 lg:px-0">
              {compactRecent.map((article, index) => (
                <div
                  key={article.slug + index}
                  className="list-none duration-700 ease-in-out opacity-100 translate-y-0"
                >
                  <div className="border-bottom-animation">
                    <ArticleCard
                      slug={article.slug}
                      title={article.metadata.title}
                      summary={article.metadata.summary}
                      publishedAt={article.metadata.publishedAt}
                      category={article.metadata.category}
                      readTime={article.metadata.readTime}
                      variant="compact"
                    />
                  </div>
                </div>
              ))}

              {/* View More Button */}
              <div className="pt-6">
                <Button
                  intent="link"
                  className="text-primary hover:text-primary/80"
                >
                  <span>View more</span>
                  <div className="ml-2">
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
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
