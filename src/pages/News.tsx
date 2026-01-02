import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Facebook } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    date: "Dec 28, 2024",
    category: "Announcement",
    title: "Year-End Charity Drive Raises Over RM50,000",
    excerpt: "Our annual charity drive exceeded expectations, collecting over RM50,000 in donations that will support local families throughout 2025. We thank all donors and volunteers for their generous contributions.",
    featured: true,
  },
  {
    id: 2,
    date: "Dec 15, 2024",
    category: "Program Launch",
    title: "New Youth Leadership Program Launches in January",
    excerpt: "We're excited to announce our comprehensive leadership training program designed for young Malaysians aged 18-25. Applications are now open for the first cohort.",
    featured: true,
  },
  {
    id: 3,
    date: "Dec 1, 2024",
    category: "Events",
    title: "Environmental Workshop Series Kicks Off",
    excerpt: "Join us for a series of hands-on workshops focused on sustainable living, composting, and conservation practices. Perfect for families and individuals.",
    featured: false,
  },
  {
    id: 4,
    date: "Nov 20, 2024",
    category: "Community",
    title: "KePri Volunteers Complete Rural School Renovation",
    excerpt: "After three weeks of hard work, our volunteer team has successfully renovated a rural primary school in Serian, benefiting over 200 students.",
    featured: false,
  },
  {
    id: 5,
    date: "Nov 10, 2024",
    category: "Partnership",
    title: "New Partnership with Local Business Association",
    excerpt: "KePri has signed an MOU with the Kuching Business Association to create more internship and mentorship opportunities for young professionals.",
    featured: false,
  },
  {
    id: 6,
    date: "Oct 28, 2024",
    category: "Achievement",
    title: "KePri Recognized at State Youth Awards",
    excerpt: "We are honored to receive the Outstanding Youth Organization award at the Sarawak State Youth Awards ceremony for our community contributions.",
    featured: false,
  },
];


const News = () => {
  const featuredArticles = newsArticles.filter(a => a.featured);
  const regularArticles = newsArticles.filter(a => !a.featured);

  // Load Facebook SDK for Page Plugin
  useEffect(() => {
    // Load the SDK asynchronously
    const loadFacebookSDK = () => {
      if (document.getElementById("facebook-jssdk")) return;
      
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    };

    loadFacebookSDK();

    // Re-parse when component mounts (for navigation)
    const fbWindow = window as typeof window & { FB?: { XFBML: { parse: () => void } } };
    if (fbWindow.FB) {
      fbWindow.FB.XFBML.parse();
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="kepri-section bg-muted/50">
        <div className="kepri-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              News & Updates
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest from{" "}
              <span className="kepri-gradient-text">KePri</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with our latest activities, announcements, and community impact stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="kepri-section">
        <div className="kepri-container">
          <SectionHeader
            badge="Featured"
            title="Top Stories"
            centered={false}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="kepri-card p-8 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </motion.article>
            ))}
          </div>

          {/* All Articles */}
          <SectionHeader
            badge="All News"
            title="Recent Updates"
            centered={false}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="kepri-card p-6 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-muted-foreground text-xs">{article.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {article.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section className="kepri-section bg-muted/50">
        <div className="kepri-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl kepri-gradient-bg flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary font-medium">Facebook Feed</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Follow Us on Facebook
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Stay connected with our latest activities, events, and community stories 
                directly from our Facebook page. Like and follow us for real-time updates!
              </p>
              <Button
                asChild
                size="lg"
                className="kepri-gradient-bg border-0"
              >
                <a
                  href="https://www.facebook.com/people/Kelab-Belia-Prihatin-Bandar-Kuching/61562936403037/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Our Facebook Page
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="kepri-card p-4 overflow-hidden">
                <div 
                  id="fb-root"
                  className="fb-page" 
                  data-href="https://www.facebook.com/people/Kelab-Belia-Prihatin-Bandar-Kuching/61562936403037/"
                  data-tabs="timeline"
                  data-width="400"
                  data-height="500"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote 
                    cite="https://www.facebook.com/people/Kelab-Belia-Prihatin-Bandar-Kuching/61562936403037/" 
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/people/Kelab-Belia-Prihatin-Bandar-Kuching/61562936403037/">
                      Kelab Belia Prihatin Bandar Kuching
                    </a>
                  </blockquote>
                </div>
                <p className="text-muted-foreground text-sm mt-4 text-center">
                  If the feed doesn't load, please visit our Facebook page directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="kepri-section bg-foreground">
        <div className="kepri-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-6">
              Stay Connected
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Follow us on social media for the latest updates, event announcements, 
              and behind-the-scenes content from our community activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="kepri-gradient-bg border-0"
              >
                <a
                  href="https://www.facebook.com/people/Kelab-Belia-Prihatin-Bandar-Kuching/61562936403037/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Facebook
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-background/30 text-background hover:bg-background/10"
              >
                <a
                  href="https://www.instagram.com/kepri.bandarkuching/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
