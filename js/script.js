//nav 메뉴 클릭 
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('#sidebar .nav ul li');
  const sections = document.querySelectorAll('.section');
  const dataNavItems = document.querySelectorAll('.data-nav ul li');
  const dataContents = document.querySelectorAll('.data-cont .dcont');

  navItems.forEach(item => {
      item.addEventListener('click', function() {
          const target = this.getAttribute('data-target');
          sections.forEach(section => {
              section.classList.remove('active');
              if (section.id === target) {
                  section.classList.add('active');
              }
          });
      });
  });

//data 메뉴 클릭 
  dataNavItems.forEach(item => {
      item.addEventListener('click', function() {
          const target = this.getAttribute('data-target');
          dataContents.forEach(content => {
              content.classList.remove('active');
              if (content.id === target) {
                  content.classList.add('active');
              }
          });
      });
  });
});


//image slider

  document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.image-container');
    const images = document.querySelectorAll('.image-container img');
    const leftButton = document.querySelector('.slide-btn.left');
    const rightButton = document.querySelector('.slide-btn.right');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');

    let currentIndex = 0;

    function updateSlide() {
      const offset = -currentIndex * (images[0].clientWidth + 10); // 이미지 간격(10px) 포함
      imageContainer.style.transform = `translateX(${offset}px)`;
    }

    leftButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
      }
    });

    rightButton.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlide();
      }
    });

    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });





//web 
// document.addEventListener('DOMContentLoaded', function() {
//     const webNav = document.querySelector('.web-nav ul');
//     const dataContents = document.querySelectorAll('.wcont');

//     // 초기 표시할 content 설정
//     document.getElementById('wcont1').classList.add('active');

//     webNav.addEventListener('click', function(event) {
//         const target = event.target.closest('li');
//         if (target && target.hasAttribute('data-target')) {
//             const targetId = target.getAttribute('data-target');
//             dataContents.forEach(content => {
//                 content.classList.remove('active');
//                 if (content.id === targetId) {
//                     content.classList.add('active');
//                 }
//             });
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.web-nav ul li');
  const contentItems = document.querySelectorAll('.wcont');
  
  // 초기 상태 설정: 첫 번째 콘텐츠 항목을 표시
  if (contentItems.length > 0) {
      contentItems[0].classList.add('active');
  }
  
  navItems.forEach(navItem => {
      navItem.addEventListener('click', (event) => {
          event.preventDefault(); // 기본 링크 동작 방지

          // 모든 콘텐츠 항목의 active 클래스를 제거
          contentItems.forEach(contentItem => {
              contentItem.classList.remove('active');
          });
          
          // 클릭한 항목의 data-target 속성 값을 가져옴
          const targetId = navItem.getAttribute('data-target');
          
          // 해당 ID를 가진 콘텐츠 항목에 active 클래스 추가
          const targetContent = document.getElementById(targetId);
          if (targetContent) {
              targetContent.classList.add('active');
          }
      });
  });
});

