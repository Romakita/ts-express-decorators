(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{859:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"interface-formio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-formio"}},[s._v("#")]),s._v(" Interface Formio")]),s._v(" "),t("Badge",{attrs:{text:"Interface",type:"interface"}}),s._v(" "),t("section",{staticClass:"table-features"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[s._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { Formio } "),t("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"token string"},[s._v('"@tsed/formio"')])])])]),t("tr",[t("th",[s._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.34.0/packages/formio/src/domain/Formio.ts#L0-L0"}},[s._v("/packages/formio/src/domain/Formio.ts")])])])])])]),s._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" Formio "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioBase.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioBase")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("a",{pre:!0,attrs:{href:"/api/formio/decorators/Action.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Action")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioActionModelCtor.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioActionModelCtor")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    BaseModel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioBaseModel.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioBaseModel")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioActionsIndex.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioActionsIndex")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[s._v('db<span class="token punctuation">:</span> Db<span class="token punctuation">;</span>\nschemas<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioSchemas.html"><span class="token">FormioSchemas</span></a> & <span class="token punctuation">{</span>\n    AccessSchema<span class="token punctuation">:</span> <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">;</span>\n    PermissionSchema<span class="token punctuation">:</span> <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">;</span>\n    FieldMatchAccessPermissionSchema<span class="token punctuation">:</span> <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nmodels<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioModels.html"><span class="token">FormioModels</span></a><span class="token punctuation">;</span>\n\nmongoose<span class="token punctuation">:</span> Mongoose<span class="token punctuation">;</span>\n\n<span class="token keyword">readonly</span> middleware<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioMiddlewares.html"><span class="token">FormioMiddlewares</span></a><span class="token punctuation">;</span>\n\nhooks<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioHooks.html"><span class="token">FormioHooks</span></a><span class="token punctuation">;</span>\n\nplugins<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n\n<span class="token keyword">readonly</span> hook<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioHook.html"><span class="token">FormioHook</span></a><span class="token punctuation">;</span>\n\n<span class="token keyword">readonly</span> util<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioUtil.html"><span class="token">FormioUtil</span></a><span class="token punctuation">;</span>\n\n<span class="token keyword">readonly</span> update<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioUpdate.html"><span class="token">FormioUpdate</span></a><span class="token punctuation">;</span>\n\n<span class="token keyword">readonly</span> template<span class="token punctuation">:</span> <a href="/api/formio/domain/FormioTemplateUtil.html"><span class="token">FormioTemplateUtil</span></a><span class="token punctuation">;</span>\n\n<span class="token function">encrypt</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> next<span class="token punctuation">:</span> <span class="token punctuation">(</span>err<span class="token punctuation">:</span> null | Error<span class="token punctuation">,</span> hash<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("a",{pre:!0,attrs:{href:"/api/formio/decorators/Action.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Action")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioActionModelCtor.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioActionModelCtor")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("BaseModel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioBaseModel.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioBaseModel")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioActionsIndex.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioActionsIndex")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Database connection")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("schemas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioSchemas.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioSchemas")])]),s._v(" & "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     AccessSchema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     PermissionSchema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     FieldMatchAccessPermissionSchema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioModels.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioModels")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("mongoose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Mongoose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Mongoose lib.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" middleware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioMiddlewares.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioMiddlewares")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Exported formio middlewares")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("hooks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioHooks.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioHooks")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Hooks.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Plugins.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" hook"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioHook.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioHook")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Formio hook util.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioUtil.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioUtil")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("The formio utils.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioUpdate.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioUpdate")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Update system.")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/formio/domain/FormioTemplateUtil.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("FormioTemplateUtil")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Template export/import")])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("encrypt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" null | Error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),t("p",[s._v("Encryption system.")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);