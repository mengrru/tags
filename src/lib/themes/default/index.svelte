<svelte:options tag="tags-default-style" />

<div id="tags-root"
  style:width={width || '100%'}
  style:height={height || '100%'}
>
  <div id="title-bg"
    style:font-size={11 * Float(scale) + 'rem'}
    style:color={Utils.Color.format(Colorscheme.pop())}
  >{bgText}</div>

  <slot></slot>
</div>

<script lang="ts">
  export let rerender: string
  export let title: string
  export let scale: string
  export let width: string
  export let height: string
  export let icon: string = "➜"
  export let inorder: boolean = false

  import { Colorscheme, Size } from './constant'
  import Utils from '../../utils'

  type RGBColor = string

  const Float = (n: string) => parseFloat(n)

  const FontSize = (size: number) => size * 5 * Float(scale)

  const getIntFromRand = (rand: number, end: number) => Math.floor(rand * end)

  const genBgColor = (randNum: number) => Colorscheme[getIntFromRand(randNum, Colorscheme.length)]

  const genCSS = () => {
    const genStyle = (index: number) => `.score-${index} { font-size: ${FontSize(Size[index])}px }`
    return Array.from(Array(11)).map((_, i) => genStyle(i)).join('\n')
  }
  const genFontColor = (rgbBgColor: RGBColor) => Utils.Color.isDeep(rgbBgColor) ? '#555' : '#fff'

  const debounce = Utils.Debounce(200)

  let bgText = title

  $: { rerender
    const marks = Array.from(document.querySelector('my-tags').shadowRoot.querySelectorAll('mark'))

    marks.forEach($e => {
      const bgColor = genBgColor(parseFloat($e.dataset.rand))
      Math.random()
      Utils.DOM.setStyle($e, {
        backgroundColor: bgColor,
        color: genFontColor(bgColor),
        top: getIntFromRand(Math.random(), 90) + '%',
        left: getIntFromRand(Math.random(), 85) + '%',
        zIndex: (11 - parseInt($e.dataset.score, 10)).toString()
      })
      Utils.DOM.setStyle($e.getElementsByTagName('a')[0], {
        color: genFontColor(bgColor),
        textDecoration: 'none'
      })
      $e.onmouseover = () => {
        debounce.exec(() => {
          const curType = $e.dataset.type
          marks.forEach(mark => {
            if (curType && mark.dataset.type === curType) {
              mark.style.opacity = String(1)
              mark.style.zIndex = String(10 + parseInt(mark.style.zIndex))
              bgText = curType
            } else {
              mark.style.opacity = String(0.1)
            }
          })
          $e.style.opacity = String(1)
          $e.style.zIndex = String(21)
        })
      }
      $e.onmouseout = () => {
        debounce.cancel()
        marks.forEach(mark => {
          mark.style.opacity = String(0.8)
          mark.style.zIndex = String(11 - parseInt(mark.dataset.score))
        })
        bgText = title
      }
    })
  }

  Utils.DOM.createStyle(`
    ${genCSS()}

    mark {
      position: ${inorder ? "unset" : "absolute"};
      padding: .2em .3em;
      display: inline-block;
      border-radius: .3em;
      margin: .15em .1em;
      opacity: .8;
      transition: opacity .2s;
    }
    mark a::after { content: "${icon}"; }
    mark a:hover::after { animation: move .5s linear infinite; position: relative; }
    @keyframes move {
      0% { left: 0px }
      50% { left: 1% }
      100% { left: 0px }
    }
    @media (max-width: 1000px) {
      mark { animation: none !important; }
    }
    @media (max-width: 600px) {
      mark { position: unset; }
      html { overflow-x: hidden; font-size: 10px; }
    }
  `, document.querySelector('my-tags').shadowRoot)

</script>

<style>
  #tags-root {
    overflow-x: hidden;
    padding: 7%;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
  }
  #title-bg {
    position: absolute;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
