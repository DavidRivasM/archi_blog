import React from 'react';
import Image from 'next/image';

const Footer = () => (
  <footer className="container grid place-items-center">
    <span className="cursor-pointer font-bold text-2xl text-white">Made by David Rivas. All Rights Reserved 2022.
    </span>
    <ul className="flex m-8 items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <a className="m-4" href="mailto:alonsorivasmora@gmail.com" target="_blank" rel="noreferrer noopener">
        <Image
          unoptimized
          alt=""
          height="30px"
          width="30px"
          className="align-middle rounded-full transform transition duration-500 hover:scale-110"
          src="gmail1.gif"
        />
      </a>
      <a className="m-4" href="https://github.com/DavidRivasM" target="_blank" rel="noreferrer noopener">
        <Image
          unoptimized
          alt=""
          margin="5px"
          height="30px"
          width="30px"
          className="align-middle rounded-full transform transition duration-500 hover:scale-110"
          src="git.gif"
        />
      </a>
      <a className="m-4" href="https://personal-portfolio-xi-taupe.vercel.app/" target="_blank" rel="noreferrer noopener">
        <Image
          unoptimized
          alt=""
          height="30px"
          width="30px"
          className="align-middle rounded-full transform transition duration-500 hover:scale-110"
          src="icon.gif"
        />
      </a>
    </ul>
  </footer>
);

export default Footer;
