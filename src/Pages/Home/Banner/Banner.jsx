import React, { useEffect, useRef, useState } from 'react';
import { persons } from '../../../../public/persons';
import classNames from 'classnames';

const Banner = () => {

    const [activeItem, setActiveItem] = useState(5);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

    return (
        <div className="flex h-full w-full items-center justify-center mt-6">
        <div className="w-[1200px] max-w-full">
          <ul
            ref={wrapperRef}
            className="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]"
          >
            {persons.map((person, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem === index}
                className={classNames(
                  "relative cursor-pointer md:w-[8%] md:first:w-[1%] md:last:w-[1%] md:[&[aria-current='true']]:w-[48%]",
                  "md:[transition:width_var(--transition,200ms_ease-in)]",
                  "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                  "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[12%]",
                  "first:pointer-events-none last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0"
                )}
                key={person.id}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
                  <img
                    className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2  md:left-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2"
                    src={person.img}
                    alt={person.id}
                    width="590px"
                    height="640px"
                  />
                  <div
                    className={classNames(
                      "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                      activeItem === index ? "md:opacity-25" : "md:opacity-0"
                    )}
                  />
                  <div
                    className={classNames(
                      "left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0",
                      activeItem === index
                        ? "md:translate-x-0 md:opacity-100"
                        : "md:translate-x-4 md:opacity-0"
                    )}
                  >
                    
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Banner;