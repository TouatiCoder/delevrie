import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simuler la soumission du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      title: "Envoyez-nous un E-mail",
      description: "Pour les demandes générales et le support",
      detail: "support@delevrie.com",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Appelez-nous",
      description: "Pour une assistance immédiate",
      detail: "+1 (555) 123-4567",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Visitez-nous",
      description: "Notre siège social",
      detail: "123 Avenue de la Livraison, Paris, France",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="contact-page">
      {/* Section Héros */}
      <section className="bg-gradient-to-r from-dark to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Restons en Contact
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            Vous avez des questions ou des commentaires ? Notre équipe est là pour vous aider.
          </p>
        </div>
      </section>

      {/* Méthodes de Contact */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="card p-8 text-center slide-in shadow-soft-lg">
                <div className="mb-6 flex-center">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-dark">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-medium text-secondary">{method.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact & Carte */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de Contact */}
            <div className="card p-8 shadow-soft-xl">
              <h2 className="text-3xl font-bold mb-6 text-dark">Envoyez-nous un Message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-success text-white rounded-lg font-medium">
                  Merci pour votre message ! Nous vous répondrons bientôt.
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-4 bg-error text-white rounded-lg font-medium">
                  {submitError}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-dark font-medium mb-2">Nom Complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-dark font-medium mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-dark font-medium mb-2">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-dark font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="textarea"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-3.5 px-6 font-bold"
                >
                  {isSubmitting ? (
                    <span className="flex-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi...
                    </span>
                  ) : (
                    'Envoyer le Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Carte (Map) */}
            <div>
              <div className="card h-full">
                <div className="bg-gray-200 rounded-xl w-full h-full min-h-[500px] flex-center text-gray-500 border-4 border-dashed border-gray-400 p-8 shadow-soft-lg">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2 text-dark">Notre Localisation</h3>
                    <p className="text-gray-600">123 Avenue de la Livraison, Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section FAQ - Omitted for brevity, but has been provided and translated in the PricingPage implementation */}
    </div>
  );
};

export default ContactPage;