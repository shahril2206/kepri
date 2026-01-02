import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "Youth Leadership Workshop 2025",
    date: "January 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Kuching Convention Centre",
    description: "A full-day intensive workshop covering leadership fundamentals, communication skills, and project management for aspiring young leaders.",
    spots: "30 spots remaining",
    type: "Workshop",
  },
  {
    id: 2,
    title: "Community Tree Planting Day",
    date: "January 22, 2025",
    time: "7:00 AM - 12:00 PM",
    location: "Santubong Nature Reserve",
    description: "Join us for a morning of environmental action! We'll be planting 200 trees to support reforestation efforts in Sarawak.",
    spots: "50 spots remaining",
    type: "Volunteer",
  },
  {
    id: 3,
    title: "Charity Run for Education",
    date: "February 5, 2025",
    time: "6:30 AM - 10:00 AM",
    location: "Kuching Waterfront",
    description: "Run, walk, or jog for a cause! All proceeds go towards providing educational supplies for underprivileged students.",
    spots: "200 spots remaining",
    type: "Fundraiser",
  },
  {
    id: 4,
    title: "Digital Literacy Workshop",
    date: "February 12, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "KePri Community Hub",
    description: "Free workshop teaching essential digital skills including online safety, productivity tools, and basic coding.",
    spots: "25 spots remaining",
    type: "Workshop",
  },
];

const pastEvents = [
  {
    id: 101,
    title: "Year-End Charity Gala 2024",
    date: "December 20, 2024",
    location: "Hilton Kuching",
    attendees: 150,
  },
  {
    id: 102,
    title: "School Renovation Project",
    date: "November 15-30, 2024",
    location: "SK Tapah, Serian",
    attendees: 45,
  },
  {
    id: 103,
    title: "Youth Entrepreneurship Summit",
    date: "October 28, 2024",
    location: "Borneo Convention Centre",
    attendees: 200,
  },
];

const Events = () => {
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
              Events
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our{" "}
              <span className="kepri-gradient-text">Community Events</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Participate in workshops, volunteer activities, and community gatherings 
              that make a difference in Sarawak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="kepri-section">
        <div className="kepri-container">
          <SectionHeader
            badge="Upcoming"
            title="Join Us"
            description="Don't miss out on these exciting opportunities to get involved."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="kepri-card overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {event.type}
                    </span>
                    <span className="text-muted-foreground text-sm">{event.spots}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{event.location}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full kepri-gradient-bg border-0">
                    <Link to="/contact">
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="kepri-section bg-muted/50">
        <div className="kepri-container">
          <SectionHeader
            badge="Past Events"
            title="What We've Done"
            description="A look back at some of our successful community events."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="kepri-card p-6"
              >
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">{event.attendees} attendees</span>
                  </div>
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
              Want to Organize an Event with Us?
            </h2>
            <p className="text-background/70 text-lg mb-8">
              We're always looking for partners to collaborate on community events. 
              Whether you're a business, school, or organization, let's create impact together.
            </p>
            <Button asChild size="lg" className="kepri-gradient-bg border-0 text-lg px-8">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
