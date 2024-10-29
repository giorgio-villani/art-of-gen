import React from 'react';
// import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Home() {
  // const { ref, inView } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto justify-between">
      <section className="mb-10">
        <div className="mx-auto flex flex-col md:flex-row flex-col-reverse">
          <div className="md:pl-5 p-5 max-w-[800px]">
            <video
              src="./art-of-gen-vid.mp4"
              className="w-full h-auto object-cover"
              style={{
                maxWidth: '100%',
                objectFit: 'cover',
              }}
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="text-center md:text-center flex-grow">
            <div className="flex flex-col justify-center h-full">
              <div
                className="uppercase leading-none"
                style={{
                  fontSize: 'clamp(3rem, 25vw, 10rem)',
                }}
              >
                <div>Art</div>
                <div>Of</div>
                <div>Gen</div>
              </div>
              {/* <h2 className="text-4xl">Art Exhibit</h2> */}
              <div className="text-4xl pt-4">
                {/* <p>Friday - Sunday</p> */}
                <p>17th October 2024</p>
                <p className="text-4xl">East End, HTX</p>
                <p className="text-2xl text-forgnRed font-bold pt-1">
                  <a href="https://forgn.art" className="hover:underline">
                    FORGN STUDIO
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2
          className="text-center font-semibold py-40 w-full h-full"
          style={{
            fontSize: 'clamp(3rem, 5vw, 8rem)',
          }}
        >
          The Evolution of Art through Algorithms
        </h2>
      </section>
      {/* second section */}
      <section className="flex flex-col md:flex-row py-12">
        <div className="basis-1/3 p-4">
          <h2 className="text-3xl font-bold pb-4">Immerse yourself in a world of generative art!</h2>
          <p className="text-2xl">
            Dive into the intersection of creativity and technology with &quot;Generations,&quot; an innovative art exhibit that explores generative art as both a revolutionary new style and a natural
            extension of traditional artistic practices.
          </p>
        </div>
        <div className="basis-2/3 p-4 relative overflow-hidden">
          <div className="split-image-container">
            <div className="split-image left-half"></div>
            <div className="split-image right-half"></div>
          </div>
        </div>
      </section>
      {/* third section */}
      <section className="text-center text-2xl py-40 px-5">
        <p>
          This exhibit showcases works created through algorithms, artificial intelligence, and computer-aided processes, highlighting how these modern techniques build upon and transform classical
          art forms. Experience a dynamic fusion of past and future through immersive virtual reality experiences and groundbreaking NFTs, where the boundless possibilities of generative art redefine
          the boundaries of human creativity.
        </p>
        {/* <p ref={ref}>
          This exhibit showcases works created through <span className="highlight">algorithms</span>, <span className="highlight">artificial intelligence</span>, and computer-aided processes,
          highlighting how these modern techniques build upon and transform classical art forms. Experience a dynamic fusion of past and future through immersive{' '}
          <span className="highlight transition-colors duration-300 ease-in-out">virtual reality experiences</span> and groundbreaking <span className="highlight">NFTs</span>, where the boundless
          possibilities of generative art redefine the boundaries of human creativity.
        </p> */}
      </section>
      <section>
        <h2
          className="text-center font-semibold py-20 w-full h-full"
          style={{
            fontSize: 'clamp(3rem, 5vw, 8rem)',
          }}
        >
          Supporters
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 py-8">
          <a href="https://www.8thwonder.com/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/8wb.png" alt="8th Wonder Brewery" className="h-28" />
          </a>
          <a href="https://www.oldparrscotch.com/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/old-parr.webp" alt="Old Par" className="h-28" />
          </a>
          <a href="https://www.coca-cola.com/us/en/brands/topo-chico" target="_blank" rel="noopener noreferrer">
            <img src="./logos/Topo-Chico.png" alt="Topo Chico" className="h-28" />
          </a>
          <a href="https://www.instagram.com/edenplant.co" target="_blank" rel="noopener noreferrer">
            <img src="./logos/eden-plant.webp" alt="Eden Plant Co" className="h-28" />
          </a>
          <a href="https://www.fresharts.org/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/fresh-arts.jpg" alt="Fresh Arts" className="h-28" />
          </a>
          <a href="https://eastendmakerhub.org/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/EEMH.jpg" alt="East End Maker Hub" className="h-28" />
          </a>
          <a href="https://www.thesyneverse.com/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/pendlum-productions.png" alt="Goal Park" className="h-28 " />
          </a>
          <a href="https://www.goalpark.org/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/goal-park.png" alt="Goal Park" className="h-28 invert " />
          </a>
          <a href="https://www.buildcities.network/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/build_.jpg" alt="build_" className="h-28 " />
          </a>
          <a href="https://www.forgn.art/" target="_blank" rel="noopener noreferrer">
            <img src="./logos/forgn_metadata.png" alt="Forgn" className="h-28" />
          </a>
        </div>
      </section>
    </div>
  );
}
