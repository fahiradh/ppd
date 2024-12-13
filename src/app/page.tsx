import { ScrollSection } from "@/components/scroll-section"
import { SchoolCard } from "@/components/school-card"
import { DormCard } from "@/components/dorm-card"

const popularSchools = [
  {
    name: "BU",
    image: "/placeholder.svg?height=200&width=280",
    reviewCount: 416,
    href: "/schools/bu"
  },
  {
    name: "Northeastern",
    image: "/placeholder.svg?height=200&width=280",
    reviewCount: 362,
    href: "/schools/northeastern"
  },
  {
    name: "UCR",
    image: "/placeholder.svg?height=200&width=280",
    reviewCount: 223,
    href: "/schools/ucr"
  },
  {
    name: "Cornell",
    image: "/placeholder.svg?height=200&width=280",
    reviewCount: 182,
    href: "/schools/cornell"
  },
  {
    name: "USC",
    image: "/placeholder.svg?height=200&width=280",
    reviewCount: 152,
    href: "/schools/usc"
  }
]

const popularDorms = [
  {
    name: "Warren Towers",
    university: "Boston University",
    image: "/placeholder.svg?height=200&width=280",
    rating: 4,
    reviewCount: 86,
    href: "/dorms/warren-towers"
  },
  {
    name: "Pentland Hills",
    university: "UC Riverside",
    image: "/placeholder.svg?height=200&width=280",
    rating: 4,
    reviewCount: 73,
    href: "/dorms/pentland-hills"
  },
  {
    name: "East Lothian",
    university: "UC Riverside",
    image: "/placeholder.svg?height=200&width=280",
    rating: 3.5,
    reviewCount: 44,
    href: "/dorms/east-lothian"
  },
  {
    name: "Bay State Road Brownstones",
    university: "Boston University",
    image: "/placeholder.svg?height=200&width=280",
    rating: 4,
    reviewCount: 39,
    href: "/dorms/bay-state-road"
  },
  {
    name: "South Campus",
    university: "Boston University",
    image: "/placeholder.svg?height=200&width=280",
    rating: 4,
    reviewCount: 35,
    href: "/dorms/south-campus"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ScrollSection title="Popular Schools">
        {popularSchools.map((school) => (
          <SchoolCard key={school.name} {...school} />
        ))}
      </ScrollSection>
      
      <ScrollSection title="Popular Dorms">
        {popularDorms.map((dorm) => (
          <DormCard key={dorm.name} {...dorm} />
        ))}
      </ScrollSection>
    </main>
  )
}

