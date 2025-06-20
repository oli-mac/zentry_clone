// import clsx from "clsx";
import React from 'react'

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black
        ${containerClass}`}
    >
      {/* {leftIcon} */}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div >
          {title}
        </div>
        {/* <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div> */}
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;