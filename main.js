const manga=[{title:"ハイキュー!!",url:"https://www.shonenjump.com/j/rensai/haikyu.html"},
    {title:"呪術廻戦",url:"https://www.shonenjump.com/j/rensai/jujutsu.html"},
    {title:"ブラッククローバー",url:"https://www.shonenjump.com/j/rensai/bclover.html"},
    {title:"ワールドトリガー",url:"https://www.shonenjump.com/j/rensai/world.html"},
    {title:"Dr.STONE",url:"https://www.shonenjump.com/j/rensai/drstone.html"},
]

const scene=["https://livedoor.blogimg.jp/anigei-mangabox/imgs/4/d/4dd6bd91-s.jpg",
    "https://manga-comic-netabare.com/wp-content/uploads/2020/08/CnadM5kWAAAPjjy-768x689.jpg",
    "https://blogimg.goo.ne.jp/user_image/6d/da/4375040fc5a40054eb69fea787ed1359.jpg?1597877727",
    "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOXRxRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bd0eac625e4c105ef2b94d1c232923b239f9a587/186%5B2138%5D.jpg"
]

const mangaList=document.getElementById("mangalist")
const favoriteScene=document.getElementById("favorite-scene")

//mangaの要素全てを好きな漫画のところに表示させる関数
const addManga=function(){
    for(let i=0;i<manga.length;i++){
        const mangaFactor=document.createElement("a")
        mangaFactor.className="factor"
        mangaFactor.href=manga[i].url
        mangaFactor.textContent=manga[i].title
        mangaList.append(mangaFactor)
    }
}

addManga()

const imgFactor=document.createElement("img")
//footerの好きな漫画の自分のお気に入りのシーンに最初に表示させる関数
const imgInitialization =function(i){
    imgFactor.src=scene[0]
    imgFactor.id="scene"
    favoriteScene.append(imgFactor)
}

imgInitialization()

let count=0
let i=1
//footerの好きな漫画の自分のお気に入りのシーンに画像を張り、20secondで切り替わる関数
const imgChange=function(){
    const sceneId=document.getElementById("scene")
    const imgFactor=document.createElement("img")
    // count を更新
    count += 1
    let second=0
    // count を秒単位にして表示
    second = count / 100
    if(second%5===0 && i!=scene.length){
        imgFactor.src=scene[i]
        imgFactor.id="scene"
        favoriteScene.removeChild(sceneId)
        favoriteScene.append(imgFactor)
        i++
        if(i===scene.length){
            i=0
        }
        console.log(i)
    }
}

setInterval(imgChange, 10)