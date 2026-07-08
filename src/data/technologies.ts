export interface TechnologyCategory {
  id: string
  title: string
  items: string[]
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['C', 'Embedded C', 'C++', 'Python', 'JavaScript', 'DSA']
  },
  {
    id: 'microcontrollers',
    title: 'Microcontrollers & SBCs',
    items: ['STM32', 'ESP32', 'Arduino GIGA', 'BeagleBone Black', 'Raspberry Pi']
  },
  {
    id: 'embedded-linux',
    title: 'Embedded Linux',
    items: ['Yocto Project', 'BSP Development', 'Device Tree', 'Linux Boot Flow', 'Cross Compilation', 'Shell Scripting']
  },
  {
    id: 'communication',
    title: 'Communication Interfaces',
    items: ['UART', 'RS485', 'RS232', 'SPI', 'I2C', 'CAN', 'PWM']
  },
  {
    id: 'development-tools',
    title: 'Development Tools',
    items: ['STM32CubeIDE', 'VS Code', 'Arduino IDE', 'Git', 'GitHub', 'Ubuntu']
  },
  {
    id: 'containerization',
    title: 'Containerization',
    items: ['Docker', 'Dockerfile Authoring']
  },
  {
    id: 'robotics-automation',
    title: 'Robotics & Automation',
    items: ['Motion Control Firmware', 'HMI Development', 'BLDC Motor Systems', 'Servo Control', 'Differential Drive Systems']
  },
  {
    id: 'pcb-design',
    title: 'PCB & Design',
    items: ['Altium Designer', 'KiCad', 'PCB Layout', 'Circuit Design', 'Hardware Debugging']
  },
  {
    id: 'frameworks-tools',
    title: 'Frameworks & Tools',
    items: ['Flask', 'Node.js', 'Firebase', 'Git', 'Docker', 'Linux', 'FreeRTOS']
  }
]