import {
  Activity,
  Baby,
  Crown,
  Droplets,
  HeartPulse,
  Layers,
  Scissors,
  Smile,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from 'lucide-react';

export interface DentalService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: DentalService[] = [
  {
    id: 'general-check-up',
    title: 'General Dental Check-up',
    description:
      'A routine visit to review your teeth, gums and overall oral health, and to discuss any concerns with our team.',
    icon: Stethoscope,
  },
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning and Scaling',
    description:
      'Professional cleaning to help remove plaque and tartar build-up and keep your gums feeling fresh.',
    icon: Droplets,
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description:
      'Ask about whitening options to brighten the look of your smile. Suitability is confirmed after a consultation.',
    icon: Sparkles,
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description:
      'Care for teeth affected by deep decay or infection. Your dentist will advise on the right treatment after an examination.',
    icon: Activity,
  },
  {
    id: 'fillings',
    title: 'Dental Fillings',
    description:
      'Restore teeth affected by minor decay or damage, and discuss tooth-coloured filling options with your dentist.',
    icon: Syringe,
  },
  {
    id: 'extraction',
    title: 'Tooth Extraction',
    description:
      'Removal of a tooth when it is needed, with clear guidance on aftercare and next steps.',
    icon: Scissors,
  },
  {
    id: 'crowns-bridges',
    title: 'Dental Crowns and Bridges',
    description:
      'Crowns and bridges that can help restore the shape, strength and function of damaged or missing teeth.',
    icon: Crown,
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description:
      'Discuss implant options to replace missing teeth, with a plan tailored to you after a detailed assessment.',
    icon: Layers,
  },
  {
    id: 'gum-care',
    title: 'Gum Care',
    description:
      'Assessment and care for gum health, helping you keep an eye on early signs of gum concerns.',
    icon: HeartPulse,
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dental Care',
    description:
      'Friendly check-ups and simple guidance to help children build good oral hygiene habits from an early age.',
    icon: Baby,
  },
  {
    id: 'dentures',
    title: 'Dentures',
    description:
      'Removable replacement teeth to support your smile and chewing comfort, with fitting options discussed at consultation.',
    icon: Smile,
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description:
      'Options to enhance the appearance of your smile, planned together with you after a consultation.',
    icon: SmilePlus,
  },
];
