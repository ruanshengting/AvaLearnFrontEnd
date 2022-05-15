const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const profileName = document.getElementById('profile_name')
const profileDate = document.getElementById('profile_date')
const animatedBgText = document.querySelectorAll('.animated-bg-text')
const animatedBg = document.querySelectorAll('.animated-bg')
setTimeout(() => {
  getData()
}, 1000)
function getData() {
  header.innerHTML = `<img src="/Users/sruan006/Desktop/ava/AvaLearnFrontEnd/image/bonVoyage.jpg"/>`
  title.innerHTML = 'Lorem ipsum'
  excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
          delectus!`
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/61.jpg" />`
  profileName.innerHTML = 'John'
  profileDate.innerHTML = '2022.05.13'
  animatedBgText.forEach((item) => {
    item.classList.remove('animated-bg-text')
  })
  animatedBg.forEach((item) => {
    item.classList.remove('animated-bg')
  })
}
