import * as React from "react";
import { motion } from 'framer-motion';
import ExpandableCard from "./ExpandableCard";
import { useState, useLayoutEffect, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

function SIGs() {

    const groups = [
        { title: "AI For Everyone", 
            text: "AI For Everyone is an inclusive workshop designed to introduce participants to the fundamentals of Artificial Intelligence (AI).", 
            instagram: "https://www.instagram.com/your_instagram_link", // Replace with actual Instagram link
            link: "#", 
            imgSrc: require("../assets/ai_for_every1-removebg-preview.png") },
        { title: "Industry Conclave", 
            text: "The Industry Conclave is a premier event organized by the AI Club, bringing together industry leaders, experts, and enthusiasts to discuss the latest advancements in AI.", 
            instagram: "https://www.instagram.com/your_instagram_link", // Replace with actual Instagram link
            link: "#", 
            imgSrc: require("../assets/AI_tech_conclave_n-removebg-preview.png") },
        { title: "Treasure Hunt", 
            text: "A high-tech adventure that combines the thrill of a treasure hunt with the excitement of technology.",
            instagram: "https://www.instagram.com/your_instagram_link", // Replace with actual Instagram link
            link: "#", 
            imgSrc: require("../assets/TreasureHunt-removebg-preview.png") },
        { title: "Programming CRYPT", 
            text: "Programming CRYPT represents Cyber fusion enhancing competitive spirit and increasing coding skills", 
            instagram: "https://www.instagram.com/your_instagram_link", // Replace with actual Instagram link
            link: "", 
            imgSrc: require("../assets/cyber.png") },
    ];

    const [viewportState, setViewportState] = useState({
        isMobile: window.innerWidth < 872 || window.innerHeight < 800,
        scale: (window.innerHeight < 1204 && window.innerWidth < 1520) || (window.innerHeight < 1000 && window.innerWidth > 1539) ? .75 : 1,
        adjustHeight: (window.innerHeight > 1203 || window.innerWidth < 1291) && !(window.innerHeight > 1203 && window.innerWidth > 1431),
    });

    useEffect(() => {
        const updateState = () => {
            const isMobile = window.innerWidth < 872 || window.innerHeight < 800;
            const scale = (window.innerHeight < 1204 && window.innerWidth < 1520) || (window.innerHeight < 1000 && window.innerWidth > 1539) ? .75 : 1;
            const adjustHeight = (window.innerHeight > 1203 || window.innerWidth < 1291) && !(window.innerHeight > 1203 && window.innerWidth > 1431);
            return { isMobile, scale, adjustHeight };
        };

        const handleResize = () => {
            setViewportState(updateState());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.dispatchEvent(new Event('resize'));
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
        const sigCardsElement = document.querySelector('.sig-cards');
        const cardGap = viewportState.scale < 1 ? '1px' : '3rem';
        const yPosition = viewportState.adjustHeight ? '100vh' : '50vh';

        if (sigCardsElement) {
            sigCardsElement.style.setProperty('--sig-card-gap', cardGap);
            sigCardsElement.style.setProperty('--card-y-position', yPosition);
        }
    }, [viewportState.scale, viewportState.adjustHeight]);

    return (
        <div className='sig-bg-image'>
            <h1 id='sigs' className='flex justify-center text-center p-8 sm:pt-8'>Previous Events</h1>
            {viewportState.isMobile ? (   // If mobile, display the Swiper SIGS component
            <div className="pb-8">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}>
                    {groups.map((group, index) => (
                        <SwiperSlide key={index}>
                            <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc} instagram={group.instagram} link={group.link} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            ) : (   // , else display the framer motion SIGS
                // Non-Mobile view with conditional scaling
                <motion.div className="flex-wrap sig-cards justify-center" style={{'--sig-card-gap': '3rem'}}>
                    {groups.map((group, index) => (
                        <motion.div key={index} style={{
                            transform: `scale(${viewportState.scale})`,
                            transformOrigin: 'center',
                        }}>
                            <ExpandableCard title={group.title} text={group.text} imgSrc={group.imgSrc} instagram={group.instagram} link={group.link}/>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    )
};

export default SIGs;