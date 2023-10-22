"use client";

import { ArrowRight, BookImage, CodeIcon, CodepenIcon, FileCode, ListMusic, MessageSquarePlus, VideotapeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
const tools = [
  {
    label: "Chat",
    icon: MessageSquarePlus,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/conversation"
  },
  {
    label: "Image",
    icon: BookImage,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/image"
  },
  {
    label: "Video",
    icon: VideotapeIcon,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/video"
  },
  {
    label: "Music",
    icon: ListMusic,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/video"
  },
  {
    label: "Code",
    icon: FileCode,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/code"
  }
]

export default function DashBoardPage() {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Immerse into AI world!
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Explore the wisdom of Odin - The smartest AI alive
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pinter"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  )
}
