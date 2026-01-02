import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Leaf, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import heroImage from "@/assets/hero-volunteers.jpg";
import programEducation from "@/assets/program-education.jpg";
import programOutreach from "@/assets/program-outreach.jpg";
import programEnvironment from "@/assets/program-environment.jpg";

const stats = [
  { label: "Active Volunteers", value: "200+" },
  { label: "Community Programs", value: "15" },
  { label: "Lives Impacted", value: "5,000+" },
  { label: "Years Active", value: "3" },
];

const programs = [
  {
    icon: BookOpen,
    title: "Education Support",
    description: "Providing tutoring and educational resources to underprivileged youth in Kuching.",
    image: programEducation,
  },
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Distributing essential supplies and support to families in need across Sarawak.",
    image: programOutreach,
  },
  {
    icon: Leaf,
    title: "Environmental Care",
    description: "Tree planting and environmental conservation initiatives for a greener future.",
    image: programEnvironment,
  },
];

const updates = [
  {
    date: "Dec 28, 2024",
    title: "Year-End Charity Drive Success",
    excerpt: "Our annual charity drive collected over RM50,000 in donations for local families.",
  },
  {
    date: "Dec 15, 2024",
    title: "New Youth Leadership Program Launch",
    excerpt: "Introducing our comprehensive leadership training program for young Malaysians.",
  },
  {
    date: "Dec 1, 2024",
    title: "Environmental Workshop Series",
    excerpt: "Join us for hands-on workshops on sustainable living and conservation.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="KePri volunteers working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="kepri-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Kelab Belia Prihatin Bandar Kuching
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Empowering Youth,{" "}
              <span className="kepri-gradient-text">Transforming Communities</span>
            </h1>
            <p className="text-background/80 text-lg md:text-xl mb-8 leading-relaxed">
              We are a youth-driven NGO dedicated to creating positive change through education, 
              community outreach, and environmental initiatives in Sarawak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="kepri-gradient-bg border-0 text-lg px-8">
                <Link to="/contact">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-background/30 text-background hover:bg-background/10 text-lg px-8"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="kepri-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold kepri-gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="kepri-section">
        <div className="kepri-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a Brighter Future for Sarawak's Youth
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                KePri is committed to nurturing the potential of young Malaysians through 
                meaningful community engagement, skill development, and social responsibility 
                programs.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Empower youth through education and mentorship",
                  "Foster community spirit and volunteerism",
                  "Promote environmental sustainability",
                  "Support underprivileged families in our community",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full kepri-gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="kepri-gradient-bg border-0">
                <Link to="/about">
                  About Our Organization
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-kepri-lg">
                <img
                  src={programOutreach}
                  alt="Community outreach"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full kepri-gradient-bg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-background font-heading font-semibold">Join 200+ Volunteers</p>
                      <p className="text-background/70 text-sm">Making a difference together</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl kepri-gradient-bg opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full kepri-gradient-bg opacity-10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="kepri-section bg-muted/50">
        <div className="kepri-container">
          <SectionHeader
            badge="Our Programs"
            title="Creating Impact Through Action"
            description="Discover our key initiatives that drive positive change in Sarawak communities."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="kepri-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl kepri-gradient-bg flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">
                View All Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="kepri-section">
        <div className="kepri-container">
          <SectionHeader
            badge="Latest Updates"
            title="News & Announcements"
            description="Stay informed about our latest activities and community impact."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <motion.article
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="kepri-card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{update.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {update.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{update.excerpt}</p>
                <Link
                  to="/news"
                  className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/news">
                View All News
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="kepri-section bg-foreground">
        <div className="kepri-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Join our community of passionate volunteers and help us create positive change 
              in Sarawak. Together, we can build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="kepri-gradient-bg border-0 text-lg px-8">
                <Link to="/contact">
                  Become a Volunteer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-background/30 text-background hover:bg-background/10 text-lg px-8"
              >
                <Link to="/events">Upcoming Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
