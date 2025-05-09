import "boxicons/css/boxicons.min.css";

const Arena = () => {
  return (
    // conntainer
    <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0  mt-60">
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-28"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255 , 255,0.7), 0 0 20px rgba(167,139, 250, 0.5)",
          }}
        >
          Arena
        </h1>
      </div>
      {/* Main Continer with grid layout */}
      <div className=" lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* left colummn (take 1/3 of the space on the desktop) */}

        <div className="md:col-span-1 space-y-4 md:space-y-6">
          {/* card 1- top left */}
          <div className="relative overflow-hidden rounded-3xl border border-white spect-[4.4/4] transform translate-trnsform duration-300 hover:scale-105">
            {/* Card bakcground with gradient  */}

            <div className="bssolute h-full w-full">
              <img src="public/images/bento-card1.png" alt="BENTO-CARD1" />

              {/* buttons */}
              <button className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
                <i class="bx bxs-store-alt"></i> NFT STORE
              </button>
            </div>
          </div>

          {/* card 2 - bottom -left  */}

          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loom
              muted
              playsInline
              src="public/videos/bento-card2.mp4"
            ></video>
          </div>
        </div>
        {/* Right column (takes 2/3 fo the space on  desktop) */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          {/* Top row with 3 small cads */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Card 3 - first small card */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                autoPlay
                loom
                muted
                playsInline
                className="w-full h-full object-cover"
                src="public/videos/bento-card3.mp4"
              ></video>

              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10  bg-opacity-10 font-exrabold text-2xl">
                Scoriox
              </h1>
            </div>
            {/* 2nd small card  */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                autoPlay
                loom
                muted
                playsInline
                className="w-full h-full object-cover"
                src="public/videos/bento-card4.mp4"
              ></video>

              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-exrabold text-2xl">
                Floralynx
              </h1>
            </div>
            {/* 3rd  card */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                autoPlay
                loom
                muted
                playsInline
                className="w-full h-full object-cover"
                src="public/videos/bento-card5.mp4"
              ></video>

              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-exrabold text-2xl">
                Titanor
              </h1>
            </div>
          </div>
          {/* card 6 -bottom large card  */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]">
            <img src="public/images/bento-card5.png" alt="card-6" />
            <button className="absolute bottom-0 p-3 h-17 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
              <i class="bx bx-link-extenal"></i>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;
