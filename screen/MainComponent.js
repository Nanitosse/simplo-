import { useState } from "react";
import { IMAGES } from "../shared/imageArray";
import DirectoryScreen from './DirectoryScreen'


const MAin = () =>{
    const [images, setImages]= useState(IMAGES);
    
    return <DirectoryScreen  images={images}/>; 
    
};

export default MAin;
