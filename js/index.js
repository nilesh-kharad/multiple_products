let container = document.getElementById("upload-body");
function bulkload() {
const fileUpload = document.getElementById('fileupload');
    let a = document.getElementById('fileupload').files.length;
    let source = document.getElementById('fileupload').value;
    let letshtml="";
   
    for (var i=0; i<a;i++){
        var reader = new FileReader();
        var file = fileUpload.files[i];
        var url = reader.readAsDataURL(file);
        console.log(file.name);
        var url = window.URL.createObjectURL(file);
        let containercount = 
        `<div class="container">
        <div id="uploadimg">
         <img id="upimg" src="${url}" alt="" width="100px" height="100px">        
            </div>
        <div>
            <div class="row">
                <div class="col">
                    <label _ngcontent-qfi-c9="" for="category">Weight from</label>
                    <input type="text" class="form-control" name="weight-from" placeholder="Enter weight">
                </div>
            <div class="col">
                <label _ngcontent-qfi-c9="" for="category">Weight to</label>
                <input type="text" class="form-control" name="weight-to" placeholder="Enter weight">
            </div>
            <div class="col">
                <label _ngcontent-qfi-c9="" for="category">Mark</label>
                <input type="text" name="mark" class="form-control">
            </div>
        </div>
        <div>
            <label _ngcontent-qfi-c9="" for="category">Sub Category*</label>
            <select _ngcontent-qfi-c9="" class="form-control form-control-sm" id="wholesaler"
                name="subcategory"></select>
            <label _ngcontent-qfi-c9="" for="tag">Tag</label>
            <textarea class="form-control" placeholder="Tags" name="tag" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>`;
    letshtml +=containercount;
    }
    container.innerHTML = letshtml;
}