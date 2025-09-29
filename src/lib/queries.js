export const heroSectionQuery = `*[_type == "heroSection"][0]{
  title,
  subtitle,
  buttonText,
  backgroundImage
}`

export const aboutUsSectionQuery = `*[_type == "aboutUs"][0]{
  title,
  description,
  image1,
  image2
}`

export const parallaxSectionQuery = `*[_type == "parallaxSection"][0]{
  title1,
  title2,
  buttonText1,
  buttonText2,
  image1,
  image2,
  backgroundImage
}`

export const servicesSectionQuery = `*[_type == "servicesSection"][0]{
  title,
  subtitle,
  cards[] {
    title,
    description,
    buttonText
  }
}`

export const ourChefsSectionQuery = `*[_type == "ourChefsSection"][0]{
  title,
  description,
  chefs[] {
    name,
    title,
    image {
      asset -> {
        _id,
        url
      }
    },
    socialLinks {
      facebook,
      instagram,
      linkedin,
      twitter
    }
  }
}`


export const footerSectionQuery = `*[_type == "footerSection"][0]{
  logo {
    asset -> {
      _id,
      url
    }
  },
  description,
  openHoursTitle,
  openHoursLines[],
  reservationTitle,
  reservationLines[],
  socialLinks {
    facebook,
    instagram,
    twitter,
    linkedin,
    email
  }
}`