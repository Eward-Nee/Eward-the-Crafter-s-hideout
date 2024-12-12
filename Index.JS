
const header = document.getElementById(`headerIndex`)
const FirstTitle = document.getElementById(`firstpot`)



FirstTitle.addEventListener(`animationend`, function () {
    header.innerHTML = `         <nav id="navbar">
                                    <ul>
                                    <a href=""><li class="active">Home</li></a>
                                    <a href="project.html"><li>Projects</li></a>
                                    <a href="learning.html"><li>Learning</li></a>
                                    <a href="aboutMe.html"><li>About me</li></a>
                                    </ul>
                                </nav>
                                <hr style="color: chartreuse;">`

    const SecondTitle = document.getElementById(`navbar`)
    SecondTitle.addEventListener(`animationend`, function () {
        window.location.href = `Home.html`
    })

})


