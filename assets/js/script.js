
//Links alert
const socialContent = {
    gitHub : 'master-jr',
    youtube : 'channel/UC_BSzKucblA4G8G0eAjCJ4A',
    facebook : 'profile.php?id=100015134868886',
    instagram : '#'
}
/* console.log(socialMedia) */
function changeNameMediaSocial() {

    for(let li of socialLink.children) {
       const social = li.getAttribute('class')
      /*  alert(li.children.href) */

      /* li.children[0].href = 'https://www.google.com' */
       li.children[0].href = `https://${social}.com/${socialContent[social]}`

       /* alert(social) */
       /* alert(li.children[0].href) */
    }    
}
changeNameMediaSocial();









/* The Matrix Effect*/


//const Matrix
const theMatrix = document.getElementById('matrix');
const ctx = theMatrix.getContext('2d');
const w = theMatrix.width = document.body.offsetWidth;
const h = theMatrix.height = document.body.offsetHeight;
const cols = Math.floor(w/20) + 1;
const yPos = Array(cols).fill(0);

//ctx Matrix
ctx.fillStyle = '#000';
ctx.fillRect(0,0,w,h);

//Function Matrix
function AMatrix() {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    yPos.forEach((y,ind) => {
        const text = String.fromCharCode(Math.random() *128);
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if(y > 100 + Math.random() * 10000) yPos[ind] = 0;
        else yPos[ind] = y + 20;
    });
}
setInterval(AMatrix, 50);
/*
    camelCase
    PascalCase
    snake_case
    kebab-case

*/