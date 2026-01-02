import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Leaf, Users, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import programEducation from "@/assets/program-education.jpg";
import programOutreach from "@/assets/program-outreach.jpg";
import programEnvironment from "@/assets/program-environment.jpg";
import programLeadership from "@/assets/program-leadership.jpg";

const programs = [
  {
    id: "education",
    icon: BookOpen,
    title: "Education Support",
    tagline: "Empowering through knowledge",
    description: "Our education support program provides tutoring, mentoring, and educational resources to underprivileged students across Kuching. We believe every child deserves access to quality education.",
    image: programEducation,
    features: [
      "Free tutoring sessions for primary and secondary students",
      "Book donation drives for rural schools",
      "Scholarship application assistance",
      "Digital literacy workshops",
    ],
    impact: "500+ students supported",
  },
  {
    id: "outreach",
    icon: Heart,
    title: "Community Outreach",
    tagline: "Caring for those in need",
    description: "Through our community outreach initiatives, we provide essential supplies, food aid, and support services to families facing hardship in Sarawak.",
    image: programOutreach,
    features: [
      "Monthly food distribution programs",
      "Emergency aid for disaster-affected families",
      "Health and wellness awareness campaigns",
      "Senior citizen support visits",
    ],
    impact: "2,000+ families reached",
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environmental Care",
    tagline: "Protecting our planet",
    description: "Our environmental initiatives focus on conservation, sustainability education, and hands-on activities to protect Sarawak's natural heritage for future generations.",
    image: programEnvironment,
    features: [
      "Tree planting campaigns",
      "Beach and river cleanup drives",
      "Environmental education workshops",
      "Recycling awareness programs",
    ],
    impact: "1,000+ trees planted",
  },
  {
    id: "leadership",
    icon: Users,
    title: "Youth Development",
    tagline: "Building tomorrow's leaders",
    description: "We nurture leadership skills and personal development among young Malaysians through workshops, training programs, and mentorship opportunities.",
    image: programLeadership,
    features: [
      "Leadership training workshops",
      "Public speaking and communication skills",
      "Project management training",
      "Networking and career guidance",
    ],
    impact: "150+ youth trained",
  },
];

const Programs = () => {
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
              Our Programs
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creating Impact Through{" "}
              <span className="kepri-gradient-text">Meaningful Action</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover our key initiatives that drive positive change across Sarawak communities. 
              Each program is designed to address specific needs while empowering youth to be 
              agents of change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="kepri-section">
        <div className="kepri-container">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl kepri-gradient-bg flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-primary font-medium">{program.tagline}</span>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {program.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-6">
                    <div className="px-4 py-2 rounded-lg bg-secondary">
                      <span className="text-secondary-foreground font-semibold">{program.impact}</span>
                    </div>
                    <Button asChild className="kepri-gradient-bg border-0">
                      <Link to="/contact">
                        Get Involved
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-kepri-lg">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl kepri-gradient-bg opacity-20 blur-2xl" />
                </div>
              </motion.div>
            ))}
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-6">
              Want to Start Your Own Initiative?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              We're always open to new ideas and collaborations. If you have a program idea 
              or want to partner with us, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="kepri-gradient-bg border-0 text-lg px-8">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
