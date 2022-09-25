import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function useQuestions(){
    console.log("Inside")
    const navigator = new useNavigate();
    const [allQuestions, setAllQuestions] = useState([]);
    useEffect(()=>{
        console.log(allQuestions)
        if(allQuestions.length > 0){
            navigator("/test")
        }
    },[allQuestions])
    // setAllQuestions(allQuestions_)
    console.log(allQuestions)
    return([allQuestions, setAllQuestions])
}

export default useQuestions;