import React from 'react';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-background-dark opacity-10">
        <div className="grid-overlay animate-pulse-slow"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
          { icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
          { icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
          { icon: '♨️', delay: '3s', position: 'bottom-20 right-1/4' },
        ].map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float opacity-50`}
            style={{ animationDelay: item.delay }}
          >
            <span className="text-4xl">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Name Section */}
          <div className="relative inline-block px-4 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
            <h1 className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 pb-2">
              Clinton Fernandes
            </h1>
          </div>
          {/* Role & Description */}
          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
                <h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-600">
                  Software Engineer
                </h2>
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
              </div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl px-4 sm:px-0">
                Results-driven Senior Software Engineer with 5+ years of
                experience building scalable, cloud-native systems using Java,
                Spring Boot, and AWS Serverless. I’ve led cost-optimization
                efforts cutting cloud spend by up to 30%, contribute to open
                source, and share engineering insights through technical blogs
                on system design, Java, and AWS.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
              {['Java', 'ReactJs', 'Spring Boot', 'AWS', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
              <span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
                View My Work
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
              <span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
                Get in Touch
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 84.04"
                >
                  <title>call-message</title>
                  <path d="M34.11,3h83a5.8,5.8,0,0,1,5.79,5.79V70.27a5.76,5.76,0,0,1-1,3.25,2.32,2.32,0,0,1-.55.82,2.2,2.2,0,0,1-.54.38,5.78,5.78,0,0,1-3.7,1.35H68a15.44,15.44,0,0,0,.42-4.45h47.22L84.8,39.23,74.62,47.91h0a2.22,2.22,0,0,1-2.84,0L61.1,39.23h0l-9.69,9.71A12.4,12.4,0,0,0,47,47.07L57.64,36.41,37.91,20.32a14,14,0,0,0-.68-3.42l-.79-3.49L73.15,43.34,115.26,7.46H35.11L34.11,3ZM17.46,31a61.46,61.46,0,0,0,4.73,14.91A51.89,51.89,0,0,0,32.61,60.48a1.47,1.47,0,0,0,1.17.45,5.31,5.31,0,0,0,2-.67,17.91,17.91,0,0,0,2.1-1.36c3.14-2.18,7-4.89,10.29-1.85.08.07.12.14.2.2L58.84,68.78a1.13,1.13,0,0,1,.1.13,6.09,6.09,0,0,1,.79,5.77,14.31,14.31,0,0,1-3.94,5.76,13.76,13.76,0,0,1-7.94,3.46,29.8,29.8,0,0,1-8.28-.4,27.16,27.16,0,0,1-11.31-4.73,54.16,54.16,0,0,1-9.86-9.43l-.24-.29c-1.52-1.8-3.16-3.73-4.69-5.88A78.72,78.72,0,0,1,1,34.34C-.72,25.59-.37,16.85,3.33,9.62c2-4,5.06-7.2,9-8.69,3.44-1.32,7.51-1.34,12.13.63a1.67,1.67,0,0,1,1,1.24l3.73,16.58a4.57,4.57,0,0,1-.82,4.88,9.43,9.43,0,0,1-4.29,2.5c-.56.24-1.21.45-1.9.67-2.27.74-4.86,1.61-4.73,3.65v0Zm70.72,5.33,30.26,31.73V10.58L88.18,36.36Z" />
                </svg>
              </span>
            </a>
            <a
              href="https://clinton1719.github.io/clinton-blogs/"
              target="_blank"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
              <span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
                Read my blogs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 122.88 90.02"
                >
                  <path
                    d="M0 8.62c17.28-10.66 34.96-12.3 53.26 0v79.64c-12.65-9.37-31.03-8.24-53.26 0V8.62zm59.09.2h5.28c1.08 0 1.96.88 1.96 1.95v77.29c0 1.08-.88 1.96-1.96 1.96h-5.28a1.97 1.97 0 01-1.96-1.96V10.77c.01-1.07.89-1.95 1.96-1.95zm63.79-.2c-17.28-10.66-34.97-12.3-53.27 0v79.64c12.65-9.37 31.03-8.24 53.27 0V8.62z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <br />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
        <span className="text-gray-600 text-sm mb-2 text-center">
          Scroll to know me more
        </span>
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};
