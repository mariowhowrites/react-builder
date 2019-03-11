import React, { useState } from "react"
import BuilderFields from "./BuilderFields"

export default function PageBuilder({ sections }) {
  const [show, toggleShow] = useState(true)

  return (
    <aside
      id="PageBuilder"
      className={pageBuilderClasses(show)}
      style={{
        height: "100vh",
        transition: "all 1s ease-in-out"
      }}
    >
      <div className="relative h-full pl-12">
        <ShowToggler show={show} toggleShow={toggleShow} />
        <BuilderFields sections={sections} />
      </div>
    </aside>
  )
}

function ShowToggler({ show, toggleShow }) {
  return (
    <span
      id="showToggler"
      className="absolute text-5xl pin-l cursor-pointer"
      style={{
        transition: "transform 1s ease-in-out",
        top: "50%"
      }}
      onClick={() => toggleShow(!show)}
    >
      &raquo;
    </span>
  )
}

function pageBuilderClasses(show) {
  let classes = "fixed bg-white pin-r pin-t rounded-l-lg shadow-lg"

  if (!show) {
    classes = `${classes} hidePanel`
  }

  return classes
}
