import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Key Accomplishments</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'AWS Certifications',
							icon: '☁️',
							features: ['AWS Cloud Practitioner', 'AWS Certified Developer Associate'],
						},
						{
							title: 'Spot Award',
							icon: '🌟',
							features: ['ICICI: Received a performance award for delivering multiple enhancements ahead of schedule and coordinating with other teams to resolve critical issues', 'Principal: Awarded 2025 for handling and solving multiple issues simultaneously'],
						},
						{
							title: 'Delivery Excellence Award',
							icon: '🏆',
							features: ['Awarded consecutively for two years(2023&2024) for consistent quality production releases without issues and commitment to timelines'],
						},
						{
							title: 'Cost Optimization',
							icon: '⚙️',
							features: ['Achieved significant cost savings by optimizing AWS and presenting actionable insights to stakeholders.'],
						},
						{
							title: 'Contribution to Open source',
							icon: '💡',
							features: ['Have released a package to maven as well as helped in different projects in open source'],
						}
					].map((category) => (
						<div key={category.title} className="group bg-white p-6 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow-md">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-600 group-hover:text-gray-700 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
