function setActiveButton(element,parentId){

    const currentTarget = (() => {
        if(element.classList.contains('block_of_buttons')){
            return element
        }
        return element.closest('.block_of_buttons');
    })();

    if(!currentTarget){
        return;
    }
    const nodes = document.querySelectorAll(`#${parentId} .block_of_buttons`);

    nodes.forEach(item => {
        item.classList.remove('activated')
    })
    currentTarget.classList.add('activated')

    
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.user_card').addEventListener('click', function(){
        document.querySelector('.dropdown__info').classList.toggle('invisible')
        document.querySelector('.dropdown__info').classList.toggle('jello')
    })

    let nav__bar = document.querySelector('.nav__bar')
    nav__bar.addEventListener('click', (event) =>{
        document.querySelector('.dropdown__info').classList.remove('visible')   
    });

    const containerProfile = document.querySelector('#profile-settings');
    containerProfile.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveButton(e.target,'profile-settings');
    });

    const containerMain = document.querySelector('#main-settings');
    containerMain.addEventListener('click', function(e) {
        e.preventDefault();
        setActiveButton(e.target,'main-settings');
    });

    
    if(window.innerWidth<=600){
        document.querySelector('.nav_bar_left').classList.add('none')
        document.querySelector('.back').addEventListener('click', ()=>{
            document.querySelector('.nav_bar_left').classList.toggle('none')
            document.querySelector('.nav_bar_left').classList.add('flex')
            document.querySelector('.nav_bar_left').setAttribute('style', 'width:auto; height:100%;z-index:2;')
            document.querySelector('.right__content').classList.add('none')
        })

        document.querySelector('.activated').addEventListener('click', ()=>{
            document.querySelector('.nav_bar_left').classList.add('none')
            document.querySelector('.right__content').classList.remove('none')
            document.querySelector('.right__content').classList.add('flex')
        })
    }
});

