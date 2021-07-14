window.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 's') {
    html2canvas(document.body)
      .then((canvas) => {
        // NOTE: style のサイズの方が、複写されている範囲ともブラウザのビューポートのサイズとも一致している。詳細不明。
        canvas.width = parseInt(canvas.style.width)
        canvas.height = parseInt(canvas.style.height)

        const frame = document.createElement('div')
        frame.style.position = 'absolute'
        frame.style.top = '0'
        frame.style.left = '0'
        frame.style.zIndex = '10000'
        frame.appendChild(canvas)
        document.body.appendChild(frame)

        const fabricCanvas = new fabric.Canvas(canvas)

        alert('The screenshot have been generated!')
      })
  }
})
