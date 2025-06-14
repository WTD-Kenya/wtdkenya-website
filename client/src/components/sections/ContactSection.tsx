import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { ContactFormData } from "@/lib/types";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-xl text-gray-300">
              Have questions, suggestions, or want to get more involved? We'd love to hear from you.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <i className="fas fa-envelope text-kenya-red text-xl mr-4"></i>
                <span className="text-gray-300">wtdkenya@gmail.com</span>
              </div>
              
              <div className="flex space-x-6">
                {/* <a href="https://twitter.com/writethedocs_ke" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-x-twitter text-2xl"></i>
                </a>
                <a href="https://linkedin.com/company/write-the-docs-kenya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://instagram.com/writethedocs_ke" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://meetup.com/write-the-docs-kenya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-meetup text-2xl"></i>
                </a> */}
                  <a href="https://www.linkedin.com/company/write-the-docs-kenya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                {/* <a href="https://instagram.com/writethedocs_ke" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a> */}
                <a href="https://www.meetup.com/wtd-kenya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-meetup text-xl"></i>
                </a>
                <a href="https://x.com/WTD_Kenya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-6 h-6 text-xl">
                    <path d="M1200 24.6L726.6 624.2L1193.2 1202.4H1042.6L677.2 759.6L349.4 1202.4H0L495.2 563.2L56.8 24.6H211.6L544.2 432.2L849.8 24.6H1200ZM978.6 1144.8L406.2 432.2L154.2 1144.8H309.2L626.6 721.6L978.6 1144.8ZM221.8 123.2L857.2 1144.8H1045.8L409.8 123.2H221.8Z"/>
                  </svg>
                </a>
                <a href="https://github.com/WTD-Kenya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-kenya-red text-white hover:bg-kenya-red/90"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
