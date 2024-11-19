import React, { useState } from "react";
import { GraduationCap, ChevronRight } from "lucide-react";

export default function Part3() {
  const [activeTab, setActiveTab] = useState("all"); // State for active tab

  const examCategories = [
    { name: "IPCC Group 1 - Taxation", category: "all" },
    { name: "Lorem ipsum dolor sit", category: "competitive" },
    { name: "Lorem ipsum dolor sit", category: "academic" },
    { name: "Lorem ipsum dolor sit", category: "company" },
    { name: "Lorem ipsum dolor sit", category: "all" },
    { name: "Lorem ipsum dolor sit", category: "competitive" },
    { name: "Lorem ipsum dolor sit", category: "all" },
    { name: "Lorem ipsum dolor sit", category: "academic" },
  ];

  const tabs = [
    { label: "All", value: "all" },
    { label: "Competitive Exams", value: "competitive" },
    { label: "Academic Exams", value: "academic" },
    { label: "Company-based Tests", value: "company" },
  ];

  // Filter exams based on active tab
  const filteredExams = examCategories.filter(
    (exam) => activeTab === "all" || exam.category === activeTab
  );

  return (
    <div className=" mx-auto px-4 py-8 md:ml-40 md:mr-40 lg:ml-40 lg:mr-40 mb-7">
      <div className="mb-20">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-600 text-white p-2 rounded-full">
            <GraduationCap size={24} />
          </div>
          <h1 className="text-2xl font-bold">Explore Test</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Get exam-ready with concepts, questions, and study notes as per the latest pattern.
        </p>

        {/* Tabs Section */}
        <div className="mb-6 flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)} // Update active tab on click
              className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab.value
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 hover:text-blue-600 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExams.map((exam, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 flex justify-between items-center border border-gray-200"
            >
              <span>{exam.name}</span>
              <ChevronRight className="text-gray-400" />
            </div>
          ))}
          <a href="#" className="text-blue-600 ml-3 mt-3 hover:underline">
            Explore All Exams
          </a>
        </div>
      </div>

      {/* Job Section */}
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={32} />
            <h2 className="text-2xl font-bold">Land Your Dream Job Today</h2>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Duis libero at suspendisse in commodo sit mauris platea. Massa felis mollis
            morbi egestas. Venenatis quis.
          </p>
          <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            Learn More
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/placeholder.svg"
            alt="Professional with laptop"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}