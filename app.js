const unity = document.querySelectorAll('.unitiesArea .unity')
const courses = document.querySelectorAll('.courses')
const courseCard = document.querySelectorAll('.courses .swiper-slide')
const courseDescription = document.querySelectorAll('.coursePick .courseDescription')

unity.forEach((clickedUnity)=>{
    clickedUnity.addEventListener('click', ()=>{
        var dataUnity = clickedUnity.dataset.unity

        courses.forEach((selectedCourse)=>{
            if(selectedCourse.dataset.unity = dataUnity){
                selectedCourse.classList.add('active')
            }else{
                selectedCourse.classList.remove('active')
            }
        })

    })
})

courseCard.forEach((clickedCourse)=>{
    clickedCourse.addEventListener('click', ()=>{
        var dataCourse = clickedCourse.dataset.course

        courseDescription.forEach((clickedDescription)=>{
            if(clickedDescription.dataset.course = dataCourse){
                clickedDescription.classList.add('activeCourse')
            }else{
                clickedDescription.classList.remove('activeCourse')
            }
        })
    })
})
