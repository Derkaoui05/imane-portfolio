
import * as React from 'react'
import { Card, CardContent } from "./ui/card"

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Create responsive and dynamic websites tailored to your needs."
  },
  {
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications."
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and visually appealing user interfaces."
  },
  {
    title: "Cloud Solutions",
    description: "Implement and manage scalable cloud infrastructure."
  },
  {
    title: "Data Analytics",
    description: "Extract insights from your data to drive business decisions."
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security measures."
  },
]

export default function InfiniteMovingCards({
  speed = 25,
  direction = 'left'
}: {
  speed?: number
  direction?: 'left' | 'right'
} = {}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  React.useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-duration',
        `${speed}s`
      )
    }
  }

  return (
    <div
      ref={containerRef}
      className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
      >
        {services.map((service, idx) => (
          <li key={idx} className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]">
            <Card>
              <CardContent className="pt-4">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}