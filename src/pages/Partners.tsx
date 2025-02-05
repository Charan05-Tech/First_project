import React from 'react';
import { HandshakeIcon, ArrowRight } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'TechCorp International',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&h=300',
      description: 'Strategic technology partner specializing in enterprise solutions.',
      collaboration: 'Joint development of AI-powered analytics platforms.',
    },
    {
      name: 'InnovateCo',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&h=300',
      description: 'Leading innovation hub for emerging technologies.',
      collaboration: 'Research partnership in blockchain applications.',
    },
    {
      name: 'Global Solutions Ltd',
      logo: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&w=300&h=300',
      description: 'Worldwide provider of digital transformation services.',
      collaboration: 'Cloud infrastructure and security solutions.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HandshakeIcon className="h-16 w-16 text-orange-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional solutions and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-orange-600 mb-2">Key Collaboration:</h4>
                    <p className="text-gray-600">{partner.collaboration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in Partnering with Us?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Join our network of innovative partners and let's create something amazing together.
          </p>
          <button className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Partners;