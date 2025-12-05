import React from 'react';

const AboutPage: React.FC = () => {
  const stats = [
    { value: "50+", label: "Villes Desservies" },
    { value: "10K+", label: "Clients Satisfaits" },
    { value: "500+", label: "Coursiers Professionnels" },
    { value: "99%", label: "Livraison à Temps" }
  ];

  const values = [
    {
      title: "Fiabilité",
      description: "Nous tenons nos promesses. Lorsque nous disons que votre colis arrivera à une certaine heure, il arrivera.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparence",
      description: "Pas de frais cachés, pas de surprises. Notre tarification est claire et vous pouvez suivre votre colis à chaque étape.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Durabilité",
      description: "Nous nous engageons à réduire notre impact environnemental grâce aux véhicules électriques et aux emballages écologiques.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Communauté",
      description: "Nous soutenons les entreprises et les communautés locales en connectant les personnes et en favorisant le commerce.",
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
      position: "PDG et Fondateur",
      bio: "Ancien dirigeant de la logistique avec 15 ans d'expérience. Passionné par la révolution de la livraison du dernier kilomètre.",
      image: ""
    },
    {
      name: "Marie Lambert",
      position: "Directrice des Opérations",
      bio: "Experte en optimisation de la chaîne d'approvisionnement. Assure des opérations de livraison fluides.",
      image: ""
    },
    {
      name: "Thomas Moreau",
      position: "Chef de la Technologie",
      bio: "Ingénieur logiciel axé sur l'automatisation logistique et les systèmes de suivi en temps réel.",
      image: ""
    },
    {
      name: "Camille Rousseau",
      position: "Succès Client",
      bio: "Dédiée à garantir des expériences client exceptionnelles et à établir des relations durables.",
      image: ""
    }
  ];

  return (
    <div className="about-page">
      {/* Section Héros */}
      <section className="bg-gradient-to-r from-dark to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
              À Propos de Delevrie
            </h1>
            <p className="text-xl mb-8 fade-in">
              Nous avons pour mission de rendre les services de livraison plus rapides, plus fiables et plus durables pour tous.
            </p>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Fondée en 2018, Delevrie est née d'une idée simple : les services de livraison doivent être fiables, abordables et respectueux de l'environnement. Ce qui a commencé comme une petite équipe à Paris est devenu un réseau national au service de milliers de clients.
              </p>
              <p className="text-gray-600 mb-6">
                Nous avons constaté que les services traditionnels manquaient souvent de transparence et de service client. Nous avons donc bâti une entreprise qui place les clients au premier plan.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, nous sommes fiers de servir plus de 50 villes en France et prévoyons une expansion internationale. Notre engagement envers l'excellence demeure inchangé.
              </p>
            </div>
            <div className="card h-96 flex-center text-gray-500 bg-gray-100 border-2 border-dashed shadow-soft">
              Image de l'Entreprise
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="section bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-default shadow-soft-lg slide-in">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nos Valeurs Fondamentales</h2>
          <p className="section-subtitle">
            Les principes qui guident tout ce que nous faisons
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center slide-in shadow-soft-lg">
                <div className="mb-6 flex-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="section bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Rencontrez Notre Équipe de Direction</h2>
          <p className="section-subtitle">
            Les personnes derrière notre succès
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <div key={index} className="card text-center p-8 slide-in shadow-soft-lg">
                <div className="bg-gray-300 border-2 border-dashed rounded-full w-32 h-32 mx-auto mb-6 flex-center text-gray-500" />
                <h3 className="text-xl font-bold mb-1 text-dark">{member.name}</h3>
                <p className="text-primary mb-4 font-medium">{member.position}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Mission CTA */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-default p-8 md:p-12 text-white shadow-soft-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Mission</h2>
              <p className="text-xl mb-8">
                Créer un monde où la livraison est instantanée, fiable et durable - connectant les personnes et les entreprises de manière transparente.
              </p>
              <a 
                href="/contact" 
                className="btn bg-white text-dark hover:bg-accent hover:text-dark px-8 py-3.5 font-bold shadow-soft-lg"
              >
                Rejoignez Notre Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;