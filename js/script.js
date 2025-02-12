'use strict'
const profile = document.querySelector('.profilepic');
const Body = document.querySelector('main')

const Container = document.querySelector('.profile-div')

const showContainer = function(){
    Container.classList.remove('hidden')
}
const hideContainer = function(){
    Container.classList.add('hidden')
}

profile.addEventListener('click', showContainer)
Body.addEventListener('click', hideContainer)