// まずshowStatus関数を定義します。これがないとエラーが出ます。
function showStatus(msg) {
    let dispMoney = showMoney ? `残金: ${money}円` : "残金: ???円";
    statusElement.textContent = dispMoney + " | " + msg;
}

// ここから下に変数や関数を定義
let mode = null; // "cash" or "cashless"
let money = 0; 
let turnCount = 0; 
let currentTurn = 0; 
let pricePerDish = 500; 
let showMoney = true; 
let showSalesDetail = false;
let pendingSales = 0;
let selectedIngredients = [];
let turnHistory = [];

let controlsElement, statusElement, selectedInfoElement, historyElement;

// シンプルなテスト用イベント(最初は天気確認)
function initGame() {
    showStatus("まずは天気イベントを確認しましょう");
    showWeatherInfo();
}

// 天気イベント表示(テスト用)
function showWeatherInfo() {
    controlsElement.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = "【天気イベント一覧】 - テスト表示";
    controlsElement.appendChild(p);

    const btn = createButton("確認した", () => {
        showStatus("支払いモードを選んでください");
        showModeSelection();
    });
    controlsElement.appendChild(btn);
}

// 支払いモード選択(テスト用)
function showModeSelection() {
    controlsElement.innerHTML = "";
    showStatus("現金かキャッシュレスを選んでください");

    const modeLabel = document.createElement("label");
    modeLabel.textContent = "支払いモード：";
    const modeSelect = document.createElement("select");
    const optCash = document.createElement("option");
    optCash.value="cash"; optCash.text="現金";
    const optCashless = document.createElement("option");
    optCashless.value="cashless"; optCashless.text="キャッシュレス";
    modeSelect.appendChild(optCash);
    modeSelect.appendChild(optCashless);
    modeLabel.appendChild(modeSelect);
    controlsElement.appendChild(modeLabel);

    const btnNext = createButton("これでゲーム開始(仮)", () => {
        mode = modeSelect.value;
        money = 100000; 
        showStatus("借入100,000円完了。ゲーム準備OK！");
    });
    controlsElement.appendChild(btnNext);
}

// ボタン生成関数
function createButton(label, onClick) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = onClick;
    return btn;
}

window.onload = () => {
    statusElement = document.getElementById("status");
    controlsElement = document.getElementById("controls");
    selectedInfoElement = document.getElementById("selected-info");
    historyElement = document.getElementById("history");
    initGame();
};
