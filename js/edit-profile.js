const fileinput=document.getElementById("file-input")
const fileinputbtn=document.getElementById("file-input-btn")
const image=document.getElementById("pp")

fileinputbtn.addEventListener("click",() => {
    fileinput.click()
})

fileinput.addEventListener("change",() => {
    const file=fileinput.files[0]
    if (!file)return
    const url=URL.createObjectURL(file)
    image.src=url
})