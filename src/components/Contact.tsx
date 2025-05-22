
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const contactInfo = {
    email: 'example@email.com',
    phone: '+1 (123) 456-7890',
    location: 'San Francisco, CA',
    socials: [
      { name: 'Github', icon: Github, url: 'https://github.com/username' },
      { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/username' },
    ]
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: `Thank you ${formData.name}, I'll get back to you soon!`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-section">
        <h2 className="section-title">{t('contact.title')}</h2>
        
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>{t('contact.title')}</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.name')}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground">{contactInfo.location}</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-4">Social Media</h3>
              <div className="flex space-x-4">
                {contactInfo.socials.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
