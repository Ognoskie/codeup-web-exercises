document.querySelector('#update-color-btn').addEventListener('click', function() {
    let color = document.querySelector('#color-spec').value;
    document.querySelector('#color').innerText = color;
    document.querySelector('#color').style.color = color;
});
// hide parent content
document.querySelector('#disappear-btn').addEventListener('click', function() {
    this.parentElement.style.display = "none";
});
