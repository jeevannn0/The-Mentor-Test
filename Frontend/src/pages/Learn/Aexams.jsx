import { Link } from "react-router-dom";

export default function Aexams() {
  return (
    <section className="py-4 mt-8 mb-4  flex items-center justify-center md:ml-[150px] lg:ml-[150px]  lg:mr-[145px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start items-start mb-6 gap-16"> {/* Adjusted gap for better layout */}
          {/* Left Section (Title and Subtitle) */}
          <div className="flex flex-col w-full md:w-[300px] mt-12 lg:mt-7 md:mt-0">
            <h2 className="text-xl sm:text-2xl font-bold">Academic Exams</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Prepare for the top academic exams in your field.
            </p>
            <button className="mt-5 w-full md:w-[180px] md:mt-7 px-3 py-2 md:px-4 md:py-2 bg-[#2563EB] text-white rounded-lg hover:bg-blue-600 focus:outline-none">
              View all Courses
            </button>
          </div>
          {/* Right Section (Cards) */}
          <div className="overflow-x-auto flex space-x-4 md:space-x-6 lg:space-x-8 w-full">
            {[
              {
                title: "CBSE Exams",
                description: "Prepare for the Central Board of Secondary Education exams.",
                logo: "/Amzon.png",
              },
              {
                title: "ICSE Exams",
                description: "Prepare for the Indian Certificate of Secondary Education exams.",
                logo: "/Amzon.png",
              },
              {
                title: "JEE Main",
                description: "Prepare for the Joint Entrance Examination (Main) for engineering admissions.",
                logo: "/Amzon.png",
              },
              {
                title: "NATA",
                description: "Prepare for the National Aptitude Test in Architecture.",
                logo: "/Amzon.png",
              },
            ].map((exam) => (
              <div
                className="bg-white border border-gray-500 border-opacity-20 rounded-lg flex flex-col justify-between min-w-[200px] w-[200px] sm:w-[240px] flex-shrink-0"
                key={exam.title}
              >
                <div>
                  <div className="bg-[#2563EB] p-3 py-2 mb-3 border rounded-t-lg flex justify-between items-center">
                    <h3 className="text-lg text-white font-bold">{exam.title}</h3>
                    <img
                      src={exam.logo}
                      alt={`${exam.title} Logo`}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </div>
                  <div className="mb-4 p-4 h-24">
                    <p className="text-sm sm:text-base">{exam.description}</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2 p-4 mt-auto">
                  <Link to="/details">
                    <button className="border border-gray-300 text-gray-700 py-2 px-3 rounded-md lg:text-[13px] md:text-[13px] text-[10px]">
                      Learn More
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-blue-600 text-white py-2 px-3 rounded-md lg:text-[13px] md:text-[13px] text-[10px]">
                      Start Exam
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
