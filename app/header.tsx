import Image from "next/image";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="head">

      <div className="navlogo">
            <Image 
              src="/logo.png" // Ensure the image is inside `public/`
              alt="Logo"
              width={0} 
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              priority 
            />
      </div>  
    
    
      <div className="info">
        <span>Office<a href="tel:(626) 338-7773">(626) 338-7773</a></span>
        <span>Fax<a href="tel:(866) 497-6338">(866) 497-6338</a></span>
        <span>Fax<a href="tel:(866) 497-6338">(866) 497-6338</a></span>
        <span>818 W Cameron Ave</span>
        <span>West Covina, CA 91790</span>
        
      </div>
    </header>
  );
}
