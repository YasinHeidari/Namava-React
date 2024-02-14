import { useState , useEffect} from "react";
import { axios } from "axios";

export default function SliderMovie(){
    const {data, setData} = useState();
    const [item , setItem] = useState({});


    useEffect(() => {
        axios.get().then(function (response){
            SVGTextPositioningElement(response.data) //the data part maybe it should change
        })
    })
}