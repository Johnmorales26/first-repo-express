// GET /admin/add-product
export const getError404 = function (req, res) {
    //res.status(404).sendFile(path.resolve('views', 'not-found.html'));
    res.render('not-found');
}