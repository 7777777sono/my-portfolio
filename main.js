const manga=[
    {title:"ハイキュー!!",url:"https://www.shonenjump.com/j/rensai/haikyu.html",id:"volleyball-manga"},
    {title:"呪術廻戦",url:"https://www.shonenjump.com/j/rensai/jujutsu.html",id:"jujutsu-kaisen"},
    {title:"ブラッククローバー",url:"https://www.shonenjump.com/j/rensai/bclover.html",id:"black-clover"},
    {title:"ワールドトリガー",url:"https://www.shonenjump.com/j/rensai/world.html",id:"world-trigger"},
    {title:"Dr.STONE",url:"https://www.shonenjump.com/j/rensai/drstone.html",id:"stone-world"},
    {title:"ONE PIECE",url:"https://www.shonenjump.com/j/rensai/onepiece.html",id:"one-piece"},
    {title:"僕のヒーローアカデミア",url:"https://www.shonenjump.com/j/rensai/myhero.html",id:"hero-academia"},
    {title:"暗殺教室",url:"https://www.shonenjump.com/j/rensai/ansatsu.html",id:"assassination-class"},
    {title:"NARUTO-ナルト-",url:"https://www.shonenjump.com/j/rensai/naruto.html",id:"naruto"},
    {title:"ダイヤのA",url:"https://diaace.com/",id:"diamond-A"},
]

const scene=["https://livedoor.blogimg.jp/anigei-mangabox/imgs/4/d/4dd6bd91-s.jpg",
    "https://manga-comic-netabare.com/wp-content/uploads/2020/08/CnadM5kWAAAPjjy-768x689.jpg",
    "https://newsinfomation.net/wp-content/uploads/2021/07/8-11.jpg",
    "https://blogimg.goo.ne.jp/user_image/6d/da/4375040fc5a40054eb69fea787ed1359.jpg?1597877727",
    "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOXRxRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bd0eac625e4c105ef2b94d1c232923b239f9a587/186%5B2138%5D.jpg",
    "https://ritaremake-jinseikakerubokuwa.com/wp-content/uploads/2020/03/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3796-768x576.png",
    "https://manga-netabare-kanso.com/wp-content/uploads/2018/04/%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%A5%E3%83%BC298%E8%A9%B1%E6%9C%88%E5%B3%B6%EF%BC%88%E3%83%84%E3%83%83%E3%82%AD%E3%83%BC%EF%BC%89.png",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/631/121/original.?1618474647",
    "https://manga-comic-netabare.com/wp-content/uploads/2020/01/20171006093355.jpg",
    "https://1.bp.blogspot.com/-8XKF_u8Q0mE/Xs5gJlBo_UI/AAAAAAAAFGk/0h5sD9APGXgsTDRZuI7uemQARZqW_Ii6wCPcBGAYYCw/s0/kokusen-min.jpg",
    "https://i0.wp.com/mannga-brothers.com/wp-content/uploads/2019/03/IMG_2773.jpg?resize=1280%2C720&ssl=1",
    "https://manga-netabare-kanso.com/wp-content/uploads/2021/01/drstone_senku_02-768x876.jpg",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/587/296/original.jpg?1608533541",
    "https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181128/20181128022834.png",
    "https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181203/20181203154632.png",
    "https://manga-legend.com/wp-content/uploads/2018/08/%E3%83%87%E3%82%AF%E3%80%80%E3%81%8B%E3%81%A3%E3%81%93%E3%81%84%E3%81%84%E3%82%B7%E3%83%BC%E3%83%B3-3-198x300.png",
    "https://manga-netabare-kanso.com/wp-content/uploads/2020/05/ca9bdb64-e1576884259455.jpg",
    "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEgzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f046414a51a690aa0d184569d9ecc1add7963488/8.jpg",
    "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHIzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8de349bb8bb8c037e77836fc1d7cfbdda6da176d/21900085154cd16fd89.jpg",
    "https://assets.st-note.com/production/uploads/images/9796525/picture_pc_656a28370f766dfb922a236b4129a253.jpg?width=800",
    "https://animemiru.jp/wp-content/uploads/2018/08/naruto-gai06.jpg",
    "https://www.cmoa.jp/cc/template/common/titleinfo/quotation/data/39221/images/39221_04.png",
    "https://www.cmoa.jp/cc/template/common/titleinfo/quotation/data/39221/images/39221_02.png"
]

const divinationResult=[{result:"喜び",url:"./image/happy.webp"},
    {result:"怒り",url:"./image/angry.jpg"},
    {result:"悲しみ",url:"./image/sad.webp"},
    {result:"疲れ",url:"./image/tired.jpg"},
    {result:"うんざり",url:"./image/boring.jpg"},
    {result:"驚き",url:"./image/surprise.webp"},
    {result:"幸福",url:"./image/happiness.webp"},
    {result:"信頼",url:"./image/trust.webp"},
]

const intro=document.getElementById("intro")
const famousScene=document.getElementById("famous-scene")
const omake=document.getElementById("omake")

const fukuokaUniversity=document.getElementById("fukuoka-university")
const engineering=document.getElementById("engineering")
const instagramUser=document.getElementById("instagram-user")
const mangaList=document.getElementById("mangalist")

const favoriteScene=document.getElementById("favorite-scene")
const favoriteScenePage=document.getElementById("favorite-scene-page")
const prevButton=document.getElementById("prev-button")
const nextButton=document.getElementById("next-button")

const zeroButton=document.getElementById("zero")
const oneButton=document.getElementById("one")
const twoButton=document.getElementById("two")
const threeButton=document.getElementById("three")
const fourButton=document.getElementById("four")
const fiveButton=document.getElementById("five")
const sixButton=document.getElementById("six")
const sevenButton=document.getElementById("seven")
const divinationId=document.getElementById("divination")

//マウスカーソルがHTML要素に乗ったとき
intro.addEventListener('mouseover', function() {
    intro.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
intro.addEventListener('mouseout', function() {
    intro.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
famousScene.addEventListener('mouseover', function() {
    famousScene.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
famousScene.addEventListener('mouseout', function() {
    famousScene.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
omake.addEventListener('mouseover', function() {
    omake.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
omake.addEventListener('mouseout', function() {
    omake.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
fukuokaUniversity.addEventListener('mouseover', function() {
    fukuokaUniversity.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
fukuokaUniversity.addEventListener('mouseout', function() {
    fukuokaUniversity.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
engineering.addEventListener('mouseover', function() {
    engineering.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
engineering.addEventListener('mouseout', function() {
    engineering.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
instagramUser.addEventListener('mouseover', function() {
    instagramUser.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
instagramUser.addEventListener('mouseout', function() {
    instagramUser.style.color=null
});

//mangaの要素全てを好きな漫画のところに表示させる関数
const addManga=function(){
    for(let i=0;i<manga.length;i++){
        const mangaFactor=document.createElement("a")
        mangaFactor.className="factor"
        mangaFactor.href=manga[i].url
        mangaFactor.id=manga[i].id
        mangaFactor.textContent=manga[i].title
        mangaList.append(mangaFactor)
    }
}

addManga()

//漫画のリストのidを取得
const volleyballManga=document.getElementById("volleyball-manga")
const jujutsukaisen=document.getElementById("jujutsu-kaisen")
const blackclover=document.getElementById("black-clover")
const worldtrigger=document.getElementById("world-trigger")
const stoneWorld=document.getElementById("stone-world")
const onepiece=document.getElementById("one-piece")
const heroAcademia=document.getElementById("hero-academia")
const assassinationClass=document.getElementById("assassination-class")
const naruto=document.getElementById("naruto")
const diamondA=document.getElementById("diamond-A")

//マウスカーソルがHTML要素に乗ったとき
volleyballManga.addEventListener('mouseover', function() {
    volleyballManga.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
volleyballManga.addEventListener('mouseout', function() {
    volleyballManga.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
jujutsukaisen.addEventListener('mouseover', function() {
    jujutsukaisen.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
jujutsukaisen.addEventListener('mouseout', function() {
    jujutsukaisen.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
blackclover.addEventListener('mouseover', function() {
    blackclover.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
blackclover.addEventListener('mouseout', function() {
    blackclover.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
worldtrigger.addEventListener('mouseover', function() {
    worldtrigger.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
worldtrigger.addEventListener('mouseout', function() {
    worldtrigger.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
stoneWorld.addEventListener('mouseover', function() {
    stoneWorld.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
stoneWorld.addEventListener('mouseout', function() {
    stoneWorld.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
onepiece.addEventListener('mouseover', function() {
    onepiece.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
onepiece.addEventListener('mouseout', function() {
    onepiece.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
heroAcademia.addEventListener('mouseover', function() {
    heroAcademia.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
heroAcademia.addEventListener('mouseout', function() {
    heroAcademia.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
assassinationClass.addEventListener('mouseover', function() {
    assassinationClass.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
assassinationClass.addEventListener('mouseout', function() {
    assassinationClass.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
naruto.addEventListener('mouseover', function() {
    naruto.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
naruto.addEventListener('mouseout', function() {
    naruto.style.color=null
});

//マウスカーソルがHTML要素に乗ったとき
diamondA.addEventListener('mouseover', function() {
    diamondA.style.color="blue"
});

//マウスカーソルがHTML要素から離れたとき
diamondA.addEventListener('mouseout', function() {
    diamondA.style.color=null
});

let pageNum=0
const imgFactor=document.createElement("img")
//footerの好きな漫画の自分のお気に入りのシーンに最初に表示させる関数
const imgInitialization =function(){
    imgFactor.src=scene[0]
    imgFactor.id="scene"
    pageNum++
    favoriteScenePage.textContent=pageNum+"/"+scene.length
    favoriteScene.append(imgFactor)
}

imgInitialization()

prevButton.onclick=function(){
    const sceneId=document.getElementById("scene")
    const imgFactor=document.createElement("img")
    if(i>0&&i!=pageNum){
        i--
        if(pageNum>1){
            pageNum--
        }
        else{
            pageNum=1
        }
    }
    else{
        i=scene.length-1
        pageNum=scene.length
    }
    imgFactor.src=scene[i]
    imgFactor.id="scene"
    favoriteScene.removeChild(sceneId)
    favoriteScenePage.textContent=pageNum+"/"+scene.length
    favoriteScene.append(imgFactor)
    console.log(pageNum)
    console.log("i="+i)
    //ボタンを押してから5secondで画像が切り替わるようにする
    count=0
}

nextButton.onclick=function(){
    const sceneId=document.getElementById("scene")
    const imgFactor=document.createElement("img")
    if(i<scene.length&&sceneId.src!=scene[scene.length-1]){
        if(i!=pageNum){
            i++
        }
        pageNum++
    }
    else{
        i=0
        pageNum=1
    }
    imgFactor.src=scene[i]
    imgFactor.id="scene"
    favoriteScene.removeChild(sceneId)
    favoriteScenePage.textContent=pageNum+"/"+scene.length
    favoriteScene.append(imgFactor)
    console.log(pageNum)
    console.log("i="+i)
    //ボタンを押してから5secondで画像が切り替わるようにする
    count=0
}

//マウスカーソルがHTML要素に乗ったとき
prevButton.addEventListener('mouseover', function() {
    prevButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
prevButton.addEventListener('mouseout', function() {
    prevButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
nextButton.addEventListener('mouseover', function() {
    nextButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
nextButton.addEventListener('mouseout', function() {
    nextButton.style.backgroundColor="white"
});

let count=0
let i=1
//footerの好きな漫画の自分のお気に入りのシーンに画像を張り、5secondで切り替わる関数
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
        if(pageNum<=scene.length){
            pageNum++
        }
        else{
            pageNum=1
        }
        i++
        favoriteScenePage.textContent=pageNum+"/"+scene.length
        favoriteScene.append(imgFactor)
        console.log(pageNum)
        console.log("i="+i)
        if(i===scene.length){
            i=0
        }
    }
}

setInterval(imgChange, 10)

//0~7までの乱数を発生させ,クリックしたボタンの値とその乱数の排他的論理和を返す関数
const xorResult=function(divination){
    let ramdom=Math.floor( Math.random() * 7 )  //0~7の乱数を発生させる
    return ramdom^divination //クリックしたボタンの値とその乱数の排他的論理和
}

//マウスカーソルがHTML要素に乗ったとき
zeroButton.addEventListener('mouseover', function() {
    zeroButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
zeroButton.addEventListener('mouseout', function() {
    zeroButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
oneButton.addEventListener('mouseover', function() {
    oneButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
oneButton.addEventListener('mouseout', function() {
    oneButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
twoButton.addEventListener('mouseover', function() {
    twoButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
twoButton.addEventListener('mouseout', function() {
    twoButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
threeButton.addEventListener('mouseover', function() {
    threeButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
threeButton.addEventListener('mouseout', function() {
    threeButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
fourButton.addEventListener('mouseover', function() {
    fourButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
fourButton.addEventListener('mouseout', function() {
    fourButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
fiveButton.addEventListener('mouseover', function() {
    fiveButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
fiveButton.addEventListener('mouseout', function() {
    fiveButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
sixButton.addEventListener('mouseover', function() {
    sixButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
sixButton.addEventListener('mouseout', function() {
    sixButton.style.backgroundColor="white"
});

//マウスカーソルがHTML要素に乗ったとき
sevenButton.addEventListener('mouseover', function() {
    sevenButton.style.backgroundColor="gray"
});

//マウスカーソルがHTML要素から離れたとき
sevenButton.addEventListener('mouseout', function() {
    sevenButton.style.backgroundColor="white"
});

zeroButton.onclick=function(){
    const divination=0
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}

oneButton.onclick=function(){
    const divination=1
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}

twoButton.onclick=function(){
    const divination=2
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}

threeButton.onclick=function(){
    const divination=3
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}

fourButton.onclick=function(){
    const divination=4
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}

fiveButton.onclick=function(){
    const divination=5
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}

sixButton.onclick=function(){
    const divination=6
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}

sevenButton.onclick=function(){
    const divination=7
    let result=xorResult(divination)
    const fateId=document.getElementById("fate")
    const fateimgId=document.getElementById("fate-img")
    const divinationFate=document.createElement("h1")
    divinationFate.id="fate"
    divinationFate.class="fate"
    divinationFate.textContent=divinationResult[result].result
    const divinationimg=document.createElement("img")
    divinationimg.id="fate-img"
    divinationimg.class="fate"
    divinationimg.src=divinationResult[result].url
    divinationId.removeChild(fateimgId)
    divinationId.removeChild(fateId)
    divinationId.append(divinationFate)
    divinationId.append(divinationimg)
}
