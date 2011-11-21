/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['models/place.js']) {
  _$jscoverage['models/place.js'] = [];
  _$jscoverage['models/place.js'][1] = 0;
  _$jscoverage['models/place.js'][2] = 0;
  _$jscoverage['models/place.js'][3] = 0;
  _$jscoverage['models/place.js'][7] = 0;
  _$jscoverage['models/place.js'][9] = 0;
  _$jscoverage['models/place.js'][10] = 0;
  _$jscoverage['models/place.js'][13] = 0;
  _$jscoverage['models/place.js'][14] = 0;
  _$jscoverage['models/place.js'][17] = 0;
  _$jscoverage['models/place.js'][18] = 0;
  _$jscoverage['models/place.js'][21] = 0;
  _$jscoverage['models/place.js'][22] = 0;
  _$jscoverage['models/place.js'][23] = 0;
  _$jscoverage['models/place.js'][24] = 0;
  _$jscoverage['models/place.js'][26] = 0;
  _$jscoverage['models/place.js'][29] = 0;
  _$jscoverage['models/place.js'][30] = 0;
  _$jscoverage['models/place.js'][34] = 0;
  _$jscoverage['models/place.js'][35] = 0;
  _$jscoverage['models/place.js'][38] = 0;
  _$jscoverage['models/place.js'][39] = 0;
  _$jscoverage['models/place.js'][42] = 0;
  _$jscoverage['models/place.js'][43] = 0;
  _$jscoverage['models/place.js'][44] = 0;
  _$jscoverage['models/place.js'][46] = 0;
  _$jscoverage['models/place.js'][47] = 0;
  _$jscoverage['models/place.js'][50] = 0;
  _$jscoverage['models/place.js'][54] = 0;
  _$jscoverage['models/place.js'][55] = 0;
  _$jscoverage['models/place.js'][60] = 0;
  _$jscoverage['models/place.js'][61] = 0;
  _$jscoverage['models/place.js'][62] = 0;
  _$jscoverage['models/place.js'][63] = 0;
  _$jscoverage['models/place.js'][67] = 0;
  _$jscoverage['models/place.js'][68] = 0;
  _$jscoverage['models/place.js'][69] = 0;
  _$jscoverage['models/place.js'][70] = 0;
  _$jscoverage['models/place.js'][71] = 0;
  _$jscoverage['models/place.js'][75] = 0;
  _$jscoverage['models/place.js'][76] = 0;
  _$jscoverage['models/place.js'][78] = 0;
  _$jscoverage['models/place.js'][79] = 0;
  _$jscoverage['models/place.js'][80] = 0;
  _$jscoverage['models/place.js'][83] = 0;
  _$jscoverage['models/place.js'][85] = 0;
  _$jscoverage['models/place.js'][90] = 0;
  _$jscoverage['models/place.js'][91] = 0;
  _$jscoverage['models/place.js'][92] = 0;
  _$jscoverage['models/place.js'][109] = 0;
}
_$jscoverage['models/place.js'][1]++;
var PlaceModel = require("../schemas/schema").PlaceModel;
_$jscoverage['models/place.js'][2]++;
var Entity = require("./entity");
_$jscoverage['models/place.js'][3]++;
var Common = require("../lib/common");
_$jscoverage['models/place.js'][7]++;
var Place = (function (placeName) {
  _$jscoverage['models/place.js'][9]++;
  this.modelClass = PlaceModel;
  _$jscoverage['models/place.js'][10]++;
  this.initModel();
  _$jscoverage['models/place.js'][13]++;
  this.getName = (function () {
  _$jscoverage['models/place.js'][14]++;
  return this.model.name;
});
  _$jscoverage['models/place.js'][17]++;
  this.getLocation = (function () {
  _$jscoverage['models/place.js'][18]++;
  return this.model.location;
});
  _$jscoverage['models/place.js'][21]++;
  this.getPublications = (function () {
  _$jscoverage['models/place.js'][22]++;
  var publicationsList = [];
  _$jscoverage['models/place.js'][23]++;
  for (var i = 0; i < this.model.publications.length; i++) {
    _$jscoverage['models/place.js'][24]++;
    publicationsList[i] = Publication.createWithModel(this.model.publications[i]);
}
  _$jscoverage['models/place.js'][26]++;
  return publicationsList;
});
  _$jscoverage['models/place.js'][29]++;
  this.setName = (function (name) {
  _$jscoverage['models/place.js'][30]++;
  this.model.name = name;
});
  _$jscoverage['models/place.js'][34]++;
  this.setLocation = (function (latitudeAndLongitude) {
  _$jscoverage['models/place.js'][35]++;
  this.model.location = latitudeAndLongitude;
});
  _$jscoverage['models/place.js'][38]++;
  this.addPublication = (function (publication) {
  _$jscoverage['models/place.js'][39]++;
  this.model.publications.push(publication.getModel());
});
  _$jscoverage['models/place.js'][42]++;
  this.getLastPublication = (function () {
  _$jscoverage['models/place.js'][43]++;
  var numberOfPublications = this.model.publications.length;
  _$jscoverage['models/place.js'][44]++;
  if (numberOfPublications > 0) {
    _$jscoverage['models/place.js'][46]++;
    publicationInModel = this.model.publications[numberOfPublications - 1];
    _$jscoverage['models/place.js'][47]++;
    return Publication.createWithModel(publicationInModel);
  }
  else {
    _$jscoverage['models/place.js'][50]++;
    return false;
  }
});
});
_$jscoverage['models/place.js'][54]++;
Place.prototype = new Entity();
_$jscoverage['models/place.js'][55]++;
Place.prototype.constructor = Place;
_$jscoverage['models/place.js'][60]++;
Place.prototype.loadByName = (function (pName, callbackToController) {
  _$jscoverage['models/place.js'][61]++;
  this.prepareDbConnectionWithCallback(callbackToController);
  _$jscoverage['models/place.js'][62]++;
  var onLoad = Common.tools.bind(this._onLoad, this);
  _$jscoverage['models/place.js'][63]++;
  PlaceModel.findOne({name: pName}, onLoad);
});
_$jscoverage['models/place.js'][67]++;
Place.prototype._onSave = (function (err, place) {
  _$jscoverage['models/place.js'][68]++;
  this.handleErrorIfExists(err);
  _$jscoverage['models/place.js'][69]++;
  console.log("Place " + place.name + " saved");
  _$jscoverage['models/place.js'][70]++;
  this.model = place;
  _$jscoverage['models/place.js'][71]++;
  this.callbackToControllerOnDatabaseOperationDone(this.model._id);
});
_$jscoverage['models/place.js'][75]++;
Place.prototype._onLoad = (function (err, place) {
  _$jscoverage['models/place.js'][76]++;
  this.handleErrorIfExists(err);
  _$jscoverage['models/place.js'][78]++;
  if (place) {
    _$jscoverage['models/place.js'][79]++;
    this.loadDbModel(place);
    _$jscoverage['models/place.js'][80]++;
    console.log("Found: " + this.model.name);
  }
  else {
    _$jscoverage['models/place.js'][83]++;
    this.model = new PlaceModel();
  }
  _$jscoverage['models/place.js'][85]++;
  this.callbackToControllerOnDatabaseOperationDone(this);
});
_$jscoverage['models/place.js'][90]++;
Place.load = (function (id, onload) {
  _$jscoverage['models/place.js'][91]++;
  var place = new Place();
  _$jscoverage['models/place.js'][92]++;
  place.loadById(id, onload);
});
_$jscoverage['models/place.js'][109]++;
module.exports = Place;
_$jscoverage['models/place.js'].source = ["var PlaceModel = require('../schemas/schema').PlaceModel;","var Entity = require('./entity');","var Common = require('../lib/common');","","","//Class Place","var Place = function(placeName) {","","\tthis.modelClass = PlaceModel;","\tthis.initModel();","\t","\t","\tthis.getName = function() {","\t\treturn this.model.name; ","\t}","\t","\tthis.getLocation = function() {","\t\treturn this.model.location; ","\t}","\t","\tthis.getPublications = function() {\t\t","\t\tvar publicationsList = [];","\t\tfor(var i = 0; i&lt;this.model.publications.length; i++){","\t\t\tpublicationsList[i] = Publication.createWithModel(this.model.publications[i]);","\t\t}","\t\treturn publicationsList;","\t}","\t","\tthis.setName = function(name)\t{","\t\tthis.model.name = name;","\t}","\t","\t","\tthis.setLocation = function (latitudeAndLongitude) {","\t\tthis.model.location = latitudeAndLongitude;","\t};\t","\t\t","\tthis.addPublication = function(publication){","\t\tthis.model.publications.push(publication.getModel());\t","\t}\t\t","\t","\tthis.getLastPublication = function () {\t\t","\t\tvar numberOfPublications = this.model.publications.length;","\t\tif(numberOfPublications &gt; 0)","\t\t{","\t\t\tpublicationInModel = this.model.publications[numberOfPublications-1];","\t\t\treturn Publication.createWithModel(publicationInModel);","\t\t}","\t\telse ","\t\t\treturn false;","\t}","};","","Place.prototype = new Entity;","Place.prototype.constructor = Place;","//Place.prototype.__proto__ = DbEntity.prototype;","//con este las propiedades publicas no se heredan","","","Place.prototype.loadByName = function(pName, callbackToController) {","\tthis.prepareDbConnectionWithCallback(callbackToController);\t","\tvar onLoad = Common.tools.bind(this._onLoad, this);\t\t","\tPlaceModel.findOne({ name: pName}, onLoad);","};","","","Place.prototype._onSave = function(err, place) {","\tthis.handleErrorIfExists(err);","\tconsole.log('Place ' + place.name + ' saved');","\tthis.model = place;\t\t\t","\tthis.callbackToControllerOnDatabaseOperationDone(this.model._id);\t","}","","","Place.prototype._onLoad = function(err,place) {","\tthis.handleErrorIfExists(err);","\t\t\t","\tif(place) {\t","\t\tthis.loadDbModel(place);","\t\tconsole.log('Found: ' + this.model.name);","\t}","\telse {","\t\tthis.model = new PlaceModel();\t","\t}\t\t","\tthis.callbackToControllerOnDatabaseOperationDone(this);\t\t","};","","","","Place.load = function(id, onload) {","\tvar place = new Place();","\tplace.loadById(id,onload);","};","","","","/*module.exports.create =  function() {","\treturn new Place();","};","","module.exports.createFromInputData =  function(inputData) {\t","\tvar place = new Place();\t\t","\tplace.setName(inputData.name);","\treturn place;\t","};*/","","","","module.exports =  Place;","",""];
