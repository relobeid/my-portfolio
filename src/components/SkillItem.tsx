'use client';

import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';

interface SkillItemProps {
  name: string;
  icon: string;
  bgColor?: string;
  iconClass?: string;
  initial?: MotionProps['initial'];
  animate?: MotionProps['animate'];
  transition?: MotionProps['transition'];
}

const SkillItem = ({ name, icon, bgColor = 'bg-gray-800', iconClass = 'object-contain', initial, animate, transition }: SkillItemProps) => {
  return (
    <motion.div
      className={`${bgColor} p-4 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200 backdrop-blur-sm`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="relative w-12 h-12 mb-2">
        <Image
          src={icon}
          alt={name}
          fill
          className={iconClass}
          sizes="48px"
        />
      </div>
      <span className="text-sm font-medium text-white text-center">{name}</span>
    </motion.div>
  );
};

export default SkillItem; 