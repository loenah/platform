import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import book4 from '../assets/book4.jpg';
import books from '../assets/books.jpg';
import { useEffect, useState } from 'react';
import "./login.css";

function Login() {
    const ImageList = [book2,
                   book3,
                   book4,
                   books
                  ]
    const [pic, setPic] = useState(0);
    useEffect(() => {
        //start timer
        const timer = setInterval(() =>
        {
          //update pic
          setPic((prev) =>(prev + 1) % ImageList.length);
        },2000)
        
        //cleanuptimer
        return () =>clearInterval(timer)
}, []//only run once (dependency array)
    
    );
    
    let Image = ImageList[pic];
    

  return (
      <>
          <div className="login-page"
              style={{ backgroundImage: `url(${Image})`}}>
              
          </div>
    </>
  );
}

export default Login;
