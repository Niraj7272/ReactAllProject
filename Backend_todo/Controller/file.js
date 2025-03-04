export const insertImage = (req,res) =>{
    const img = req.file;
    console.log(img);

    const imgPath = `/images/${img.filename}`;
    res.send(imgPath);
}