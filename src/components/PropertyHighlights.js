import React from "react"

export default function PropertyHighlights({ sectionTitle, highlights }) {
  return (
    <section className="PropertyHighlights flex flex-col items-center mt-32">
      <h3 className="text-5xl font-normal mb-24">{sectionTitle.value}</h3>
      <PropertyHighlightPanels panels={highlights} />
    </section>
  )
}

function PropertyHighlightPanels({ panels }) {
  return (
    <div className="flex flex-wrap w-4/5 mx-auto border-b">
      {panels.value.map((panel, index) => (
        <HighlightPanel
          panel={panel}
          index={index}
          count={panels.value.length}
          key={panel.title}
        />
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
    >
      <img className="mb-10" src={panel.image} alt="" />
      <h4 className="font-normal text-xl mb-8">{panel.title}</h4>
      <p className="pr-4 opacity-50">{panel.description}</p>
    </div>
  )
}
