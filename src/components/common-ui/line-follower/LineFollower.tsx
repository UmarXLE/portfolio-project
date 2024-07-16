// src/LineFollower.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LineFollower = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e:any) => {
      gsap.to(lineRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        ref={lineRef}
        style={{
          width: '10px',
          height: '10px',
          background: 'linear-gradient(45deg, #ff6b6b, #f06595)',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          borderRadius: '50px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      ></div>
    </div>
  );
};

export default LineFollower;
