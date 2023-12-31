const express = require("express")
const app = express();
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Cho phép truy cập từ bất kỳ nguồn gốc nào
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Các phương thức được phép
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Các tiêu đề được phép
    next();
});

app.post("/v1/update", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.body);
    }, [2000])
})

app.listen(8000, () => {
    console.log("Sever is running...");
})