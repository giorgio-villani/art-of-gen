export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto justify-between">
      <section className="mb-10">
        <div className="mx-auto flex flex-col md:flex-row flex-col-reverse">
          <div className="md:pl-5 p-5 max-w-[800px]">
            <img
              src="/hero/AOG_03.jpg"
              alt="generative art"
              className="w-full h-auto ] object-cover"
              style={{
                maxWidth: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div className="text-center md:text-center flex-grow">
            <div className="flex flex-col justify-center h-full">
              <div
                className="uppercase leading-none"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 10rem)',
                }}
              >
                <div>Art</div>
                <div>Of</div>
                <div>Gen</div>
              </div>
              {/* <h2 className="text-4xl">Art Exhibit</h2> */}
              <div className="text-4xl pt-4">
                {/* <p>Friday - Sunday</p> */}
                <p>17th-19th October 2024</p>
                <p className="text-3xl text-forgnRed font-bold pt-1">
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
        <h2 className="text-center text-5xl font-semibold p-40">The Evolution of Art through Algorithms</h2>
      </section>
      {/* second section */}
      <section className="flex flex-row py-12">
        <div className="basis-1/3 p-4">
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
      <section className="text-center text-3xl p-40">
        <p>
          This exhibit showcases works created through algorithms, artificial intelligence, and computer-aided processes, highlighting how these modern techniques build upon and transform classical
          art forms. Experience a dynamic fusion of past and future through immersive virtual reality experiences and groundbreaking NFTs, where the boundless possibilities of generative art redefine
          the boundaries of human creativity.
        </p>
      </section>
    </div>
  );
}
