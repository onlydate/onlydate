import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center justify-center p-4">
      {/* Light bulb with glow effect */}
      <div className="relative mb-8">
        <div className="w-6 h-16 bg-black rounded-t-sm mx-auto" /> {/* Cord */}
        <div className="w-16 h-16 bg-white rounded-full animate-pulse" style={{
          boxShadow: '0 0 40px 20px rgba(255, 255, 255, 0.3)'
        }} />
      </div>

      {/* Text content */}
      <div className="text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-widest mb-4">
          STAY TUNED
        </h2>
        <div className="text-white text-5xl md:text-7xl font-bold" style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          DATING
        </div>
        <div className="text-white text-5xl md:text-7xl font-bold flex items-center justify-center gap-4" style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          SOON
          <span className="text-4xl">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;