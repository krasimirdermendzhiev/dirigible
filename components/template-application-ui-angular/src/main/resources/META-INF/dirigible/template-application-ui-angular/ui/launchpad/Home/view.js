/*
 * Generated by Eclipse Dirigible based on model and template.
 *
 * Do not modify the content as it may be re-generated again.
 */
const viewData = {
    id: "home-launchpad",
    label: "Home Launchpad",
    factory: "frame",
    region: "center",
    link: "//services/web/${projectName}/gen/ui/launchpad/Home/index.html",
};

if (typeof exports !== 'undefined') {
    exports.getView = function () {
        return viewData;
    }
}
