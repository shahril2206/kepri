import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import programLeadership from "@/assets/program-leadership.jpg";
import programOutreach from "@/assets/program-outreach.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every initiative with genuine care for our community members.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Together, we achieve more. Collaboration is at the heart of everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in all our programs and activities.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We embrace creative solutions to address community challenges effectively.",
  },
];

const milestones = [
  { year: "2021", title: "KePri Founded", description: "Established by a group of passionate youth leaders in Kuching." },
  { year: "2022", title: "First Major Program", description: "Launched our education support initiative reaching 500 students." },
  { year: "2023", title: "Community Expansion", description: "Extended our reach to rural communities across Sarawak." },
  { year: "2024", title: "200+ Volunteers", description: "Grew our volunteer network to over 200 active members." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="kepri-section bg-muted/50">
        <div className="kepri-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Kelab Belia Prihatin{" "}
                <span className="kepri-gradient-text">Bandar Kuching</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                KePri is a youth-driven non-governmental organization based in Kuching, Sarawak. 
                Founded in 2021, we are dedicated to empowering young Malaysians through meaningful 
                community engagement, education support, and environmental initiatives.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our name "Kelab Belia Prihatin" translates to "Caring Youth Club," reflecting our 
                core commitment to nurturing compassion and social responsibility among young people 
                in our community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-kepri-lg">
                <img
                  src={programLeadership}
                  alt="KePri team discussion"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl kepri-gradient-bg opacity-20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="kepri-section">
        <div className="kepri-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="kepri-card p-8"
            >
              <div className="w-14 h-14 rounded-xl kepri-gradient-bg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower youth in Sarawak by providing opportunities for personal growth, 
                leadership development, and community service. We aim to nurture a generation 
                of socially responsible citizens who actively contribute to the betterment of 
                their communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="kepri-card p-8"
            >
              <div className="w-14 h-14 rounded-xl kepri-gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading youth organization in Sarawak, recognized for our impactful 
                community programs, innovative approach to youth development, and our 
                contribution to creating a more caring and inclusive society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="kepri-section bg-muted/50">
        <div className="kepri-container">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every action we take."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="kepri-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl kepri-gradient-bg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="kepri-section">
        <div className="kepri-container">
          <SectionHeader
            badge="Our Journey"
            title="Milestones & Achievements"
            description="A look back at our growth and the impact we've made along the way."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative pl-12 md:pl-0 pb-12 last:pb-0 ${
                    index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-1/2 top-0 w-5 h-5 rounded-full kepri-gradient-bg border-4 border-background md:-translate-x-1/2`}
                  />
                  
                  <div className={`${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="kepri-section bg-muted/50">
        <div className="kepri-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-kepri-lg">
                <img
                  src={programOutreach}
                  alt="KePri volunteers in action"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Community of Changemakers
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our volunteers come from diverse backgrounds but share a common passion: 
                making a positive difference in our community. From students to working 
                professionals, everyone brings unique skills and perspectives to our mission.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that every young person has the potential to be a leader. That's why 
                we focus on creating opportunities for personal growth, skill development, and 
                meaningful community engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
