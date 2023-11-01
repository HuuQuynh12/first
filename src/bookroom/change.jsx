
import { useState } from "react";
const Change = (props) => {
    const {item, index} = props;

      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === Object.keys(item).length - 5 ? 0 : prevIndex + 1
        );
    
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? Object.keys(item).length - 5 : prevIndex - 1
        );
      };
     
     const handleShow = () =>{
        var btn = document.getElementsByClassName('mybtn')[index];
        
          btn.classList.add('show');
          
        
        
     };
     const handleHidden = () =>{
      var btn = document.getElementsByClassName('mybtn')[index];
      
        btn.classList.remove('show');
      
   };
   
   
  

      return (
        <>
        
        <div className="mt-10 w-full h-full " onMouseOver={handleShow} onMouseLeave={handleHidden}>
        
          <div className="relative w-full h-72">
            <img
              className="w-full h-full object-cover rounded"
              src={Object.values(item)[currentIndex]}
              
            />
            <div className="mybtn absolute inset-0 flex items-center justify-between hidden ">
              <button
               
                
                className=" text-black bg-white hover:bg-gray-700 p-2 rounded-full"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className=" text-black bg-white hover:bg-gray-700 p-2 rounded-full"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
         

          <div >
            <h3 className="font-bold truncate">{item.content}</h3>
            <h2>{item.distance}</h2>
            <h2>{item.date}</h2>
            <div><span className="font-bold">{item.price}</span>/ đêm</div>
        </div>
        </div>
      

        

      
      
       </>
      );
}
export default Change;