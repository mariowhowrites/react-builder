import React from "react"

export default function NavigationBar(props) {
  return (
    <section className="NavigationBar bg-blue-darkest text-white antialiased">
      <div className="flex justify-between w-4/5 mx-auto py-8">
        <aside className="logo">
          <h2>Real Estate Page</h2>
        </aside>
        <aside>
          <a className="text-white no-underline" href="/contact">
            Contact
          </a>
        </aside>
      </div>
    </section>
  )
}
