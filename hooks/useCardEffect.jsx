import { useState, useEffect } from "react";
import React from "react";

export const useCardEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('');
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    if (isHovered) {
      const updateMousePosition = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      };
      window.addEventListener('mousemove', updateMousePosition);
      return () => window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [isHovered]);

  useEffect(() => {
    if (isHovered) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const rotateX = (mouseY - cardCenterY) / 10;
      const rotateY = (mouseX - cardCenterX) / 10;
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    } else {
      setTransform('');
    }
  }, [isHovered, mouseX, mouseY]);

  const cardRef = React.createRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return [ transform, cardRef,  handleMouseEnter, handleMouseLeave ]
}
