import React from "react"

export default function PropertyGallery({ sectionTitle, panels }) {
  return (
    <section className="PropertyGallery bg-blue-darker text-white flex flex-col items-center">
      <h3 className="text-5xl font-normal pt-32 mb-24">{sectionTitle.value}</h3>
      <div className="flex flex-wrap justify-between w-4/5">
        {panels.value.map((panel, index) => (
          <GalleryPanel
            panel={panel}
            index={index}
            count={panels.value.length}
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
