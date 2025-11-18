import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { ContactInfo as ContactInfoItem } from '@/components/molecules/ContactInfo';
import { SocialLink } from '@/components/molecules/SocialLink';
import { SITE_CONFIG } from '@/lib/constants/theme';

export function ContactInfoSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-serif font-semibold text-[#2F4F4F] mb-4">
          Informações de Contato
        </h3>
        <div className="space-y-4">
          <ContactInfoItem icon={MapPin} text={SITE_CONFIG.contact.address} />
          <ContactInfoItem icon={Phone} text={SITE_CONFIG.contact.phone} />
          <ContactInfoItem icon={Mail} text={SITE_CONFIG.contact.email} />
          <ContactInfoItem icon={Clock} text={SITE_CONFIG.contact.schedule} />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-serif font-semibold text-[#2F4F4F] mb-4">
          Redes Sociais
        </h3>
        <div className="flex space-x-4">
          <SocialLink icon={Facebook} href={SITE_CONFIG.social.facebook} />
          <SocialLink icon={Instagram} href={SITE_CONFIG.social.instagram} />
          <SocialLink icon={MessageCircle} href={SITE_CONFIG.social.whatsapp} />
        </div>
      </div>
    </div>
  );
}
