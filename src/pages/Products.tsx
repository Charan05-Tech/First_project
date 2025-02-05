import React, { useState } from 'react';
import { Box, Shield, Cloud, LineChart, X } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      icon: <Box className="h-8 w-8 text-orange-600" />,
      name: 'FlameCore',
      description: 'Enterprise resource planning solution for modern businesses.',
      features: [
        'Modular Architecture',
        'Real-time Analytics',
        'Customizable Workflows',
        'Integration APIs',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      demoUrl: '#',
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      name: 'SecureFlame',
      description: 'Advanced cybersecurity platform for threat detection and prevention.',
      features: [
        'AI-powered Threat Detection',
        'Real-time Monitoring',
        'Automated Response',
        'Compliance Reports',
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800',
      demoUrl: '#',
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      name: 'CloudFlame',
      description: 'Cloud management and optimization platform.',
      features: [
        'Multi-cloud Support',
        'Cost Optimization',
        'Performance Monitoring',
        'Auto-scaling',
      ],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800',
      demoUrl: '#',
    },
    {
      icon: <LineChart className="h-8 w-8 text-orange-600" />,
      name: 'FlameAnalytics',
      description: 'Business intelligence and analytics solution.',
      features: [
        'Data Visualization',
        'Predictive Analytics',
        'Custom Reports',
        'Data Integration',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      demoUrl: '#',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions designed to transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {product.icon}
                    <h3 className="text-xl font-semibold ml-2">{product.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                  >
                    View Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full mx-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{selectedProduct.name} Demo</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 mr-4"
                >
                  Close
                </button>
                <a
                  href={selectedProduct.demoUrl}
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  Try Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;