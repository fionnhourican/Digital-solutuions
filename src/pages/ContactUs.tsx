import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary min-h-[60vh] flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-2 border-white/10" />
          <div className="absolute top-20 -left-20 w-72 h-72 rounded-full border-2 border-white/10" />
          <div className="absolute -top-16 right-1/4 w-80 h-80 rounded-full border-2 border-white/10" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-2xl text-primary-foreground/90 leading-relaxed">
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Left - Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Details</h2>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@tbd-ltd.com" className="text-muted-foreground hover:text-primary">
                    info@tbd-ltd.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+442890681531" className="text-muted-foreground hover:text-primary">
                    +44 (0)28 9068 1531
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Socials</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
                    <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
                    <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                    <a href="#" className="text-muted-foreground hover:text-primary">YouTube</a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden h-[500px] bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.4!2d-5.93!3d54.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDM1JzI0LjAiTiA1wrA1NSc0OC4wIlc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-background rounded-xl p-6 shadow-lg max-w-xs">
                  <h4 className="font-semibold text-foreground mb-2">Belfast</h4>
                  <p className="text-sm text-muted-foreground">
                    1st Floor, 20 Adelaide Street,<br />
                    Belfast, BT2 8GD
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Talk to our team</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input id="lastName" placeholder="Smith" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="creditUnion">Credit Union</Label>
                  <Input id="creditUnion" placeholder="Credit Union Name" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="jobRole">Job role*</Label>
                  <Input id="jobRole" placeholder="Credit Union Job Role" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" type="email" placeholder="johnsmith@example.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more..." className="mt-2 min-h-[120px]" />
                </div>

                <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                  Send Message
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Subscribe to receive our email communications
                </h3>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Email" />
                  <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactUs;
