import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          Featured Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: 'cloud-circuitbreaker',
              description:
                ' A distributed, cloud-native circuit breaker library published to maven central for AWS-based systems, with Spring Boot support and DynamoDB backend.',
              github: 'https://github.com/clinton1719/cloud-circuitbreaker',
              maven:
                'https://central.sonatype.com/artifact/io.github.clinton1719/cloud-circuitbreaker-starter',
              metrics: {
                'For cross-cutting concerns': 'AOP',
                'For persistence': 'DynamoDb SDK',
                'For non-spring java projects(annotation alternative)':
                  'Lambda Wrappers',
              },
              techDetails: [
                'Work across instances and containers (e.g., ECS, EKS, Lambda)',
                'Use DynamoDB as a centralized, low-latency state store',
                'Support method-level annotations for fast adoption in Spring Boot',
                'Be configurable via environment variables or YAML',
                'Keep cold starts fast for AWS Lambda environments',
              ],
              image: '/circuitBreaker.png',
            },
            {
              title: 'Github-Profile-Search-App',
              description:
                'ReactJS based simple UI for searching user profiles',
				github: 'https://github.com/clinton1719/Github-Profile-Search-App',
              metrics: {
                'For building clean user interface': 'ReactJS',
                'For managing state': 'Context API',
              },
              techDetails: [
                'Fetch API / Axios for data fetching',
                'Component-based architecture',
                'Conditional rendering',
                'Error handling for API requests',
                'Basic form handling and input validation',
              ],
              image: '/code.jpg',
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {project.description}
                  </p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.5 7.5" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L14.5 16.5" />
                      </svg>
                      Github
                    </a>
                  )}
                  {project.maven && (
                    <>
                      &nbsp; &nbsp; &nbsp;
                      <a
                        href={project.maven}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.5 7.5" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L14.5 16.5" />
                        </svg>
                        Maven
                      </a>
                    </>
                  )}

                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      Technology used
                    </h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-600">▹</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-gray-100 via-transparent to-transparent lg:via-gray-50/20 lg:to-gray"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
