var ListTemplate = /** @class */ (function () {
    function ListTemplate(_container) {
        this._container = _container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start')
            this._container.prepend(li);
        else
            this._container.append(li);
    };
    return ListTemplate;
}());
export default ListTemplate;
