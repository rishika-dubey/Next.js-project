'use client'
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const cardDetails = [
    {
        quote:
        'Joining og our couse is resultant of all the employee and here is some exolain some details',
        name: 'Alexa johnson',
        title: 'web Development'
    },
    {
        quote:
        'Learn with the best tutors for the slected course',
        name: 'Daisy pair',
        title: 'web Design'   
    },
    {
        quote:
        'Have some organiged an dwell maintain behaviour towars others',
        name: 'john the don',
        title: 'web Development'    
    },
    {
        quote:
        'contain all the fibers and significient web despiar',
        name: 'jeck bhadwa',
        title: 'web Development'    
    }
]

function Cards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div
            className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
        />
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our harmony: vocces of success</h2>
        <div className="flex justify-center w-full">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                items={cardDetails}
                direction="right"
                speed="fast" />
            </div>
        </div>
    </div>
  )
}

export default Cards
