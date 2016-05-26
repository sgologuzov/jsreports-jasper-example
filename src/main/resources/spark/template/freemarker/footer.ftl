<script src="lib/highlight.pack.js" type="text/javascript"></script>
<script src="lib/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="lib/jsreports/jsreports-all.min.js" type="text/javascript"></script>
<script>
    $(document).ready(function() {

        // Set up variables to hold the reporting objects
        var reportDef;

        /**
         * We use a static data source with a single record for our label, by setting the "data" property of the
         * data source
         */
        var dataSources = [{
                "id": "-",
                "name": "-",
                "data": [
                    {
                        "id": 1,
                        "userName": "tmclure",
                        "firstName": "Troy",
                        "email": "tmclure@example.com"
                    },
                    {
                        "id": 2,
                        "userName": "mburns",
                        "firstName": "Montgomery",
                        "email": "mburns@example.com"
                    },
                    {
                        "id": 2,
                        "userName": "mburns",
                        "firstName": "Montgomery",
                        "email": "mburns@example.com"
                    }
                ]
            }];

        // To enable PDF download in IE9, set the path to the jsreports library
        jsreports.libraryPath = "lib/jsreports";

        // Load the report definition (here, a static file; in production, might be in a database)
        var JasperReportDef = jsreports.integrations.jasper.JasperReportDef;
        $.get("/jrxml/test.jrxml", function(jrxml) {
            reportDef = JasperReportDef.fromJRXML(jrxml);
            // Initialize a designer to modify the report definition
            var designer = new jsreports.Designer({
                embedded: true,
                container: $(".report-output"),
                dataSources: [],
                reportDef: reportDef
            });

            $(designer).on("save", function(evt, reportDef) {
                var jrxml = designer.getJasperReport().toJRXML();
                // ... send JRXML to server
            });

            $(".download-link").on("click", function() {});
        });

        // Highlight example code snippets (not part of jsreports)
        hljs.initHighlightingOnLoad();
    });
</script>
