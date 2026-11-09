import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, MessageCircle, RotateCcw, Send } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import {
  EMPTY_APPOINTMENT,
  SERVICE_OPTIONS,
  TIME_PREFERENCES,
  buildAppointmentMessage,
  validateAppointment,
  type AppointmentErrors,
  type AppointmentValues,
} from '@/lib/appointment';

interface AppointmentFormProps {
  preferredService: string;
}

const INPUT_BASE =
  'mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors duration-200 focus:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500/15';

function inputClass(hasError: boolean) {
  return `${INPUT_BASE} ${hasError ? 'border-rose-500' : 'border-slate-200 hover:border-slate-300'}`;
}

function todayIso() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function AppointmentForm({ preferredService }: AppointmentFormProps) {
  const [values, setValues] = useState<AppointmentValues>(EMPTY_APPOINTMENT);
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [today] = useState(todayIso);

  useEffect(() => {
    if (preferredService) {
      setValues((current) => ({ ...current, service: preferredService }));
      setErrors((current) => ({ ...current, service: undefined }));
    }
  }, [preferredService]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateAppointment(values, today);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url = buildAppointmentMessage(values);
    setWhatsappUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setValues(EMPTY_APPOINTMENT);
    setErrors({});
    setWhatsappUrl(null);
  };

  return (
    <section id="appointment" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-mist-100 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-2">
          <SectionHeading
            align="left"
            eyebrow="Request an Appointment"
            title="Tell us what you need, we will take it from here"
            description="Fill in the form and we will open WhatsApp with your details pre-filled. Your request is not a confirmed booking. Our team will reply to confirm availability."
          />
          <ul className="mt-8 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
              Fields marked with an asterisk are required.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
              Your details are only shared in the WhatsApp message you choose to send.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          {whatsappUrl ? (
            <div className="rounded-3xl border border-teal-100 bg-mist-50 p-8 text-center shadow-soft sm:p-12">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700 text-white">
                <MessageCircle className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Your request is ready in WhatsApp</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-[1.5] text-slate-600">
                This is an appointment request, not a confirmed booking. Send the pre-filled message in WhatsApp and
                the clinic will get back to you to confirm availability.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Open WhatsApp Again
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-teal-700 hover:text-teal-700"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Make Another Request
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-navy">
                    Patient Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClass(Boolean(errors.name))}
                  />
                  {errors.name && <FieldError id="name-error" message={errors.name} />}
                </div>

                <div>
                  <label htmlFor="mobile" className="text-sm font-semibold text-navy">
                    Mobile Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={values.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    aria-invalid={Boolean(errors.mobile)}
                    aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                    className={inputClass(Boolean(errors.mobile))}
                  />
                  {errors.mobile && <FieldError id="mobile-error" message={errors.mobile} />}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-navy">
                    Email Address <span className="font-normal text-slate-500">(optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClass(Boolean(errors.email))}
                  />
                  {errors.email && <FieldError id="email-error" message={errors.email} />}
                </div>

                <div>
                  <label htmlFor="service" className="text-sm font-semibold text-navy">
                    Service Required <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    className={inputClass(Boolean(errors.service))}
                  >
                    <option value="">Choose a service</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && <FieldError id="service-error" message={errors.service} />}
                </div>

                <div>
                  <label htmlFor="date" className="text-sm font-semibold text-navy">
                    Preferred Appointment Date <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    value={values.date}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    className={inputClass(Boolean(errors.date))}
                  />
                  {errors.date && <FieldError id="date-error" message={errors.date} />}
                </div>

                <div>
                  <label htmlFor="time" className="text-sm font-semibold text-navy">
                    Preferred Time <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.time)}
                    aria-describedby={errors.time ? 'time-error' : undefined}
                    className={inputClass(Boolean(errors.time))}
                  >
                    <option value="">Choose a time of day</option>
                    {TIME_PREFERENCES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && <FieldError id="time-error" message={errors.time} />}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold text-navy">
                    Additional Message <span className="font-normal text-slate-500">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your concern or any questions you have"
                    className={`${inputClass(false)} resize-y`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-500/40 active:scale-[0.99]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Request an Appointment
              </button>
              <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
                This opens WhatsApp with your request. It is not a confirmed booking until the clinic replies.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-rose-600">
      {message}
    </p>
  );
}
