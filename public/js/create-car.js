// render image

const ImageElem = document.getElementById('primary-image-elem')
const uploadImageInput = document.getElementById('primary-image-input')

uploadImageInput.addEventListener('input',function(event){
let file = uploadImageInput.files[0];
let reader = new FileReader();

reader.onload = function(e) {
    ImageElem.setAttribute('src',e.target.result)
}
reader.readAsDataURL(file);
})

// \end render image