<script src="lib/highlight.pack.js" type="text/javascript"></script>
<script src="lib/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="lib/jsreports/jsreports-all.min.js" type="text/javascript"></script>
<script>
    $(document).ready(function() {

        // Set up variables to hold the reporting objects
        var report_def,
            report_instance;

        /**
         * We use a static data source with a single record for our label, by setting the "data" property of the
         * data source
         */
        var data_sources = [{
                "id": "-",
                "name": "-",
                "data": [{
                    "upc": "654321",
                    "productName": "Stuffed Animal Toy (Raccoon, 3ft)",
                    "price": 37.50,
                    "qty": 5
                }]
            }];

        // To enable PDF download in IE9, set the path to the jsreports library
        jsreports.libraryPath = "lib/jsreports";

        // Load the report definition (here, a static file; in production, might be in a database)
        var JasperReportDef = jsreports.integrations.jasper.JasperReportDef;
        $.get("/jrxml/FirstJasper.jrxml", function(jrxml) {
        // Convert to jsreports format
            report_def = JasperReportDef.fromJRXML(jrxml).jsrDef;
            console.log(report_def);
            //report_def = def;
            // Now that we have the definition, we can run the report
            report_instance = jsreports.render({
                report_def: report_def,
                target: $(".report-output"),
                datasets: data_sources
            });
        });

        $(".edit-link").on("click", function() {

            // Initialize a designer to modify the report definition
            var designer = new jsreports.Designer({
                data_sources: data_sources,
                report_def: report_def
            });

            // When the user clicks Save in the designer, refresh the rendering
            $(designer).on("save", function(evt, reportdef) {
                report_def = JSON.parse(reportdef);
                $(".report-output").empty();
                jsreports.render({
                    report_def: report_def,
                    target: $(".report-output"),
                    datasets: data_sources
                });
            });

        });

        // Highlight example code snippets (not part of jsreports)
        hljs.initHighlightingOnLoad();
    });
</script>
