let showMenu = (searchId, navId) => {
  let search = document.getElementById(searchId),
    nav = document.getElementById(navId)

  if (search && nav) {
    search.addEventListener('click', () => {
      nav.classList.toggle('showmenu')
    })
  }

}
showMenu('search-btn', 'nav-button')









//------------- Click Case Studies------------------
const listStudy = document.querySelectorAll(".case__item");
const listContent = document.querySelectorAll(".case__tab-item");
function caseStudyTab() {
  listStudy.forEach(z => z.classList.remove("active-tab"));
  this.classList.add("active-tab");
  let caseName = this.textContent.trim();
  listContent.forEach(content => {
    content.classList.remove("content-active");
    if (content.dataset.case == caseName) {
      content.classList.add("content-active");
    }
  });
}
listStudy.forEach((l) => l.addEventListener("click", caseStudyTab));



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '50px',
  duration: 1500,
  reset: false
});

sr.reveal(`.case__info, .case__menu`, {
  origin: 'top',
  interval: 300
})
sr.reveal(`.NFT__bottom-img, .case__tab`, {
  origin: 'bottom',
  interval: 300
})
sr.reveal(`.NFT__item-left, .NFT__coin,
 .NFT__load, .NFT__bottom, .to-left, .to-left-item`, {
  origin: 'left',
  interval: 300
})
sr.reveal(`.NFT__item-right, .to-right, .to-right-item`, {
  origin: 'right',
  interval: 300 //Để thêm khoảng thời gian:
})

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)