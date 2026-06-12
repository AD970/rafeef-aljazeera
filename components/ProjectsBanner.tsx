'use client'
import { Variants,motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { title } from 'process'
import React from 'react'
import ButtonProjects from './ui/ButtonProjects'

type Props = {}

function ProjectsBanner({}: Props) {

  const project = {
    title: "قم برؤية ابداعنا على ارض الواقع",
    description: "اكتشف مشاريعنا المتميزة التي تجسد التزامنا بالجودة والابتكار في مجال المقاولات والإنشاءات. من الفلل الفاخرة إلى المباني التجارية، نقدم لك لمحة عن أعمالنا الرائدة التي تعكس رؤيتنا في بناء مستقبل أفضل.",
    logo: "logo.png"
  }

   const cardVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className='min-h-screen p-8' style={{ backgroundImage: 'url(/projects/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <motion.div
                
                variants={cardVariants}
                className="group relative p-8 min-h-[400px] gap-4  max-w-md  bg-[#e8a72f] cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">

                {/* Image with zoom on group hover */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.logo}
                    alt={project.logo}
                    className="h-12 w-12"
                  />
                </div>
                <h1 className='text-2xl font-bold text-white'>
                  {project.title}
                </h1>
                <p className='text-white/80 '>{project.description}</p>
                </div>
               <motion.a
                                href="/portfolio"
                                className="inline-flex items-center gap-2 font-semibold mt-6  transition-colors group"
                                whileHover={{ x: 5 }}
                              >
                                <span className='group-hover:text-primary'>رؤية المشاريع</span>
                                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 group-hover:text-primary transition-transform" />
                              </motion.a>
                              

              </motion.div>
    
    </div>
  )
}

export default ProjectsBanner