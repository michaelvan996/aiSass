// import Image from 'next/image'
import  { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashBoardPage() {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
