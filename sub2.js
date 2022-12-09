function createA() {
            let obj = document.getElementById("tags");
            let newA = document.createElement("a");
            let info_tag = prompt("추가로 필요한 태그를 입력하세요.", "");
            let info_link = prompt("링크 입력하세요.")
            newA.innerHTML = info_tag;
            newA.setAttribute("href", info_link);
            newA.setAttribute("class","tag")
            obj.appendChild(newA);
        }