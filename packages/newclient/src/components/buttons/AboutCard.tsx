import React from 'react';
import {FaChartLine, FaExchangeAlt, FaLock, FaMobileAlt} from 'react-icons/fa';

export const AboutCard = () => {
    const features = [{
        icon: FaMobileAlt, title: 'Mobile Access', description: 'Manage your portfolio on the go with our mobile app.',
    }, {
        icon: FaLock, title: 'Secure Wallet', description: 'Your assets are protected with industry-leading security.',
    }, {
        icon: FaExchangeAlt,
        title: 'Instant Exchange',
        description: 'Trade cryptocurrencies instantly with minimal fees.',
    }, {
        icon: FaChartLine, title: 'Market Analysis', description: 'Stay ahead with real-time market data and insights.',
    },];

    return (
        <div className="py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index: number) => (
                        <div key={index as number} className="text-center p-6 bg-gray-800 rounded-lg">
                            <feature.icon size={32} className="text-blue-500 mx-auto"/>
                            <h3 className="text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>))}
                </div>
            </div>
        </div>);
};
