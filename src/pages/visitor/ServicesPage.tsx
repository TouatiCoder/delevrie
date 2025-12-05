import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Livraison le Jour Même",
      description: "Faites livrer vos colis en quelques heures dans les grandes villes. Parfait pour les livraisons urgentes et de dernière minute.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Livraison sous 2 à 6 heures",
        "Disponible dans les grandes métropoles",
        "Suivi en temps réel",
        "Disponibilité 24/7"
      ]
    },
    {
      id: 2,
      title: "Livraison Planifiée",
      description: "Planifiez vos livraisons à l'avance avec notre service planifié. Choisissez votre date et heure préférées.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Options de planification flexibles",
        "Créneaux matin, après-midi ou soir",
        "Réservation jusqu'à 7 jours à l'avance",
        "Annulation gratuite jusqu'à 24 heures"
      ]
    },
    {
      id: 3,
      title: "Expédition Internationale",
      description: "Expédiez vos colis dans le monde entier avec notre service international fiable. Nous gérons les douanes et la documentation.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Destinations mondiales",
        "Gestion douanière incluse",
        "Assurance colis disponible",
        "Suivi tout au long du voyage"
      ]
    },
    {
      id: 4,
      title: "Coursier Express",
      description: "Service de coursier dédié aux expéditions hautement prioritaires. Votre colis bénéficie d'une manipulation spéciale et d'un acheminement prioritaire.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Traitement prioritaire",
        "Attribution de coursier dédié",
        "Acheminement direct",
        "Délais de livraison garantis"
      ]
    },
    {
      id: 5,
      title: "Manutention Spécialisée",
      description: "Manutention experte pour les articles fragiles, de valeur ou sensibles à la température. Soins supplémentaires et équipement spécialisé.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Transport à température contrôlée",
        "Expertise en articles fragiles",
        "Protection d'emballage supplémentaire",
        "Certification de manutention spéciale"
      ]
    },
    {
      id: 6,
      title: "Solutions Professionnelles",
      description: "Solutions de livraison sur mesure pour les entreprises de toutes tailles. Remises sur volume et gestion de compte.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Programmes de remises sur volume",
        "Gestionnaire de compte dédié",
        "Rapports personnalisés",
        "Intégration API disponible"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Section Héros */}
      <section className="bg-gradient-to-r from-dark to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Nos Services de Livraison
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            Des solutions de livraison complètes et adaptées à tous vos besoins d'expédition, de l'urgence à l'international.
          </p>
        </div>
      </section>

      {/* Grille des Services */}
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
                <h3 className="text-2xl font-bold mb-4 text-dark">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Pourquoi nous choisir */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Pourquoi Choisir Delevrie</h2>
          <p className="section-subtitle">
            Nous mettons tout en œuvre pour que vos livraisons soient traitées avec soin et précision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-6 slide-in">
              <div className="w-20 h-20 bg-white rounded-full flex-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">Livraison Sécurisée</h3>
              <p className="text-gray-700">
                Tous les colis sont assurés et suivis tout au long du processus de livraison.
              </p>
            </div>
            
            <div className="text-center p-6 slide-in delay-100">
              <div className="w-20 h-20 bg-white rounded-full flex-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">Rapide & Fiable</h3>
              <p className="text-gray-700">
                Garantie de livraison à temps avec mises à jour de suivi en temps réel.
              </p>
            </div>
            
            <div className="text-center p-6 slide-in delay-200">
              <div className="w-20 h-20 bg-white rounded-full flex-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">Coursiers Professionnels</h3>
              <p className="text-gray-700">
                Coursiers vérifiés et formés qui traitent vos colis avec soin.
              </p>
            </div>
            
            <div className="text-center p-6 slide-in delay-300">
              <div className="w-20 h-20 bg-white rounded-full flex-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">Tarification Transparente</h3>
              <p className="text-gray-700">
                Tarification claire et initiale sans frais cachés ni surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Finale */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-default p-8 md:p-12 text-white text-center shadow-soft-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d'une Solution Sur Mesure ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Notre équipe peut créer un plan de livraison adapté à vos besoins commerciaux spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="btn btn-primary bg-white text-primary hover:bg-accent px-8 py-4"
              >
                Demander un Devis
              </a>
              <a 
                href="/contact" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-dark px-8 py-4"
              >
                Contacter le Service Commercial
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;