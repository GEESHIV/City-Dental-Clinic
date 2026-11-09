import { useState } from 'react';
import { About } from '@/components/About';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CareInfo } from '@/components/CareInfo';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Services } from '@/components/Services';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { WhyChoose } from '@/components/WhyChoose';

function App() {
  const [preferredService, setPreferredService] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onEnquire={setPreferredService} />
        <WhyChoose />
        <CareInfo />
        <Gallery />
        <AppointmentForm preferredService={preferredService} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
