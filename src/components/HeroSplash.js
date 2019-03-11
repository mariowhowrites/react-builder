import React from "react"

export default function HeroSplash(props) {
  return (
    <HeroSplashLayout backgroundImage={props.backgroundImage}>
      <HeroSplashBox {...props} />
    </HeroSplashLayout>
  )
}

function HeroSplashLayout(props) {
  return (
    <section
      className="HeroSplash h-screen"
      style={{
        backgroundImage: `url(${props.backgroundImage.value})`,
        backgroundSize: "cover"
      }}
    >
      <div className="h-full w-4/5 mx-auto flex flex-col justify-center">
        {props.children}
      </div>
    </section>
  )
}

function HeroSplashBox(props) {
  return (
    <HeroSplashBoxLayout>
      <HeroTitle {...props} />
      <HeroSubtitle {...props} />
      <hr className="border-b border-blue-light opacity-50 mb-6" />
      <HeroDetails {...props} />
      <hr className="border-b border-blue-light opacity-50 my-6" />
      <h3 className="text-center mt-8 mb-10 text-3xl">{props.price.value}</h3>
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

function HeroTitle({ streetAddress }) {
  return (
    <h2 className="py-6 text-3xl">
      <span
        style={{
          color: "#0EDFFF"
        }}
      >
        FOR SALE:
      </span>{" "}
      {streetAddress.value}
    </h2>
  )
}

function HeroSubtitle({ streetAddress, city, state, zipCode }) {
  return (
    <div className="pb-6">{`${streetAddress.value}, ${city.value}, ${
      state.value
    } ${zipCode.value}`}</div>
  )
}

function HeroDetails({ amenities }) {
  return (
    <div className="flex flex-wrap">
      {amenities.value.map(amenity => (
        <div
          key={amenity.title}
          className="w-1/2 flex justify-center items-center py-4"
        >
          {amenity.title}
        </div>
      ))}
    </div>
  )
}
