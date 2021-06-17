export default interface TextImageInterface {
  headline: string
  subline: string
  description: string
  type: string
  image: {
    id: string
    ratio: number
    url: string
    focus_css: string
  }
  buttons: {
    label: string
    link: string
    btn_type: {
      value: string
    }
  }
}
