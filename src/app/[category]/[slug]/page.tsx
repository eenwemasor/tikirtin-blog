import { notFound } from "next/navigation";
import { baseUrl } from "@/sitemap";
import { CustomMDX } from "@/components/mdx";
import { Article, formatDate, getArticles } from "@/utils/mdx";
import { ArticleAside } from "@/components/ui/ArticleAside";

export async function generateStaticParams() {
  const articles = getArticles();

  return articles.map((article) => ({
    category: article.metadata.category?.toLowerCase().replace(/\s+/g, '-'),
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const articles = getArticles();
  const article: Article | undefined = articles.find(
    (article) => 
      article.slug === resolvedParams.slug &&
      article.metadata.category?.toLowerCase().replace(/\s+/g, '-') === resolvedParams.category
  );

  if (!article) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = article.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/${resolvedParams.category}/${article.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const articles = getArticles();
  const article: Article | undefined = articles.find(
    (article) => 
      article.slug === resolvedParams.slug &&
      article.metadata.category?.toLowerCase().replace(/\s+/g, '-') === resolvedParams.category
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full mb-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="flex-1 mr-30" itemScope itemType="http://schema.org/Article">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HelpArticle",
              headline: article.metadata.title,
              datePublished: article.metadata.publishedAt,
              dateModified: article.metadata.publishedAt,
              description: article.metadata.summary,
              image: article.metadata.image
                ? `${baseUrl}${article.metadata.image}`
                : `/og?title=${encodeURIComponent(article.metadata.title)}`,
              url: `${baseUrl}/${resolvedParams.category}/${article.slug}`,
              author: {
                "@type": "Organization",
                name: "Tikirtin Technology",
              },
            }),
          }}
        />
        
        <header className="pb-5 md:pt-5">
          <h1 className="title font-semibold text-2xl tracking-tighter md:text-4xl" itemProp="name">
            {article.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-8 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(article.metadata.publishedAt)}
            </p>
          </div>
        </header>
        
        <section className="content prose" itemProp="articleBody">
          <CustomMDX source={article.content} />
        </section>
        </article>

        <ArticleAside 
          currentCategory={article.metadata.category}
          currentSlug={article.slug}
          articles={articles}
        />
      </div>
    </div>
  );
}
