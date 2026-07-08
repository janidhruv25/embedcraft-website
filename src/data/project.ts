export interface Project {
  id: number
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  slug: string
  highlights?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Embedded Linux System for Patient Management',
    category: 'Embedded Systems',
    description: 'Architected a priority-queue-based Patient Management System in C with dynamic runtime memory allocation, supporting concurrent multi-patient record handling on resource-constrained hardware.',
    technologies: ['C', 'Yocto', 'Docker', 'Embedded Linux'],
    image: '/images/projects/patient-management.png',
    slug: 'patient-management-system',
    highlights: [
      'Priority-queue-based system in C',
      'Dynamic runtime memory allocation',
      'Yocto build pipeline with Docker',
      '1-hour reproducible builds'
    ]
  },
  {
    id: 2,
    title: 'Real-Time Medical Waste & General Waste Classification',
    category: 'AI & Computer Vision',
    description: 'Developed a real-time medical and general waste classification system using YOLOv7 object detection on NVIDIA Jetson Orin Nano for low-latency edge AI deployment.',
    technologies: ['YOLOv7', 'Jetson Orin Nano', 'Intel RealSense', 'Python', 'Deep Learning', 'Edge AI'],
    image: '/images/projects/waste-classification.png',
    slug: 'waste-classification',
    highlights: [
      'YOLOv7 object detection',
      'NVIDIA Jetson Orin Nano deployment',
      'Intel RealSense depth camera',
      'Live monitoring dashboard'
    ]
  },
  {
    id: 3,
    title: 'Multi-Port RF Switch for Antenna Characterization',
    category: 'RF Design',
    description: 'Designed and simulated a high-frequency (~40 GHz) multiport RF switch for automated antenna testing at ISRO SAC, enabling precise multibeam antenna characterization in CATR. The system supports scalable switching architecture for advanced antenna measurement applications.',
    technologies: ['RF Design', 'STM32', 'KiCad', 'GaAs MMIC', '40 GHz'],
    image: '/images/projects/rf-switch.png',
    slug: 'rf-switch-system',
    highlights: [
      '40 GHz multiport RF switch',
      'ISRO SAC antenna testing',
      'STM32 bare-metal firmware',
      'KiCad PCB design',
      'CATR multibeam characterization'
    ]
  },
  {
    id: 4,
    title: 'Automated Guided Vehicle (AGV) – SSIP Funded',
    category: 'Robotics',
    description: 'Engineered a spur-drive AGV with 120kg payload capacity for industrial material handling, implementing closed-loop motion control on Arduino Mega.',
    technologies: ['Arduino Mega', 'Motion Control', 'Mobile App', 'IoT'],
    image: '/images/projects/agv.png',
    slug: 'automated-guided-vehicle',
    highlights: [
      '120kg payload capacity',
      'Closed-loop motion control',
      'Arduino Mega platform',
      'Mobile app for remote operation'
    ]
  }
]