(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF896A").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(8.1,79.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF896A").s().p("Ag4A5QgXgYAAghQAAggAXgXQAYgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAYQgXAXghAAQggAAgYgXg");
	this.shape_1.setTransform(27,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF896A").s().p("Ag3A4QgYgXAAghQAAggAYgYQAXgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAXQgYAYghAAQggAAgXgYg");
	this.shape_2.setTransform(57.4,89.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC843").s().p("AkcArQgHAAAAgHQAAgHAHAAIHdAAQAQAAAMgMIA5g3QAEgGAGAFQAGAEgFAGIg6A4QgPAQgXAAg");
	this.shape_3.setTransform(85.7,85.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC843").s().p("AoOCrQgCgDAAgDIACgEIE+k9QAQgQAXAAIKzAAQAHAAAAAHQAAAIgHAAIqzAAQgRAAgMALIk+E9QgCACgDAAQgDAAgCgCg");
	this.shape_4.setTransform(60.1,62.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC843").s().p("AHjC/IlnllQgLgLgRAAIpIAAQgHAAAAgIQAAgHAHAAIJIAAQAWAAAQAQIFnFlQAFAFgFAFQgCACgDAAQgDAAgCgCg");
	this.shape_5.setTransform(76.3,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.9,97.3);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDD7DB").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAAKAKQAKAKAAAMQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape.setTransform(21.4,-31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CDD7DB").s().p("AiMgyQgHgHAAgKQAAgJAHgHIAMgMQAHgHAJAAQAKAAAHAHIBKBKIBYhaIBKBJQAHAHAAAKQAAAKgHAHIh3B0g");
	this.shape_1.setTransform(-5,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDD7DB").s().p("Ai/g7ICNiOIDkDjQAOAOAAAUQAAATgOAOIhtBtg");
	this.shape_2.setTransform(-40.2,-27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDD7DB").s().p("AgsBlIgzg0QgHgGAAgKQAAgKAHgHIB7h7IBEBEQAHAHAAAKQAAAKgHAHIhrBqQgGAHgKAAQgKAAgHgHg");
	this.shape_3.setTransform(-49.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CDD7DB").s().p("ApnKAQgeAAgVgUQgUgVAAgeIAAxxQAAgdAUgVQAVgVAeAAITPAAQAeAAAVAVQAUAVAAAdIAARxQAAAegUAVQgVAUgeAAgAqJpZQgOAOAAATIAARxQAAAUAOAOQAOANAUAAITPAAQAUABAOgOQAOgOAAgUIAAxxQAAgTgOgOQgOgOgUAAIzQAAQgTAAgOAOg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CDD7DB").s().p("AAnBzIiZiaQgHgGAAgLQAAgJAHgHIAqgqQAHgHAKAAQAKAAAHAHICZCZQAHAHAAAKQAAAKgHAHIgqAqQgHAHgKAAQgKAAgHgHg");
	this.shape_5.setTransform(18,-15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AgrC+IiHiHQgOgOgBgUQABgTAOgMIC+jBICoCqQANAOAAATQAAARgNAOIifCfQgOANgRAAQgUAAgNgNg");
	this.shape_6.setTransform(-45.3,-16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AhIABQgIgGAAgLQAAgLAIgIIArgqQAHgIAMAAQAKAAAGAIIBDBCQAIAIAAAJQAAALgIAIIg9A9g");
	this.shape_7.setTransform(30.9,-19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AhIABQgIgGAAgLQAAgLAIgIIAqgqQAIgIAMAAQAKAAAHAIIBCBCQAIAIAAAJQAAALgIAIIg+A9g");
	this.shape_8.setTransform(43.9,51.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("AAXDaIiFiHQgOgOAAgUQAAgTAOgOIDrjrIgDFWQgcAlgVAYQgfAkgNAAQgEAAgCgCg");
	this.shape_9.setTransform(50.8,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("AAQhuQAOgOATAAQAUAAAOAOICHCFQALALgtAmQgXAVgmAeIlWACg");
	this.shape_10.setTransform(9,47.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AjNCFQgIgHABgKQAAgIAGgIIDojoQAHgHAKAAQAKAAAGAHICUCQQAGAHAAAKQAAAKgGAHIhWBVQgHAHgKAAIklACQgKAAgGgHg");
	this.shape_11.setTransform(-22.3,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAF1F5").s().p("AmOJyICgihImrAAICOiOIGqAAIDtjtIjVjUIpRJPIAAi+IHynwImSmTIC+AAIEzE0IEzk0IC+AAImTGTIDVDWIGwmwIAADCIlPFNIFKFJIAAC+ImomoIm5G7g");
	this.shape_12.setTransform(0.3,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3EBF1").s().p("AiNhGIBHhHIDUDUIhHBHg");
	this.shape_13.setTransform(35.6,-33.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4FCFC").s().p("ApnJoQgUAAgOgOQgOgOAAgTIAAxxQAAgUAOgNQAOgOAUAAITPAAQAUAAAOAOQAOANAAAUIAARxQAAATgOAOQgOAOgUAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-64,137.6,128.1);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDD7DB").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAAKAKQAKAKAAAMQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape.setTransform(21.3,-31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CDD7DB").s().p("AiMgyQgHgHAAgKQAAgJAHgHIAMgMQAHgHAJAAQAKAAAHAHIBKBKIBYhaIBKBJQAHAHAAAKQAAAKgHAHIh3B0g");
	this.shape_1.setTransform(-5.1,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDD7DB").s().p("Ai/g7ICNiOIDkDjQAOAOAAAUQAAATgOAOIhtBtg");
	this.shape_2.setTransform(-40.3,-27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDD7DB").s().p("AgsBlIgzg0QgHgGAAgKQAAgKAHgHIB7h7IBEBEQAHAHAAAKQAAAKgHAHIhrBqQgGAHgKAAQgKAAgHgHg");
	this.shape_3.setTransform(-49.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CDD7DB").s().p("ApnKAQgeAAgVgUQgUgVAAgeIAAxxQAAgdAUgVQAVgVAeAAITPAAQAeAAAVAVQAUAVAAAdIAARxQAAAegUAVQgVAUgeAAgAqJpZQgOAOAAATIAARxQAAAUAOAOQAOANAUAAITPAAQAUABAOgOQAOgOAAgUIAAxxQAAgTgOgOQgOgOgUAAIzQAAQgTAAgOAOg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CDD7DB").s().p("AAnBzIiZiaQgHgGAAgLQAAgJAHgHIAqgqQAHgHAKAAQAKAAAHAHICZCZQAHAHAAAKQAAAKgHAHIgqAqQgHAHgKAAQgKAAgHgHg");
	this.shape_5.setTransform(18,-15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AgrC+IiHiHQgOgOgBgUQABgTAOgMIC+jBICoCqQANAOAAATQAAARgNAOIifCfQgOANgRAAQgUAAgNgNg");
	this.shape_6.setTransform(-45.3,-16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AhIABQgIgGAAgLQAAgLAIgIIArgqQAHgIAMAAQAKAAAGAIIBDBCQAIAIAAAJQAAALgIAIIg9A9g");
	this.shape_7.setTransform(30.9,-19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AhIABQgIgGAAgLQAAgLAIgIIAqgqQAIgIAMAAQAKAAAHAIIBCBCQAIAIAAAJQAAALgIAIIg+A9g");
	this.shape_8.setTransform(43.8,51.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("AAXDaIiFiHQgOgOAAgUQAAgTAOgOIDrjrIgDFWQgcAlgVAYQgfAkgNAAQgEAAgCgCg");
	this.shape_9.setTransform(50.8,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("AAQhuQAOgOATAAQAUAAAOAOICHCFQALALgtAmQgXAVgmAeIlWACg");
	this.shape_10.setTransform(9,47.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AjNCFQgIgHABgKQAAgIAGgIIDojoQAHgHAKAAQAKAAAGAHICUCQQAGAHAAAKQAAAKgGAHIhWBVQgHAHgKAAIklACQgKAAgGgHg");
	this.shape_11.setTransform(-22.4,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAF1F5").s().p("AmOJyICgihImrAAICOiOIGqAAIDtjtIjVjUIpRJPIAAi+IHynwImSmTIC+AAIEzE0IEzk0IC+AAImTGTIDVDWIGwmwIAADCIlPFNIFKFJIAAC+ImomoIm5G7g");
	this.shape_12.setTransform(0.3,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3EBF1").s().p("AiNhGIBHhHIDUDUIhHBHg");
	this.shape_13.setTransform(35.6,-33.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4FCFC").s().p("ApnJoQgUAAgOgOQgOgOAAgTIAAxxQAAgUAOgNQAOgOAUAAITPAAQAUAAAOAOQAOANAAAUIAARxQAAATgOAOQgOAOgUAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.8,-64,137.6,128.1);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBDQgFgDgBgFQAAgGADgFQADgFAGgBIBGAAQAGAAAEADQAEAEABAFQABAFgDAFQgEAFgFABIhHAAIgBAAQgEAAgEgDgAhBBGQgGgBgDgFQgDgFABgFQACgNANABIAMAAQAFAAAFADQAEADABAGIAAACQAAAGgEAEQgEAEgGAAgAASAOQgGgBgDgFQgDgFABgEQABgFAEgDQAEgEAFABIApAAQAGgBAEAEQAEADABAFIAAABQAAAGgEAEQgEAEgGAAgAhBAOQgFgBgEgFQgDgFABgEQABgFAEgDQAFgEAFABIAoAAQAGgBAEAEQAEADABAFIAAABQAAAFgEAFQgEAEgGAAgAAxgpIgDAAQgFgBgEgFQgDgFABgGQABgFAEgDQAFgDAFAAIAMAAQAGAAAEADQAEADABAFIAAADQAAAGgEAEQgEAEgGAAgAg+gpIgDAAQgFgBgEgFQgDgFABgGQABgFAEgDQAFgDAFAAIBDAAQAMAAACALIABADQAAAGgEAEQgFAEgFAAg");
	this.shape.setTransform(-42.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDFB4").s().p("AgMA9IAAhKQgJgCgFgGQgGgHAAgJQABgKAHgGQAHgHAKAAIAVAAQAIABAGAFQAFAGAAAIIAABRQAAAJgGAFQgGAGgIAAg");
	this.shape_1.setTransform(-29.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDFB4").s().p("AgNAXQgPgDgDgQQgCgIAGgIQAFgIAJgCIAbAAQAIACAFAHQAGAGAAAHQAAAIgGAHQgFAGgIACg");
	this.shape_2.setTransform(-55.5,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDFB4").s().p("AgNAXQgPgEgDgPQgCgIAGgIQAFgIAJgCIAbAAQAIACAFAGQAGAHAAAHQAAAIgGAGQgFAHgIACg");
	this.shape_3.setTransform(-55.5,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDFB4").s().p("AgNAXQgPgEgDgPQgCgIAGgIQAFgIAJgCIAbAAQAIACAFAHQAGAGAAAHQAAAIgGAHQgFAGgIACg");
	this.shape_4.setTransform(-55.5,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDFB4").s().p("AgNAXQgPgDgDgQQgCgHAGgIQAFgIAJgDIAbAAQAIACAFAHQAGAGAAAHQAAAIgGAHQgFAGgIACg");
	this.shape_5.setTransform(-55.5,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF5834").s().p("AgsDVQgdAAgSgTQgVgUAAgbIAAkkQgBgdAWgTQATgTAcAAIBYAAQAdAAATATQAWAUgBAcIAAEjQABAdgWATQgTATgdAAgAAAB+QgKAAgHAHQgIAIAAAKQgBAMAIAIQAHAIALAAQAKABAIgIQAIgHAAgLQABgMgIgIQgHgIgMAAIAAgBIAAABgAgtiiIAAAMQAAAHAHAAIBNAAQAHAAAAgHIAAgLQAAgDgCgCQgCgDgEAAIhMAAQgHAAAAAHg");
	this.shape_6.setTransform(-42.6,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCE8E7").s().p("Ag+DAIAAl/IB+AAIAAF/g");
	this.shape_7.setTransform(-42.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E423B").s().p("AjGBHQgfAAgVgVQgVgWAAgcIAAhGIHXAAQAeAAAVAWQAVAVAAAcIAABGg");
	this.shape_8.setTransform(4,-64.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#412B28").s().p("AgiBVIAAivQAAgRALgNIAGgFIA0AAIAABEQAAAagOATIgfArIAABfg");
	this.shape_9.setTransform(-17.3,-46.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#503732").s().p("AAMAhIgggqQgPgUABgZIAAhJIBFAAIAADWIgXApg");
	this.shape_10.setTransform(27.7,-46.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7B46B").s().p("AgKgXQAJAAAFAIQAHAGAAAJIAAAAQAAAKgHAHQgEAGgKAAg");
	this.shape_11.setTransform(30.1,-33.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7B46B").s().p("AgDAQQgHgGAAgKQAAgIAHgHQAEgHAKAAIAAAtQgJAAgFgHg");
	this.shape_12.setTransform(-19.7,-33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBATQgcgZAAgoIC8AAQAAAogcAZQgcAcgnAAQgmAAgbgcg");
	this.shape_13.setTransform(5.2,-19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E423B").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_14.setTransform(-6.6,-36.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E423B").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_15.setTransform(17.1,-36.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFDFB4").s().p("AimDXQhGhFAAhjQgTAAgOgOQgOgOAAgTQAAgSAOgOQAOgOATAAIAAhfQAAg7AqgpQApgqA7AAIC8AAQA7AAAqAqQAqApAAA7IAABfQATAAAOAOQAOAOAAASQAAATgOAOQgOAOgTAAQAABjhGBFQhFBFhiAAQhhAAhFhFg");
	this.shape_16.setTransform(5.2,-33.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0096A4").s().p("AhGAvQAnAAAcgcQAagaAAgnIAAgvIAwAvIAACNg");
	this.shape_17.setTransform(12.3,4.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0096A4").s().p("AhGguIAwgvIAAAvQAAAnAaAaQAbAbAnABIiMAwg");
	this.shape_18.setTransform(-1.9,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0096A4").s().p("AgWgCQABgQANgIIAfgZIAABEIgtAjg");
	this.shape_19.setTransform(-6.6,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0096A4").s().p("AgWARIAAhEIAfAZQANAIABAQIAAA2g");
	this.shape_20.setTransform(17.1,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00828D").ss(9.5,0,0,4).p("AAAhdIAAC7");
	this.shape_21.setTransform(5.3,18.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7B46B").s().p("AhdAvIAAhdIC7AAIAABdg");
	this.shape_22.setTransform(5.2,4.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7B46B").s().p("AhdBeIAAi8IC7AAIAAC8g");
	this.shape_23.setTransform(5.2,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#43C2F4").s().p("AAAAXIiNAwIAAiNIEbAAIAACNg");
	this.shape_24.setTransform(5.2,6.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFDFB4").s().p("AgBDOQgcgBgUgUQgUgUgBgcIAAkRQABgeAWgUQAWgUAbABQAcABAUAUQAUAUABAcIAAERQgBAegWAUQgVATgbAAIgBAAg");
	this.shape_25.setTransform(-41.9,33.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5FB96E").s().p("AlLFqIAAkqIidAAQgTAAgOgOQgOgOAAgUQABgLAFgJICQkDQAZgtAsgbQAugaAzAAIG2AAQA0AAAtAaQAtAbAZAtICQEDQAJAPgFATQgGATgRAJQgLAGgMAAIicAAIAAEqg");
	this.shape_26.setTransform(5.2,35.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7B46B").s().p("Ah4CoQgVgVAAgeQAAgTAKgRICNjsQAQgZAdgGQAcgGAZAPQAYAPAHAcQAHAbgOAZIiNDsQgJAQgRAJQgQAKgTAAQgdAAgVgVg");
	this.shape_27.setTransform(-34.9,35.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFDFB4").s().p("AhKCUIAAkoICVAAIAAEog");
	this.shape_28.setTransform(45.4,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-71.8,117.7,143.6);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBDQgFgDgBgFQAAgGADgFQADgFAGgBIBGAAQAGAAAEADQAEAEABAFQABAFgDAFQgEAFgFABIhHAAIgBAAQgEAAgEgDgAhBBGQgGgBgDgFQgDgFABgFQACgNANABIAMAAQAFAAAFADQAEADABAGIAAACQAAAGgEAEQgEAEgGAAgAASAOQgGgBgDgFQgDgFABgEQABgFAEgDQAEgEAFABIApAAQAGgBAEAEQAEADABAFIAAABQAAAGgEAEQgEAEgGAAgAhBAOQgFgBgEgFQgDgFABgEQABgFAEgDQAFgEAFABIAoAAQAGgBAEAEQAEADABAFIAAABQAAAFgEAFQgEAEgGAAgAAxgpIgDAAQgFgBgEgFQgDgFABgGQABgFAEgDQAFgDAFAAIAMAAQAGAAAEADQAEADABAFIAAADQAAAGgEAEQgEAEgGAAgAg+gpIgDAAQgFgBgEgFQgDgFABgGQABgFAEgDQAFgDAFAAIBDAAQAMAAACALIABADQAAAGgEAEQgFAEgFAAg");
	this.shape.setTransform(-42.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDFB4").s().p("AgMA9IAAhKQgJgCgFgGQgGgHAAgJQABgKAHgGQAHgHAKAAIAVAAQAIABAGAFQAFAGAAAIIAABRQAAAJgGAFQgGAGgIAAg");
	this.shape_1.setTransform(-29.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDFB4").s().p("AgNAXQgPgDgDgQQgCgIAGgIQAFgIAJgCIAbAAQAIACAFAHQAGAGAAAHQAAAIgGAHQgFAGgIACg");
	this.shape_2.setTransform(-55.5,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDFB4").s().p("AgNAXQgPgEgDgPQgCgIAGgIQAFgIAJgCIAbAAQAIACAFAGQAGAHAAAHQAAAIgGAGQgFAHgIACg");
	this.shape_3.setTransform(-55.5,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDFB4").s().p("AgNAXQgPgEgDgPQgCgIAGgIQAFgIAJgCIAbAAQAIACAFAHQAGAGAAAHQAAAIgGAHQgFAGgIACg");
	this.shape_4.setTransform(-55.5,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDFB4").s().p("AgNAXQgPgDgDgQQgCgHAGgIQAFgIAJgDIAbAAQAIACAFAHQAGAGAAAHQAAAIgGAHQgFAGgIACg");
	this.shape_5.setTransform(-55.5,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF5834").s().p("AgsDVQgdAAgSgTQgVgUAAgbIAAkkQgBgdAWgTQATgTAcAAIBYAAQAdAAATATQAWAUgBAcIAAEjQABAdgWATQgTATgdAAgAAAB+QgKAAgHAHQgIAIAAAKQgBAMAIAIQAHAIALAAQAKABAIgIQAIgHAAgLQABgMgIgIQgHgIgMAAIAAgBIAAABgAgtiiIAAAMQAAAHAHAAIBNAAQAHAAAAgHIAAgLQAAgDgCgCQgCgDgEAAIhMAAQgHAAAAAHg");
	this.shape_6.setTransform(-42.6,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCE8E7").s().p("Ag+DAIAAl/IB+AAIAAF/g");
	this.shape_7.setTransform(-42.4,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E423B").s().p("AjGBHQgfAAgVgVQgVgWAAgcIAAhGIHXAAQAeAAAVAWQAVAVAAAcIAABGg");
	this.shape_8.setTransform(4,-64.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#412B28").s().p("AgiBVIAAivQAAgRALgNIAGgFIA0AAIAABEQAAAagOATIgfArIAABfg");
	this.shape_9.setTransform(-17.3,-46.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#503732").s().p("AAMAhIgggqQgPgUABgZIAAhJIBFAAIAADWIgXApg");
	this.shape_10.setTransform(27.7,-46.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7B46B").s().p("AgKgXQAJAAAFAIQAHAGAAAJIAAAAQAAAKgHAHQgEAGgKAAg");
	this.shape_11.setTransform(30.1,-33.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7B46B").s().p("AgDAQQgHgGAAgKQAAgIAHgHQAEgHAKAAIAAAtQgJAAgFgHg");
	this.shape_12.setTransform(-19.7,-33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBATQgcgZAAgoIC8AAQAAAogcAZQgcAcgnAAQgmAAgbgcg");
	this.shape_13.setTransform(5.2,-19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E423B").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_14.setTransform(-6.6,-36.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E423B").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_15.setTransform(17.1,-36.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFDFB4").s().p("AimDXQhGhFAAhjQgTAAgOgOQgOgOAAgTQAAgSAOgOQAOgOATAAIAAhfQAAg7AqgpQApgqA7AAIC8AAQA7AAAqAqQAqApAAA7IAABfQATAAAOAOQAOAOAAASQAAATgOAOQgOAOgTAAQAABjhGBFQhFBFhiAAQhhAAhFhFg");
	this.shape_16.setTransform(5.2,-33.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0096A4").s().p("AhGAvQAnAAAcgcQAagaAAgnIAAgvIAwAvIAACNg");
	this.shape_17.setTransform(12.3,4.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0096A4").s().p("AhGguIAwgvIAAAvQAAAnAaAaQAbAbAnABIiMAwg");
	this.shape_18.setTransform(-1.9,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0096A4").s().p("AgWgCQABgQANgIIAfgZIAABEIgtAjg");
	this.shape_19.setTransform(-6.6,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0096A4").s().p("AgWARIAAhEIAfAZQANAIABAQIAAA2g");
	this.shape_20.setTransform(17.1,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00828D").ss(9.5,0,0,4).p("AAAhdIAAC7");
	this.shape_21.setTransform(5.3,18.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7B46B").s().p("AhdAvIAAhdIC7AAIAABdg");
	this.shape_22.setTransform(5.2,4.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7B46B").s().p("AhdBeIAAi8IC7AAIAAC8g");
	this.shape_23.setTransform(5.2,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#43C2F4").s().p("AAAAXIiNAwIAAiNIEbAAIAACNg");
	this.shape_24.setTransform(5.2,6.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFDFB4").s().p("AgBDOQgcgBgUgUQgUgUgBgcIAAkRQABgeAWgUQAWgUAbABQAcABAUAUQAUAUABAcIAAERQgBAegWAUQgVATgbAAIgBAAg");
	this.shape_25.setTransform(-41.9,33.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5FB96E").s().p("AlLFqIAAkqIidAAQgTAAgOgOQgOgOAAgUQABgLAFgJICQkDQAZgtAsgbQAugaAzAAIG2AAQA0AAAtAaQAtAbAZAtICQEDQAJAPgFATQgGATgRAJQgLAGgMAAIicAAIAAEqg");
	this.shape_26.setTransform(5.2,35.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7B46B").s().p("Ah4CoQgVgVAAgeQAAgTAKgRICNjsQAQgZAdgGQAcgGAZAPQAYAPAHAcQAHAbgOAZIiNDsQgJAQgRAJQgQAKgTAAQgdAAgVgVg");
	this.shape_27.setTransform(-34.9,35.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFDFB4").s().p("AhKCUIAAkoICVAAIAAEog");
	this.shape_28.setTransform(45.4,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-71.8,117.7,143.6);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF5834").s().p("AgJBkQgIAAgGgGQgFgGgBgJQABgIAFgFQAGgHAIAAIBiAAQAJAAAGAHQAFAGABAHQgBAJgFAGQgGAGgJAAgAhZBkQgIAAgGgGQgFgGgBgJQABgIAFgFQAGgHAIAAIAVAAQAIAAAFAHQAHAGAAAHQAAAJgHAGQgFAGgIAAgAAdAUQgJAAgFgGQgGgGgBgIQABgHAGgFQAFgHAJAAIA7AAQAJAAAGAHQAFAFAAAHIAAAAQAAAIgFAGQgGAGgJAAgAhZAUQgIAAgGgGQgFgGgBgIQABgHAFgFQAGgHAIAAIA8AAQAJAAAGAHQAFAFAAAHQAAAIgFAGQgGAGgJAAgABEg6QgIgBgGgFQgFgGAAgIQAAgJAFgGQAGgFAIgBIAUAAQAJABAGAFQAFAGAAAJIAAABQAAAHgGAGQgFAFgJABgAhZg6QgIgBgGgFQgFgGgBgIQABgJAFgGQAGgFAIgBIBiAAQAJABAFAFQAGAGABAJIgBABQgBAHgFAGQgFAFgJABg");
	this.shape.setTransform(51,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#616161").s().p("AgkA1QAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhgIABgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIANAAIABABIABACIABAGQADgFAFgDQAGgDAEAAQAIAAAHADQAGADAFAFQAHAIABAFQADAHAAAIQAAAIgDAGQgCAHgGAGQgEAEgHAEQgJADgGAAQgCAAgHgCIgEgDIgDgDIAAAhQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgMAAIgBAAIgDgBgAgGgfIgFAEQgDACgCAEIgCAHIABAAQAAAFABADQABAEADACQACABAEACQADABADAAQACAAAEgBQADgCACgBQADgDABgDQACgHgCgIIgEgGIgFgEQgEgCgCAAQgDAAgDACg");
	this.shape_1.setTransform(107.2,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#616161").s().p("AgfA2IgFgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhfQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIALAAIACACIABACIABAFQADgEAGgEQAFgDAFAAQAHAAAHADQAHADAFAGQAEAFADAHQADAJAAAHQAAAJgDAEQgCAHgFAGQgFAFgHADQgIAEgGgBQgEABgFgDIgFgCIgDgDIAAAgIgBAEIgEABgAgGgfIgGAEIgDAHQgCADAAADIAAABQAAAEACAEIADAFQADACADABQADACADAAIAGgCIAGgDIADgFQADgIgDgHIgDgHIgGgEIgGgBIgGABg");
	this.shape_2.setTransform(97.9,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#616161").s().p("AgPAkQgIgDgEgFQgEgFgEgIQgDgHAAgIQAAgHADgHQAEgIAEgFQAFgFAHgDQAHgDAIAAQADAAADABIAGADIAFAEIADAFIACgKIABgBIABgBIAKAAIADABQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAABDQABABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgDABIgKAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgEIAAgFIgDAEIgEAEIgFACIgGABQgIAAgHgDgAgHgRQgEABgCADIgEAHIgBAGIABAIIAEAGQACADAEACIAHABQADAAADgBQAEgCACgDIAEgGIABgIIgBgGIgEgHQgGgGgGAAQgDAAgEACg");
	this.shape_3.setTransform(88.3,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAmIAAgBIAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAAgBIAlg0IgcAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAgBAAAAIAAgNQAAgEAEAAIA8AAIAAABIAAABQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAACIgkAzIAhAAIACABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABIAAALIgBADIgCABg");
	this.shape_4.setTransform(79.6,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAkQgHgDgFgFQgFgFgDgIQgDgIAAgHQAAgHADgHQABgFAGgHQAGgGAGgDQAIgDAFAAQAHAAAHADQAHADAFAEQAKALABAPIgBAEIgDACIgDACIgsAAQAAACACAEIAFAFIAEACQADABABAAIAHAAIAHgEIACgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIACACIAGAIIABADIgBACIgCACIgGAEIgGACIgGACIgHAAQgFAAgIgDgAgDgUIgFADIgEAEIgCAGIAfAAIgDgGIgDgDIgFgEIgGAAIgDAAg");
	this.shape_5.setTransform(71.6,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AHXA5QgjAAAAggIAAgSQAAgfAjAAQARAAAJAJQAJAIAAAMIAAAKQAAAGgHAAIgtAAIAAAGQAAAPARAAQALABAHgJQACgFAFADIAFADQAGACgEAFQgKAPgRAAIgFAAgAHGAEIAAAEIAiAAIAAgEQAAgNgRAAQgRAAAAANgAmWA0QgJgFgFgKQgDgEAEgCIACgBIAHgCQAFgCACAFQACAFAFADQAGADAFgBQAPAAAAgKQAAgJgKAAIgOAAQgFAAAAgFIAAgFQAAgEAFAAIANAAQAJAAAAgIQAAgIgNAAQgMgBgFAJQgCAEgFgBIgHgCQgEgBABgDIAAgBQAEgKAKgFQAJgGALABQAfAAAAAYQABAJgKAEIAAABQANAGgCANQAAAYghAAIgDAAQgJAAgJgFgABZAxQgJgIAAgPIAAgWQAAgMAJgIQAJgIARAAQAQAAAJAIQAJAIAAAMIAAAXQAAAOgJAIQgJAIgQAAQgRAAgJgIgABhAEIAAAXQAAAOARAAQASAAAAgOIAAgXQAAgMgSAAQgRAAAAAMgAj9AyQgJgHABgLQAAgOAIgFQAIgFATAAIAOAAIAAgEQAAgNgPAAQgKgBgGAJQgDABgDAAIgGgCQgFgCACgEQAFgIAIgFQAJgEAJABQAgAAAAAdIAAAnQAAAGgFACQgOAFgNgBIgFAAQgLAAgKgGgAjzAgQAAAFADACQADADAIAAQAHAAAIgBQABAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgQIgQgBQgPAAAAAKgACiA2IAAAAIgEgIQgCgDADgCIABgBQAFgCADgGQAGgNgBgQIAAgUQAAgFAEAAIAwABQAFAAAAAEIAABDQAAAEgFAAIgIAAQgFAAAAgEIAAg3IgWAAIAAAKQABAUgJASQgFAJgKAEIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBgAAHAwQgHgIAAgOIAAgiQgBgUAJgPQANgMATABIAEABQAHAAAEgCQAFgDACAGIACAGQABAEgEACQgIADgIAAIgFAAQgMgCgIAHQgHAIABALIAAADQAJgLAOABQALgBAJAIQAJAHABAKIAAAFIAAARQAAAegiAAQgRAAgJgIgAAQAIIAAASQAAAPARAAQARAAAAgPIAAgRQAAgNgRAAQgQAAgBAMgAEbA2IghAAQgFAAAAgEIAAhDQAAgFAFAAIAIAAQAEAAAAAFIAAARIAVAAQAKAAAIAEQAJAHABALIAAAEQABALgHAIQgHAJgLAAIgCABIgCgBgAEHAnIARAAQAFAAAEgDQADgDABgFIAAgBQAAgFgDgDQgDgEgFAAIgTAAgAFIA2QgFAAAAgEIAAhDQAAgFAFAAIAIAAQAFAAAAAFIAAA3IAXAAIAAg3QAAgFAEAAIAIAAQAFAAAAAFIAAA3IAXAAIAAg3QAAgFAFAAIAIABQAFAAAAAEIAABDQAAAEgFAAgAhpA2QgFAAAAgEIAAhDQAAgFAFAAIAIAAQAFAAAAAFIAAARIATAAQALAAAIAEQAJAHABALIAAAEQABALgHAIQgHAJgLAAgAhcAnIARAAQAFAAAEgDQADgDABgFIAAgCQAAgEgDgEQgDgDgFAAIgTAAgAidA2QgFAAAAgEIAAg3IgUAAQgFAAAAgFIAAgHQAAgFAFAAIA5ABQAFAAAAAEIAAAHQAAAFgFAAIgUAAIAAA3QAAAEgEAAgAlQA2QgEAAAAgFIAAhCQAAgFAEAAIAIAAQAFAAAAAFIAAAXIAgAAIAAgXQAAgFAEAAIAJAAQAEAAAAAFIAABCQAAAFgEAAIgJAAQgEAAAAgFIAAgaIggAAIAAAaQAAAFgFAAgAneA2QgFAAADgFIANgaIgkhEQgEgFAGAAIAJAAIAGAAQACABACADIAZAwIAWgwQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAGgBIAJgBQAEAAgBAGIgtBeQgCAFgHAAg");
	this.shape_6.setTransform(-60,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF972E").s().p("AoRCBQg1AAgmgmQgmgmAAg1QAAg0AmgmQAmgmA1AAIQjAAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAg");
	this.shape_7.setTransform(-60,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DFDFDF").s().p("A3bAJIAAgSMAu2AAAIAAASg");
	this.shape_8.setTransform(0,-20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("A3bDIIAAmPMAu2AAAIAAGPg");
	this.shape_9.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-21,300,42);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF5834").s().p("AgJBkQgIAAgGgGQgFgGgBgJQABgIAFgFQAGgHAIAAIBiAAQAJAAAGAHQAFAGABAHQgBAJgFAGQgGAGgJAAgAhZBkQgIAAgGgGQgFgGgBgJQABgIAFgFQAGgHAIAAIAVAAQAIAAAFAHQAHAGAAAHQAAAJgHAGQgFAGgIAAgAAdAUQgJAAgFgGQgGgGgBgIQABgHAGgFQAFgHAJAAIA7AAQAJAAAGAHQAFAFAAAHIAAAAQAAAIgFAGQgGAGgJAAgAhZAUQgIAAgGgGQgFgGgBgIQABgHAFgFQAGgHAIAAIA8AAQAJAAAGAHQAFAFAAAHQAAAIgFAGQgGAGgJAAgABEg6QgIgBgGgFQgFgGAAgIQAAgJAFgGQAGgFAIgBIAUAAQAJABAGAFQAFAGAAAJIAAABQAAAHgGAGQgFAFgJABgAhZg6QgIgBgGgFQgFgGgBgIQABgJAFgGQAGgFAIgBIBiAAQAJABAFAFQAGAGABAJIgBABQgBAHgFAGQgFAFgJABg");
	this.shape.setTransform(51,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#616161").s().p("AgkA1QAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhgIABgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAIANAAIABABIABACIABAGQADgFAFgDQAGgDAEAAQAIAAAHADQAGADAFAFQAHAIABAFQADAHAAAIQAAAIgDAGQgCAHgGAGQgEAEgHAEQgJADgGAAQgCAAgHgCIgEgDIgDgDIAAAhQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgMAAIgBAAIgDgBgAgGgfIgFAEQgDACgCAEIgCAHIABAAQAAAFABADQABAEADACQACABAEACQADABADAAQACAAAEgBQADgCACgBQADgDABgDQACgHgCgIIgEgGIgFgEQgEgCgCAAQgDAAgDACg");
	this.shape_1.setTransform(107.2,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#616161").s().p("AgfA2IgFgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhfQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIALAAIACACIABACIABAFQADgEAGgEQAFgDAFAAQAHAAAHADQAHADAFAGQAEAFADAHQADAJAAAHQAAAJgDAEQgCAHgFAGQgFAFgHADQgIAEgGgBQgEABgFgDIgFgCIgDgDIAAAgIgBAEIgEABgAgGgfIgGAEIgDAHQgCADAAADIAAABQAAAEACAEIADAFQADACADABQADACADAAIAGgCIAGgDIADgFQADgIgDgHIgDgHIgGgEIgGgBIgGABg");
	this.shape_2.setTransform(97.9,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#616161").s().p("AgPAkQgIgDgEgFQgEgFgEgIQgDgHAAgIQAAgHADgHQAEgIAEgFQAFgFAHgDQAHgDAIAAQADAAADABIAGADIAFAEIADAFIACgKIABgBIABgBIAKAAIADABQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAABDQABABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgDABIgKAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgDgEIAAgFIgDAEIgEAEIgFACIgGABQgIAAgHgDgAgHgRQgEABgCADIgEAHIgBAGIABAIIAEAGQACADAEACIAHABQADAAADgBQAEgCACgDIAEgGIABgIIgBgGIgEgHQgGgGgGAAQgDAAgEACg");
	this.shape_3.setTransform(88.3,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAmIAAgBIAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAAgBIAlg0IgcAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAgBAAAAIAAgNQAAgEAEAAIA8AAIAAABIAAABQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAACIgkAzIAhAAIACABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABIAAALIgBADIgCABg");
	this.shape_4.setTransform(79.6,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAkQgHgDgFgFQgFgFgDgIQgDgIAAgHQAAgHADgHQABgFAGgHQAGgGAGgDQAIgDAFAAQAHAAAHADQAHADAFAEQAKALABAPIgBAEIgDACIgDACIgsAAQAAACACAEIAFAFIAEACQADABABAAIAHAAIAHgEIACgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIACACIAGAIIABADIgBACIgCACIgGAEIgGACIgGACIgHAAQgFAAgIgDgAgDgUIgFADIgEAEIgCAGIAfAAIgDgGIgDgDIgFgEIgGAAIgDAAg");
	this.shape_5.setTransform(71.6,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AHXA5QgjAAAAggIAAgSQAAgfAjAAQARAAAJAJQAJAIAAAMIAAAKQAAAGgHAAIgtAAIAAAGQAAAPARAAQALABAHgJQACgFAFADIAFADQAGACgEAFQgKAPgRAAIgFAAgAHGAEIAAAEIAiAAIAAgEQAAgNgRAAQgRAAAAANgAmWA0QgJgFgFgKQgDgEAEgCIACgBIAHgCQAFgCACAFQACAFAFADQAGADAFgBQAPAAAAgKQAAgJgKAAIgOAAQgFAAAAgFIAAgFQAAgEAFAAIANAAQAJAAAAgIQAAgIgNAAQgMgBgFAJQgCAEgFgBIgHgCQgEgBABgDIAAgBQAEgKAKgFQAJgGALABQAfAAAAAYQABAJgKAEIAAABQANAGgCANQAAAYghAAIgDAAQgJAAgJgFgABZAxQgJgIAAgPIAAgWQAAgMAJgIQAJgIARAAQAQAAAJAIQAJAIAAAMIAAAXQAAAOgJAIQgJAIgQAAQgRAAgJgIgABhAEIAAAXQAAAOARAAQASAAAAgOIAAgXQAAgMgSAAQgRAAAAAMgAj9AyQgJgHABgLQAAgOAIgFQAIgFATAAIAOAAIAAgEQAAgNgPAAQgKgBgGAJQgDABgDAAIgGgCQgFgCACgEQAFgIAIgFQAJgEAJABQAgAAAAAdIAAAnQAAAGgFACQgOAFgNgBIgFAAQgLAAgKgGgAjzAgQAAAFADACQADADAIAAQAHAAAIgBQABAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgQIgQgBQgPAAAAAKgACiA2IAAAAIgEgIQgCgDADgCIABgBQAFgCADgGQAGgNgBgQIAAgUQAAgFAEAAIAwABQAFAAAAAEIAABDQAAAEgFAAIgIAAQgFAAAAgEIAAg3IgWAAIAAAKQABAUgJASQgFAJgKAEIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBgAAHAwQgHgIAAgOIAAgiQgBgUAJgPQANgMATABIAEABQAHAAAEgCQAFgDACAGIACAGQABAEgEACQgIADgIAAIgFAAQgMgCgIAHQgHAIABALIAAADQAJgLAOABQALgBAJAIQAJAHABAKIAAAFIAAARQAAAegiAAQgRAAgJgIgAAQAIIAAASQAAAPARAAQARAAAAgPIAAgRQAAgNgRAAQgQAAgBAMgAEbA2IghAAQgFAAAAgEIAAhDQAAgFAFAAIAIAAQAEAAAAAFIAAARIAVAAQAKAAAIAEQAJAHABALIAAAEQABALgHAIQgHAJgLAAIgCABIgCgBgAEHAnIARAAQAFAAAEgDQADgDABgFIAAgBQAAgFgDgDQgDgEgFAAIgTAAgAFIA2QgFAAAAgEIAAhDQAAgFAFAAIAIAAQAFAAAAAFIAAA3IAXAAIAAg3QAAgFAEAAIAIAAQAFAAAAAFIAAA3IAXAAIAAg3QAAgFAFAAIAIABQAFAAAAAEIAABDQAAAEgFAAgAhpA2QgFAAAAgEIAAhDQAAgFAFAAIAIAAQAFAAAAAFIAAARIATAAQALAAAIAEQAJAHABALIAAAEQABALgHAIQgHAJgLAAgAhcAnIARAAQAFAAAEgDQADgDABgFIAAgCQAAgEgDgEQgDgDgFAAIgTAAgAidA2QgFAAAAgEIAAg3IgUAAQgFAAAAgFIAAgHQAAgFAFAAIA5ABQAFAAAAAEIAAAHQAAAFgFAAIgUAAIAAA3QAAAEgEAAgAlQA2QgEAAAAgFIAAhCQAAgFAEAAIAIAAQAFAAAAAFIAAAXIAgAAIAAgXQAAgFAEAAIAJAAQAEAAAAAFIAABCQAAAFgEAAIgJAAQgEAAAAgFIAAgaIggAAIAAAaQAAAFgFAAgAneA2QgFAAADgFIANgaIgkhEQgEgFAGAAIAJAAIAGAAQACABACADIAZAwIAWgwQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAGgBIAJgBQAEAAgBAGIgtBeQgCAFgHAAg");
	this.shape_6.setTransform(-60,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF972E").s().p("AoRCBQg1AAgmgmQgmgmAAg1QAAg0AmgmQAmgmA1AAIQjAAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAg");
	this.shape_7.setTransform(-60,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DFDFDF").s().p("A3bAJIAAgSMAu2AAAIAAASg");
	this.shape_8.setTransform(0,-20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("A3bDIIAAmPMAu2AAAIAAGPg");
	this.shape_9.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-21,300,42);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAzQgGABAAgHIAAhZQAAgGAGAAIARAAQAGAAAAAGIAAAYIAQAAQAOgBALAJQALAIABANIAAAFQABAPgJAKQgJALgOABgAgMAaIAMAAQAEAAAEgDQADgDAAgDIAAgCIAAAAQABgEgDgDQgDgEgEAAIgCAAIgMAAg");
	this.shape.setTransform(66.1,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAzQgFAAgBgGIAAghIgaAAIAAAhQABAGgHAAIgQAAQgHAAAAgGIAAhZQAAgGAHAAIAQAAQAHAAgBAGIAAAgIAaAAIAAggQABgGAFAAIARAAQAGAAABAGIAABZQAAAGgHAAg");
	this.shape_1.setTransform(56.1,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAzQgGAAAAgGIAAhZQAAgGAGAAIA7AAQAHAAAAAGIAAANQgBAGgGAAIgkAAIAAANIAcAAQAHAAAAAGIAAAMQAAAGgHAAIgcAAIAAAOIAlAAQAHAAAAAGIAAANQAAAGgHAAg");
	this.shape_2.setTransform(47,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhA+QgHAAABgFIAAgQIg0AAIAAAQQAAAFgGAAIgQAAQgGAAAAgFIAAgkQAAgGAGAAIADAAQALgKAAgbIAAghQABgGAGAAIA+AAQAFAAABAGIAABGIAGAAQAHAAgBAGIAAAkQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAIgGABgAgEgWQABAUgIARIAYAAIAAgzIgRAAg");
	this.shape_3.setTransform(36.7,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAzQgFAAAAgGIAAg7IgJAGQgHAEgDgHIgHgMQgCgFAFgDIAbgRQADgCAFAAIAJAAQAGAAAAAGIAABZQAAAGgGAAg");
	this.shape_4.setTransform(24.7,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAdAzQgJAAgCgGIgDgKIgeAAIgDAKQgCAGgJAAIgPAAQgGAAACgGIAihaQACgFAFAAIAPAAQAGAAACAFIAhBaQACAGgGAAgAgDgEIgFAPIAQAAIgFgPIgDgUIAAAAQAAALgDAJg");
	this.shape_5.setTransform(14.2,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqAcQgCgGAGgCIAOgFQAGgCACAGQAEAJAMAAQANAAAAgIQAAgJgJAAIgMAAQgGAAAAgGIAAgKQAAgGAGAAIAKAAQAJAAAAgIQAAgIgLAAQgMAAgEAJQgCAGgGgCIgOgFQgGgCACgGQAKgZAiAAQAmAAAAAeQABAOgMAHQAHABAEAHQAFAHgBAIQAAAfgqAAQgiAAgKgZg");
	this.shape_6.setTransform(4.4,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAzQgHAAAAgFIAAhaQAAgGAHAAIAoAAQAQgBAIAIQAJAHAAANQABAOgLAHIAAABQAQAFgBASQAAAOgLAIQgKAIgQgBgAgMAcIAPAAQAJAAAAgJQAAgIgJAAIgPAAgAgMgLIAMAAQAJAAAAgIQAAgHgJAAIgMAAg");
	this.shape_7.setTransform(-7.5,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAqQgMgKgBgUIAAgYQAAgTAMgKQAMgLAUAAQAVAAAMALQALAKAAATIAAAYQAAAUgLAKQgMAMgVAAQgUAAgLgMgAgPgNIAAAaQAAAOAPABQAPgBAAgOIAAgaQAAgNgPAAIAAgBQgPAAAAAOg");
	this.shape_8.setTransform(-17.4,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAzQgGAAAAgGIAAhZQAAgGAGAAIAmAAQAPgCALAJQALAJABAOIAAAGQABAOgJAJQgJALgOAAQgDABgDgBIgPAAIAAAZQAAAGgHAAgAgLgDIAMAAQAEAAADgDQADgDAAgEIAAgBQABgEgDgDQgDgDgEgBIgCABIgLAAg");
	this.shape_9.setTransform(-26.9,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAdAzQgKAAgBgGIgDgKIgeAAIgDAKQgCAGgJAAIgPAAQgGAAACgGIAihaQACgFAFAAIAPAAQAFAAACAFIAiBaQACAGgGAAgAgDgEIgFAPIAQAAIgFgPQgDgIAAgMIAAAAQAAAMgDAIg");
	this.shape_10.setTransform(-36.8,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjAzQgGAAAAgFIAAhaQAAgGAGAAIApAAQAPgBAIAIQAJAHAAANQABAOgLAHIAAABQAHABAEAIQAEAGgBAIQAAAOgKAIQgKAIgQgBgAgNAcIAPAAQAJAAAAgJQAAgIgJAAIgPAAgAgNgLIANAAQAJAAAAgIQAAgHgJAAIgNAAg");
	this.shape_11.setTransform(-46.4,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAqQgNgKAAgUIAAgYQAAgTAMgKQAMgLAUAAQAVAAAMALQAMAKgBATIAAAYQABAUgMAKQgMAMgVAAQgTAAgMgMgAgOgNIAAAaQAAAOAOABQAQgBgBgOIAAgaQABgNgQAAIAAgBQgOAAAAAOg");
	this.shape_12.setTransform(-56.4,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAzQgGAAAAgGIAAhGIgVAAQgHAAAAgGIAAgNQAAgGAHAAIBGAAQAGAAAAAGIAAANQAAAGgGAAIgWAAIAABGQAAAGgGAAg");
	this.shape_13.setTransform(-65.6,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKArQgLgKAAgSIAAgDIgNAAIAAAhQAAAGgGABIgQAAQgHgBAAgGIAAhZQAAgGAHAAIAQAAQAGAAAAAGIAAAhIANAAIAAgEQgBgRANgLQAJgJAUgBQAVABAMAKQALALAAAUIAAAYQAAATgLAKQgLAMgWgBQgUAAgKgKgAALgZQgEAEgBAFIAAAeQgBAGADAEQAEADAFABIADAAQAPAAAAgOIAAgbQAAgOgPAAIgBAAQgEAAgEACg");
	this.shape_14.setTransform(123.8,-8.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVAzQgGAAAAgGIAAgZQgBgSAGgQIgBAAQgEANgKAPIgSAiQgBADgFAAIgRAAQgHAAAAgGIAAhZQAAgGAHAAIAQAAQAGAAAAAGIAAAZQABASgGAQIABAAQAGgPAIgNIASgiQADgEADABIARAAQAHAAAAAGIAABZQAAAGgHAAg");
	this.shape_15.setTransform(111.4,-8.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAbA/QgHgBABgGIAAgQIg+AAQgGAAAAgGIAAhZQAAgHAGAAIARAAQAGAAAAAHIAABGIAZAAIAAhGQAAgHAGAAIARAAQAGAAAAAHIAABGIAGAAQAGAAAAAFIAAAkQAAAGgHABg");
	this.shape_16.setTransform(101.2,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAzQgGAAACgGIALgZIgfhAQgCgGAGAAIARAAIAHAAQADABABAEIAMAgIAOggQABgDACgBQACgBAFAAIARAAQAGgBgDAGIgmBbQgCADgCABQgBABgDAAg");
	this.shape_17.setTransform(91,-8.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiAzQgGABAAgHIAAhZQAAgHAGAAIA+AAQAHABAAAGIAAALQAAAHgGgBIgoAAIAAAOIATAAQAMgCAKAJQAKAGABANIAAAFQABANgIAKQgJAKgNAAgAgLAbIAMAAQALAAAAgKQAAgJgLAAIgMAAg");
	this.shape_18.setTransform(82,-8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVAzQgGAAAAgGIAAgZQgBgRAGgRIgBAAQgFAOgIAOIgSAiQgDADgDAAIgSAAQgHAAAAgGIAAhZQAAgGAHAAIAQAAQAHAAgBAGIAAAZQACASgHAQIABAAQAFgOAJgOIASgiQACgEAEABIASAAQAFAAABAGIAABZQAAAGgHAAg");
	this.shape_19.setTransform(72,-8.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAzQgHAAAAgGIAAhZQAAgGAHAAIAmAAQAOgCALAJQALAJABAOIAAAGQABAOgJAJQgJAKgOABIgWAAIAAAZQAAAGgGAAgAgMgDIAMAAQAEAAAEgCQADgDAAgEIAAgCIAAAAQABgEgDgDQgDgDgEgBIgOAAg");
	this.shape_20.setTransform(62.4,-8.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAzQgGAAAAgGIAAhGIgWAAQgGAAAAgGIAAgNQAAgGAGAAIBGAAQAHAAAAAGIAAANQAAAGgHAAIgVAAIAABGQAAAGgGAAg");
	this.shape_21.setTransform(53.1,-8.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAqQgMgLAAgSIAAgYQAAgUAMgLQALgKAUgBQAgABAKAZQACAGgGACIgQAGQgFACgCgHQgFgKgKABQgPAAABAQIAAAYQgBAPAPAAQALABAEgLQACgFAFACIAQAFQAGACgCAGQgKAagggBQgUABgLgMg");
	this.shape_22.setTransform(44.1,-8.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVAzQgGAAgBgGIAAgZQABgRAFgRIgBAAQgFAOgJAOIgRAiQgCADgFAAIgSAAQgFAAAAgGIAAhZQAAgGAFAAIARAAQAGAAABAGIAAAZQAAASgGAQIABAAQAFgOAJgOIASgiQACgEAEABIASAAQAFAAAAAGIAABZQAAAGgFAAg");
	this.shape_23.setTransform(34.1,-8.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAhA+QgHAAAAgGIAAgQIgzAAIAAAQQAAAGgHAAIgQAAQgFAAAAgGIAAgjQAAgGAFAAIAEAAQAMgLgBgaIAAghQAAgGAHAAIA9AAQAHAAAAAGIAABGIAGAAQAHAAgBAGIAAAjQABAGgHAAgAgFgWQACAVgIAQIAXAAIAAgzIgRAAg");
	this.shape_24.setTransform(23.2,-7.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAzQgHAAAAgGIAAhZQAAgGAHAAIA6AAQAHAAAAAGIAAANQAAAGgHAAIgkAAIAAANIAcAAQAHAAAAAGIAAALQAAAHgHAAIgcAAIAAAOIAmAAQAGAAAAAGIAAANQAAAGgGAAg");
	this.shape_25.setTransform(10.7,-8.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHAzQgGAAAAgGIAAhGIgWAAQgGAAAAgGIAAgNQAAgGAGAAIBGAAQAHAAAAAGIAAANQAAAGgHAAIgVAAIAABGQAAAGgGAAg");
	this.shape_26.setTransform(1.9,-8.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAVBDQgGAAAAgHIAAgYQgBgSAGgSIgBAAQgGAQgIANIgSAjQgBADgFAAIgRAAQgHAAAAgHIAAhZQAAgGAHAAIAQAAQAGAAAAAGIAAAZQABASgGAQIABAAQAFgQAJgOIASggQACgEAEABIARAAQAHAAAAAGIAABZQgBAHgGAAgAAAgoQgHABgIgFQgIgEgEgIQgCgDAFgDIAKgEQAFgBACADQADAFAEAAQAFAAAEgFQACgDAEABIALAEQAFACgCAEQgDAIgJAEQgGAEgIAAIgDAAg");
	this.shape_27.setTransform(-7.6,-9.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAzQgGAAADgGIALgZIgfhAQgDgGAGAAIARAAIAIAAQACABACAEIAMAgIANggQACgDACgBQABgBAFAAIASAAQAFgBgCAGIgnBbQgBADgCABQgCABgDAAg");
	this.shape_28.setTransform(-17.4,-8.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgiAzQgHAAAAgGIAAhZQAAgGAHAAIAmAAQAOgCALAJQALAJABAOIABAGQABAOgKAJQgJAKgOABIgWAAIAAAZQAAAGgGAAgAgMgDIANAAQAEAAADgDQADgDAAgEIABgBQgBgKgJgBIgOAAg");
	this.shape_29.setTransform(-26.4,-8.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVAzQgGAAAAgGIAAgZQgBgSAHgQIgCAAQgEANgKAPIgSAiQgBADgFAAIgRAAQgHAAABgGIAAhZQgBgGAHAAIAQAAQAHAAAAAGIAAAZQAAASgGAQIABAAQAGgPAIgNIASgiQADgEADABIASAAQAFAAAAAGIAABZQAAAGgFAAg");
	this.shape_30.setTransform(-36.5,-8.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgqAcQgCgGAGgCIAOgFQAGgCACAGQAEAKAMgBQANABAAgJQAAgJgJAAIgMAAQgGAAAAgGIAAgKQAAgGAGAAIAKAAQAIAAAAgIQAAgIgKAAQgNAAgDAJQgCAGgGgCIgPgFQgFgCACgGQAJgZAjgBQAmAAAAAfQABAPgMAGQAHABAEAHQAEAHgBAIQAAAggpgBQgiABgKgag");
	this.shape_31.setTransform(-46.4,-8.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVAzQgHAAAAgGIAAgZQAAgUAGgOIgBAAQgGAOgIAOIgSAiQgCADgEAAIgSAAQgFAAAAgGIAAhZQAAgGAFAAIARAAQAGAAAAAGIAAAZQABASgGAQIABAAQAFgPAJgNIASgiQACgEAEABIASAAQAFAAABAGIAABZQgBAGgFAAg");
	this.shape_32.setTransform(-56.2,-8.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAzQgGAAAAgGIAAhGIgWAAQgGAAAAgGIAAgNQAAgGAGAAIBHAAQAGAAAAAGIAAANQAAAGgGAAIgWAAIAABGQAAAGgGAAg");
	this.shape_33.setTransform(-65.7,-8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAdAzQgKAAgBgGIgEgKIgdAAIgDAKQgCAGgJAAIgPAAQgGAAACgGIAhhaQACgFAGAAIAOAAQAGAAACAEIAiBbQACAGgHAAgAgDgEIgFAPIAQAAIgFgPQgDgIAAgMIAAAAQgBAOgCAGg");
	this.shape_34.setTransform(-75,-8.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAeAzQgGAAAAgGIAAgVQABgVAFgPIgBAAIgSAmQgCAFgFgBIgIAAQgFABgCgFIgIgQQgGgKgEgMIAAAAQAFASAAASIAAAVQAAAGgGAAIgPAAQgGAAAAgGIAAhZQAAgGAGAAIAOAAQAGAAACAEIAXAuIAXguQADgEAFAAIAPAAQAGAAAAAGIAABZQAAAGgGAAg");
	this.shape_35.setTransform(-86.1,-8.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AggAqQgLgKAAgTIAAgYQAAgUALgLQAMgKAUgBQAVABAMAKQALALAAAUIAAAYQAAATgLAKQgMAMgVgBQgUABgMgMgAgOgNIAAAbQAAAOAOAAQAQAAAAgOIAAgbQAAgOgQAAQgOAAAAAOg");
	this.shape_36.setTransform(-97.1,-8.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHAzQgGAAAAgGIAAhGIgWAAQgGAAAAgGIAAgNQAAgGAGAAIBHAAQAGAAAAAGIAAANQAAAGgGAAIgWAAIAABGQAAAGgGAAg");
	this.shape_37.setTransform(-106.3,-8.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgjAzQgGAAAAgGIAAhZQAAgGAGAAIApAAQAgABAAAbQABAOgMAHIAAABQAIABAEAHQAEAHgBAIQAAANgKAIQgKAHgQAAgAgMAcIAPAAQAJAAAAgJQAAgIgJAAIgPAAgAgMgLIAMAAQAIAAAAgHQAAgJgIAAIgMAAg");
	this.shape_38.setTransform(-115.2,-8.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAdAzQgJAAgCgGIgDgKIgeAAIgEAKQgBADgCACQgCABgFAAIgPAAQgGAAACgGIAhhaQACgFAGAAIAOAAQAGAAACAEIAiBbQACAGgHAAgAgDgEIgFAQIAQAAIgGgPQgCgLAAgKIAAAAQAAALgDAJg");
	this.shape_39.setTransform(-125.1,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.1,-16.5,260.4,33.2);


// stage content:
(lib.banner300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bot
	this.instance = new lib.Анимация4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,272);

	this.instance_1 = new lib.Анимация5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},83).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:271.6},0).to({_off:true,y:229},13).wait(84));

	// man
	this.instance_2 = new lib.Анимация6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(223.3,326.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(223.3,136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_3}]},83).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true,y:136.8},13).wait(84));

	// lines
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(173.9,130.7,0.151,0.126,0,0,0,62.8,48.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({regX:62.9,scaleX:1,scaleY:1,x:120.4,y:123.6},5).wait(72));

	// map
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDD7DB").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAAKAKQAKAKAAAMQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape.setTransform(-56.9,98.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CDD7DB").s().p("AiMgyQgHgHAAgKQAAgJAHgHIAMgMQAHgHAJAAQAKAAAHAHIBKBKIBYhaIBKBJQAHAHAAAKQAAAKgHAHIh3B0g");
	this.shape_1.setTransform(-83.3,141.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDD7DB").s().p("Ai/g7ICNiOIDkDjQAOAOAAAUQAAATgOAOIhtBtg");
	this.shape_2.setTransform(-118.5,102.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDD7DB").s().p("AgsBlIgzg0QgHgGAAgKQAAgKAHgHIB7h7IBEBEQAHAHAAAKQAAAKgHAHIhrBqQgGAHgKAAQgKAAgHgHg");
	this.shape_3.setTransform(-127.6,130);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CDD7DB").s().p("ApnKAQgeAAgVgUQgUgVAAgeIAAxxQAAgdAUgVQAVgVAeAAITPAAQAeAAAVAVQAUAVAAAdIAARxQAAAegUAVQgVAUgeAAgAqJpZQgOAOAAATIAARxQAAAUAOAOQAOANAUAAITPAAQAUABAOgOQAOgOAAgUIAAxxQAAgTgOgOQgOgOgUAAIzQAAQgTAAgOAOg");
	this.shape_4.setTransform(-78.2,130.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CDD7DB").s().p("AAnBzIiZiaQgHgGAAgLQAAgJAHgHIAqgqQAHgHAKAAQAKAAAHAHICZCZQAHAHAAAKQAAAKgHAHIgqAqQgHAHgKAAQgKAAgHgHg");
	this.shape_5.setTransform(-60.2,114.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AgrC+IiHiHQgOgOgBgUQABgTAOgMIC+jBICoCqQANAOAAATQAAARgNAOIifCfQgOANgRAAQgUAAgNgNg");
	this.shape_6.setTransform(-123.5,113.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AhIABQgIgGAAgLQAAgLAIgIIArgqQAHgIAMAAQAKAAAGAIIBDBCQAIAIAAAJQAAALgIAIIg9A9g");
	this.shape_7.setTransform(-47.3,110.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AhIABQgIgGAAgLQAAgLAIgIIAqgqQAIgIAMAAQAKAAAHAIIBCBCQAIAIAAAJQAAALgIAIIg+A9g");
	this.shape_8.setTransform(-34.4,181.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("AAXDaIiFiHQgOgOAAgUQAAgTAOgOIDrjrIgDFWQgcAlgVAYQgfAkgNAAQgEAAgCgCg");
	this.shape_9.setTransform(-27.4,134.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("AAQhuQAOgOATAAQAUAAAOAOICHCFQALALgtAmQgXAVgmAeIlWACg");
	this.shape_10.setTransform(-69.2,177.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AjNCFQgIgHABgKQAAgIAGgIIDojoQAHgHAKAAQAKAAAGAHICUCQQAGAHAAAKQAAAKgGAHIhWBVQgHAHgKAAIklACQgKAAgGgHg");
	this.shape_11.setTransform(-100.6,147);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAF1F5").s().p("AmOJyICgihImrAAICOiOIGqAAIDtjtIjVjUIpRJPIAAi+IHynwImSmTIC+AAIEzE0IEzk0IC+AAImTGTIDVDWIGwmwIAADCIlPFNIFKFJIAAC+ImomoIm5G7g");
	this.shape_12.setTransform(-77.9,131);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3EBF1").s().p("AiNhGIBHhHIDUDUIhHBHg");
	this.shape_13.setTransform(-42.6,96.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4FCFC").s().p("ApnJoQgUAAgOgOQgOgOAAgTIAAxxQAAgUAOgNQAOgOAUAAITPAAQAUAAAOAOQAOANAAAUIAARxQAAATgOAOQgOAOgUAAg");
	this.shape_14.setTransform(-78.2,130.1);

	this.instance_5 = new lib.Анимация8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-78.2,130.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация9("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(91.8,130.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_5}]},34).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_6}]},75).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({_off:true,x:91.8},11).wait(76));

	// text
	this.instance_7 = new lib.Анимация3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-132.8,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:147.2},4).to({x:151.2},20).to({y:35.1},13).wait(83).to({startPosition:0},0).wait(1));

	// Слой 16
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3aziMAu1AAAMAAAAnFMgu1AAAg");
	this.shape_15.setTransform(150,124.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,123.5,564,294.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;