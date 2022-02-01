const manga=[{title:"ハイキュー!!",url:"https://www.shonenjump.com/j/rensai/haikyu.html"},
    {title:"呪術廻戦",url:"https://www.shonenjump.com/j/rensai/jujutsu.html"},
    {title:"ブラッククローバー",url:"https://www.shonenjump.com/j/rensai/bclover.html"},
    {title:"ワールドトリガー",url:"https://www.shonenjump.com/j/rensai/world.html"},
    {title:"Dr.STONE",url:"https://www.shonenjump.com/j/rensai/drstone.html"},
    {title:"ONE PIECE",url:"https://www.shonenjump.com/j/rensai/onepiece.html"},
    {title:"僕のヒーローアカデミア",url:"https://www.shonenjump.com/j/rensai/myhero.html"},
    {title:"暗殺教室",url:"https://www.shonenjump.com/j/rensai/ansatsu.html"},
    {title:"NARUTO-ナルト-",url:"https://www.shonenjump.com/j/rensai/naruto.html"},
    {title:"ダイヤのA",url:"https://diaace.com/"},
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
const mangaList=document.getElementById("mangalist")
const favoriteScene=document.getElementById("favorite-scene")
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
const imgInitialization =function(){
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

//0~7までの乱数を発生させ,クリックしたボタンの値とその乱数の排他的論理和を返す関数
const xorResult=function(divination){
    let ramdom=Math.floor( Math.random() * 7 )  //0~7の乱数を発生させる
    console.log((ramdom^divination)+"da")
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
