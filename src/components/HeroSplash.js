import React from "react"

export default function HeroSplash() {
  return (
    <HeroSplashLayout>
      <HeroSplashBox />
    </HeroSplashLayout>
  )
}

function HeroSplashLayout(props) {
  return (
    <section
      className="HeroSplash h-screen"
      style={{
        backgroundImage:
          "url(https://placester.com/wp-content/uploads/2015/01/best-listing-photos-travis-mark-urban.jpg)",
        backgroundSize: "cover"
      }}
    >
      <div className="h-full w-4/5 mx-auto flex flex-col justify-center">
        {props.children}
      </div>
    </section>
  )
}

function HeroSplashBox() {
  return (
    <HeroSplashBoxLayout>
      <HeroTitle />
      <HeroSubtitle />
      <hr className="border-b border-blue-light opacity-50 mb-6" />
      <HeroDetails />
      <hr className="border-b border-blue-light opacity-50 my-6" />
      <h3 className="text-center mt-8 mb-10 text-3xl">$590,000</h3>
    </HeroSplashBoxLayout>
  )
}

function HeroSplashBoxLayout(props) {
  return (
    <article
      style={{
        backgroundColor: "rgba(18, 40, 58, 0.95)"
      }}
      className="text-white antialiased w-2/5 px-6"
    >
      {props.children}
    </article>
  )
}

function HeroTitle() {
  return (
    <h2 className="py-6 text-3xl">
      <span
        style={{
          color: "#0EDFFF"
        }}
      >
        FOR SALE:
      </span>{" "}
      5755 NW Sunnyside Drive
    </h2>
  )
}

function HeroSubtitle() {
  return <div className="pb-6">5755 NW Sunnyside Drive, Mesa, AZ 85202</div>
}

function HeroDetails() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 flex justify-center items-center py-4">
        4,700 SqFt
      </div>
      <div className="w-1/2 flex justify-center items-center py-4">
        5 Bedrooms
      </div>
      <div className="w-1/2 flex justify-center items-center py-4">
        4 Bathrooms
      </div>
      <div className="w-1/2 flex justify-center items-center py-4">Pool</div>
    </div>
  )
}
