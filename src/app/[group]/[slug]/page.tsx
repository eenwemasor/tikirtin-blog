import { notFound } from "next/navigation";
import { baseUrl } from "@/sitemap";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getArticles } from "@/utils/mdx";

export type Article = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
  content: string;
  slug: string;
};

export async function generateStaticParams() {
  const articles = getArticles();

  return articles.map((article) => ({
    group: "ticket-management", // You can adjust this based on your structure
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const article: Article | undefined = getArticles().find(
    (article) => article.slug === resolvedParams.slug,
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
      url: `${baseUrl}/${resolvedParams.group}/${article.slug}`,
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
  params: Promise<{ group: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const article: Article | undefined = getArticles().find(
    (article) => article.slug === resolvedParams.slug,
  );

  if (!article) {
    notFound();
  }

  return (
    <section className="max-w-2xl mx-auto">
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
            url: `${baseUrl}/${resolvedParams.group}/${article.slug}`,
            author: {
              "@type": "Organization",
              name: "Tikirtin Technology",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {article.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(article.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={article.content} />
      </article>
    </section>
  );
}
