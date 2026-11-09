import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { SERVICES } from '@/data/services';

export const TIME_PREFERENCES = ['Morning', 'Afternoon', 'Evening'] as const;

export const GENERAL_ENQUIRY = 'General enquiry (not sure yet)';

export const SERVICE_OPTIONS = [...SERVICES.map((service) => service.title), GENERAL_ENQUIRY];

export interface AppointmentValues {
  name: string;
  mobile: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export type AppointmentErrors = Partial<Record<keyof AppointmentValues, string>>;

export const EMPTY_APPOINTMENT: AppointmentValues = {
  name: '',
  mobile: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normaliseMobile(input: string) {
  let digits = input.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return digits;
}

export function validateAppointment(values: AppointmentValues, today: string): AppointmentErrors {
  const errors: AppointmentErrors = {};

  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';

  if (!/^[6-9]\d{9}$/.test(normaliseMobile(values.mobile))) {
    errors.mobile = 'Enter a valid 10-digit mobile number.';
  }

  if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address or leave this blank.';
  }

  if (!values.service) errors.service = 'Please choose a service.';

  if (!values.date) {
    errors.date = 'Please choose a preferred date.';
  } else if (values.date < today) {
    errors.date = 'Please choose today or a future date.';
  }

  if (!values.time) errors.time = 'Please choose a preferred time.';

  return errors;
}

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function buildAppointmentMessage(values: AppointmentValues) {
  const lines = [
    'Hello City Dental Clinic, I would like to request an appointment.',
    'Please note: this is an appointment request, not a confirmed booking.',
    '',
    `Patient Name: ${values.name.trim()}`,
    `Mobile Number: ${normaliseMobile(values.mobile)}`,
    `Email Address: ${values.email.trim() || 'Not provided'}`,
    `Service Required: ${values.service}`,
    `Preferred Date: ${formatDate(values.date)}`,
    `Preferred Time: ${values.time}`,
    `Additional Message: ${values.message.trim() || 'None'}`,
  ];
  return buildWhatsAppUrl(lines.join('\n'));
}
