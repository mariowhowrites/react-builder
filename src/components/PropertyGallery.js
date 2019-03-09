import React from "react"

export default function PropertyGallery() {
  return (
    <section className="PropertyGallery bg-blue-darker text-white flex flex-col items-center">
      <h3 className="text-5xl font-normal pt-32 mb-24">Gallery</h3>
      <div class="flex flex-wrap justify-between w-4/5">
        {panels.map((panel, index) => (
          <GalleryPanel
            panel={panel}
            index={index}
            count={panels.length}
            key={panel.title}
          />
        ))}
      </div>
    </section>
  )
}

function GalleryPanel({ panel, index, count }) {
  const panelClasses = (index, count) => {
    const rowCount = count / 2 // two rows

    let classes = `w-1/${rowCount} mb-10` // default classes

    switch ((index + 1) % rowCount) {
      case 1:
        return `${classes} pr-8` // left side
      case 0:
        return `${classes} pl-8` // right side
      default:
        return `${classes} px-4` // middle
    }
  }

  return (
    <div className={panelClasses(index, count)}>
      <img className="shadow-lg" src={panel.image} alt={panel.title} />
      <p className="text-center my-6">{panel.title}</p>
    </div>
  )
}

const panels = [
  {
    image:
      "https://lh3.googleusercontent.com/NigmQASJZAQ6sS1JmMWC7vFYjDUfUKHE2CTNRTnF2OQom2EkfFN_YL9fPs0bCQNrlrIhCfPbTLDBsU7UF2z-=w1024",
    title: "Living Room"
  },
  {
    image:
      "https://lh3.googleusercontent.com/O8272JX-eFakblcxVImiwCEg8fA1rAbPkRr4ghG2EFtEsV5UuA_HuZgsv7J1A4wNjITiAcRwP5lNV35NsrqydbA=w1024",
    title: "Eat-in Kitchen"
  },
  {
    image:
      "https://lh3.googleusercontent.com/vHWlBLUYzI2fNwS_2k44oVDFVe1SxRDx2G2Q4qpgQD7AtbG8rt3AVibhbXse8J208J6O7EEonh3m6Gw7S_E=w1024",
    title: "Dining Room"
  },
  {
    image:
      "https://lh3.googleusercontent.com/vHWlBLUYzI2fNwS_2k44oVDFVe1SxRDx2G2Q4qpgQD7AtbG8rt3AVibhbXse8J208J6O7EEonh3m6Gw7S_E=w1024",
    title: "Master Bedroom"
  },
  {
    image:
      "https://lh3.googleusercontent.com/QWYzB7vfNo1IvMzqDH2S2O_1kmJCzZmMtB8p-1-1-S_T3Av2eFSLLEQX7k0ZO8tZJdZBawo-ldDvsAOWzdKwCw=w1024",
    title: "Entry Hall"
  },
  {
    image:
      "https://lh3.googleusercontent.com/akyJ0Y4cQ9wtjrp_kaOom5WChuCkdk7hgQFLyM-6rMYheYnTWRz6UdY1cYj-KuLr9b5A-rB-jF_r7wpADH3fAmE=w1024",
    title: "Deck and Pool"
  }
]
