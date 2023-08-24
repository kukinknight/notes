//自定义一个 判断题型 函数，判断题目类型
function 判断题型(t){
    let html = ``
    switch(t.type){ //判断题目类型 1单选 3多选 4填空 String字符串
        case '1':
            html =选择题(t,t.type)   //按照 选择题 进行HTML组装
            break;
        case '3':
            html =选择题(t,t.type)   //按照 选择题 进行HTML组装
            break;
        case '4':
            html = 填空题(t)    //按照 填空题 进行HTML组装
            break;
    }

    return html;
}//setT




function 选择题(t,i){
    let arr = t.answerSheet //选项
    let text = ``//tab键上面 反单引号

    let typeArr =[  //题目类型
        {},
        {
            type:'radio',
            text:'单选'
        },
        {},
        {
            type:'checkbox',
            text:'多选'
        },
        {
            text:'填空'
        },
    ]

    for(let one of arr){    //循环每一个选项
        let pick = ''
        let str =   t.answer
        if( str.includes( one.value   )){   //是正确答案
            pick = `  class="pick"  `;
        }
        text += `
        <label data-right="1"   ${pick}  >
            <input type="${typeArr[i].type}" name="t_${t.id}" disabled>
            <span>${one.value} . ${one.name}</span>
        </label>
        `;

    }//for

    let html = `
    <div class="box">
        <h2>
            <span class="dan">${typeArr[i].text}</span>
            id. ${t.id}   ${t.title}
        </h2>
        ${text}

    </div> 
    `;
    return html;
} 



//自定函数 设置填空题
function 填空题(t){
    let html = `
        <div class="box">
            <h2>
                <span class="dan">填空题</span>
                ${t.title}
                <b style="color:red">${t.answer}  </b>
            </h2>
            <section>不显示视频</section>
        </div>
    `;

    return html;
}//setMedia


