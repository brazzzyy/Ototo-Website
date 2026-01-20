import Image from "next/image";

export default function About() {
    return (
        <section className="container mx-auto px-4 py-12 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 mb-15">
                <div className="w-full max-w-125 shrink-0">
                    <Image 
                        src={"/ototo_inside2.JPEG"}
                        alt="Yia Thao, owner of Ototo"
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg shadow-sm"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-5 w-full max-w-2xl lg:w-1/2 font-league text-lg md:text-xl font-light">
                    <h1 className="font-medium text-4xl md:text-5xl text-center lg:text-left mb-2">
                        About Owner
                    </h1>
                    
                    <p>
                        Yia Thao is the proud owner of Ototo and stepped into ownership in September 2025 under 
                        new management. Her decision to take on the restaurant was driven by a genuine love for cooking and a belief 
                        that food has the power to bring people together in meaningful ways. For Yia, meals are more than something to be served. 
                        They are moments that create connection and leave a lasting impression.
                    </p>
                    <p>
                        Cooking has always been close to Yia’s heart. It is how she expresses care and creates a sense of 
                        belonging for others. Growing up surrounded by shared meals and time spent in the kitchen shaped her appreciation 
                        for food as a central part of culture and community. That foundation continues to influence how Ototo is run today, 
                        from the atmosphere of the space to the way each dish is prepared and presented.
                    </p>
                    <p>
                        Since taking over Ototo, Yia has focused on creating a welcoming environment where guests feel 
                        comfortable returning again and again. She is passionate about offering food that feels familiar yet thoughtful, 
                        and about building a place where people can gather, slow down, and enjoy time together. As Ototo continues to grow, 
                        Yia remains excited about what lies ahead and is grateful for the support of the community that makes it all possible.
                    </p>
                </div>
            </div>
        </section>
    );
}