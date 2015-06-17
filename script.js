var oojs = (function (oojs) {
    var ToolbarItem = function(itemElement) {
        Object.defineProperty(this, "_el", {
            value: itemElement
        });
    };

    Object.defineProperties(ToolbarItem.prototype, {
        toggleActiveState: {
            value: function () {
                this.activated = !this.activated;
            },
            enumerable: true
        },
        enabled: {
                get: function () {
                    return !this._el.classList.contains("disabled");
                },
                set: function (value) {
                    if (value) {
                        this._el.classList.remove("disabled");
                    } else {
                        this._el.classList.add("disabled");
                    }
                }
            },
            activated: {
                get: function () {
                    return this._el.classList.contains("active");
                },
                set: function (value) {
                    if (value) {
                        this._el.classList.add("active");
                    } else {
                        this._el.classList.remove("active");
                    }
                }
            }

    });



    var createToolbarItems = function (itemElements) {
        var items = [];

        [].forEach.call(itemElements, function (el, index, array) {
            var item = new ToolbarItem(el);

            items.push(item);
        });

        return items;
    };

    var Toolbar = function (toolbarElement) {
        var items = toolbarElement.querySelectorAll(".toolbar-item");

        Object.defineProperties(this, {
            _el: {
                value: toolbarElement
            },
            items: {
                value: createToolbarItems(items),
                enumerable : true
            }
        });
    };

    Object.defineProperties(Toolbar.prototype, {
        add: {
            value: function (options) {
                var span = document.createElement("SPAN");
                span.className = "toolbar-item";

                this._el.appendChild(span);

                var item = new ToolbarItem(span);

                this.items.push(item);
            },
            enumerable: true
        },
         remove: {
            value:  function (index) {
                var len = this.items.length;

                if (index > len || index < 0) {
                    throw new Error("Index is out of range");
                }

                var item = this.items[index];
                this.items.splice(index, 1);

                this._el.removeChild(item._el);

                item = null;
            },
            enumerable: true
        },
            appendTo: {
                value: function (parentElement) {
                parentElement.appendChild(this._el);
            },
            enumerable: true
        }
    });

    oojs.createToolbar = function (elementId) {
        var element = document.getElementById(elementId);

        if (!element) {
            element = document.createElement("DIV");
            element.id = elementId;
            element.className = "toolbar";
        }

        return new Toolbar(element);

};


    return oojs;
}(oojs || {}));