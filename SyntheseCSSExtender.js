define([
], function() {
    return {
		initialProperties: {
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 0,
					qHeight: 0
				}],	
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				customsSections: {
					component: "expandable-items",
					label: "Settings",
					items: {
						ColHead: {
							type: "items",
							label: "Columns header formatting",
							items: {
								ColHeadBold: {										
									type: "boolean",
									label: "Bold",
									ref: "ColHeaderBold",
									defaultValue: "false"
								},
								ColHeadItalic: {
									type: "boolean",
									label: "Italic",
									ref: "ColHeaderItalic",
									defaultValue: "false"
								},
								ColHeadTxtColor: {
									type: "integer",
									label: "Text Color",
									component: "color-picker",
									ref: "ColHeaderTextColor",
									defaultValue: "#000000"
								},
								ColHeadBackColor: {
									type: "integer",
									label: "Background Color",
									component: "color-picker",
									ref: "ColHeaderBackgroundColor",
									defaultValue: "#FFFFFF"
								},
								ColHeadFontHeight: {
									type: "integer",
									label: "Font size",
									ref: "ColHeaderFontSize",
									component: "slider",
									defaultValue: 18,
									min: 8,
									max: 50,
									step: 1
								},
								ColHeadAlignTxt: {
									type: "string",
									label: "Align text",
									component: "buttongroup",
									ref: "ColHeaderAlignText",
									options: [{
										value: "left",
										label: "Left",
										tooltip: "Align text left"
									}, {
										value: "center",
										label: "Center",
										tooltip: "Center text"
									},{
										value: "right",
										label: "Right",
										tooltip: "Align text right"
									}],
									defaultValue: "center"
								}
							}
						},
						LeftDims: {
							type: "items",
							label: "Left dimension formatting",
							items: {								
								ColDimsBold: {										
									type: "boolean",
									label: "Bold",
									ref: "ColDimensionsBold",
									defaultValue: "false"
								},
								ColDimsItalic: {
									type: "boolean",
									label: "Italic",
									ref: "ColDimensionsItalic",
									defaultValue: "false"
								},
								ColDimTxtColor: {
									type: "integer",
									label: "Text Color",
									component: "color-picker",
									ref: "ColDimensionsTextColor",
									defaultValue: "#000000"
								},
								ColDimBackColor: {
									type: "integer",
									label: "Background Color",
									component: "color-picker",
									ref: "ColDimensionsBackgroundColor",
									defaultValue: "#FFFFFF"
								},
								ColDimFontHeight: {
									type: "integer",
									label: "Font size",
									ref: "ColDimensionsFontSize",
									component: "slider",
									defaultValue: 13,
									min: 8,
									max: 50,
									step: 1
								},
								ColDimAlignTxt: {
									type: "string",
									label: "Align text",
									component: "buttongroup",
									ref: "ColDimensionsAlignText",
									options: [{
										value: "left",
										label: "Left",
										tooltip: "Align text left"
									}, {
										value: "center",
										label: "Center",
										tooltip: "Center text"
									},{
										value: "right",
										label: "Right",
										tooltip: "Align text right"
									}],
									defaultValue: "center"
								}
							}
						},
						Data: {
							type: "items",
							label: "Data formatting",
							items: {								
								DataBold: {										
									type: "boolean",
									label: "Bold",
									ref: "DataBold",
									defaultValue: "false"
								},
								DataItalic: {
									type: "boolean",
									label: "Italic",
									ref: "DataItalic",
									defaultValue: "false"
								},
								DataTxtColor: {
									type: "integer",
									label: "Text Color",
									component: "color-picker",
									ref: "DataTextColor",
									defaultValue: "#000000"
								},
								DataBackColor: {
									type: "integer",
									label: "Background Color",
									component: "color-picker",
									ref: "DataBackgroundColor",
									defaultValue: "#FFFFFF"
								},
								DataFontHeight: {
									type: "integer",
									label: "Font size",
									ref: "DataFontSize",
									component: "slider",
									defaultValue: 12,
									min: 8,
									max: 50,
									step: 1
								}
							}
						}	
					}
				}				
			}
		},
		paint: function($element, layout) {
			console.log(layout);
			
			var syntheseId = "synthese-id";
			if(!$("#" + syntheseId).length) 
				$element.append( $("<img>").attr({	"id": syntheseId,
													"src": "http://www.synthese.it/newsite/wp-content/uploads/2014/05/Logo-Synthese-RGB.png", 
													"alt": "Synthèse Logo",
													"style": "width: 100%;"}) );

			var mystyleId = "mystyle-id";
			if($("#" + mystyleId).length) 
				$(" #" + mystyleId).remove();

			var outCSS = "";
			
			outCSS += " .cell.header.top { ";
			outCSS += layout.ColHeaderBold 	 ? "font-weight: bold; " : "font-weight: normal; ";
			outCSS += layout.ColHeaderItalic ? "font-style: italic; " : "font-style: normal; ";
			outCSS += "font-size: "+layout.ColHeaderFontSize+"px; ";
			outCSS += "color: "+layout.ColHeaderTextColor.color+"; ";
			outCSS += "background-color: "+layout.ColHeaderBackgroundColor.color+"; ";
			outCSS += "text-align: "+layout.ColHeaderAlignText+"; ";
			outCSS += " } ";

//			outCSS += "	tr.cell.header.last-top-row { font-size: 20px; color: red; } ";

			outCSS += " .cell.header.left:not(.parent) { ";
			outCSS += layout.ColDimensionsBold 	 ? "font-weight: bold; " : "font-weight: normal; ";
			outCSS += layout.ColDimensionsItalic ? "font-style: italic; " : "font-style: normal; ";
			outCSS += "font-size: "+layout.ColDimensionsFontSize+"px; ";
			outCSS += "color: "+layout.ColDimensionsTextColor.color+"; ";
			outCSS += "background-color: "+layout.ColDimensionsBackgroundColor.color + "; ";
			outCSS += "text-align: "+layout.ColDimensionsAlignText+"; ";
			outCSS += " } ";

//			outCSS += " .cell.data { font-size: 14px; color: blue; }";

			outCSS += " .cell.data { ";
			outCSS += layout.DataBold 	 ? "font-weight: bold; " : "font-weight: normal; ";
			outCSS += layout.DataItalic ? "font-style: italic; " : "font-style: normal; ";
			outCSS += "font-size: "+layout.DataFontSize+"px; ";
			outCSS += "color: "+layout.DataTextColor.color+"; ";
			outCSS += "background-color: "+layout.DataBackgroundColor.color + "; ";
			outCSS += " } ";

			var myStyle = $("<style>");
			myStyle.attr("id", mystyleId);
			myStyle.html( outCSS );
			$element.append( myStyle );

		}       
		
    };
	
});
