const manga=[{title:"ハイキュー!!",url:"https://www.shonenjump.com/j/rensai/haikyu.html"},
    {title:"呪術廻戦",url:"https://www.shonenjump.com/j/rensai/jujutsu.html"},
    {title:"ブラッククローバー",url:"https://www.shonenjump.com/j/rensai/bclover.html"},
    {title:"ワールドトリガー",url:"https://www.shonenjump.com/j/rensai/world.html"},
    {title:"Dr.STONE",url:"https://www.shonenjump.com/j/rensai/drstone.html"},
]

const scene=["https://livedoor.blogimg.jp/anigei-mangabox/imgs/4/d/4dd6bd91-s.jpg",
    "https://manga-comic-netabare.com/wp-content/uploads/2020/08/CnadM5kWAAAPjjy-768x689.jpg",
    "https://blogimg.goo.ne.jp/user_image/6d/da/4375040fc5a40054eb69fea787ed1359.jpg?1597877727",
    "https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOXRxRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bd0eac625e4c105ef2b94d1c232923b239f9a587/186%5B2138%5D.jpg",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/631/121/original.?1618474647",
    "https://manga-comic-netabare.com/wp-content/uploads/2020/01/20171006093355.jpg"
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