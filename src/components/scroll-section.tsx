import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface ScrollSectionProps {
  title: string
  children: React.ReactNode
}

export function ScrollSection({ title, children }: ScrollSectionProps) {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {children}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-white shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-white shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

