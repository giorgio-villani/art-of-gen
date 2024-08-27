export default function Sponsorship() {
  return (
    <div className="text-center bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 min-h-screen flex items-center justify-center p-5">
      <div className="text-center">
        <h1 className="text-4xl text-black font-bold mb-8">SPONSORSHIP OPPORTUNITIES</h1>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-300 bg-black bg-opacity-70 inline-block p-2 rounded-md">
            Gold Sponsorship <span className="text-3xl font-bold">$1,500</span>
          </h2>
          <ul className="text-black text-left mt-4">
            <li>Logo recognition in step n repeat banner</li>
            <li>Recognition in post video documentation</li>
            <li>Logo recognition on event digital landpage</li>
            <li>Recognition in all programs and print materials</li>
            <li>Verbal recognition at event</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-300 bg-black bg-opacity-70 inline-block p-2 rounded-md">
            Silver Sponsorship <span className="text-3xl font-bold">$1,000</span>
          </h2>
          <ul className="text-black text-left mt-4">
            <li>Logo recognition in step n repeat banner</li>
            <li>Logo recognition on event digital landpage</li>
            <li>Recognition in all programs and print materials</li>
            <li>Verbal recognition at event</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-300 bg-black bg-opacity-70 inline-block p-2 rounded-md">
            Bronze Sponsorship <span className="text-3xl font-bold">$500</span>
          </h2>
          <ul className="text-black text-left mt-4">
            <li>Logo recognition on event digital landpage</li>
            <li>Recognition in all programs and print materials</li>
            <li>Verbal recognition at event</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
