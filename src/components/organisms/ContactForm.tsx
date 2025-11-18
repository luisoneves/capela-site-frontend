'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-serif font-semibold text-[#2F4F4F] mb-6">
        Envie sua Mensagem
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Seu Nome</Label>
          <Input id="name" type="text" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="subject">Assunto</Label>
          <Select required>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Selecione um assunto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="celebracoes">Informações sobre Celebrações</SelectItem>
              <SelectItem value="pastorais">Participar das Pastorais</SelectItem>
              <SelectItem value="sacramento">Agendar Sacramento</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message">Mensagem</Label>
          <Textarea id="message" rows={4} required className="mt-2" />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8B4513] text-white hover:bg-[#6B3410] font-semibold"
        >
          <Send className="mr-2" size={18} />
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </div>
  );
}
