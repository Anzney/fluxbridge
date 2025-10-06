"use client";
import React from "react";

export const GeometricBackground = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Geometric polygonal pattern */}
        <g stroke="rgba(120, 180, 255, 0.3)" strokeWidth="1" fill="none">
          {/* Left side triangular patterns */}
          <polygon points="0,0 200,150 50,300" />
          <polygon points="50,300 200,150 300,400" />
          <polygon points="200,150 400,100 300,400" />
          <polygon points="0,400 200,500 100,650" />
          <polygon points="100,650 200,500 350,700" />
          <polygon points="200,500 400,450 350,700" />
          
          {/* Center connecting lines */}
          <line x1="400" y1="100" x2="600" y2="200" />
          <line x1="400" y1="450" x2="600" y2="350" />
          <line x1="300" y1="400" x2="500" y2="300" />
          <line x1="350" y1="700" x2="550" y2="600" />
          
          {/* Right side geometric patterns */}
          <polygon points="800,50 1000,0 1100,200" />
          <polygon points="1000,0 1200,100 1100,200" />
          <polygon points="1100,200 1200,100 1200,300" />
          <polygon points="800,50 1100,200 900,350" />
          <polygon points="900,350 1100,200 1200,400" />
          <polygon points="900,350 1200,400 1000,550" />
          <polygon points="1000,550 1200,400 1200,600" />
          <polygon points="800,650 1000,550 1200,700" />
          <polygon points="1000,550 1200,600 1200,800" />
          
          {/* Additional connecting elements */}
          <polygon points="500,100 700,50 650,250" />
          <polygon points="650,250 700,50 850,150" />
          <polygon points="500,400 700,350 650,550" />
          <polygon points="650,550 700,350 850,450" />
          
          {/* Intersection points and nodes */}
          <circle cx="200" cy="150" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="400" cy="100" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="600" cy="200" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="800" cy="50" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="1100" cy="200" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="300" cy="400" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="500" cy="300" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="700" cy="350" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="900" cy="350" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="350" cy="700" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="650" cy="550" r="3" fill="rgba(120, 180, 255, 0.4)" />
          <circle cx="1000" cy="550" r="3" fill="rgba(120, 180, 255, 0.4)" />
        </g>
        
        {/* Subtle fill areas for depth */}
        <g fill="rgba(120, 180, 255, 0.05)" stroke="none">
          <polygon points="200,150 400,100 300,400" />
          <polygon points="800,50 1100,200 900,350" />
          <polygon points="500,100 700,50 650,250" />
          <polygon points="650,550 700,350 850,450" />
        </g>
      </svg>
    </div>
  );
};
