import React from 'react';
import PricingTable from '../../components/pricing/PricingTable';
import { cities as initialCities } from '../../data/cities/citiesData'; // Original usage, keeping the structure

const PricingPage: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: "Démarrage (Starter)",
      price: "9.99",
      period: "par mois",
      description: "Parfait pour les particuliers et les petites entreprises qui débutent.",
      features: [
        "Jusqu'à 20 livraisons/mois",
        "Suivi de colis de base",
        "Support par e-mail",
        "Emballage standard",
        "Livraison sous 48 heures"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Professionnel",
      price: "29.99",
      period: "par mois",
      description: "Idéal pour les entreprises en croissance avec des besoins de livraison réguliers.",
      features: [
        "Jusqu'à 100 livraisons/mois",
        "Suivi de colis avancé",
        "Support e-mail prioritaire",
        "Emballage Premium",
        "Livraison sous 24 heures",
        "Assurance jusqu'à 1000 €",
        "Rapport d'analyse mensuel"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Entreprise",
      price: "Sur Mesure",
      period: "",
      description: "Solutions personnalisées pour les grandes entreprises à volume élevé.",
      features: [
        "Livraisons illimitées",
        "Tableau de bord de suivi en temps réel",
        "Support dédié 24/7",
        "Solutions d'emballage personnalisées",
        "Garantie de livraison le jour même",
        "Couverture d'assurance complète",
        "Analyse et rapports personnalisés",
        "Intégration API",
        "Gestionnaire de compte dédié"
      ],
      popular: false
    }
  ];

  const addons = [
    {
      id: 1,
      name: "Assurance Étendue",
      price: "+5€",
      description: "Augmentez la couverture d'assurance jusqu'à 5000 € par colis."
    },
    {
      id: 2,
      name: "Confirmation par Signature",
      price: "+2€",
      description: "Nécessite une signature à la livraison pour une sécurité supplémentaire."
    },
    {
      id: 3,
      name: "Manutention Spéciale",
      price: "+3€",
      description: "Articles fragiles, périssables ou sensibles à la température."
    },
    {
      id: 4,
      name: "Service de Retour",
      price: "+4€",
      description: "Expédition de retour automatisée pour les colis refusés."
    }
  ];

  return (
    <div className="pricing-page">
      {/* Section Héros */}
      <section className="bg-gradient-to-r from-dark to-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Tarification Simple et Transparente
          </h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            Choisissez le plan qui correspond à vos besoins de livraison. Tous les plans incluent nos fonctionnalités de base sans frais cachés.
          </p>
        </div>
      </section>

      {/* Plans Tarifaires */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.id} 
                className={`card relative p-8 shadow-soft-lg transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1 ${plan.popular ? 'ring-4 ring-secondary transform scale-[1.03]' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    LE PLUS POPULAIRE
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-dark">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-extrabold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">/{plan.period}</span>}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.id === 3 ? 'Contacter les Ventes' : 'Commencer'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Besoin d'une solution personnalisée ? <a href="/contact" className="text-primary hover:underline font-medium">Contactez notre équipe commerciale</a>
            </p>
          </div>
        </div>
      </section>

      {/* Tableau des Prix par Ville */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Tarification Spécifique par Ville</h2>
          <p className="section-subtitle">
            Les prix de livraison varient selon la localisation. Vérifiez les prix pour votre ville ci-dessous.
          </p>
          
          <div className="card p-6 shadow-soft-lg max-w-4xl mx-auto">
            <PricingTable />
          </div>
        </div>
      </section>

      {/* Section des Options Supplémentaires */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Options Populaires</h2>
          <p className="section-subtitle">
            Améliorez votre expérience de livraison avec ces services optionnels
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {addons.map((addon) => (
              <div key={addon.id} className="card p-6 text-center shadow-soft hover:shadow-soft-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-dark">{addon.name}</h3>
                <div className="text-2xl font-bold text-secondary mb-3">{addon.price}</div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="section bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title">Questions Fréquemment Posées</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur notre tarification
          </p>
          
          <div className="space-y-6 mt-16">
            <div className="card p-6 hover:shadow-soft-lg">
              <h3 className="text-xl font-bold mb-3 text-dark">Y a-t-il des frais d'installation ?</h3>
              <p className="text-gray-700">
                Non, il n'y a aucun frais d'installation pour aucun de nos plans. Vous pouvez commencer à utiliser notre service immédiatement après l'inscription.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-soft-lg">
              <h3 className="text-xl font-bold mb-3 text-dark">Puis-je changer de plan plus tard ?</h3>
              <p className="text-gray-700">
                Oui, vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Les modifications prennent effet immédiatement, et nous calculerons la différence au prorata.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-soft-lg">
              <h3 className="text-xl font-bold mb-3 text-dark">Quels modes de paiement acceptez-vous ?</h3>
              <p className="text-gray-700">
                Nous acceptons toutes les principales cartes de crédit (Visa, MasterCard, American Express) et les virements bancaires. Les clients Entreprise peuvent également opter pour la facturation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;