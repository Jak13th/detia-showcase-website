const Services = () => {
    const servicesList = [
      {
        id: 1,
        icon: '💼',
        title: 'Conseil Stratégique',
        description: 'Nous vous aidons à définir une stratégie efficace pour atteindre vos objectifs.',
      },
      {
        id: 2,
        icon: '🚀',
        title: 'Développement Web',
        description: 'Création de sites web et applications sur mesure pour votre entreprise.',
      },
      {
        id: 3,
        icon: '📱',
        title: 'Design UI/UX',
        description: 'Interfaces utilisateur intuitives et expériences utilisateur optimales.',
      },
      {
        id: 4,
        icon: '📊',
        title: 'Analyse de Données',
        description: 'Exploitation de vos données pour en tirer des informations stratégiques.',
      },
      {
        id: 5,
        icon: '🔍',
        title: 'Référencement SEO',
        description: 'Amélioration de votre visibilité sur les moteurs de recherche.',
      },
      {
        id: 6,
        icon: '📣',
        title: 'Marketing Digital',
        description: 'Stratégies de marketing en ligne pour développer votre présence digitale.',
      },
    ];
  
    return (
      <section id="services" className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Nos Services</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Nous proposons une gamme complète de services pour vous aider à développer votre entreprise
              et à atteindre vos objectifs.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;