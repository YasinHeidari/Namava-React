import { lazy, Suspense } from "react";
import SpinnerLoading from "../../Loading/SpinnerLoading";
 
const LazyMainLaoder = lazy(() => { import('../../Main')});
export default function LazyMain(){
    <Suspense fallback={<SpinnerLoading/>}>
        <LazyMainLaoder/>
    </Suspense>
}