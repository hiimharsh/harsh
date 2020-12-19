import React, { Component } from 'react'
import { TweenMax } from 'gsap';
// import { Draggable } from "gsap/Draggable";
import Photohero from './photohero'
import SmoothScroll from './smoothscroll';
import '../assets/css/photography/photography.css'
// gsap.registerPlugin(Draggable);

export default class Photography extends Component {

    contaierRef = null
    sliderRef = null

    componentDidMount () {
        setTimeout(() => {
            TweenMax.to(this.contaierRef, 1, {
                css: {
                    visibility: 'visible'
                }
            });
            // Draggable.create(this.sliderRef.current, {
            //     type: "x",
            //     bounds: {
            //       minX: -this.sliderRef.current.clientWidth + window.innerWidth * 0.88,
            //       maxX: 0
            //     }
            // });
        }, 10);


        // buttons
        var sliderControl = document.querySelector(".slider-control");

        // slides informations
        var slides = document.querySelectorAll(".slide"),
            slidesLength = slides.length;

        // slides array
        var slidesArr = [].slice.call(slides);

        // reverse array sorting
        slidesArr = slidesArr.reverse();

        // slide current
        var slideCurrent = 0;
        let target, next, prev, slide, nextSlide, prevSlide;

        sliderControl.addEventListener("click", function(e){
            target = e.target;
            console.log(slideCurrent, slidesArr.length);
            
            // get next button
            if(target.classList.contains("next") && slideCurrent < slidesArr.length - 1){
            next = e.target
            prev = next.previousElementSibling
            nextSlide = slidesArr[slideCurrent + 1]
            slide = slidesArr[slideCurrent];
            
            slide.classList.add("slide-on");
            slide.classList.remove("text-on");
            nextSlide.classList.add("text-on");
            
            slideCurrent += 1;
            
            if(slideCurrent > 0) {
            prev.classList.remove("disabled");
            }
            
            if(slideCurrent === slidesLength - 1){
            next.classList.add("disabled");
            }
        }
        
        // get prev button
        if(target.classList.contains("prev") && slideCurrent > 0){
            
            slideCurrent -= 1;
            
            prev = e.target
            next = prev.nextElementSibling
            prevSlide = slidesArr[slideCurrent + 1]
            slide = slidesArr[slideCurrent];
            
            prevSlide.classList.remove("text-on");
            slide.classList.remove("slide-on");
            slide.classList.add("text-on");
            
            if(slideCurrent === slidesLength - 2){
            next.classList.remove("disabled");
            }

            if(slideCurrent === 0){
            prev.classList.add("disabled");
            }
            
        }

        });

// balapaCop("Image Slider", "#999");
    }

    render() {
        const pictures = [
            'https://lh3.googleusercontent.com/ctTl5KfR1bLwENEnbYbzoh0VlhIPkYx_5Gaz8ZrGcEd670V4-H-UVFCpRMazyIPsdiV8zQcLiC39V1zytlYGFMCEWAY7t-qzQQD4y9gvQVDb73JVANnD-RXRSify1qlrVSw3JqYQcIt257zYkde7jhcj2kVYYNBHN-fyDDSPu9ecu4AUdnOqGfSKE-i8Gfiwf3TFylUM9rT8CxwCVXxZ3hSaraoDNXQ774vqok8iDXOgomoiiJwC7D77iYiTaQWZsiAYeMLF8cMggd1yposmlpPvAyY-gHsIllItZK2sirMfrqkxA5HHhFnmJd0TCZD8rNZwtHVmEZxKpBfou4xp8MULXoAeCQcdoqRtXmFEWlwPrfj4Tyr7EHPrZzm8NMRR6jGOEsXr8v-XhQWtYtAlBrpqfD2KJL-odSnXbu5pNnvWmbjIC9iL1a-v5eYdpL3mLGUgzyhP27KuOC5mDYVRKkQuPxIEXQvB22ttvVYRRL5MsStI9GET0PpK1FjJnJCMOKOSAZ7e6kNS0CHvaYFiGx-Gzr9ivKZdeJ9hXaTjGqzPdvRN6xL49HQF32oS9wa5rqXG9ErbVaU8iIA1eRfl6NmjRsXaxNiHJdTUiiO2UhCwTsKXR24hkuNAeJnvpU57v4ZDrfYH9VMdICIvi0XEWFq8Qv0AQOUuA6CL4e5T5fycdYPo2JmzmXEyKPJ-5g=w1920-h907-no?authuser=0',
            'https://lh3.googleusercontent.com/rSZ201G1l7msY3rAPaCPXB9hoep_aJ2gg4sHeG2qmLE0ZcWdz7S_cHooObnXnB-s8IBVLCh3wOPn92wk_f4IxAjM6j5Xe9CO_23mRte8qOUhUqQVXk2mEtojch9tgV21rbDDNAdVEoe4Jt49IPOX7YKVxkoV7mQrV2mp3oE1kLhkXLM8HIL8MqvUDW3vDyEXLQEFC6loEo72n_53oiDRh_76OVd6TBhPVvGvI3gptuMoEm3XXrTtop2KdVw7xNTiqBvfIOQV5NY6cEfohZwt6YG56Ulfw7j1tmjGnFMgwne4ma8qIOk1BVwlPvdHAvuY7fYR4pO5qAi6hdJn_p3U-Zm32XvDAI7AX7CBGt6JgsIe3UwlNMEMOFqBv8pKgCitURMkFiUfeM-fUxSx00EXAXt-aGDqw2zOQaETtLLU1wIlM9afhkXF3NBf52Zhn-dAIvMrKHbbSAe5NxHZ_pzQ_2L6NMvA2WdndnWsXgo3MdFfuWrQf9qh2gx5UPzje5PDoEM-WAl4dqb3hNsVN88owMboqOFcDeCjvDNOUe30wYT50KYckX8ZkCinXZjlrXc92H9FGaKhNzM0dIy4Z1PKTBwrfHFPcBkeMKcsAY_g5XBbw2Zar_nuhCKmx5PCnxDk7FOJh2F2S-_5SDPz9Ry_niXCssvjMVcjLjHPx6t8XeMebaIO91G_J09PiFpM2w=w1920-h907-no?authuser=0',
            'https://lh3.googleusercontent.com/CYf4wzNQrqLGQ-Vw3nbHa4lEMqI8nE7ZyngDbNrX6aFrhzS-jOtY-qls1DBqS4yTW6trETddB6HNO4rqctVkzNHlnFMgJV7oUegpjW6oyEGJdhQrB5L7Li8n4VL7xRnJI0_GpN3Ht6_2BrQIm3DltqZnZfEjklV-koNS2X5uquN4I-7zSvAdYCTDf0F6bIg2Ng6hfGL6aoeLTmMz0Y-Yj2NrxmoDj8dzNdy2xqAIAKb68C6VU0jI7vSaDahMjSiWqhro1ZYIVDu9ydMU5aLrEDso84wPPZH2EVGQoi5w4LfVgqbZiRkWZUkr0KCZyTh8C28D4Z7HWtSDyePNIa0HRwP891Iirwa5LIAQZEOf5_Ht1BFQZs2TjT-iNEHru-FTTzH2RLGJe622UngcNq7w-Empu33heVtzIMfdJpXUHkzsf-sUQAXZ2DlNEMlMaif0yoOgLlriAkFwRD2GVuRYUUvnXufmkmvFEWwLCwnCLAO_pKG7KR3-WkU9uCMZR5WMooYyfatOOd9DhiHBJ8dxjDHhnvfJiF4lHHX2wr-eDR_R4KMcUYHdYdz3NBC7ym7TLrg56suqYLuqdsCDpWNFLxAsG1QbyQrRKossMD10aFB79gvOM_ecfZLVSN5LLP_N2OkDUDgbPparb_IkN_RN5VqAVHq3qzlkH2bgolYL_2leCPjHStFm7QEw_bvYJg=w1920-h907-no?authuser=0',
        ];
        const Slide = ({ imageSource }) => {
            return (
              <div className="slide">
                <div className="preview">
                  <img src={imageSource} alt="The Plant" draggable="false" />
                </div>
                {/* <div className="infos">
                  <h3>{content.date}</h3>
                  <h2>{content.desc}</h2>
                </div> */}
              </div>
            );
        };
        return (
            <SmoothScroll>
                <div ref={el => this.contaierRef = el} className="photography">
                    <Photohero />
                    <div style={{ }}>
                        <h3 className="adventures">Adventures</h3>
                        <div ref={el => this.sliderRef = el} className="slider-ctr">
                            {pictures.map((item, index) => {
                                return (
                                    <Slide key={index} imageSource={item} />
                                );
                            })}
                            <div className="slider-control">
                                <div className="control prev disabled">
                                    <p className="icon ion-chevron-left">L</p>
                                </div>
                                <div className="control next">
                                    <p className="icon ion-chevron-right">N</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SmoothScroll>
        )
    }
}
