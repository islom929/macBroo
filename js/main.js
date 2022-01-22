const memoryBtns = document.querySelectorAll('.hero-memory__btn')
const ramBtns = document.querySelectorAll('.hero-ram__btn')
let priceResult = document.querySelector('.hero-price__result')
let countResult = document.querySelector('.hero-count__result')
const countMinus = document.querySelector('.hero-count__btn-minus')
const countPlus = document.querySelector('.hero-count__btn-plus')
const imgChooseBtns = document.querySelectorAll('.hero-img__choose-btn')
const imgResult = document.querySelectorAll('.hero-img__result')
const colorBtns = document.querySelectorAll('.hero-color__btn')
const colorBtnImgs = document.querySelectorAll('.hero-img__btn-img')
const ramResult = document.querySelector('.hero-text__ram')
const memoryResult = document.querySelector('.hero-text__memory')
const colorResult = document.querySelector('.hero-text__color')
const slider = document.querySelector('.hero-img__slider')

ramResult.textContent = 8
memoryResult.textContent = 256
colorResult.textContent = 'Gold'

let colorCount = 0;
let imgInd = 0

countResult.textContent = 1
priceResult.textContent = priceMac.r8m256gb
let priceResNum = Number(priceResult.textContent)

ramBtns.forEach(btn => {
  btn.addEventListener('click', evt => {
    ramBtns[0].classList.remove('btn--active')
    ramBtns[1].classList.remove('btn--active')

    btn.classList.add('btn--active')

    priceChecking()
    priceResNum = Number(priceResult.textContent)
    countResult.textContent = 1
  })
})


memoryBtns.forEach(btn => {
  btn.addEventListener('click', evt => {

    memoryBtns[0].classList.remove('btn--active')
    memoryBtns[1].classList.remove('btn--active')
    memoryBtns[2].classList.remove('btn--active')

    btn.classList.add('btn--active')

    priceChecking()
    priceResNum = Number(priceResult.textContent)
    countResult.textContent = 1
  })
})


function priceChecking() {
  if (memoryBtns[0].classList.contains('btn--active') && ramBtns[0].classList.contains('btn--active')) {
    memoryBtns[2].classList.add('d-none')
    ramBtns[0].classList.remove('d-none')
    priceResult.textContent = priceMac.r8m256gb
    ramResult.textContent = 8
    memoryResult.textContent = 256
  }else if (memoryBtns[0].classList.contains('btn--active') && ramBtns[1].classList.contains('btn--active')) {
    memoryBtns[2].classList.remove('d-none')
    ramBtns[0].classList.remove('d-none')
    priceResult.textContent = priceMac.r16m256gb
    ramResult.textContent = 16
    memoryResult.textContent = 256
  }
  if (memoryBtns[1].classList.contains('btn--active') && ramBtns[0].classList.contains('btn--active')) {
    memoryBtns[2].classList.remove('d-none')
    ramBtns[0].classList.remove('d-none')
    priceResult.textContent = priceMac.r8m512gb
    ramResult.textContent = 8
    memoryResult.textContent = 512
  }else if (memoryBtns[1].classList.contains('btn--active') && ramBtns[1].classList.contains('btn--active')) {
    memoryBtns[2].classList.remove('d-none')
    ramBtns[0].classList.remove('d-none')
    priceResult.textContent = priceMac.r16m512gb
    ramResult.textContent = 16
    memoryResult.textContent = 512
  }
  if (memoryBtns[2].classList.contains('btn--active')) {
    ramBtns[0].classList.add('d-none')
    ramBtns[1].classList.add('btn--active')
    ramBtns[0].classList.remove('btn--active')
    if (memoryBtns[2].classList.contains('btn--active') && ramBtns[1].classList.contains('btn--active')) {
      priceResult.textContent = priceMac.r16m1tb
      ramResult.textContent = 16
      memoryResult.textContent = '1tb'
    }
  }
}


if (countResult.textContent == 1) {
  countMinus.disabled = true
}


countMinus.addEventListener('click', evt => {
  let countResNum = Number(countResult.textContent)
  countResNum -= 1
  countResult.textContent = countResNum

  let NewpriceResNum = Number(priceResult.textContent)

  if (countResult.textContent == 1) {
    countMinus.disabled = true
    priceResult.textContent = NewpriceResNum / 2
  }

  if (countResult.textContent > 1) {
    priceResult.textContent = NewpriceResNum - priceResNum
  }

})


countPlus.addEventListener('click', evt => {
  let countResNum = Number(countResult.textContent)
  countResNum += 1
  countResult.textContent = countResNum

  if (countResult.textContent > 1) {
    countMinus.disabled = false
  }


  priceResult.textContent = priceResNum * countResNum
})


imgChooseBtns.forEach((btn, ind ) => {
  btn.addEventListener('click', evt => {

    imgChooseBtns[0].classList.remove('img--active')
    imgChooseBtns[1].classList.remove('img--active')
    imgChooseBtns[2].classList.remove('img--active')
    imgChooseBtns[3].classList.remove('img--active')
    imgChooseBtns[4].classList.remove('img--active')

    btn.classList.add('img--active')

    imgInd = ind
    imgResult.src = appleArr[colorCount].img[ind]

    if (!document.querySelector('.main').classList.contains('main-full-screen')) {
      if (imgChooseBtns[0].classList.contains('img--active')) {
        slider.style.transform =  `translateX(0)`
      }else if (imgChooseBtns[1].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${500}px)`
      }else if (imgChooseBtns[2].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${334 * 3}px)`
      }else if (imgChooseBtns[3].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${386 * 4}px)`
      }else if (imgChooseBtns[4].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${420 * 5}px)`
      }
    }

    if (document.querySelector('.main').classList.contains('main-full-screen')) {
      if (imgChooseBtns[0].classList.contains('img--active')) {
        slider.style.transform = 'translateX(-40px)'
      }else if (imgChooseBtns[1].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${700}px)`
      }else if (imgChooseBtns[2].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${460 * 3}px)`
      }else if (imgChooseBtns[3].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${540 * 4}px)`
      }else if (imgChooseBtns[4].classList.contains('img--active')) {
        slider.style.transform = `translateX(-${580 * 5}px)`
      }
    }

  })
})

colorBtns.forEach((btn,ind )=> {
  btn.addEventListener('click', evt => {
    colorBtns[0].classList.remove('btn--active')
    colorBtns[1].classList.remove('btn--active')
    colorBtns[2].classList.remove('btn--active')

    colorResult.textContent = btn.dataset.color
    btn.classList.add('btn--active')
    imgResult.src = appleArr[ind].img[imgInd]

    colorBtnImgs.forEach((b,i) => {
      b.src = appleArr[ind].img[i]
    })
    imgResult.forEach((i,j) => {
      i.src = appleArr[ind].img[j]
    })

    if (colorBtns[0].classList.contains('btn--active')) {
      colorCount = 0
    }else if (colorBtns[1].classList.contains('btn--active')) {
      colorCount = 1
    }else if (colorBtns[2].classList.contains('btn--active')) {
      colorCount = 2
    }
  })
})

document.querySelector('.hero-img__fullscreen-btn').addEventListener('click', evt => {
  document.querySelector('.hero-img__fullview').classList.toggle('d-none')
  document.querySelector('.hero-img__not-fullview').classList.toggle('d-none')

  document.querySelector('.main').classList.toggle('main-full-screen')

})