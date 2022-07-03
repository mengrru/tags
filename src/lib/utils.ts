type UnknowColor = string
type HexColor = string
type RGBColor = string
type ParsedRGB = number[]

 const Color = {
  format (color: UnknowColor): HexColor | RGBColor {
    if (color[0] === '#') {
      return Color.switch16toRGB(color)
    } else if (color.indexOf('rgb') === 0) {
      return color
    } else {
      return Color.switch16toRGB('#' + color)
    }
  },
  switch16toRGB (color: HexColor): RGBColor {
      const r = parseInt(color.slice(1, 3), 16)
      const g = parseInt(color.slice(3, 5), 16)
      const b = parseInt(color.slice(5, 7), 16)
      return `rgb(${r},${g},${b})`
  },
  getRGB (color: RGBColor): ParsedRGB {
    return color.match(/rgb\((\d+),(\d+),(\d+)\)/)
      .slice(1)
      .map(e => parseInt(e, 10))
  },
  getGeryLevel (color: RGBColor): number {
    const [R, G, B] = Color.getRGB(color)
    return R * 0.299 + G * 0.587 + B * 0.114
  },
  isDeep (color: RGBColor): boolean {
    return Color.getGeryLevel(color) >= 192
  }
}

const DOM = {
  setStyle (dom: HTMLElement, styles: any) {
    if (!dom) return
    for (let sKey in styles) {
      dom.style[sKey] = styles[sKey]
    }
  },
  create (tagName: string, properties: any) {
    const $ = document.createElement(tagName)
    if (properties.style) {
      DOM.setStyle($, properties.style)
    }
    for (const key in properties) {
      $[key] = properties[key]
    }
    return $
  },
  createStyle (css: string, insert: HTMLElement | ShadowRoot) {
    const $style = document.createElement('style')
    $style.innerHTML = css
    if (insert) {
      insert.appendChild($style)
    }
    return $style
  }
}

const Debounce = (time: number) => {
  let timer
  return {
    exec (fn) {
      clearTimeout(timer)
      timer = setTimeout(fn, time)
    },
    cancel () {
      clearTimeout(timer)
    }
  } 
}

const Shuffle = <T>(arr: T[]): T[] => 
  arr.map(v => ({ v, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(v => v.v)

export default {
  Color,
  DOM,
  Debounce,
  Shuffle
}
