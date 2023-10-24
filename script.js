var count = 0;

function changeCount(num) {
    count += num;
    
    // Check if count is negative and reset it to 0 if it is
    if (count < 0) {
        count = 0;
    }
    
    document.getElementById('count').innerHTML = count;
}
const footer = document.getElementById('footer');
let date = new Date().getFullYear();
footer.innerHTML = `<p>${date} Ron el.</p>`