<!--
className: score-[0, 10]
-->
<svelte:options tag="my-tags" />

{#each data as [tag, score, type, link]}
  {@const randNum = Math.random()}
  {@const cScore = computeScore(score)}
  <mark part="tag" data-rand={randNum} data-score={cScore} class="score-{cScore}" data-type="{type || ''}">
    {#if link}
      <a part="link" href={link} target="_blank">{tag}</a>
    {:else}
      {tag}
    {/if}
  </mark>
{/each}

<slot name="text"></slot>

<script lang="ts">
  export let rerender: string

  import { afterUpdate } from 'svelte';
  import Utils from './utils'

  type TagName = string
  type TagScore = string
  type TagType = string
  type TagLink = string
  type TagData = [TagName, TagScore, TagType, TagLink]

  const preprocess = (txt: string): TagData[] => {
    return txt.split('\n').slice(0, -1)
      .filter(item => item.indexOf('//') !== 0 && item !== '')
      .map(item => item.split('/').slice(0, 3).concat([item.split('/').slice(3).join('/')]) as TagData)
  }

  const computeScore = (score: string) => score || Math.ceil(Math.random() * (8 - 3) + 3)

  const filter = (data: TagData[], type: TagType) => data.filter(item => item[2] === type)

  let data = []

  $: { rerender
    const text = document.querySelector('my-tags [slot=text]').textContent
    data = Utils.Shuffle(preprocess(text))
  }

</script>

<style>
  ::slotted(*) {
    display: none;
  }
</style>
