import "./style.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;

  //テキストボックスの値を初期化
  document.getElementById("add-text").value = "";

  //未完了リストに追加
  createInCompleteTodo(inputText);
};

//渡された引数を基に未完了のToDoを作成する関数
const createInCompleteTodo = (todo) => {
  //liを生成
  const li = document.createElement("li");

  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pを生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  //button(完了)を生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親にあるli配下の完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    //戻すボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //ToDoの中身を取得し、未完了リストに追加
      const todoText = backButton.previousElementSibling.innerText;
      createInCompleteTodo(todoText);

      //押された戻すボタンの親にあるliを削除
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);

    //完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  //button(削除)を生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンにあるliを未完了リストから削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //階層構造を実現
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);

document.querySelector("#app").innerHTML = `
  <div>
    
  </div>
`;
