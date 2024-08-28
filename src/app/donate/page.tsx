export default function Donate() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl text-center mb-8">Celebrating Creativity in the East End</h1>
      <section className="max-w-[800px] w-full px-4 text-center">
        <p className="mb-6 text-left text-center text-justify">
          We are thrilled to announce that Art of Gen is proudly supported by Fresh Arts, our fiscal sponsor. This partnership is dedicated to uplifting and empowering artists in the East End
          community. Join us for an inspiring event that showcases local talent, fosters creativity, and strengthens the cultural fabric of our neighborhood. Together with Fresh Arts, we're making a
          lasting impact on the arts scene in the East End.
        </p>
        <img className="p-7 " src="/donate/fresh-arts.jpg"></img>
        <h2 className="text-4xl mb-8">Support Our Cause</h2>
        <p className=" text-left text-center text-justify">
          Your generosity can help us continue this important work. Donations are warmly welcomed and go directly towards supporting the artists and the event. By contributing, you're not only helping
          to make Art of Gen a success, but you're also investing in the future of the arts in the East End. Every donation, big or small, makes a difference.
        </p>
      </section>
    </div>
  );
}
