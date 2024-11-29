// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
export const Logo = () => {
    return(
        // Image
        <div className="flex items-center -mt-6 -ml-8">
            <Image
                height={80}
                width={80}
                alt="logo"
                src="/logo.jpg"
                className="ml4"
            />
            <style>
                
            </style>
            <p className="ml-[-12px]   text-lg font-bold ">ELearningPath</p>
        </div>
    )
}