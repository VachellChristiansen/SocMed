// //selecting all required elements
// const dropArea = document.querySelector(".drag-area"),
// dragText = dropArea.querySelector("header"),
// button = dropArea.querySelector("button"),
// input = dropArea.querySelector("input");
// let file; //this is a global variable and we'll use it inside multiple functions

// button.onclick = ()=>{
//   input.click(); //if user click on the button then the input also clicked
// }

// input.addEventListener("change", function(){
//   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
//   file = this.files[0];
//   dropArea.classList.add("active");
//   showFile(); //calling function
// });


// //If user Drag File Over DropArea
// dropArea.addEventListener("dragover", (event)=>{
//   event.preventDefault(); //preventing from default behaviour
//   dropArea.classList.add("active");
//   dragText.textContent = "Release to Upload File";
// });

// //If user leave dragged File from DropArea
// dropArea.addEventListener("dragleave", ()=>{
//   dropArea.classList.remove("active");
//   dragText.textContent = "Drag & Drop to Upload File";
// });

// //If user drop File on DropArea
// dropArea.addEventListener("drop", (event)=>{
//   event.preventDefault(); //preventing from default behaviour
//   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
//   file = event.dataTransfer.files[0];
//   showFile(); //calling function
// });

// function showFile(){
//   let fileType = file.type; //getting selected file type
//   let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
//   if(validExtensions.includes(fileType)){ //if user selected file is an image file
//     let fileReader = new FileReader(); //creating new FileReader object
//     fileReader.onload = ()=>{
//       let fileURL = fileReader.result; //passing user file source in fileURL variable
//         // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
//       // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
//       dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
//     }
//     fileReader.readAsDataURL(file);
//   }else{
//     alert("This is not an Image File!");
//     dropArea.classList.remove("active");
//     dragText.textContent = "Drag & Drop to Upload File";
//   }
// }


// INI FILE SEBELUMNYA
// var isAdvancedUpload = function() {
  // 	var div = document.createElement('div');
  // 	return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
  //   }();
    
  //   let draggableFileArea = document.querySelector(".drag-file-area");
  //   let browseFileText = document.querySelector(".browse-files");
  //   let uploadIcon = document.querySelector(".upload-icon");
  //   let dragDropText = document.querySelector(".dynamic-message");
  //   let fileInput = document.querySelector(".default-file-input");
  //   let cannotUploadMessage = document.querySelector(".cannot-upload-message");
  //   let cancelAlertButton = document.querySelector(".cancel-alert-button");
  //   let uploadedFile = document.querySelector(".file-block");
  //   let fileName = document.querySelector(".file-name");
  //   let fileSize = document.querySelector(".file-size");
  //   let progressBar = document.querySelector(".progress-bar");
  //   let removeFileButton = document.querySelector(".remove-file-icon");
  //   let uploadButton = document.querySelector(".upload-button");
  //   let fileFlag = 0;
    
  //   fileInput.addEventListener("click", () => {
  // 	  fileInput.value = '';
  // 	  console.log(fileInput.value);
  //   });
    
  //   fileInput.addEventListener("change", e => {
  // 	  console.log(" > " + fileInput.value)
  // 	  uploadIcon.innerHTML = 'check_circle';
  // 	  dragDropText.innerHTML = 'File Dropped Successfully!';
  // 	  document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
  // 	  uploadButton.innerHTML = `Upload`;
  // 	  fileName.innerHTML = fileInput.files[0].name;
  // 	  fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
  // 	  uploadedFile.style.cssText = "display: flex;";
  // 	  progressBar.style.width = 0;
  // 	  fileFlag = 0;
  //   });
    
  //   uploadButton.addEventListener("click", () => {
  // 	  let isFileUploaded = fileInput.value;
  // 	  if(isFileUploaded != '') {
  // 		  if (fileFlag == 0) {
  // 			  fileFlag = 1;
  // 			  var width = 0;
  // 			  var id = setInterval(frame, 50);
  // 			  function frame() {
  // 					if (width >= 390) {
  // 					  clearInterval(id);
  // 					  uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
  // 					} else {
  // 					  width += 5;
  // 					  progressBar.style.width = width + "px";
  // 					}
  // 			  }
  // 			}
  // 	  } else {
  // 		  cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
  // 	  }
  //   });
    
  //   cancelAlertButton.addEventListener("click", () => {
  // 	  cannotUploadMessage.style.cssText = "display: none;";
  //   });
    
  //   if(isAdvancedUpload) {
  // 	  ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
  // 		  draggableFileArea.addEventListener(evt, e => {
  // 			  e.preventDefault();
  // 			  e.stopPropagation();
  // 		  })
  // 	  );
    
  // 	  ["dragover", "dragenter"].forEach( evt => {
  // 		  draggableFileArea.addEventListener(evt, e => {
  // 			  e.preventDefault();
  // 			  e.stopPropagation();
  // 			  uploadIcon.innerHTML = 'file_download';
  // 			  dragDropText.innerHTML = 'Drop your file here!';
  // 		  });
  // 	  });
    
  // 	  draggableFileArea.addEventListener("drop", e => {
  // 		  uploadIcon.innerHTML = 'check_circle';
  // 		  dragDropText.innerHTML = 'File Dropped Successfully!';
  // 		  document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
  // 		  uploadButton.innerHTML = `Upload`;
    
  // 		  let files = e.dataTransfer.files;
  // 		  fileInput.files = files;
  // 		  console.log(files[0].name + " " + files[0].size);
  // 		  console.log(document.querySelector(".default-file-input").value);
  // 		  fileName.innerHTML = files[0].name;
  // 		  fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
  // 		  uploadedFile.style.cssText = "display: flex;";
  // 		  progressBar.style.width = 0;
  // 		  fileFlag = 0;
  // 	  });
  //   }
    
  //   removeFileButton.addEventListener("click", () => {
  // 	  uploadedFile.style.cssText = "display: none;";
  // 	  fileInput.value = '';
  // 	  uploadIcon.innerHTML = 'file_upload';
  // 	  dragDropText.innerHTML = 'Drag & drop any file here';
  // 	  document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
  // 	  uploadButton.innerHTML = `Upload`;
  //   });

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }


}
