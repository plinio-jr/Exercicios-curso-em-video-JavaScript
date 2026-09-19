function tabuada() {
   let num = document.getElementById('txtn')
   let tab = document.getElementById('seltab')
   if (num.value.lenght == 0) {
      window.alert('[ERRO] Informe o um numero')
   } else {
      let n = Number(num.value)
      let t = 1
      tab.innerHtml = ''
      while(t <=10) {
         let item = document.createElement('option')
         item.text = `${n} X ${t} = ${n * t}`
         tab.appendChild(item)
         t++
      }
   }
}
    