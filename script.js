document.addEventListener('DOMContentLoaded', function() {
    // 示例成语及拼音
    const idiom = "画蛇添足";
    const pinyin = "hua she tian zu";

    // 设置标题
    document.getElementById('idiom-title').textContent = `${idiom} (${pinyin})`;

    let listItem = document.createElement('li');
    listItem.textContent = explanation;
    descriptionList.appendChild(listItem);

    listItem = document.createElement('li');
    listItem.textContent = example;
    descriptionList.appendChild(listItem);

    // 设置图片路径为你的图片路径
    const imagePath = 'E:\代码作业\作业github网页.1\海报展示\img'; // 替换为实际图片路径
    document.getElementById('generated-image').src = imagePath;
});