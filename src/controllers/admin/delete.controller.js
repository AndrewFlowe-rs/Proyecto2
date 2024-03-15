module.exports = (req,res) => {
    const { id , nombre} = req.query

    res.render("admin/deleteProduct", { id, nombre }
    )};
