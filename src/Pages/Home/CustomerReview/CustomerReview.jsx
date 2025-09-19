import { useEffect, useRef, useState } from "react";
import review from "../../../assets/brands/customer-top.png"
const reviewsData = [
  {
    id: 1,
    name: 'Rasel Ahamed',
    title: 'CTO',
    image: 'https://placehold.co/100x100/A0AEC0/000?text=RA',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    id: 2,
    name: 'Awlad Hossin',
    title: 'Senior Product Designer',
    image: 'https://placehold.co/100x100/0000FF/FFF?text=AH',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    id: 3,
    name: 'Nasir Uddin',
    title: 'CEO',
    image: 'https://placehold.co/100x100/F6AD55/000?text=NU',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    id: 4,
    name: 'Jane Doe',
    title: 'Marketing Manager',
    image: 'https://placehold.co/100x100/4299E1/000?text=JD',
    text: 'This delivery service is incredibly reliable. My packages always arrive on time and in perfect condition. Highly recommend!',
  },
  {
    id: 5,
    name: 'John Smith',
    title: 'Logistic Analyst',
    image: 'https://placehold.co/100x100/ECC94B/000?text=JS',
    text: 'The tracking feature is excellent. I can see exactly where my delivery is at any time, which gives me peace of mind.',
  },
  {
    id: 6,
    name: 'Emily White',
    title: 'Operations Head',
    image: 'https://placehold.co/100x100/667EEA/000?text=EW',
    text: 'The customer support team is very responsive and helpful. They quickly resolved an issue with my order.',
  },
];

const CustomerReview = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef(null);
    const cardRef = useRef(null);
    const [itemFullWidth, setItemFullWidth] = useState(0);
    const numItems = reviewsData.length;

    // Use ResizeObserver to dynamically update the card width for responsiveness
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if (entries.length > 0) {
                const cardElement = entries[0].target;
                const computedStyle = window.getComputedStyle(cardElement);
                const width = cardElement.offsetWidth;
                const margin = parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
                setItemFullWidth(width + margin);
            }
        });

        if (cardRef.current) {
            resizeObserver.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                resizeObserver.unobserve(cardRef.current);
            }
        };
    }, []);

    // Function to handle the continuous automatic sliding
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => current + 1);
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    // Handle the CSS transform for smooth sliding
    useEffect(() => {
        if (trackRef.current && itemFullWidth > 0) {
            const transformValue = -activeIndex * itemFullWidth;
            trackRef.current.style.transform = `translateX(${transformValue}px)`;
        }
        // Logic for seamless looping
        if (activeIndex >= numItems) {
            setTimeout(() => {
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                    setActiveIndex(0);
                    trackRef.current.style.transform = `translateX(0px)`;
                    // Re-enable transition after the reset
                    setTimeout(() => {
                        if (trackRef.current) {
                           trackRef.current.style.transition = 'transform 700ms ease-in-out';
                        }
                    }, 50);
                }
            }, 700);
        }
    }, [activeIndex, numItems, itemFullWidth]);

    // Handle manual navigation with arrows
    const handleNext = () => {
        setIsPaused(true);
        setActiveIndex((current) => current + 1);
        setTimeout(() => setIsPaused(false), 3000);
    };

    const handlePrev = () => {
        setIsPaused(true);
        setActiveIndex((current) => Math.max(0, current - 1));
        setTimeout(() => setIsPaused(false), 3000);
    };

    return (
        <div className="mt-10">
            <div className="flex justify-center">
                <img src={review} alt="Logo" className="w-auto h-12" />
            </div>
            <h3 className="text-center text-2xl font-bold my-4">
                What our customers are saying
            </h3>
            <p className="text-center  text-gray-600 mb-8">
                Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
            </p>

            <div
                className="bg-gray-100 rounded-2xl mb-10 dark:bg-[#03373D] py-16 px-4 md:px-8 lg:px-16"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="max-w-7xl mx-auto">

                    {/* Slider container with overflow hidden */}
                    <div className="relative flex justify-center items-center overflow-hidden h-[400px]">
                        {/* Slider track that gets translated */}
                        <div
                            ref={trackRef}
                            className="flex w-fit transition-transform duration-700 ease-in-out"
                        >
                            {[...reviewsData, ...reviewsData].map((review, index) => {
                                const isActive = index % numItems === activeIndex % numItems;
                                const transformClasses = isActive ? 'scale-110 opacity-100 z-10' : 'scale-90 opacity-10 z-0';

                                return (
                                    <div
                                        key={index}
                                        ref={index === 0 ? cardRef : null}
                                        className={`
                                            card w-11/12 sm:w-[350px] mx-4 shrink-0
                                            bg-white dark:bg-gray-800 rounded-2xl shadow-xl
                                            flex flex-col items-center justify-center text-center
                                            p-8 transition-all duration-300
                                            ${transformClasses}
                                        `}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 text-3xl mb-4 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9.983 3.692c-1.465 0-2.846.5-4.045 1.488-1.201.989-2.022 2.302-2.454 3.864-.431 1.562-.257 3.23.518 4.793.775 1.563 2.053 2.825 3.597 3.73l-.403.43c-1.125-1.026-2.185-2.227-2.99-3.567-1.187-1.996-1.583-4.321-.497-6.526 1.086-2.205 3.321-3.692 5.768-3.692h.004zM20.983 3.692c-1.465 0-2.846.5-4.045 1.488-1.201.989-2.022 2.302-2.454 3.864-.431 1.562-.257 3.23.518 4.793.775 1.563 2.053 2.825 3.597 3.73l-.403.43c-1.125-1.026-2.185-2.227-2.99-3.567-1.187-1.996-1.583-4.321-.497-6.526 1.086-2.205 3.321-3.692 5.768-3.692h.004z"/>
                                        </svg>
                                        <p className="text-gray-600    dark:text-gray-300 text-lg italic mb-6">
                                            {review.text}
                                        </p>
                                        <div className="border-t border-gray-200 dark:border-gray-700 w-24 mb-4"></div>
                                        <div className="avatar mb-4">
                                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                                <img
                                                    src={review.image}
                                                    alt={review.name}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            {review.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {review.title}
                                        </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 text-3xl mt-4 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 3.692c1.465 0 2.846.5 4.045 1.488 1.2.989 2.022 2.302 2.454 3.864.431 1.562-.257 3.23-.518 4.793-.775 1.563-2.053 2.825-3.597 3.73l.403.43c1.125-1.026 2.185-2.227 2.99-3.567 1.187-1.996 1.583-4.321.497-6.526-1.086-2.205-3.321-3.692-5.768-3.692h-.004zM3.017 3.692c1.465 0 2.846.5 4.045 1.488 1.2.989 2.022 2.302 2.454 3.864.431 1.562-.257 3.23-.518 4.793-.775 1.563-2.053 2.825-3.597 3.73l.403.43c1.125-1.026 2.185-2.227 2.99-3.567 1.187-1.996 1.583-4.321.497-6.526-1.086-2.205-3.321-3.692-5.768-3.692h-.004z"/>
                                        </svg>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle btn-primary shadow-lg"
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-xl" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                            </svg>
                        </button>
                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle btn-primary shadow-lg"
                            onClick={handleNext}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-xl" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Dots navigation */}
                    <div className="flex justify-center items-center mt-8 space-x-2">
                        {reviewsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsPaused(true);
                                    setTimeout(() => setIsPaused(false), 3000);
                                }}
                                className={`
                                    w-3 h-3 rounded-full transition-all duration-300
                                    ${index === activeIndex % numItems ? 'bg-blue-500 w-5' : 'bg-gray-400'}
                                `}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;