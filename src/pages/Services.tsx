import React from 'react';
import { Code, Cloud, Shield, Database, Smartphone, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-orange-600" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'Enterprise Software',
        'API Integration',
      ],
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services for scalable and secure infrastructure.',
      features: [
        'Cloud Migration',
        'Cloud Architecture',
        'DevOps Services',
        'Cloud Security',
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Solutions',
        'Security Training',
      ],
    },
    {
      icon: <Database className="h-8 w-8 text-orange-600" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision-making.',
      features: [
        'Big Data Analytics',
        'Business Intelligence',
        'Predictive Analytics',
        'Data Visualization',
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-600" />,
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile applications for enhanced user engagement.',
      features: [
        'iOS Development',
        'Android Development',
        'React Native Apps',
        'Mobile UI/UX',
      ],
    },
    {
      icon: <LineChart className="h-8 w-8 text-orange-600" />,
      title: 'Digital Transformation',
      description: 'Strategic digital solutions to modernize your business operations.',
      features: [
        'Process Automation',
        'Digital Strategy',
        'Legacy Modernization',
        'Innovation Consulting',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;