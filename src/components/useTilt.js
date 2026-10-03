import { useRef } from 'react';
import { useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

const DEFAULT_MAX = 12;
const DEFAULT_SCALE = 1.02;
const DEFAULT_PERSPECTIVE = 1000;
const SPRING = { stiffness: 260, damping: 20, mass: 0.6 };

export const useTilt = ({
  max = DEFAULT_MAX,
  scale = DEFAULT_SCALE,
  perspective = DEFAULT_PERSPECTIVE,
} = {}) => {
  const container = useRef(null);
  const reduceMotion = useReducedMotion();

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const active = useMotionValue(0);

  const rotateXTarget = useTransform(offsetY, [-0.5, 0.5], [max, -max]);
  const rotateYTarget = useTransform(offsetX, [-0.5, 0.5], [-max, max]);
  const scaleTarget = useTransform(active, [0, 1], [1, scale]);

  const rotateX = useSpring(rotateXTarget, SPRING);
  const rotateY = useSpring(rotateYTarget, SPRING);
  const cardScale = useSpring(scaleTarget, SPRING);

  const isTrackable = (event) =>
    !reduceMotion && event.pointerType !== 'touch' && event.pointerType !== '';

  const track = (event) => {
    const element = container.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    offsetX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    offsetY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const onPointerEnter = (event) => {
    if (!isTrackable(event)) return;
    active.set(1);
    track(event);
  };

  const onPointerMove = (event) => {
    if (!isTrackable(event)) return;
    track(event);
  };

  const reset = () => {
    offsetX.set(0);
    offsetY.set(0);
    active.set(0);
  };

  return {
    ref: container,
    transformPerspective: perspective,
    rotateX,
    rotateY,
    scale: cardScale,
    onPointerEnter,
    onPointerMove,
    onPointerLeave: reset,
    onPointerCancel: reset,
  };
};