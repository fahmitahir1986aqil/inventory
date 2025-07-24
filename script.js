document.getElementById('scanInButton').addEventListener('click', function() {
    const item = document.getElementById('scanInInput').value;
    document.getElementById('scanInInput').value = '';
    document.getElementById('scanInMessage').innerText = `${item} scanned in successfully!`;
});
document.getElementById('scanOutButton').addEventListener('click', function() {
    const item = document.getElementById('scanOutInput').value;
    document.getElementById('scanOutInput').value = '';
    document.getElementById('scanOutMessage').innerText = `${item} scanned out successfully!`;
});
