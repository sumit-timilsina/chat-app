import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-0.5vh bg-sky-300 text-gray-800 border-t border-sky-400 px-4 py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-xs sm:text-sm">
        <span>Created by Sumit Timilsina</span>
        <a
          href="https://github.com/sumit-timilsina"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition-colors"
        >
          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
