window.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 's') {
    console.log('Start generating the screen-shot.')
    html2canvas(document.body)
      .then((canvas) => {
        const frame = document.createElement('div')
        frame.style.position = 'absolute'
        frame.style.top = '0'
        frame.style.left = '0'
        frame.style.zIndex = '10000'
        frame.appendChild(canvas)
        document.body.appendChild(frame)
        // const img = document.createElement('img')
        // const canvasContext = canvas.getContext('2d')
        // img.src = canvas.toDataURL()
        // document.body.appendChild(img)
        console.log('Finish generating the screen-shot.')
      })
  }
})
