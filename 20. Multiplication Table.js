function multiplicationTable(n) {
    let result=`<table border=\'1\'>\n`
    console.log(result)
    for (var i = 0; i <= n; i++) {
        result+=`    <tr><th>${i}</th>`
        if(i==0) {
            result = '    <tr><th>x</th>'
            for (var j = 1; j <= n; j++) {
                result += `<th>${(i+1) * j}</th>`
            }
            result += '</tr>\n'
        }
        else{
            for (var j = 1; j <= n; j++) {

                result+=`<td>${i*j}</td>`



            }
            result+='</tr>\n'
        }

    }
    result+='</table>'
    console.log(result)
}
multiplicationTable(5)