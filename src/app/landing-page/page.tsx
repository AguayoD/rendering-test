import {Navbar} from "@/components/navbar";

export default function LandingPage(){
   console.log(`Navbar rendered`);
    return (
        <>
            <Navbar/>
                <main>
                    <h1>Page heading</h1>
                </main>
        </>
    );
}