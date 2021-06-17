// description
// type
// headline
// slider {
//   image {
//     id
//     url
//     focus_css
//     ratio
//   }
//   overlay_text
// }

export default interface SliderInterface {
    description: string
    type: string
    headline: string
    slider: {
      image: {
        id: string
        ratio: number
        url: string
        focus_css: string
      }
      overlay_text: string
    }
}
