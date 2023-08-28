import { definePage, ref } from 'abebuild'

const TextInput = () => {
  const $out = ref<HTMLDivElement>()
  return <div>
    <input onInput={(evt) => {
      $out.text = evt.target?.value
    })/>
    <div ref={$out}/>
  </div>
}

export default definePage(() => {
  const $counter = ref<HTMLDivElement>()
  
  return <html lang='ja'>
    <head>
      <meta charset='utf-8' />
    </head>
    <body>
      <h1>Abebuild Example App</h1>
      <div>
        <div>Count: <span ref={c`counter`}></span></div>
        <button onClick={() => {
          $counter.text = $counter.num + 1
        }}>Count Up!</button>
      </div>
    </body>
  </html>
})
