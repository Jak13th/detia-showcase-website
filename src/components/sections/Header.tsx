import Button from '@/components/ui/Button';

const Header = () => {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="mb-4">Bienvenue chez DETIA Consulting</h1>
          <p className="text-xl mb-8">
            Nous créons des solutions innovantes pour répondre à vos besoins professionnels.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:bg-opacity-10"
            >
              En savoir plus
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary-900 hover:bg-gray-200"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;