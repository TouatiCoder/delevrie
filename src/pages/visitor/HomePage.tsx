import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* 1. Section Héros (Hero) - يستخدم تدرج الألوان Dark و Primary مع Secondary كـ Accent */}
      <section className="bg-gradient-to-r from-dark to-primary text-white py-24 md:py-40" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 id="hero-heading" className="text-4xl md:text-7xl font-extrabold mb-6 fade-in tracking-tight">
            La Logistique de Demain, <span className="text-secondary">Livrée Aujourd'hui.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto fade-in delay-100 font-light">
            Des solutions de livraison intelligentes, rapides et écologiques, conçues pour les professionnels exigeants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in delay-200">
            {/* CTA principal - يستخدم اللون الأساسي (Primary) */}
            <Link 
              to="/client/create-order" 
              className="btn btn-primary btn-lg px-10 py-3.5 font-semibold text-lg shadow-soft-xl"
              aria-label="Créer une nouvelle commande de livraison"
            >
              Créer Ma Commande
            </Link>
            {/* CTA ثانوي - يستخدم لون الحدود (Outline) الأبيض */}
            <Link 
              to="/services" 
              className="btn btn-outline btn-lg px-10 py-3.5 text-white border-white hover:bg-white hover:text-dark font-semibold text-lg"
              aria-label="Explorer notre gamme complète de services"
            >
              Explorer les Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Comment ça Marche (How It Works) - يستخدم الخلفية الفاتحة (Background) مع Accent */}
      <section className="section bg-background" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 id="how-it-works-heading" className="section-title">Processus Simple en 3 Étapes</h2>
          <p className="section-subtitle">
            Un processus optimisé pour une expérience client sans friction et efficace.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card text-center p-8 slide-in delay-100 shadow-soft-lg">
              <div className="w-20 h-20 bg-accent rounded-full flex-center mx-auto mb-6 shadow-soft">
                <span className="text-3xl font-extrabold text-dark">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark">Planification Intégrée</h3>
              <p className="text-gray-600">
                Créez et personnalisez votre envoi en quelques clics via notre plateforme intuitive.
              </p>
            </div>
            
            <div className="card text-center p-8 slide-in delay-200 shadow-soft-lg">
              <div className="w-20 h-20 bg-accent rounded-full flex-center mx-auto mb-6 shadow-soft">
                <span className="text-3xl font-extrabold text-dark">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark">Affectation Automatisée</h3>
              <p className="text-gray-600">
                Notre algorithme intelligent assigne instantanément le meilleur coursier disponible.
              </p>
            </div>
            
            <div className="card text-center p-8 slide-in delay-300 shadow-soft-lg">
              <div className="w-20 h-20 bg-accent rounded-full flex-center mx-auto mb-6 shadow-soft">
                <span className="text-3xl font-extrabold text-dark">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark">Suivi et Confirmation</h3>
              <p className="text-gray-600">
                Suivez votre colis en temps réel jusqu'à la confirmation de réception numérique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Aperçu des Services (Services Preview) - يستخدم Primary و Dark للأيقونات */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 id="services-heading" className="section-title">Des Services Conçus Pour Vous</h2>
          <p className="section-subtitle">
            Découvrez nos solutions personnalisées، allant de l'urgence au volume.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {/* Service 1: Urgence - Utilise Primary */}
            <div className="card p-6 scale-in shadow-soft-lg">
              <div className="bg-primary w-16 h-16 rounded-default flex-center mb-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">Urgence (Jour Même)</h3>
              <p className="text-gray-600">
                Livraison garantie en quelques heures pour vos documents et colis critiques.
              </p>
            </div>
            
            {/* Service 2: International - Utilise Dark */}
            <div className="card p-6 scale-in delay-100 shadow-soft-lg">
              <div className="bg-dark w-16 h-16 rounded-default flex-center mb-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">International</h3>
              <p className="text-gray-600">
                Couverture mondiale complète avec gestion douanière et assurance incluse.
              </p>
            </div>
            
            {/* Service 3: Fragile - Utilise Primary */}
            <div className="card p-6 scale-in delay-200 shadow-soft-lg">
              <div className="bg-primary w-16 h-16 rounded-default flex-center mb-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">Fragile et Spécialisé</h3>
              <p className="text-gray-600">
                Manutention experte pour les articles fragiles ou nécessitant un contrôle de température.
              </p>
            </div>
            
            {/* Service 4: B2B - Utilise Dark */}
            <div className="card p-6 scale-in delay-300 shadow-soft-lg">
              <div className="bg-dark w-16 h-16 rounded-default flex-center mb-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark">Solutions B2B</h3>
              <p className="text-gray-600">
                Tarifs de volume et intégration API dédiés pour les entreprises et l'e-commerce.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/services" 
              className="btn btn-secondary btn-lg inline-flex items-center font-semibold"
            >
              Découvrir Toutes Nos Solutions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Appel à l'Action Final (CTA) - يستخدم Dark Background */}
      <section className="section bg-dark text-white" aria-labelledby="final-cta-heading">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 id="final-cta-heading" className="text-3xl md:text-5xl font-bold mb-6">Boostez Votre Activité avec Delevrie</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300 font-light">
            Il est temps de passer à une logistique plus efficace et centrée sur l'utilisateur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/client/login" 
              className="btn btn-primary btn-lg px-8 py-4 bg-secondary text-white hover:bg-orange-700 font-semibold shadow-soft-xl"
              aria-label="S'inscrire en tant que client et commencer la livraison"
            >
              Ouvrir un Compte Client
            </Link>
            <Link 
              to="/livreur/login" 
              className="btn btn-outline btn-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark font-semibold"
              aria-label="Devenir coursier et rejoindre notre équipe"
            >
              Devenir Coursier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;