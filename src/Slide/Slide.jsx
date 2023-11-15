import { useEffect } from 'react';
import './SlideStyle.css';
import image1 from './../image/image1.jpg';
import image2 from './../image/image2.jpg';
import image3 from './../image/image3.jpg';
import { useState } from 'react';
const imagess=[image1,image2,image3];

const Slide = () => {
    const [id,setid] = useState(0);
    useEffect(() => {
        const slide=document.querySelector(".image-slider");
        const arrLift=document.querySelector(".arrow-lift");
        const arrRight=document.querySelector(".arrow-right");
        
        
        function Slider(id){
            slide.style.backgroundImage=`url(./../image/${imagess[id]})`;
        }
        arrLift.addEventListener("click",function(event){
            setid(id-1);
            if(id<0){
                setid(imagess.length-1);
            }
           else{
            setid(imagess.length-1);
           }
            Slider(id);
            console.log(id);

        })
        
        arrRight.addEventListener("click",function(event){
            setid(id+1);
            if(id>imagess.length-1){
                setid(0);
            }
            else{
                setid(0);
            }
         
            console.log(id);
            Slider(id);
        })
    }, [id])



  return (
    <div>
        <section className="image-slider">
        <div className="arrow-lift">
            <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="arrow-right">
            <i className="fa-solid fa-arrow-right"></i>
        </div>
        
    </section>
    </div>
  )
}

export default Slide