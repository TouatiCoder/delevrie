import React from 'react';

const AboutPage: React.FC = () => {
  const stats = [
    { value: "50+", label: "Cities Served" },
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Professional Couriers" },
    { value: "99%", label: "On-Time Delivery" }
  ];

  const values = [
    {
      title: "Reliability",
      description: "We believe in keeping our promises. When we say your package will arrive by a certain time, it will.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparency",
      description: "No hidden fees, no surprises. Our pricing is clear and upfront, and you can track your package every step of the way.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "We're committed to reducing our environmental impact through electric vehicles and eco-friendly packaging.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Community",
      description: "We support local businesses and communities by connecting people and enabling commerce.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Alexandre Dubois",
      position: "CEO & Founder",
      bio: "Former logistics executive with 15 years of industry experience. Passionate about revolutionizing last-mile delivery.",
      image: ""
    },
    {
      name: "Marie Lambert",
      position: "Operations Director",
      bio: "Expert in supply chain optimization and fleet management. Ensures seamless delivery operations.",
      image: ""
    },
    {
      name: "Thomas Moreau",
      position: "Technology Lead",
      bio: "Software engineer with a focus on logistics automation and real-time tracking systems.",
      image: ""
    },
    {
      name: "Camille Rousseau",
      position: "Customer Success",
      bio: "Dedicated to ensuring exceptional customer experiences and building lasting relationships.",
      image: ""
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
              About Delevrie
            </h1>
            <p className="text-xl mb-8 fade-in">
              We're on a mission to make delivery services faster, more reliable, and more sustainable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Delevrie began with a simple idea: delivery services should be reliable, affordable, and environmentally responsible. 
                What started as a small team in Paris has grown into a nationwide network serving thousands of customers.
              </p>
              <p className="text-gray-600 mb-6">
                We recognized that traditional delivery services often fell short in transparency, reliability, and customer service. 
                So we built a company that puts customers first, with real-time tracking, clear pricing, and professional couriers.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve over 50 cities across France, with plans to expand internationally. 
                Our commitment to excellence remains unchanged as we continue to innovate and improve our services.
              </p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
              Company Image
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm slide-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            Principles that guide everything we do
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center slide-in">
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-subtitle">
            The people behind our success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <div key={index} className="card text-center p-8 slide-in">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-default p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-8">
                To create a world where delivery is instant, reliable, and sustainable - connecting people and businesses seamlessly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Fast Delivery
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Environmental Responsibility
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Community Support
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;