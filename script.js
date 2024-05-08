const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    // slidesPerView: 2, // Adjust the number of visible slides dynamically
    // spaceBetween: 20, // Adjust the spacing between slides
    mousewheel: false,

    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        768: {
            // slidesPerView: 1,
            // spaceBetween: 100,
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-prev',
        prevEl: '.swiper-next',
    },

    // And if we need scrollbar
});

window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
  });

// const navs = document.querySelectorAll(".navigation>div")

// const sections = document.querySelectorAll("section")
// const texts = document.querySelectorAll(".tx>div:nth-child(2)")
// let textContents = []
// let textIndex = []
// let boos = [true, true, false, false, false, true]
// let dones = [false, false, false, false, false, false]

// const headlines = document.querySelectorAll(".headline-div")

// function headlineThing(parent) {
//     const childs = parent.querySelectorAll("*")

//     childs.forEach(child => {
//         child.style.transform = "none"
//         child.style.opacity = "1"
//     })

// }

// function appropriateNavigation(idx) {
//     navs.forEach(nav => nav.classList.remove("current-navigation"))
//     navs[idx].classList.add("current-navigation")
// }

// function appearText(idx, boo, booboo) {
//     if (dones[idx] && !booboo) {
//         return
//     }
//     dones[idx] = true
//     setTimeout(() => {
//         // texts[idx].innerHTML+=`<span>${textContents[idx][textIndex[idx]]}</span>`
//         // // console.log(textContents[idx][textIndex[idx]])
//         // texts[idx].innerHTML+=" "
//         texts[idx].querySelectorAll("span>span:nth-child(2)")[textIndex[idx]].style.transform = "none"
//         texts[idx].querySelectorAll("span>span:nth-child(2)")[textIndex[idx]].style.opacity = "1"

//         textIndex[idx]++
//         if (textIndex[idx] < textContents[idx].length) {
//             appearText(idx, boo, true)
//         }
//         else {
//             if (idx == 0) {
//                 document.querySelector(".rightHero>div>div:nth-child(2)").style.opacity = "1"
//             }
//             if (idx == 2) {
//                 document.querySelector(".rightD button").style.opacity = "1"
//             }
//             if (idx == 3) {
//                 document.querySelector(".menuRight>a").style.opacity = "1"
//             }
//             if (idx == 4) {
//                 document.querySelector(".rightHouse button").style.opacity = "1"
//             }

//             if (boo) {
//                 appearText(idx + 1, boos[idx + 1])
//             }
//         }
//     }, 50)
// }

// texts.forEach((text, i) => {
//     textContents.push(text.innerText.split(" "))
//     textIndex.push(0)
//     text.innerHTML = ""
//     for (let id = 0; id < textContents[i].length; id++) {
//         text.innerHTML += `<span><span>${textContents[i][id]}</span><span>${textContents[i][id]}</span></span>`
//         // console.log(textContents[idx][textIndex[idx]])
//         text.innerHTML += " "
//     }

// })

// function calcHeight(idx) {
//     let sum = 0
//     for (let i = 0; i < idx; i++) {
//         sum += sections[i].offsetHeight
//     }
//     return sum
// }

// window.addEventListener("scroll", () => {
//     const scrolled = window.scrollY

//     if (scrolled > calcHeight(1) - 400) {
//         appearText(0, true, false, false)
//     }
//     if (scrolled > calcHeight(2) - 200) {
//         headlineThing(headlines[0])
//         appropriateNavigation(1)
//     }
//     else {
//         appropriateNavigation(0)

//     }
//     if (scrolled > calcHeight(2) + 400) {
//         appearText(3, false)
//     }
//     if (scrolled > calcHeight(4) - 200) {
//         headlineThing(headlines[1])
//         appearText(4, false)
//         appropriateNavigation(2)
//         document.querySelector(".curtain").style.transform = "translateX(-100%)"
//     }
//     if (scrolled > calcHeight(5) - 200) {
//         appropriateNavigation(3)
//     }
//     if (scrolled > calcHeight(6) - 200) {
//         headlineThing(headlines[2])
//         headlineThing(headlines[4])
//         appearText(5, true)
//         setTimeout(() => {
//             headlineThing(headlines[3])
//         }, 500)
//         appropriateNavigation(4)
//         document.querySelector(".contact-abs").style.transform = "translateY(-40%)"
//     }
// })

setTimeout(() => {
    window.scrollTo(0, 0);
    
}, 500);

setTimeout(() => {
    document.querySelector(".loader").style.display = "none"
    document.querySelector("div#sr-res-root").style.display = "none"
    document.querySelector(".rightHeader>*").addEventListener("click", () => {
        document.querySelector("div#sr-res-root").click()
    })
    document.querySelector(".rightD button").addEventListener("click", () => {
        document.querySelector("div#sr-res-root").click()
    })
    
    document.querySelector(".rightHouse button").addEventListener("click", ()=>{
        document.querySelector("#sht").click()
    })
    document.querySelector("#hero>span").style.opacity = "1"
    document.querySelector("#hero>span").style.transform = "translateX(-0%)"
    document.querySelector(".hero-elipse").style.opacity = "1"
    document.querySelector(".hero-elipse").style.transform = "translate(-50%, -50%)"
    document.querySelector("#hero canvas").style.opacity = "1"
    document.querySelector("#hero canvas").style.transform = "scale(1)"
    if(window.innerWidth<769){
        document.querySelector("#hero canvas").style.transform = "scale(1)"
    }


    const navs = document.querySelectorAll(".navigation>div")

    const sections = document.querySelectorAll("section")
    const texts = document.querySelectorAll(".tx>div:nth-child(2)")
    let textContents = []
    let textIndex = []
    let boos = [true, true, false, false, false, true]
    let dones = [false, false, false, false, false, false]

    const headlines = document.querySelectorAll(".headline-div")

    function headlineThing(parent) {
        const childs = parent.querySelectorAll("*")

        childs.forEach(child => {
            child.style.transform = "none"
            child.style.opacity = "1"
        })

    }

    function appropriateNavigation(idx) {
        navs.forEach(nav => nav.classList.remove("current-navigation"))
        navs[idx].classList.add("current-navigation")
    }

    function appearText(idx, boo, booboo) {
        if (dones[idx] && !booboo) {
            return
        }
        dones[idx] = true
        setTimeout(() => {
            // texts[idx].innerHTML+=`<span>${textContents[idx][textIndex[idx]]}</span>`
            // // console.log(textContents[idx][textIndex[idx]])
            // texts[idx].innerHTML+=" "
            texts[idx].querySelectorAll("span>span:nth-child(2)")[textIndex[idx]].style.transform = "none"
            texts[idx].querySelectorAll("span>span:nth-child(2)")[textIndex[idx]].style.opacity = "1"

            textIndex[idx]++
            if (textIndex[idx] < textContents[idx].length) {
                appearText(idx, boo, true)
            }
            else {
                if (idx == 0) {
                    document.querySelector(".rightHero>div>div:nth-child(2)").style.opacity = "1"
                }
                if (idx == 2) {
                    document.querySelector(".rightD button").style.opacity = "1"
                }
                if (idx == 3) {
                    document.querySelector(".menuRight>a").style.opacity = "1"
                }
                if (idx == 4) {
                    document.querySelector(".rightHouse button").style.opacity = "1"
                }

                if (boo) {
                    appearText(idx + 1, boos[idx + 1])
                }
            }
        }, 50)
    }

    texts.forEach((text, i) => {
        textContents.push(text.innerText.split(" "))
        textIndex.push(0)
        text.innerHTML = ""
        for (let id = 0; id < textContents[i].length; id++) {
            text.innerHTML += `<span><span>${textContents[i][id]}</span><span>${textContents[i][id]}</span></span>`
            // console.log(textContents[idx][textIndex[idx]])
            text.innerHTML += " "
        }

    })

    function calcHeight(idx) {
        let sum = 0
        for (let i = 0; i < idx; i++) {
            sum += sections[i].offsetHeight
        }
        return sum
    }

    // if(window.innerWidth<768){
    //     document.querySelector("#hero>canvas").style.height = `${document.querySelector("#hero>canvas").offsetWidth*1.5}px`
    // }

    // window.addEventListener("resize", ()=>{
    //     if(window.innerWidth<768){
    //         document.querySelector("#hero>canvas").style.height = `${document.querySelector("#hero>canvas").offsetWidth*1.5}px`
    //     }
    // })

    setTimeout(()=>{
        appearText(0, true, false, false)
    },600)

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY

        if (scrolled > calcHeight(1) - 400) {
            appearText(0, true, false, false)
        }
        if (scrolled > calcHeight(2) - 400) {
            headlineThing(headlines[0])
            appropriateNavigation(1)
        }
        else {
            appropriateNavigation(0)

        }
        if(window.innerWidth>768){
            if (scrolled > calcHeight(2) + 400) {
                appearText(3, false)
            }
        }
        else{
            if (scrolled > calcHeight(2)) {
                appearText(3, false)
            }
        }
        
        if (scrolled > calcHeight(4) - 200) {
            headlineThing(headlines[1])
            appearText(4, false)
            appropriateNavigation(2)
            document.querySelector(".curtain").style.transform = "translateX(-100%)"
        }
        if (scrolled > calcHeight(5) - 200) {
            appropriateNavigation(3)
        }

        if(window.innerWidth>768){
            if (scrolled > calcHeight(6) - 200) {
                headlineThing(headlines[2])
                headlineThing(headlines[4])
                appearText(5, true)
                setTimeout(() => {
                    headlineThing(headlines[3])
                }, 500)
                appropriateNavigation(4)
                document.querySelector(".contact-abs").style.transform = "translateY(-40%)"
                if (window.innerWidth < 768) {
                    document.querySelector(".contact-abs").style.transform = "translate(-50%, -0%)"
                }
            }
        }
        else{
            if (scrolled > calcHeight(6)) {
                headlineThing(headlines[2])
                headlineThing(headlines[4])
                appearText(5, true)
                setTimeout(() => {
                    headlineThing(headlines[3])
                }, 500)
                appropriateNavigation(4)
                document.querySelector(".contact-abs").style.transform = "translateY(-40%)"
                if (window.innerWidth < 768) {
                    document.querySelector(".contact-abs").style.transform = "translate(-50%, -0%)"
                }
            }
        }
        // const swiper = new Swiper('.swiper', {
        //     // Optional parameters
        //     direction: 'horizontal',
        //     loop: true,
        //     centeredSlides: true,
        //     // slidesPerView: 2, // Adjust the number of visible slides dynamically
        //     // spaceBetween: 20, // Adjust the spacing between slides
        
        //     breakpoints: {
        //         0: {
        //             slidesPerView: 1.3,
        //             spaceBetween: 10,
        //         },
        //         768: {
        //             slidesPerView: 2,
        //             spaceBetween: 20,
        //         }
        //     },
        
        //     // Navigation arrows
        //     navigation: {
        //         nextEl: '.swiper-prev',
        //         prevEl: '.swiper-next',
        //     },
        
        //     // And if we need scrollbar
        // });
        
        window.addEventListener('beforeunload', function () {
            window.scrollTo(0, 0);
        });
        
        // Scroll effect for blurring the menu image
        window.addEventListener('scroll', function() {
            var menuSection = document.getElementById('menu');
            var menuImage = document.querySelector('#menu img');
            var bounding = menuSection.getBoundingClientRect();
        
            if (bounding.top <= (window.innerHeight || document.documentElement.clientHeight)) {
                menuImage.style.filter = 'blur(8px)'; // Apply blur
            } else {
                menuImage.style.filter = 'none'; // Remove blur when out of view
            }
        });
        

// Update coin rotation based on device orientation (mobile) (gyro feature)
function onDeviceOrientation(event) {
    const alpha = event.alpha ? event.alpha * (Math.PI / 180) : 0;
    const beta = event.beta ? event.beta * (Math.PI / 180) : 0;
    coin.rotation.y = alpha;
    coin.rotation.x = beta;
}
window.addEventListener('deviceorientation', onDeviceOrientation, true);

    })
}, 2000)
