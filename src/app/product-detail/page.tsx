import { Suspense } from "react";
import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductDetail(){
    return (
        <div>
        <h1>Product Details</h1>
        
         <Suspense fallback = {<p>Loading Product Detail...</p>}>
            <Product/>
        </Suspense>

        <Suspense fallback = {<p>Loading Reviews ...</p>}>
            <Reviews/>
        </Suspense>

        </div>
    )
}