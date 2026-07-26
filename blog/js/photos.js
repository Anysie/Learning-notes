let photos = ''
for(let i = 1 ; i <= 12 ; i++){
  photos += 
  `
    <img src="../image/image${i}.jpg" alt="" class="photo">
  `
}
const pts = document.querySelector('.photo-image')
pts.innerHTML = photos





// 放大图片
//获取元素
const wrapper = document.getElementById('bigImgWrapper')
const bigImg = document.getElementById('bigImg')
const allpht = document.querySelectorAll('.photo')

//点击图片，获取点击图片的地址
for(let i = 0 ; i < allpht.length ; i++){
  allpht[i].addEventListener('click',
    function(){
      bigImg.src = this.src
      wrapper.style.display = 'flex'
    }
  )
}
//点击背景关闭图片
wrapper.addEventListener('click', 
  function(e){
    if(e.target === wrapper){
      wrapper.style.display = 'none'
    }
  }
)


