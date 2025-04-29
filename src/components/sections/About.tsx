const About = () => {
    return (
      <section id="about" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">À propos de nous</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg"></div>
            </div>
            
            <div>
              <h3 className="mb-4 text-primary-600">Notre mission</h3>
              <p className="mb-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
                nec ullamcorper mattis, pulvinar dapibus leo. Donec sodales sagittis magna.
              </p>
              <p className="mb-6 text-lg">
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida 
                magna mi a libero. Fusce vulputate eleifend sapien.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xl font-bold mb-2">10+</h4>
                  <p className="text-gray-600">Années d'expérience</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">250+</h4>
                  <p className="text-gray-600">Projets réalisés</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">30+</h4>
                  <p className="text-gray-600">Experts qualifiés</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">98%</h4>
                  <p className="text-gray-600">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;