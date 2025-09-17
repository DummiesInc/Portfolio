interface CustomizeInfo {
    dimensions: {
        width: number,
        height: number
    },
    alt: string | null,
    copyright: string | null,
    url: string,
    id: string,
    edit: {
        x: number,
        y: number,
        zoom: number,
        background: string
    }
    color?: string
}

export interface WheelType {
    texture: CustomizeInfo,
    uid: string
}

export interface DeckType {
    texture: CustomizeInfo,
        uid: string
}

export interface MetalType {
    color: string,
    uid: string
}

export interface CustomiseSettingType {
    wheels: WheelType[],
    decks: DeckType[],
    metals: MetalType[]
}


export const customizeSettings: CustomiseSettingType = {
  wheels: [
    {
      texture: {
        dimensions: {
          width: 1024,
          height: 1024
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-cream.png",
        id: "Z1Nbs5bqstJ98LiD",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#DEB887",
      },
      uid: "cream"
    },
    {
      texture: {
        dimensions: {
          width: 1025,
          height: 1025
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-black.png",
        id: "Z1NbuJbqstJ98LiL",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#333333"
      },
      uid: "black"
    },
    {
      texture: {
        dimensions: {
          width: 1025,
          height: 1025
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-navy.png",
        id: "Z1NbupbqstJ98LiO",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#34495E"
      },
      uid: "navy"
    },
    {
      texture: {
        dimensions: {
          width: 1025,
          height: 1025
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-blue.png",
        id: "Z1NbtpbqstJ98LiI",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#068BD3"
      },
      uid: "blue"
    },
    {
      texture: {
        dimensions: {
          width: 1025,
          height: 1025
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-yellow.png",
        id: "Z1NbtJbqstJ98LiE",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },      
        color: "#F1C40F"
      },
      uid: "yellow"
    },
    {
      texture: {
        dimensions: {
          width: 1024,
          height: 1024
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-red.png",
        id: "Z1NbuZbqstJ98LiM",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#E84118"
      },
      uid: "red"
    },

    {
      texture: {
        dimensions: {
          width: 1025,
          height: 1025
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-purple.png",
        id: "Z1Nbt5bqstJ98LiJ",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#8E44AD",
      },
      uid: "purple"
    },
    {
      texture: {
        dimensions: {
          width: 1024,
          height: 1025
        },
        alt: null,
        copyright: null,
        url: "/images/wheels/wheel-pink.png",
        id: "Z1Nbu5bqstJ98LiP",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#F1396E"
      },
      uid: "pink"
    }
  ],
  decks: [
    {
      texture: {
        dimensions: {
          width: 2056,
          height: 4096
        },
        alt: null,
        copyright: null,
        url: "/images/decks/OniMask.png",
        id: "Z1NbrJbqstJ98Lh1",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#E84118",
      },
      // uid: "oni-mask"
      uid: 'red'
    },
    {
      texture: {
        dimensions: {
          width: 2056,
          height: 4096
        },
        alt: null,
        copyright: null,
        url: "/images/decks/grid-streaks.png",
        id: "Z1NbppbqstJ98Lhs",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
                color: "#333333",
      },
      // uid: "grid-streaks"
      uid: 'black'
    },
    {
      texture: {
        dimensions: {
          width: 2056,
          height: 4096
        },
        alt: null,
        copyright: null,
        url: "/images/decks/thank-you-deck.png",
        id: "Z1NbpJbqstJ98Lhp",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
      color: "#EEEEEE",

      },
      // uid: "thank-you"
      uid: 'white'
    },
    {
      texture: {
        dimensions: {
          width: 2056,
          height: 4096
        },
        alt: null,
        copyright: null,
        url: "/images/decks/PinkSwirl.png",
        id: "Z1NbopbqstJ98Lhm",
        edit: {
          x: 0,
          y: 0,
          zoom: 1,
          background: "transparent"
        },
        color: "#F1396E",
      },
      // uid: "pink-swirl"
      uid: 'pink'
    },
    // {
    //   texture: {
    //     dimensions: {
    //       width: 2056,
    //       height: 4096
    //     },
    //     alt: null,
    //     copyright: null,
    //     url: "/images/decks/green-and-navy.png",
    //     id: "Z1NbsZbqstJ98LiA",
    //     edit: {
    //       x: 0,
    //       y: 0,
    //       zoom: 1,
    //       background: "transparent"
    //     }
    //   },
    //   uid: "green-and-navy"
    // },
    // {
    //   texture: {
    //     dimensions: {
    //       width: 2056,
    //       height: 4096
    //     },
    //     alt: null,
    //     copyright: null,
    //     url: "/images/decks/black-and-yellow.png",
    //     id: "Z1NbsJbqstJ98Lh9",
    //     edit: {
    //       x: 0,
    //       y: 0,
    //       zoom: 1,
    //       background: "transparent"
    //     }
    //   },
    //   uid: "black-and-yellow"
    // },
    // {
    //   texture: {
    //     dimensions: {
    //       width: 2056,
    //       height: 4096
    //     },
    //     alt: null,
    //     copyright: null,
    //     url: "/images/decks/yellow-and-black.png",
    //     id: "Z1Nbr5bqstJ98Lh6",
    //     edit: {
    //       x: 0,
    //       y: 0,
    //       zoom: 1,
    //       background: "transparent"
    //     }
    //   },
    //   uid: "yellow-and-black"
    // },
    // {
    //   texture: {
    //     dimensions: {
    //       width: 2056,
    //       height: 4096
    //     },
    //     alt: null,
    //     copyright: null,
    //     url: "/images/decks/red-and-black.png",
    //     id: "Z1NbrpbqstJ98Lh4",
    //     edit: {
    //       x: 0,
    //       y: 0,
    //       zoom: 1,
    //       background: "transparent"
    //     }
    //   },
    //   uid: "red-and-black"
    // },
    // {
    //   texture: {
    //     dimensions: {
    //       width: 2056,
    //       height: 4096
    //     },
    //     alt: null,
    //     copyright: null,
    //     url: "/images/decks/red-and-white.png",
    //     id: "Z1NbrZbqstJ98Lh3",
    //     edit: {
    //       x: 0,
    //       y: 0,
    //       zoom: 1,
    //       background: "transparent"
    //     }
    //   },
    //   uid: "red-and-white"
    // },
    // {
    //   texture: {
    //     dimensions: {
    //       width: 2056,
    //       height: 4096
    //     },
    //     alt: null,
    //     copyright: null,
    //     url: "/images/decks/gray-and-black.png",
    //     id: "Z1NbspbqstJ98LiB",
    //     edit: {
    //       x: 0,
    //       y: 0,
    //       zoom: 1,
    //       background: "transparent"
    //     }
    //   },
    //   uid: "gray-and-black"
    // }
  ],
  metals: [
    {
      color: "#333333",
      uid: "black"
    },
    {
      color: "#6F6E6A",
      uid: "steel"
    },
    {
      color: "#34495E",
      uid: "asphalt"
    },
    {
      color: "#DEB887",
      uid: "gold"
    },
    {
      color: "#EEEEEE",
      uid: "silver"
    },
    {
      color: "#E84118",
      uid: "red"
    },
    {
      color: "#068BD3",
      uid: "blue"
    },
    {
      color: "#A6E22E",
      uid: "lime"
    },
    {
      color: "#F1C40F",
      uid: "yellow"
    },
    {
      color: "#8E44AD",
      uid: "purple"
    },
    {
      color: "#BA3763",
      uid: "raspberry"
    },
    // {
    //   color: "#F1396E",
    //   uid: "pink"
    // }
  ]
}