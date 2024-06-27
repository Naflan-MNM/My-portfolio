document.addEventListener('readystatechange',(event)=>{
    if (event.target.readyState === 'complete') {
        console.log('complete')
        initApp();
    }
})

const initApp = ()=>{
    const educationLink = document.getElementById('education-link');
    const experienceLink = document.getElementById('experience-link');
    const educationSection = document.getElementById('education');
    const experienceSection = document.getElementById('experience');
    console.log(educationLink)

    /* educationSection.style.display='flex';
    experienceSection.style.display='flex'; */
    educationLink.addEventListener('click',()=>
        {
            educationSection.style.display='flex';
            experienceSection.style.display='none';
            educationSection.classList.add = 'active-section';

        }
    );
    experienceLink.addEventListener('click',()=>
        {
            experienceSection.style.display='flex';
            educationSection.style.display='none';
        }
    );

}