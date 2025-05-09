import "boxicons/css/boxicons.min.css";

const Header = () => {
  // simple toggle navigation for the mobile

  const toggleMobileMenu = () => {
    //get mobile menu
    const mobileMenu = document.getElementById("mobileMenu");

    // iff else state ment

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header className="py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff] bg-black">
      {/* left section header  */}
      <div className="flex lg:gap-14 gap-4 items-center">
        <img className="md:w-16 w-12" src="public/images/logo.png" alt="" />

        <div className="hidden md:flex align-middle gap-5 items-center">
          <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium  text-nowrap hover:opacity-70 transition-all duration-300">
            PLAY NOW
          </button>

          <button className="h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg font-medium  text-nowrap hover:opacity-70 transition-all duration-300">
            PLAY NOW
          </button>
        </div>
      </div>

      {/* right section Desktop */}

      <nav className=" hidden md:flex lg:gap-8 gap-4">
        <a
          href="#"
          className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bxs-user"></i> Avater
        </a>
        <a
          href="#"
          className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bxs-bolt-circle"></i> Arina
        </a>
        <a
          href="#"
          className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-spa"></i> Byond
        </a>
        <a
          href="#"
          className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bxs-shopping-bags"></i> Shopin
        </a>
      </nav>

      {/* Mobile Menu button - visiblae only mobile icon */}

      <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden">
        <i class="bx bx-menu-alt-right"></i>
      </button>

      {/* Mobile menue hidden by default */}
      <div
        id="mobileMenu"
        className="hidden fixed top-14 right-0 left-0 bg-black p-5 md:hidden text-center"
      >
        <nav className="flex flex-col gap-4">
          <a
            href="#"
            className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
          >
            <i class="bx bxs-user"></i> Avater
          </a>
          <a
            href="#"
            className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
          >
            <i class="bx bxs-bolt-circle"></i> Arina
          </a>
          <a
            href="#"
            className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
          >
            <i class="bx bx-spa"></i> Byond
          </a>
          <a
            href="#"
            className="relative mr-5 py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5  after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
          >
            <i class="bx bxs-shopping-bags"></i> Shopin
          </a>

          <div className="flex flex-row items-center justify-center gap-5">
            <button className="bg-purple-700 p-2 rounded">Play Now</button>

            <button className="bg-gray-500 p-2 rounded">NFT store</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
