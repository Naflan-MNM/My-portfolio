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
    const eduheading  = educationSection.querySelector('h3');
    const expheading  = experienceSection.querySelector('h3');

    /* educationSection.style.display='flex';
    experienceSection.style.display='flex'; */
    educationLink.addEventListener('click',()=>
        {
            educationSection.style.display='flex';
            experienceSection.style.display='none';
            eduheading.classList.add('active-section');
            expheading.classList.remove('active-section');

        }
    );
    experienceLink.addEventListener('click',()=>
        {
            experienceSection.style.display='flex';
            educationSection.style.display='none';
            expheading.classList.add('active-section');
            eduheading.classList.remove('active-section');

        }
    );

}