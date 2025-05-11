
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Interested in working together? Have a question about my process or experience?
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 lg:gap-16">
          <div className="md:col-span-2 animate-slide-up">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="mt-1 h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">teddy.fischer@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mt-1 h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3">Connect</h4>
              <div className="flex space-x-4">
                {['linkedin', 'twitter', 'github'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-slide-up [animation-delay:0.2s]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input resize-none"
                  placeholder="Tell me about your project, question, or opportunity..."
                />
              </div>
              
              <div className="pt-2">
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
