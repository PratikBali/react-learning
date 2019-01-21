
// For easily binding all function into component no need to bind individual functions
module.exports = function bindFunctions (functions) {
    functions.foreach(fun => (
        this[fun] = this[fun].bind(this)
    ));
}