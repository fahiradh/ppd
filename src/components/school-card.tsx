import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface SchoolCardProps {
  name: string
  image: string
  reviewCount: number
  href: string
}

export function SchoolCard({ name, image, reviewCount, href }: SchoolCardProps) {
  return (
    <Link href={href}>
      <Card className="w-[280px] overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[200px]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{reviewCount} reviews</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

