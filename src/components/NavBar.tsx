import Link from 'next/link';

function Navi() {
  return (    

  <div className='navbar'>


        <Link className="pr_link hover-3" href="/">Home</Link>
    
          <Link className="seg_link hover-3" href="#projects">Projects</Link>
          <Link className="ter_link hover-3" href="#contact">Contact</Link>
          
          <Link className="cuarto_link hover-3" href="aboutme">About me</Link>
           
  </div>
   
      
  );
}

export default Navi;
