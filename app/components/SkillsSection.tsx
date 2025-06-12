import React from 'react';

export const SkillsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              category: 'Programming Languages',
              skills: [
                { name: 'Java', level: 90 },
                { name: 'TypeScript', level: 80 },
                { name: 'MySQL', level: 80 },
                { name: 'HTML/CSS', level: 70 },
              ],
              icon: '📝',
              color: 'from-blue-400 to-blue-600',
            },
            {
              category: 'Frameworks/Technologies',
              skills: [
                { name: 'Spring Boot', level: 90 },
                { name: 'ReactJS & NextJS', level: 85 },
                { name: 'RestAPI', level: 80 },
                { name: 'Hibernate', level: 83 },
              ],
              icon: '⚛️',
              color: 'from-green-400 to-green-600',
            },
            {
              category: 'Cloud (AWS)',
              skills: [
                {
                  name: 'Serverless (Lambda, API Gateway, SQS etc)',
                  level: 95,
                },
                { name: 'CDK', level: 85 },
                { name: 'Cloudwatch Debugging and Observability', level: 80 },
                { name: 'Design Patterns', level: 83 },
              ],
              icon: '🚀',
              color: 'from-purple-400 to-purple-600',
            },
          ].map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900">
          Operational Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              category: 'Tools',
              skills: [
                { name: 'Git', level: 75 },
                { name: 'GitActions', level: 85 },
                { name: 'Podman', level: 55 },
                { name: 'AWS CLI', level: 63 },
              ],
              icon: '🛠️',
              color: 'from-red-400 to-red-600',
            },
            {
              category: 'Architectural',
              skills: [
                { name: 'Event-driven, Serverless and CQRS patterns', level: 70 },
                { name: 'Open Source', level: 65 },
                { name: 'Distributed System Design', level: 80 },
                { name: 'API Gateway & Microservices Design', level: 80 },
                {
                  name: 'Cost-Aware Architecture (AWS Optimization)',
                  level: 70,
                },
              ],
              icon: '🏗️',
              color: 'from-yellow-400 to-yellow-600',
            },
            {
              category: 'Soft Skills',
              skills: [
                {
                  name: 'Communication',
                  level: 90,
                },
                { name: 'Problem-Solving', level: 90 },
                { name: 'Team Collaboration', level: 85 },
                { name: 'Leadership', level: 80 },
              ],
              icon: '🕵️',
              color: 'from-gray-400 to-gray-600',
            },
          ].map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
