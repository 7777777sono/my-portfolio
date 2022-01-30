const university=document.getElementById("university")
const manga=["ハイキュー!!","呪術廻戦","ブラッククローバー","ワールドトリガー","Dr.STONE"]
const mangaList=document.getElementById("mangalist")

//mangaの要素全てを好きな漫画のところに表示させる関数
const addManga=function(){
    for(let i=0;i<manga.length;i++){
        const mangaFactor=document.createElement("h5")
        mangaFactor.className="factor"
        mangaFactor.textContent=manga[i]
        mangaList.append(mangaFactor)
    }
}

addManga()

university.onclick=function(){
    
}