export interface Testimonial {
  id: number
  name: string
  project: string
  content: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Khushal',
    project: 'Project RAKSHA',
    content: 'EmbedDuo helped us design a custom PCB for our security product Project RAKSHA. Their attention to detail and commitment were outstanding.'
  },
  {
    id: 2,
    name: 'Het Patel',
    project: 'Attendance System',
    content: 'They built a seamless Linux-based authentication system for our attendance integration. Reliable, scalable and exactly what we needed.'
  },
  {
    id: 3,
    name: 'Urmil Prajapati',
    project: 'RAW BOTS',
    content: 'From schematic to final PCB, EmbedDuo delivered a high-quality STM32-based board for our company project. Great communication and support.'
  }
]