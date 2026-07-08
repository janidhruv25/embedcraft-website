export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
  details: string[]
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We listen, analyze and understand your idea.',
    icon: '🎯',
    details: [
      'Deep dive into your requirements',
      'Feasibility analysis',
      'Technology selection',
      'Project roadmap planning'
    ]
  },
  {
    number: '02',
    title: 'Design',
    description: 'Schematic, architecture and system planning.',
    icon: '📐',
    details: [
      'System architecture design',
      'Schematic capture',
      'Component selection',
      'PCB layout planning'
    ]
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Hardware design and firmware development.',
    icon: '⚡',
    details: [
      'Hardware development',
      'Firmware coding',
      'Integration testing',
      'Iterative refinement'
    ]
  },
  {
    number: '04',
    title: 'Test',
    description: 'Rigorous testing and performance validation.',
    icon: '🧪',
    details: [
      'Functional testing',
      'Performance benchmarking',
      'Reliability testing',
      'Bug fixing & optimization'
    ]
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Prototype delivery and ongoing support.',
    icon: '🚀',
    details: [
      'Final prototype delivery',
      'Documentation',
      'Deployment support',
      'Maintenance & updates'
    ]
  }
]