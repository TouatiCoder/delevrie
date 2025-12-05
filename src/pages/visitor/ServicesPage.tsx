import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Same-Day Delivery",
      description: "Get your packages delivered within hours in major cities. Perfect for urgent deliveries and last-minute needs.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Delivery within 2-6 hours",
        "Available in major metropolitan areas",
        "Real-time tracking",
        "24/7 availability"
      ]
    },
    {
      id: 2,
      title: "Scheduled Delivery",
      description: "Plan your deliveries in advance with our scheduled service. Choose your preferred date and time slot.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Flexible scheduling options",
        "Morning, afternoon, or evening slots",
        "Advance booking up to 7 days",
        "Free cancellation up to 24 hours"
      ]
    },
    {
      id: 3,
      title: "International Shipping",
      description: "Ship your packages worldwide with our reliable international service. We handle customs and documentation.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Worldwide destinations",
        "Customs handling included",
        "Package insurance available",
        "Tracking throughout journey"
      ]
    },
    {
      id: 4,
      title: "Express Courier",
      description: "Dedicated courier service for high-priority shipments. Your package gets special handling and priority routing.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Priority handling",
        "Dedicated courier assignment",
        "Direct routing",
        "Guaranteed delivery times"
      ]
    },
    {
      id: 5,
      title: "Specialized Handling",
      description: "Expert handling for fragile, valuable, or temperature-sensitive items. Extra care and specialized equipment.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Temperature-controlled transport",
        "Fragile item expertise",
        "Extra packaging protection",
        "Special handling certification"
      ]
    },
    {
      id: 6,
      title: "Business Solutions",
      description: "Tailored delivery solutions for businesses of all sizes. Volume discounts and account management.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Volume discount programs",
        "Dedicated account manager",
        "Custom reporting",
        "API integration available"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Our Delivery Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            Comprehensive delivery solutions tailored to meet all your shipping needs, from same-day deliveries to international shipments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="card p-8 scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Delevrie</h2>
          <p className="section-subtitle">
            We go above and beyond to ensure your deliveries are handled with care and precision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-6 slide-in">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Delivery</h3>
              <p className="text-gray-700">
                All packages are insured and tracked throughout the delivery process.
              </p>
            </div>
            
            <div className="text-center p-6 slide-in delay-100">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
              <p className="text-gray-700">
                On-time delivery guarantee with real-time tracking updates.
              </p>
            </div>
            
            <div className="text-center p-6 slide-in delay-200">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Couriers</h3>
              <p className="text-gray-700">
                Vetted and trained couriers who treat your packages with care.
              </p>
            </div>
            
            <div className="text-center p-6 slide-in delay-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-700">
                Clear, upfront pricing with no hidden fees or surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-default p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team can create a tailored delivery plan for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary bg-white text-primary hover:bg-accent px-8 py-4"
              >
                Request a Quote
              </a>
              <a 
                href="/contact" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8 py-4"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;