var demo = demo || {};

$(function() {
    demo.utils = function() {
        var getPath = function(name) {
            return "../Templates/HTML/_" + name + ".tmlp.html";
        };

        var renderTemplate = function(item) {
            var file = getPath(item.name);
            $.when($.get(file))
                .done(function(tmplData) {
                    $.templates({ tmpl: tmplData });
                    item.selector($.render.tmpl(item.data));
                });
        };

        return {
            getPath: getPath,
            renderTemplate: renderTemplate
        };
    }();
});

$(function() {
    demo.head = function() {
        var headHtml = ko.observable(),
            loadTemplate = demo.utils.renderTemplate({
                name: "head",
                data: "",
                selector: headHtml
            });

        return {
            loadTemplate: loadTemplate,
            headHtml: headHtml
        };
    }();

    demo.body = function() {
        var bodyHtml = ko.observable(),
            loadTemplate = demo.utils.renderTemplate({
                name: "home",
                data: "",
                selector: bodyHtml
            });

        return {
            bodyHtml: bodyHtml,
            loadTemplate: loadTemplate
        };
    }();

    demo.contacts = function() {
        var contactHtml = ko.observable(),
            loadContacts = function() {
                $.ajax({
                    url: '/Home/LoadContacts',
                    type: "POST",
                    /*contentType: "application/json; charset=utf-8",*/
                    dataType: 'json',
                    success: function(d) {
                        demo.utils.renderTemplate({
                            path: "../",
                            name: 'contacts',
                            data: d,
                            selector: contactHtml
                        });
                    }
                });
            };

        return {
            contactHtml: contactHtml,
            loadContacts: loadContacts
        };
    }();

    ko.applyBindings(demo.head);
    ko.applyBindings(demo.body);

    demo.contacts.loadContacts(); // Get data before binding template
    ko.applyBindings(demo.contacts);
})