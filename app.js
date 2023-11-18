const wrapper = document.querySelector(".sliderWrapper");
const exploreItem = document.querySelectorAll(".exploreItem");


const products = [
  {
    id: 1,
    title: "Mercedes S-class",
    colors: [
      {
        code: "i",
        img: "./img/s-class-js1.png",
      },
      {
        code: "ii;",
        img: "./img/s-class-js2.png",
      },
      {
        code: "iii;",
        img: "./img/s-class-js3.png",
      },
      {
        code: "iv;",
        img: "./img/s-class-js4.png",
      },
    ],
  },
  {
    id: 2,
    title: "Mercedes EQS SUV",
    colors: [
      {
        code: "i",
        img: "./img/eqs-class-js1.png",
      },
      {
        code: "ii",
        img: "./img/eqs-class-js2.png",
      },
      {
        code: "iii",
        img: "./img/eqs-class-js3.png",
      },
      {
        code: "iv",
        img: "./img/eqs-class-js4.png",
      },
    ],
  },
  {
    id: 3,
    title: "Mercedes SL-class",
    colors: [
      {
        code: "i",
        img: "./img/SL-class-js1.png",
      },
      {
        code: "ii",
        img: "./img/SL-class-js2.png",
      },
      {
        code: "iii",
        img: "./img/SL-class-js3.png",
      },
      {
        code: "iv",
        img: "./img/SL-class-js4.png",
      },
    ],
  },
  {
    id: 4,
    title: "Mercedes GLE-class",
    colors: [
      {
        code: "i",
        img: "./img/Gle-class1.png",
      },
      {
        code: "ii",
        img: "./img/Gle-class2.png",
      },
      {
        code: "iii",
        img: "./img/Gle-class3.png",
      },
      {
        code: "iv",
        img: "./img/Gle-class4.png",
      },
    ],
  },
  {
    id: 5,
    title: "BMW SERIES",
    colors: [
      {
        code: "i",
        img: "./img/bmw-series1.png",
      },
      {
        code: "ii",
        img: "./img/bmw-series2.png",
      },
      {
        code: "iii",
        img: "./img/bmw-series3.png",
      },
      {
        code: "iv",
        img: "./img/bmw-series4.png",
      },
    ],
  },
  {
    id: 6,
    title: "BMW iX M60",
    colors: [
      {
        code: "i",
        img: "./img/bmw-M60-1.png",
      },
      {
        code: "ii",
        img: "./img/bmw-M60-2.png",
      },
      {
        code: "iii",
        img: "./img/bmw-M60-3.png",
      },
      {
        code: "iv",
        img: "./img/bmw-M60-4.png",
      },
    ],
  },
  {
    id: 7,
    title: "BMW i4 M50",
    colors: [
      {
        code: "i",
        img: "./img/bmw-m50-1.png",
      },
      {
        code: "ii",
        img: "./img/bmw-m50-2.png",
      },
      {
        code: "iii",
        img: "./img/bmw-m50-3.png",
      },
      {
        code: "iv",
        img: "./img/bmw-m50-4.png",
      },
    ],
  },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductColors = document.querySelectorAll(".color");



exploreItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    //change the choosen product
    choosenProduct = products[index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title 
    currentProductImg.src = choosenProduct.colors[0].img
  });
});

//assigning new colors 
currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src =  choosenProduct.colors[index].img
  });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductColors.forEach(color=>{
      color.style.backgroundColor= "rgb(194, 190, 190)";
      color.style.color= "rgb(12, 12, 39)";
    })
    color.style.backgroundColor= "rgb(246, 209, 165)";
    color.style.color= "rgb(12, 12, 39)";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
}) 

close.addEventListener("click",()=>{
  payment.style.display="none"
}) 