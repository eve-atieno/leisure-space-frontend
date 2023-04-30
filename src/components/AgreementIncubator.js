import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AgreementIncubator() {
  const [section1Open, setSection1Open] = useState(true);
  const [section2Open, setSection2Open] = useState(false);
  const [section3Open, setSection3Open] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
    navigate("/reserve");
  }
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium text-gray-900">LeisureSpace Agreement Incubator</h2>
        <div className="mt-4">
          <div className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50" onClick={() => setSection1Open(!section1Open)}>
            <span>Overview</span>
            {section1Open ? (
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
          {section1Open && (
            <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <p>
                This agreement incubator is designed to help Airbnb hosts create a custom agreement that accurately reflects their specific listing and house rules. By following the prompts and filling in the required information, hosts will be able to create a clear and concise agreement that will help protect their property and ensure a safe and comfortable stay for their guests.
              </p>
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50" onClick={() => setSection2Open(!section2Open)}>
            <span>Section 1: Property Description</span>
            {section2Open ? (
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
          {section2Open && (
            <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <p>
                This section should include a detailed description of the property, including its location, size, and any amenities or features that are available to guests. It should also include any limitations or restrictions on the use of the property, such as a ban on smoking or pets.
              </p>
              <p>
                Example: "The property is a cozy one-bedroom apartment located in the heart of downtown. It is fully furnished and includes a kitchen, bathroom, and living room. Guests are welcome to use the provided towels and linens, as well as the Wi-Fi and TV. Smoking and pets are strictly prohibited on the premises."
              </p>
            </div>
          )}
        </div>
        <label className="flex items-center mt-4">
        <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                />
                
              </label>
        {/* Additional sections would follow */}

      </div>
    </div>
    );
}

export default AgreementIncubator;