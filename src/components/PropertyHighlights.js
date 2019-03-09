import React from "react"

export default function PropertyHighlights() {
  return (
    <section className="PropertyHighlights flex flex-col items-center mt-32">
      <h3 className="text-5xl font-normal mb-24">Property Highlights</h3>
      <PropertyHighlightPanels panels={highlights} />
    </section>
  )
}

function PropertyHighlightPanels({ panels }) {
  return (
    <div className="flex flex-wrap w-4/5 mx-auto border-b">
      {panels.map((panel, index) => (
        <HighlightPanel panel={panel} index={index} count={panels.length} />
      ))}
    </div>
  )
}

function HighlightPanel({ panel, index, count }) {
  const panelClasses = (index, count) => {
    const rowCount = count / 2 // two rows

    let classes = `w-1/${rowCount} mb-10` // default classes

    switch ((index + 1) % rowCount) {
      case 1:
        return `${classes} pr-4` // left side
      case 0:
        return `${classes} pl-4` // right side
      default:
        return `${classes} px-2` // middle
    }
  }

  return (
    <div
      className={`w-1/4 mb-20 flex flex-col items-start ${panelClasses(
        index,
        count
      )}`}
      key="panel.title"
    >
      <img className="mb-10" src={panel.image} alt="" />
      <h4 className="font-normal text-xl mb-8">{panel.title}</h4>
      <p className="pr-4 opacity-50">{panel.description}</p>
    </div>
  )
}

const highlights = [
  {
    title: "4,700 SqFt",
    description: "Plenty of space to entertain or relax throughout the home.",
    image:
      "https://lh3.googleusercontent.com/K-D7IXcNAYVvJ1E3XHvj6nfLkNvmkbflEg9Oh4pAGtn_0kXiKe9HPr_-pUSqGmOn7O0rntE3xCIQPA3w_KRoqg=w1024"
  },
  {
    title: "5 Bedrooms",
    description: "A private retreat for every member of the family.",
    image:
      "https://lh3.googleusercontent.com/nUYMXJQDNaDAc0ciOS7GckV7GRu95cNJk1-JRqLF3b1hUbJqYfmSpJAyj_qR5KDyB1B7SHIfGffplqF87NpQRg=w1024"
  },
  {
    title: "4 Bathrooms",
    description: "All baths are fitted with elegant, water-saving features.",
    image:
      "https://lh3.googleusercontent.com/5E6qz_NCOaHJ9cGhvWrnYoNRraOCNHsxvKj3PPcvMYqRdh7ImkuTWydmhPXLgt_VOIRHGi8mG0jV9CShuokopw=w1024"
  },
  {
    title: "2-1/2 Car Garage",
    description: "Park all your vehicles with room to spare.",
    image:
      "https://lh3.googleusercontent.com/pxTc1CyjVHEk0ui_ynNTWVbgH2bE4YaSzDRNM7-xrwLIKas3n1a1YH0oHuWHFCJ2kGixmXsUV51ZcRv1H0A9aQ=w1024"
  },
  {
    title: "Swimming Pool",
    description: "Inground pool for swimming laps or relaxing with a drink.",
    image:
      "https://lh3.googleusercontent.com/o34D6Ps0wJMkR4xJk42VN6DWYGItdn0bKU5jkbPRVF6a0YjDh56Xx4qTI4O-Y_pQK5xi_5BIJ9nyH2DWMXjaQg=w1024"
  },
  {
    title: "Built-in Hot Tub",
    description: "The ensuite master bath features a Jacuzzi hot tub.",
    image:
      "https://lh3.googleusercontent.com/nkZGTYCQH8l7AbLk-F2IjooPio8saaM9dIdMsLOFjVTjGdcco05qRVq2dQSPCHNcrFFBMDNpiA2KkS1q6S3d5g=w1024"
  },
  {
    title: "2 Floors",
    description: "Bedrooms on the second floor offer luxurious comfort.",
    image:
      "https://lh3.googleusercontent.com/Z6U0WaorRhFtu75PneN7K14R04L_spp4R7_WwI2-qwxk1yvpzU7ypRk0NYTk5YI8D76CM3W17SBVQnYscHrVfg=w1024"
  },
  {
    title: "Built in 2004",
    description: "Meets all code standards and includes all modern amenities.",
    image:
      "https://lh3.googleusercontent.com/A8qvGBV2K88gYv_CkqfY9GGezlfjBlI0dWyrErbvijKaal45YPODaSWXGCXCbVoIqHh9thPlM0b2JjVUPajTCRk=w1024"
  }
]
