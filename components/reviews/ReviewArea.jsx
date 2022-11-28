import React, { useState } from "react";

const ReviewArea = ({ res }) => {
    const [cardIndex, setCardIndex] = useState(8);
    console.log("res", res);

    const showMore = () => {
        setCardIndex((cardIndex += 8));
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-6 sm:w-full gap-8 px-8 py-10">
                {res.slice(0, cardIndex).map((review, index) => (
                    <ul key={index} className="items-stretch flex">
                        <li className="flex flex-col justify-center  p-4  bg-white rounded-xl shadow-xl hover:scale-105 duration-200 overflow-hidden">
                            <p className="tracking-widest">
                                &quot;{review.body}&quot;
                            </p>
                            <p className="flex justify-end pt-10 tracking-widest text-gray-600 ">
                                -{review.name.slice(0, 20)}
                            </p>
                        </li>
                    </ul>
                ))}
            </div>
            <button className="mb-10 p-4 w-36" onClick={showMore}>
                Show More...
            </button>
        </div>
    );
};

export default ReviewArea;
