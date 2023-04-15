import classes from "./PortfolioGallery.module.css";
import portfolioList from "../portfolioList";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function PortfolioGallery(props) {
   const [activeSlide, setSlide] = useState(0);

   // navigazione galleria

   function nextStep() {
      if (activeSlide === props.images.length - 1) {
         setSlide(0);
      } else {
         setSlide(activeSlide + 1);
      }
   }

   function prevStep() {
      if (activeSlide === 0) {
         setSlide(props.images.length - 1);
      } else {
         setSlide(activeSlide - 1);
      }
   }

   return (
      <div className={classes.galleryContainer}>
         {/* <div className={classes.portfolioTitle}>
            <h3>{props.title}</h3>
         </div> */}

         {/* -------------------- BACKBUTTON -------------------- */}

         {/* <div className={classes.backButtonContainer}>
            <Link href="/#portfolio">
               <button className={classes.backButton}>
                  <RiArrowGoBackFill className={classes.backArrow} />
                  Dipinti
               </button>
            </Link>
         </div> */}

         {/* -------------------- PREVIOUS ARROW -------------------- */}

         <button className={classes.previousButton} onClick={prevStep}>
            <MdOutlineArrowBackIos className={classes.previousArrow} />
         </button>

         {/* -------------------- NEXT ARROW -------------------- */}

         <button className={classes.nextButton} onClick={nextStep}>
            <MdOutlineArrowForwardIos className={classes.nextArrow} />
         </button>

         {/* -------------------- IMAGE AND CAPTION -------------------- */}

         <div className={classes.imageContainer}>
            <Image
               className={classes.mainImage}
               src={props.images[activeSlide].path}
               width={2000}
               height={1000}
               quality={100}
               alt={props.images[activeSlide].paintTitle}
            />
         </div>
         <div className={classes.caption}>
            <h2 className={classes.paintTitle}>
               {[activeSlide + 1]}
            </h2>
         </div>
      </div>
   );
}

export default PortfolioGallery;
