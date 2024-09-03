export default function Live() {
    return (
      <section className="py-16 mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">What we Offer?</h2>
          <br/>
          <br/>
          <h3 className="mt-4 text-2xl font-semibold text-black">Live - Counselling and Mentorship </h3>
        </div>
  
        <div className="grid gap-8 mt-8 mx-4 md:mx-20 lg:mx-28 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Orient - School Students",
              description: "Holistic Personality Development & Academic Excellence",
              imgSrc: "/live.png",
            },
            {
              title: "Emerge - College Students",
              description: "Explore career paths, enhance employability skills, and transition smoothly into the workforce.",
              imgSrc: "/live.png",
            },
            {
              title: "Elevate - Working Professionals",
              description: "Career Advancement, Leadership skills & achieve work-life balance.",
              imgSrc: "/live.png",
            },
          ].map((item, index) => (
            <div key={index} className="shadow-lg bg-white rounded-lg overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-48 object-cover"
                width="300"
                height="200"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-500">{item.description}</p>
                <div className="flex flex-col space-y-4 mt-6">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Learn More</button>
                  <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">Get Started</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  