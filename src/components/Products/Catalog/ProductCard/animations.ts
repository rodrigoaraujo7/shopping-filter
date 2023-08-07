const ImageAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      delay: .3,
      duration: 1
    }
  },
}

const ProductTypeAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: .5,
      duration: 1
    }
  },
}

const DescriptionAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: .7,
      duration: 1
    }
  },
}

const PriceAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: .9,
      duration: 1
    }
  },
}

export {
  ImageAnimation,
  ProductTypeAnimation,
  DescriptionAnimation,
  PriceAnimation
}