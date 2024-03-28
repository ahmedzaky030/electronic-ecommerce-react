import ElectronicsBG from  '../assets/image1.jpg';

export function Home(){
    return (
        <main className="flex items-center justify-center min-h-screen  w-full border-b-gray-200">
            <div style={{'--background-image':ElectronicsBG}} className="w-1/4 bg-[url(--background-image)] 
            flex flex-col justify-center items-center ">
                <h3 className="text-2xl m-4">
                    Welcome to ElectroCreate Store
                </h3>
                <p className="text-wrap m-2">
                    A leader market electronics part Store which helps you to convert your ideas to
                    a wonderful gadgets and projects.
                </p>
                <div className="flex justify-evenly items-center ">
                    <button className="m-x-4 p-4 rounded-full bg-red-600 text-white">Start Shopping</button>
                    <button className="m-x-4 p-4 rounded-full bg-blue-300 text-white">Ask Consultant</button>
                </div>
            </div>
        </main>
    )
        
    
}

