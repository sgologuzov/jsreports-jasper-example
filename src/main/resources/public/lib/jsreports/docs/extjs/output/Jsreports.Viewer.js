Ext.data.JsonP.Jsreports_Viewer({"tagname":"class","name":"Jsreports.Viewer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"jsreports-integration-extjs.js","href":"jsreports-integration-extjs.html#Jsreports-Viewer"}],"aliases":{"widget":["reportviewer"]},"alternateClassNames":[],"extends":"Ext.panel.Panel","mixins":[],"requires":[],"uses":[],"members":[{"name":"cls","tagname":"cfg","owner":"Jsreports.Viewer","id":"cfg-cls","meta":{"private":true}},{"name":"dataSources","tagname":"cfg","owner":"Jsreports.Viewer","id":"cfg-dataSources","meta":{}},{"name":"report","tagname":"cfg","owner":"Jsreports.Viewer","id":"cfg-report","meta":{}},{"name":"constructor","tagname":"method","owner":"Jsreports.Viewer","id":"method-constructor","meta":{}},{"name":"getCls","tagname":"method","owner":"Jsreports.Viewer","id":"method-getCls","meta":{}},{"name":"getDataSources","tagname":"method","owner":"Jsreports.Viewer","id":"method-getDataSources","meta":{}},{"name":"getReport","tagname":"method","owner":"Jsreports.Viewer","id":"method-getReport","meta":{}},{"name":"onRender","tagname":"method","owner":"Jsreports.Viewer","id":"method-onRender","meta":{"private":true}},{"name":"renderReport","tagname":"method","owner":"Jsreports.Viewer","id":"method-renderReport","meta":{"private":true}},{"name":"setCls","tagname":"method","owner":"Jsreports.Viewer","id":"method-setCls","meta":{}},{"name":"setDataSources","tagname":"method","owner":"Jsreports.Viewer","id":"method-setDataSources","meta":{}},{"name":"setReport","tagname":"method","owner":"Jsreports.Viewer","id":"method-setReport","meta":{"private":true}}],"code_type":"ext_define","id":"class-Jsreports.Viewer","component":false,"superclasses":["Ext.panel.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.panel.Panel<div class='subclass '><strong>Jsreports.Viewer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer' target='_blank'>jsreports-integration-extjs.js</a></div></pre><div class='doc-contents'><p>A report viewer.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-cfg-cls' class='name expandable'>cls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;jsr-report-viewer&#39;</code></p></div></div></div><div id='cfg-dataSources' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-dataSources' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-cfg-dataSources' class='name expandable'>dataSources</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>The set of data sources that are available for use by reports. ...</div><div class='long'><p>The set of data sources that are available for use by reports.  See <a href=\"#!/api/Jsreports.Designer-cfg-dataSources\" rel=\"Jsreports.Designer-cfg-dataSources\" class=\"docClass\">Jsreports.Designer.dataSources</a></p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-report' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-report' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-cfg-report' class='name expandable'>report</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The report definition object to edit in the designer. ...</div><div class='long'><p>The report definition object to edit in the designer.  When not provided, a blank default report\nwill be created.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Jsreports.Viewer-method-constructor' class='name expandable'>Jsreports.Viewer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Jsreports.Viewer\" rel=\"Jsreports.Viewer\" class=\"docClass\">Jsreports.Viewer</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Jsreports.Viewer\" rel=\"Jsreports.Viewer\" class=\"docClass\">Jsreports.Viewer</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-getCls' class='name expandable'>getCls</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of cls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Jsreports.Viewer-cfg-cls\" rel=\"Jsreports.Viewer-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDataSources' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-dataSources' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-getDataSources' class='name expandable'>getDataSources</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of dataSources. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Jsreports.Viewer-cfg-dataSources\" rel=\"Jsreports.Viewer-cfg-dataSources\" class=\"docClass\">dataSources</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getReport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-report' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-getReport' class='name expandable'>getReport</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of report. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Jsreports.Viewer-cfg-report\" rel=\"Jsreports.Viewer-cfg-report\" class=\"docClass\">report</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-onRender' class='name expandable'>onRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-renderReport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-method-renderReport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-renderReport' class='name expandable'>renderReport</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-setCls' class='name expandable'>setCls</a>( <span class='pre'>cls</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of cls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Jsreports.Viewer-cfg-cls\" rel=\"Jsreports.Viewer-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setDataSources' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-cfg-dataSources' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-setDataSources' class='name expandable'>setDataSources</a>( <span class='pre'>dataSources</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of dataSources. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Jsreports.Viewer-cfg-dataSources\" rel=\"Jsreports.Viewer-cfg-dataSources\" class=\"docClass\">dataSources</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataSources</span> : Array<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setReport' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Jsreports.Viewer'>Jsreports.Viewer</span><br/><a href='source/jsreports-integration-extjs.html#Jsreports-Viewer-method-setReport' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Jsreports.Viewer-method-setReport' class='name expandable'>setReport</a>( <span class='pre'>report</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>report</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});