import React, { useEffect, useRef } from "react";
import "../../css/sliders/SliderShow.css";
import CoursePreview from "../cards/CoursePreview";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const SlideShow = ({ courses }) => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const nextSlide = () => {
        //Comprobar si hay elementos
        if (slideshow.current.children.length > 0) {
            //Obtener el primer elemento
            const firstElement = slideshow.current.children[0];
            //Establecer la transición
            slideshow.current.style.transition = `500ms ease-out all`;
            const slideSize = slideshow.current.children[0].offsetWidth;
            // Mover slideshow
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                //Reiniciar la posicion del slideshow
                slideshow.current.style.transition = "none";
                slideshow.current.style.transform = `translateX(0)`;

                //
                slideshow.current.appendChild(firstElement);

                slideshow.current.removeEventListener(
                    "transitionend",
                    transition
                );
            };
            //Event listener
            slideshow.current.addEventListener("transitionend", transition);
        }
    };

    const previousSlide = () => {

        if (slideshow.current.children.length > 0) {
            const index = slideshow.current.children.length - 1;
            const lastElement = slideshow.current.children[index];
            slideshow.current.insertBefore(
                lastElement,
                slideshow.current.firstChild
            );
            const slideSize = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transition = "none";
            slideshow.current.style.transform = `translate(-${slideSize}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `500ms ease-out all`;

                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            nextSlide()
        }, 4000);

        //
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        })

        //
        slideshow.current.addEventListener("mouseleave", () => {
            intervaloSlideshow.current = setInterval(() => {
                nextSlide();
            }, 4000);
        });
    }, [])


    return (
        <div className="SliderShow">
            <div className="SlideContainer" ref={slideshow}>
                {courses.map((course, index) => (
                    <div className="SlideCourse" key={index}>
                        <CoursePreview
                            backgroundImage={course.backgroundImage}
                            course={course.course}
                            number={course.number}
                        />
                    </div>
                ))}
            </div>
            <div className="SlideControls">
                <IoArrowBack className="Control" onClick={previousSlide} />
                <IoArrowForward className="Control" onClick={nextSlide} />
            </div>
        </div>
    );
};

export default SlideShow;
