const wives = [
    "艾莉西亚",
    "露娜",
    "菲奥娜",
    "希尔薇",
    "克蕾雅",
    "诺艾尔",
    "赛琳娜",
    "米娅"
];

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash;
}

document.getElementById("testBtn").addEventListener("click", function () {
    const userId = document.getElementById("userId").value.trim();
    const result = document.getElementById("result");

    if (!userId) {
        result.textContent = "请先输入ID";
        return;
    }

    const index = hashString(userId) % wives.length;
    result.textContent = "你的异世界老婆是：" + wives[index];
});// JavaScript source code
