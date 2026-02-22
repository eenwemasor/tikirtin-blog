import React from "react";
import FeaturedArticles from "@/components/ui/FeaturedArticles";
import RecentArticles from "@/components/ui/RecentArticles";
import { getArticles } from "@/utils/mdx";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  const articles = getArticles().sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto">
        {/* Featured Articles Hero Section */}
        <FeaturedArticles articles={articles} />

        {/* Recent Articles Section */}
        <RecentArticles articles={articles} />

        {/* Contact CTA Section */}
        <ContactSection />
      </div>
    </div>
  );
}
