console.log('Hello World');
function saveTextAsFile(text,file,type='text/plain'){
    const anchor = document .createElement('a')
    anchor.download = file
    anchor.href = URL.createObjectURL(new Blob([text],{type}))
    anchor.click()
    // anchor.remove()  // maybe
}
document.querySelector('button').addEventListener('click',()=>{saveTextAsFile('{"name": "midu"}','file.json','application/json')})
