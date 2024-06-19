import React from 'react'
import MaxWrapper from './MaxWrapper'

const objectives = [
    "We strive to bridge the gap between academic learning and real-world business success.",
    "Goals foster a culture of innovation and entrepreneurship among students and young professionals.",
    "We equip individuals with the necessary tools and knowledge to turn their skills and talents into sustainable ventures.",
    "We facilitate networking opportunities and collaborations to amplify startup visibility and growth.",
    "Support startups in achieving financial sustainability and impactful solutions.",
    "Our objectives provide comprehensive entrepreneurial training through workshops, seminars, and mentorship programs.",
    "Offer access to professional services and business solutions to enhance startup viability.",
    "We organize networking events, competitions, and showcases to promote startup visibility and growth.",
    "We create a supportive community that fosters collaboration and knowledge sharing among participants.",
    "Finally, we encourage ethical entrepreneurship and socially responsible business practices."
  ];

const Objectives = () => {
  return (
    <MaxWrapper className="flex justify-center items-center h-full">
        <div className="flex flex-col space-y-3 py-2 px-2">

          <h2 className="font-semibold text-4xl">
            What are our Objectives?
          </h2>

          <div className="flex flex-col space-y-0.5 py-2 px-2">
            {objectives.map((objective, index) => (
              <div key={index} className="flex flex-row items-center space-x-3 py-2">
                <span className="text-2xl text-primary">•</span>
                <p className="text-lg text-muted-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWrapper>
  )
}

export default Objectives
