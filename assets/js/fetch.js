(function(document){
  fetch('http://54.250.157.25:9090/flow-ow-portal/api/image/all')
    .then(response => {
      return response.json()
    })
    .then(data=> {
      let html = ''
      if (data.success) {
        data.categoryList.forEach((item, index) => {

          let list = ''
          // 列表
          item.list.forEach((listItem, listIndex) => {
            list += `
                <li data-index="${index}-${listIndex}">
                    <a href="${listItem.src}" target="_blank">
                        <img id="${listItem.id}" src="${listItem.src}" alt="${listItem.alt}">
                    </a>
                </li>
            `
          })
          // 栏目
          html += `
                <div class="img-card" data-index="${index}">
                    <h2 class="card-title">${item.category}</h2>
                    <ul class="img-list">
                        ${list}
                    </ul>
                </div>
            `
        })
        return html
      } else {
        alert('请求错误')
      }
    }).then(html=>{
      document.querySelector('.content-wrap').innerHTML = html
    })
})(document)