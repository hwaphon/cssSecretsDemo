/*
* @Author: hwaphon
* @Date:   2018-05-17 09:54:18
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-05-17 10:10:57
*/

const code = `
html, body {
  height: 100%;
  background-color: #aaa;
  --accent-color: #F00;
}

p {
  color: #FFF;
  background-color: var(--accent-color);
  border: 1px solid currentColor;
}

div.demo1 {
  box-sizing: border-box;
  border-radius: 100%;
  border: 10px solid rgba(255, 255, 255, .5);
  width: 220px;
  height: 220px;
  margin: 48px auto;

  background-color: #FFF;
  background-image: linear-gradient(45deg, transparent 75%, #000 0),
                    linear-gradient(45deg, #000 25%, transparent 0),
                    linear-gradient(45deg, transparent 75%, #000 0),
                    linear-gradient(45deg, #000 25%, transparent 0);
                    
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px, 15px 15px, 30px 30px;
}
`

export default code