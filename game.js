const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ตัวอย่างพื้นหลัง
ctx.fillStyle = "#aaddff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ตัวอย่างข้อความ
ctx.fillStyle = "#000";
ctx.font = "30px sans-serif";
ctx.fillText("ยินดีต้อนรับสู่ Wang DnD!", 200, 300);
