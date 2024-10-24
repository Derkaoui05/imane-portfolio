import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Button } from './ui/button'
import { Coffee, Code2 } from 'lucide-react'

export default function HeroTypewriter() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => setIsVisible(true), [])

  useEffect(() => {
    if (isVisible) controls.start('visible')
  }, [isVisible, controls])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  return (
    <section
      className="
       flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-8 sm:mt-28 mt-20
      "
    >
      <motion.div
        className="max-w-3xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Heading */}
        <motion.h1
          className="
            text-5xl sm:text-6xl font-extrabold mb-6 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-black to-gray-800
            dark:from-blue-400 dark:via-purple-400 dark:to-pink-500
          "
          variants={fadeIn}
        >
          <TypeAnimation
            sequence={[
              'Hi there!',
              1500,
              "I'm Imane,",
              2000,
              "Java Developer & Code Enthusiast",
              3000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300"
          variants={fadeIn}
        >
          Building powerful Java applications and tackling complex challenges every day.
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex justify-center gap-4" variants={fadeIn}>
          <Button variant="default" size="lg" className="group">
            <Code2 className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            View Projects
          </Button>
          <Button variant="secondary" size="lg" className="group">
            <Coffee className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
