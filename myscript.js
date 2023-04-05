document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    //Toggle means lageko xa vane hataune hateko xa vane lagaune toggle is one method
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {//contains is a function

        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    } else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {

            document.querySelector('.cross').style.display = 'inline'
        }, 350)
    }
})