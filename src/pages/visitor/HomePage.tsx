import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Fast & Reliable Delivery Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in">
            Connect with professional couriers and get your packages delivered safely and on time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
            <Link 
              to="/services" 
              className="btn btn-primary text-lg px-8 py-4"
              aria-label="Explore our delivery services"
            >
              Explore Services
            </Link>
            <Link 
              to="/pricing" 
              className="btn btn-outline text-lg px-8 py-4 bg-white text-primary hover:bg-accent"
              aria-label="View our pricing plans"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-gray-50" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4">
          <h2 id="how-it-works-heading" className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting your package delivered has never been easier
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card text-center p-8 slide-in">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-dark">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Place Your Order</h3>
              <p className="text-gray-600">
                Simply create an account and submit your delivery request with all the necessary details.
              </p>
            </div>
            
            <div className="card text-center p-8 slide-in delay-100">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-dark">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Assign Courier</h3>
              <p className="text-gray-600">
                Our system matches your package with the best available courier in your area.
              </p>
            </div>
            
            <div className="card text-center p-8 slide-in delay-200">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-dark">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Track & Receive</h3>
              <p className="text-gray-600">
                Track your package in real-time and receive it safely at your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <h2 id="services-heading" className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a wide range of delivery solutions for all your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="card p-6 scale-in">
              <div className="bg-accent w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">
                Get your packages delivered within hours in major cities.
              </p>
            </div>
            
            <div className="card p-6 scale-in delay-100">
              <div className="bg-accent w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">International Shipping</h3>
              <p className="text-gray-600">
                Ship your packages worldwide with our reliable international service.
              </p>
            </div>
            
            <div className="card p-6 scale-in delay-200">
              <div className="bg-accent w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Packaging</h3>
              <p className="text-gray-600">
                Professional packaging to ensure your items arrive safely.
              </p>
            </div>
            
            <div className="card p-6 scale-in delay-300">
              <div className="bg-accent w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Insurance Coverage</h3>
              <p className="text-gray-600">
                Full insurance coverage for high-value items for peace of mind.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="btn btn-primary inline-flex items-center"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-accent" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <h2 id="testimonials-heading" className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card p-8 slide-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Marie Dubois</h4>
                  <p className="text-gray-600 text-sm">E-commerce Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Delevrie has transformed our delivery process. Our customers love the fast and reliable service, and our business has grown significantly since partnering with them."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="card p-8 slide-in delay-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Jean Martin</h4>
                  <p className="text-gray-600 text-sm">Restaurant Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The food delivery service is exceptional. Our meals arrive hot and fresh every time. The couriers are professional and punctual. Highly recommended!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="card p-8 slide-in delay-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sophie Laurent</h4>
                  <p className="text-gray-600 text-sm">Private Customer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I've used many delivery services, but Delevrie stands out for their reliability and customer service. My packages always arrive on time and in perfect condition."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their delivery needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/client/login" 
              className="btn btn-primary text-lg px-8 py-4"
              aria-label="Sign up as a client"
            >
              Sign Up as Client
            </Link>
            <Link 
              to="/livreur/login" 
              className="btn bg-white text-primary hover:bg-accent text-lg px-8 py-4"
              aria-label="Become a courier"
            >
              Become a Courier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;