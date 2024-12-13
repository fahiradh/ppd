import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "./star-rating"

interface DormCardProps {
  name: string
  university: string
  image: string
  rating: number
  reviewCount: number
  href: string
}

export function DormCard({ name, university, image, rating, reviewCount, href }: DormCardProps) {
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
            <p className="text-sm text-gray-600 mb-2">{university}</p>
            <div className="flex items-center gap-2">
              <StarRating rating={rating} />
              <span className="text-sm text-gray-600">{reviewCount} Reviews</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

