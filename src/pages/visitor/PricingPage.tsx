import React from 'react';
import PricingTable from '../../components/pricing/PricingTable';

const PricingPage: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "9.99",
      period: "per month",
      description: "Perfect for individuals and small businesses getting started",
      features: [
        "Up to 20 deliveries/month",
        "Basic package tracking",
        "Email support",
        "Standard packaging",
        "Delivery within 48 hours"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      price: "29.99",
      period: "per month",
      description: "Ideal for growing businesses with regular delivery needs",
      features: [
        "Up to 100 deliveries/month",
        "Advanced package tracking",
        "Priority email support",
        "Premium packaging",
        "Delivery within 24 hours",
        "Insurance up to €1000",
        "Monthly analytics report"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large businesses with high volume",
      features: [
        "Unlimited deliveries",
        "Real-time tracking dashboard",
        "24/7 dedicated support",
        "Custom packaging solutions",
        "Same-day delivery guarantee",
        "Full insurance coverage",
        "Custom analytics & reporting",
        "API integration",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const addons = [
    {
      id: 1,
      name: "Extended Insurance",
      price: "+€5",
      description: "Increase insurance coverage up to €5000 per package"
    },
    {
      id: 2,
      name: "Signature Confirmation",
      price: "+€2",
      description: "Require signature upon delivery for extra security"
    },
    {
      id: 3,
      name: "Special Handling",
      price: "+€3",
      description: "Fragile, perishable, or temperature-sensitive items"
    },
    {
      id: 4,
      name: "Return Service",
      price: "+€4",
      description: "Automated return shipping for rejected packages"
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            Choose the plan that fits your delivery needs. All plans include our core features with no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.id} 
                className={`card relative p-8 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">/{plan.period}</span>}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.id === 3 ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Need a custom solution? <a href="/contact" className="text-primary hover:underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>

      {/* City Pricing Table */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="section-title">City-Specific Pricing</h2>
          <p className="section-subtitle">
            Delivery prices vary by location. Check pricing for your city below.
          </p>
          
          <div className="card p-6">
            <PricingTable />
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Popular Add-ons</h2>
          <p className="section-subtitle">
            Enhance your delivery experience with these optional services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {addons.map((addon) => (
              <div key={addon.id} className="card p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{addon.price}</div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our pricing
          </p>
          
          <div className="space-y-6 mt-16">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Are there any setup fees?</h3>
              <p className="text-gray-700">
                No, there are no setup fees for any of our plans. You can start using our service immediately after signing up.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Can I change plans later?</h3>
              <p className="text-gray-700">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit cards (Visa, MasterCard, American Express) and bank transfers. Enterprise customers can also opt for invoicing.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Is there a free trial?</h3>
              <p className="text-gray-700">
                We offer a 14-day free trial for our Professional plan. No credit card required to start your trial.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Do unused deliveries roll over?</h3>
              <p className="text-gray-700">
                Unused deliveries do not roll over to the next month. However, we offer flexible plans to accommodate varying monthly needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Delevrie for their delivery needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/client/login" 
              className="btn btn-primary px-8 py-4"
            >
              Sign Up Now
            </a>
            <a 
              href="/contact" 
              className="btn btn-outline px-8 py-4"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;