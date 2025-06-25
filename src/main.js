import "./style.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;

  //テキストボックスの値を初期化
  document.getElementById("add-text").value = "";

  //liを生成
  const li = document.createElement("li");

  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pを生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  //階層構造を実現
  div.appendChild(p);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);

document.querySelector("#app").innerHTML = `
  <div>
    
  </div>
`;
