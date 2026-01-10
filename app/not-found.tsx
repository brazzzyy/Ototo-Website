import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
            <div className="flex flex-col items-center max-w-lg">
                <h1 className="font-league text-7xl font-bold md:text-8xl lg:text-9xl text-gray-900">
                    404
                </h1>
                
                <span className="font-lexend mb-6 text-xl md:text-2xl font-medium">
                    This page is outside of the universe
                </span>
                <p className="font-lexend font-light text-sm md:text-base px-2">
                    The page you are trying to access doesn't exist or has been moved.
                </p>
                <p className="font-lexend font-light mb-8 text-sm md:text-base">
                    Try going back to our homepage
                </p>
                <Link 
                    href="/" 
                    className="font-lexend inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-base font-medium text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                    Go Back
                </Link>
            </div>
        </div>
    )
}