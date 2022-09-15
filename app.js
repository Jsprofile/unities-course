const unity = document.querySelectorAll('.unitiesArea .unity')
const courses = document.querySelectorAll('.courses')
const courseCard = document.querySelectorAll('.courses .swiper-slide')
const courseDescription = document.querySelectorAll('.coursePick .courseDescription')
const descriptionArea = document.querySelectorAll('.coursesDescriptions')


unity.forEach((clickedUnity) => {
    clickedUnity.addEventListener('click', () => {

        //Add active class on unity button
        clickedUnity.classList.add('activeUnity')

        const el = [...unity].filter(e => e.classList.contains('activeUnity') && clickedUnity.innerHTML != e.innerHTML).map(elem => {
            elem.classList.remove('activeUnity')
        })


        //Add active class on course swiper 
        var dataUnity = clickedUnity.dataset.unity

        const cursel = [...courses].filter(x => x.dataset.unity == dataUnity).map(elem => {
            elem.classList.add('active')
        })
        const curseDonel = [...courses].filter(x => x.dataset.unity != dataUnity).map(elem => {
            elem.classList.remove('active')
        })

        const descriptionDisabled = [...descriptionArea].filter(x => x.dataset.unity != dataUnity).map(elem => {
            elem.classList.add('descriptionsDisable')
        })

        const descriptionAbled = [...descriptionArea].filter(x => x.dataset.unity == dataUnity).map(elem => {
            elem.classList.remove('descriptionsDisable')
        })

    })
})


//Add active class on course description 
courseCard.forEach((clickedCourse) => {
    clickedCourse.addEventListener('click', () => {
        var dataCourse = clickedCourse.dataset.course

        courseDescription.forEach((clickedDescription) => {
            if (clickedDescription.dataset.course == dataCourse) {
                clickedDescription.classList.add('activeCourse')
            } else {
                clickedDescription.classList.remove('activeCourse')
            }
        })
    })
})



