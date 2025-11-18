import { SectionTitle } from '@/components/atoms/SectionTitle';
import { ContactForm } from '@/components/organisms/ContactForm';
import { ContactInfoSection } from '@/components/organisms/ContactInfo';

export function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Mantenha Contato"
            subtitle="Entre em contato conosco para informações sobre celebrações e pastorais"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfoSection />
          </div>
        </div>
      </div>
    </section>
  );
}
