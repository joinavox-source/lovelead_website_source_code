import { useRef, useEffect, useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import { animate as animeAnimate } from 'animejs';

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  useAnime = false,
  style = {},
}) {
  const [ref, isInView] = useInView({ threshold: 0.08, once: true });
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);

      if (useAnime && elementRef.current) {
        const props = { opacity: [0, 1] };
        if (direction === 'up') props.translateY = [24, 0];
        else if (direction === 'down') props.translateY = [-24, 0];
        else if (direction === 'left') props.translateX = [24, 0];
        else if (direction === 'right') props.translateX = [-24, 0];

        animeAnimate(elementRef.current, {
          ...props,
          duration: 650,
          delay: delay * 1000,
          ease: 'outQuad',
        });
      }
    }
  }, [isInView, isVisible, delay, direction, useAnime]);

  // Safety fallback: ensure content is always visible after timer so content is never hidden
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 450 + delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationStyles = () => {
    if (useAnime) {
      return {
        ...style,
      };
    }

    let initialTransform = 'translate3d(0, 0, 0)';
    if (!isVisible) {
      if (direction === 'up') initialTransform = 'translate3d(0, 20px, 0)';
      else if (direction === 'down') initialTransform = 'translate3d(0, -20px, 0)';
      else if (direction === 'left') initialTransform = 'translate3d(24px, 0, 0)';
      else if (direction === 'right') initialTransform = 'translate3d(-24px, 0, 0)';
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : initialTransform,
      transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      willChange: 'opacity, transform',
      ...style,
    };
  };

  return (
    <div
      ref={(node) => {
        ref.current = node;
        elementRef.current = node;
      }}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
