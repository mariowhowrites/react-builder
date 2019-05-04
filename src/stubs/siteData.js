const siteData = {
  heroSplash: {
    backgroundImage: {
      default:
        "https://placester.com/wp-content/uploads/2015/01/best-listing-photos-travis-mark-urban.jpg",
      type: "text"
    },
    streetAddress: { default: "5755 NW Sunnyside Drive", type: "text" },
    city: { default: "Mesa", type: "text" },
    state: { default: "AZ", type: "text" },
    zipCode: { default: 85202, type: "text" },
    price: { default: "$590,000", type: "text" },
    amenities: {
      type: "list",
      default: [
        {
          title: "4,700 SqFt"
        },
        {
          title: "5 Bedrooms"
        },
        {
          title: "4 Bathrooms"
        },
        {
          title: "Pool"
        }
      ]
    }
  },
  propertyHighlights: {
    sectionTitle: {
      type: "text",
      default: "Property Highlights"
    },
    highlights: {
      type: "list",
      default: [
        {
          title: "4,700 SqFt",
          description:
            "Plenty of space to entertain or relax throughout the home.",
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
          description:
            "All baths are fitted with elegant, water-saving features.",
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
          description:
            "Inground pool for swimming laps or relaxing with a drink.",
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
          description:
            "Meets all code standards and includes all modern amenities.",
          image:
            "https://lh3.googleusercontent.com/A8qvGBV2K88gYv_CkqfY9GGezlfjBlI0dWyrErbvijKaal45YPODaSWXGCXCbVoIqHh9thPlM0b2JjVUPajTCRk=w1024"
        }
      ]
    }
  },
  propertyDetails: {
    sectionTitle: {
      type: "text",
      default: "Additional Details"
    },
    details: {
      type: "keyValue",
      default: [
        {
          label: "Status",
          value: "Active"
        },
        {
          label: "Listed On",
          value: "5/27/2017"
        },
        {
          label: "Type",
          value: "Single Family Home"
        },
        {
          label: "Price",
          value: "$590,000"
        },
        {
          label: "Area (Ft)",
          value: "4,700"
        },
        {
          label: "Flooring",
          value: "Hardware / Tile"
        },
        {
          label: "Year Built",
          value: "2004"
        }
      ]
    },
    benefits: {
      type: "list",
      default: [
        "Living Room 21x14",
        "Swimming Pool",
        "Dining Room COMBO",
        "Gas Heat/Forced Air",
        "Kitchen 14x12",
        "Central Air Conditioning",
        "Master Bedroom 17x12",
        "High Speed Internet Ready",
        "Bedroom 2 12x10",
        "Fireplace",
        "Bedroom 3 12x10",
        "Wet Bar",
        "Bedroom 4 12x10",
        "Attached Heated Garage",
        "Den 8x12"
      ]
    }
  },
  virtualTour: {
    sectionTitle: {
      default: "Take a virtual tour.",
      type: "text"
    },
    description: {
      default:
        "Watch the video below and see all the luxury that 5755 NW Sunnyside Drive offers you.",
      type: "textarea"
    },
    video: {
      default: "https://www.youtube.com/embed/mPfGE8M0YPM",
      type: "text"
    }
  },
  locationMap: {
    sectionTitle: { default: "Location", type: "text" },
    streetAddress: { default: "5755 NW Sunnyside Drive", type: "text" },
    city: { default: "Mesa", type: "text" },
    state: { default: "AZ", type: "text" },
    zipCode: { default: 85202, type: "text" },
    googleMapLink: {
      default:
        "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk2bCNrTb3IARcW50bZz4KTk&key=AIzaSyCd75Xyu4TbxInAcsqwKAE2aH1i-6qt3J8",
      type: "text"
    }
  },
  propertyGallery: {
    sectionTitle: { default: "Gallery", type: "text" },
    panels: {
      type: "keyValue",
      default: [
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
    }
  },
  testimonials: {
    sectionTitle: { default: "Testimonials", type: "text" },
    description: {
      type: "textarea",
      default: "Hear what some of our satisfied customers are saying about us!"
    },
    testimonials: {
      type: "list",
      default: [
        {
          image:
            "https://lh3.googleusercontent.com/2NIWadoS7ktDsTxFbOYjv9YGdyPQ0Hwz0bzGdtM86rVpW558SdAZYxYqeWCYox15FV437GJPuzQ-vwIQHK7F=w1024",
          name: "Cindy Smith",
          relation: "First Time Buyer",
          quote:
            "As first time home buyers, my wife and I were a little nervous about the investment we were about to make. It felt like a massive commitment. Plus we couldn’t agree on all the details we wanted. Art Vandelay turned out to be our hero! He was active and involved with us every step of the way. He found us the perfect property, and helped us negotiate a price we were happy with. Absolutely delighted!"
        },
        {
          image:
            "https://lh3.googleusercontent.com/ptoWMDP9f_nYrkeZlGKBlcHzGljP0lxxGch46qdN0ZKV8uvmei0L87StAhrgWPb4yiNStr4z2_Qj948LLkliUQ=w1024",
          name: "John Brown",
          relation: "Previous Owner",
          quote:
            "When I had to move for work, I was concerned about getting the best price for my house. Vandelay properties came highly recommended by a friend and they couldn’t have been more right. The team at Vandelay knows property values and showed my home highlighting its most valuable assets. It sold in only 3 months and best of all I got a great price!"
        }
      ]
    }
  },
  agentContact: {
    image: {
      type: "text",
      default:
        "https://lh4.googleusercontent.com/-guu0XH3T-Zs/AAAAAAAAAAI/AAAAAAAAAGw/gbSVF-EkeJI/photo.jpg"
    },
    heading: { type: "text", default: "Questions About This Property?" },
    name: { type: "text", default: "Taylor Langius" },
    title: { type: "text", default: "Licensed Agent" },
    email: { type: "text", default: "jim@vandelayproperties.com" },
    phoneNumber: { type: "text", default: "(561) 555-8954" },
    address: { type: "text", default: "79 E. 14th Avenue, Cty, State Zip" },
    bio: {
      type: "textarea",
      default:
        "Our only goal at Vandelay Properties is to give our clients a VIP experience making their dream home a reality. If you have any questions or are interested in this property, contact its listing agent Jim Smith. He’ll be in touch to answer all your questions."
    }
  }
}

export default siteData
