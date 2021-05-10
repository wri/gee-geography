/*
  Google Earth Engine module for working with geoBoundaries data (https://www.geoboundaries.org/)

  Copyright: World Resources Institute
  License: MIT
  Contact: Logan Byers
  Date Updated: 2021-05-10

*/
var version = function () {
  return '0.3.1';
};

var docs = function (func) {
  /* Print documentation to the console.
  
  func : string, optional
    name of function within this library to display.
    if not provided, then the all documentation will be printed.
  
  */
  var documentation = {
    'version':
    'version()\n' +
    '=========\n' +
    'Get a string of the library version',
    
    'docs':
    'docs(func)\n' +
    '==========\n' +
    'Print documentation to the console.\n' +
    '  \n' +
    '  func : string, optional\n' +
    '    name of the function to get documentation.\n' +
    '    if not provided then all functions will be printed',
    
    'checkGeoBoundariesAssetExists':
    'checkGeoBoundariesAssetExists(iso, level, version)\n' +
    '==================================================\n' +
    'Get a bool of whether an asset exists and is available for use on GEE.\n' +
    'Returns true if asset can be used, returns false if asset not available.\n' +
    '  \n' +
    '  iso : string\n' +
    '    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....\n' +
    '  level : string\n' +
    '    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"\n' +
    '  version : string, optional\n' +
    '    geoBoundaries version - if not supplied then "3_0_0" is the default value',
    
    'getGeoBoundariesAssetName':
    'getGeoBoundariesAssetName(iso, level, version)\n' +
    '==============================================\n' +
    'Get a string of an asset name, which may or may not exist.\n' +
    '  \n' +
    '  iso : string\n' +
    '    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....\n' +
    '  level : string\n' +
    '    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"\n' +
    '  version : string, optional\n' +
    '    geoBoundaries version - if not supplied then "3_0_0" is the default value',
    
    'getGeoBoundariesAsset':
    'getGeoBoundariesAsset(iso, level, version)\n' +
    '==========================================\n' +
    'Get a FeatureCollection of an asset, or throw an error if it does not exist.\n' +
    '  \n' +
    '  iso : string\n' +
    '    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....\n' +
    '  level : string\n' +
    '    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"\n' +
    '  version : string, optional\n' +
    '    geoBoundaries version - if not supplied then "3_0_0" is the default value  ',
    
    'filterGeoBoundariesByCodes':
    'filterGeoBoundariesByCodes(feats, codes)\n' +
    '========================================\n' +
    'Filter a FeatureCollection by a list of unique geographic codes.\n' +
    '  \n' +
    '  feats : ee.FeatureCollection\n' +
    '    features that share the properties of geoBoundaries data\n' +
    '  codes : Array of String\n' +
    '    array of shapeID codes to filter (inclusive, filter these codes into the new FeatureCollection)',
    
    'filterGeoBoundariesByNames':
    'filterGeoBoundariesByNames(feats, names)\n' +
    '========================================\n' +
    'Filter a FeatureCollection by a list of administrative names.\n' +
    'This function can be dangerous or have unintended results\n' +
    'unless you are certain the names are unique.\n' +
    'It is advised to use `filterGeoBoundariesByCodes` instead of this function when possible.\n' +
    '  \n' +
    '  feats : ee.FeatureCollection\n' +
    '    features that share the properties of geoBoundaries data\n' +
    '  names : Array of String\n' +
    '    array of shapeNames to filter (inclusive, filter these codes into the new FeatureCollection)',
    
    'unionGeoBoundariesByCodes':
    'unionGeoBoundariesByCodes(feats, codes)\n' +
    '=======================================\n' +
    'Get a FeatureCollection that has the geometric union based on\n' +
    'a list of unique geographic codes.\n' +
    'See also `filterGeoboundariesByCodes`.\n' +
    '  \n' +
    '  feats : ee.FeatureCollection\n' +
    '    features that share the properties of geoBoundaries data\n' +
    '  codes : Array of String\n' +
    '    array of shapeID codes to filter (inclusive, filter these codes into the new FeatureCollection)',
    
    'unionGeoBoundariesByNames':
    'unionGeoBoundariesByNames(feats, names)\n' +
    '=======================================\n' +
    'Get a FeatureCollection that has the geometric union based on\n' +
    'a list of unique geographic codes.\n' +
    'See also `filterGeoboundariesByNames` and the caveats described there.\n' +
    '  \n' +
    '  feats : ee.FeatureCollection\n' +
    '    features that share the properties of geoBoundaries data\n' +
    '  names : Array of String\n' +
    '    array of shapeNames to filter (inclusive, filter these codes into the new FeatureCollection)',
    
    'listGeoBoundariesCodes':
    'listGeoBoundariesCodes(iso, level, intersecting)\n' +
    '================================================\n' +
    'Get a List of geoBoundaries `shapeID`s.\n' +
    'If <intersecting> is supplied then filter to features that intersect that Geometry.\n' +
    'See also `listGeoBoundariesNames` and `listGeoBoundariesNamesAndCodes`.\n' +
    '  \n' +
    '  iso : string\n' +
    '    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....\n' +
    '  level : string\n' +
    '    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"\n' +
    '  intersecting : ee.Geometry, optional\n' +
    '    geometry used to filter features by intersection before getting codes.',
      
    'listGeoBoundariesNames':
    'listGeoBoundariesNames(iso, level, intersecting)\n' +
    '================================================\n' +
    'Get a List of geoBoundaries `shapeName`s.\n' +
    'If <intersecting> is supplied then filter to features that intersect that Geometry.\n' +
    'See also `listGeoBoundariesCodes` and `listGeoBoundariesNamesAndCodes`.\n' +
    '  \n' +
    '  iso : string\n' +
    '    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....\n' +
    '  level : string\n' +
    '    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"\n' +
    '  intersecting : ee.Geometry, optional\n' +
    '    geometry used to filter features by intersection before getting codes.',
      
    'listGeoBoundariesNamesAndCodes':
    'listGeoBoundariesNamesAndCodes(iso, level, intersecting)\n' +
    '========================================================\n' +
    'Get a List of paired geoBoundaries `shapeName`s and `shapeID`s.\n' +
    'If <intersecting> is supplied then filter to features that intersect that Geometry.\n' +
    'See also `listGeoBoundariesCodes` and `listGeoBoundariesNames`.\n' +
    '  iso : string\n' +
    '    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....\n' +
    '  level : string\n' +
    '    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"\n' +
    '  intersecting : ee.Geometry, optional\n' +
    '    geometry used to filter features by intersection before getting codes.',
      
    'getGeoBoundariesFeatures':
    'getGeoBoundariesFeatures(iso, level, intersecting)\n' +
    '==================================================\n' +
    'Get a FeatureCollection of geoBoundaries features at a certain level.\n' +
    'If <intersecting> is supplied then filter to features that intersect that Geometry.\n' +
    'Use `getGeoBoundariesAsset` if the intersection is not needed.\n' +
    '  \n' +
    '  iso : string\n' +
    '    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....\n' +
    '  level : string\n' +
    '    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"\n' +
    '  intersecting : ee.Geometry, optional\n' +
    '    geometry used to filter features by intersection before getting codes.'
  };

  if (func === undefined) {
    for (var k in documentation) {
      console.log(documentation[k]);
    }
  }
  else if ( !(func in documentation) ) {
    throw "function <" + func + "> does not have documentation";
  }
  else {
    console.log(documentation[func]);
  }
};


var checkGeoBoundariesAssetExists = function (iso, level, version) {
  /* Get a bool of whether an asset exists and is available for use on GEE.
     Returns true if asset can be used, returns false if asset not available.
  
  iso : string
    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....
  level : string
    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"
  version : string, optional
    geoBoundaries version - if not supplied then "3_0_0" is the default value
    
  */
  var all_assets = [
    "projects/wri-datalab/geoBoundaries/v3_0_0/ARG/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/ARG/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/ARG/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/BRA/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/BRA/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/BRA/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CHN/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CHN/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CHN/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CHN/ADM3",
    "projects/wri-datalab/geoBoundaries/v3_0_0/COL/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/COL/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/COL/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CRI/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CRI/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CRI/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/CRI/ADM3",
    "projects/wri-datalab/geoBoundaries/v3_0_0/ETH/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/ETH/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/ETH/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/ETH/ADM3",
    "projects/wri-datalab/geoBoundaries/v3_0_0/IDN/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/IDN/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/IDN/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/IND/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/IND/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/IND/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/KEN/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/KEN/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/KEN/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/KEN/ADM3",
    "projects/wri-datalab/geoBoundaries/v3_0_0/MEX/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/MEX/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/MEX/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/MAR/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/MAR/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/MAR/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/RWA/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/RWA/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/RWA/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/RWA/ADM3",
    "projects/wri-datalab/geoBoundaries/v3_0_0/RWA/ADM4",
    "projects/wri-datalab/geoBoundaries/v3_0_0/SLE/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/SLE/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/SLE/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/SLE/ADM3",
    "projects/wri-datalab/geoBoundaries/v3_0_0/SLE/ADM4",
    "projects/wri-datalab/geoBoundaries/v3_0_0/TUR/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/TUR/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/TUR/ADM2",
    "projects/wri-datalab/geoBoundaries/v3_0_0/UGA/ADM0",
    "projects/wri-datalab/geoBoundaries/v3_0_0/UGA/ADM1",
    "projects/wri-datalab/geoBoundaries/v3_0_0/UGA/ADM2",
    "projects/wri-datalab/geoBoundaries/geoBoundariesCGAZ_ADM0",
    "projects/wri-datalab/geoBoundaries/geoBoundariesCGAZ_ADM1",
    "projects/wri-datalab/geoBoundaries/geoBoundariesCGAZ_ADM2"
  ];
  return ( all_assets.indexOf(getGeoBoundariesAssetName(iso, level, version)) >=0 );

};

var getGeoBoundariesAssetName = function (iso, level, version) {
  /* Get a string of an asset name, which may or may not exist.
  
  iso : string
    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....
  level : string
    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"
  version : string, optional
    geoBoundaries version - if not supplied then "3_0_0" is the default value
  
  */
  if (
    (iso.length != 3)
    || (iso != iso.toUpperCase())
  ) {
    throw "<iso> must by a String of length 3 that is upper case";
  }
  
  if (
    ["ADM0", "ADM1", "ADM2", "ADM3", "ADM4"].indexOf(level) < 0
  ) {
    throw "<level> must be a String and look like 'ADM0', 'ADM1', ....";
  }
  
  if (version === undefined) {
    version = "3_0_0";
  }

  if (iso === 'WLD') {
    return "projects/wri-datalab/geoBoundaries/geoBoundariesCGAZ_" + level;
  }

  return "projects/wri-datalab/geoBoundaries/v" + version + "/" + iso + "/" + level;
};

var getGeoBoundariesAsset = function (iso, level, version) {
  /* Get a FeatureCollection of an asset, or throw an error if it does not exist.
  
  iso : string
    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....
  level : string
    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"
  version : string, optional
    geoBoundaries version - if not supplied then "3_0_0" is the default value
  
  */
  return ee.FeatureCollection(getGeoBoundariesAssetName(iso, level, version));
};

var filterGeoBoundariesByCodes = function (feats, codes) {
  /* Filter a FeatureCollection by a list of unique geographic codes.
  
  feats : ee.FeatureCollection
    features that share the properties of geoBoundaries data
  codes : Array of String
    array of shapeID codes to filter (inclusive, filter these codes into the new FeatureCollection)
  
  */
  return feats.filter(
    ee.Filter.inList("shapeID", codes)
  );
};

var filterGeoBoundariesByNames = function (feats, names) {
  /* Filter a FeatureCollection by a list of administrative names.
     This function can be dangerous or have unintended results
     unless you are certain the names are unique.
     It is advised to use `filterGeoBoundariesByCodes` instead of this function when possible.
  
  feats : ee.FeatureCollection
    features that share the properties of geoBoundaries data
  names : Array of String
    array of shapeNames to filter (inclusive, filter these codes into the new FeatureCollection)
  
  */
  return feats.filter(
    ee.Filter.inList("shapeName", names)
  );
};

var unionGeoBoundariesByCodes = function (feats, codes) {
  /* Get a FeatureCollection that has the geometric union based on
     a list of unique geographic codes.
     See also `filterGeoboundariesByCodes`.
  
  feats : ee.FeatureCollection
    features that share the properties of geoBoundaries data
  codes : Array of String
    array of shapeID codes to filter (inclusive, filter these codes into the new FeatureCollection)
  
  */
  filterGeoBoundariesByCodes(feats, codes).union();
};

var unionGeoBoundariesByNames = function (feats, names) {
   /* Get a FeatureCollection that has the geometric union based on
      a list of unique geographic codes.
      See also `filterGeoboundariesByNames` and the caveats described there.
  
  feats : ee.FeatureCollection
    features that share the properties of geoBoundaries data
  names : Array of String
    array of shapeNames to filter (inclusive, filter these codes into the new FeatureCollection)
  
  */
  filterGeoBoundariesByNames(feats, names).union();
};

var listGeoBoundariesCodes = function(iso, level, intersecting) {
  /* Get a List of geoBoundaries `shapeID`s.
     If <intersecting> is supplied then filter to features that intersect that Geometry.
     See also `listGeoBoundariesNames` and `listGeoBoundariesNamesAndCodes`.
  
  iso : string
    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....
  level : string
    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"
  intersecting : ee.Geometry, optional
    geometry used to filter features by intersection before getting codes.
    
  */
  var a = getGeoBoundariesAsset(iso, level);

  if ( intersecting !== undefined ) {
    a = a.filterBounds(intersecting);
  }
  return a.reduceColumns(ee.Reducer.toList(), ['shapeID']).get('list');
};

var listGeoBoundariesNames = function(iso, level, intersecting) {
  /* Get a List of geoBoundaries `shapeName`s.
     If <intersecting> is supplied then filter to features that intersect that Geometry.
     See also `listGeoBoundariesCodes` and `listGeoBoundariesNamesAndCodes`.
  
  iso : string
    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....
  level : string
    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"
  intersecting : ee.Geometry, optional
    geometry used to filter features by intersection before getting codes.
    
  */
  var a = getGeoBoundariesAsset(iso, level);

  if ( intersecting !== undefined ) {
    a = a.filterBounds(intersecting);
  }
  return a.reduceColumns(ee.Reducer.toList(), ['shapeName']).get('list');
};

var listGeoBoundariesNamesAndCodes = function(iso, level, intersecting) {
  /* Get a List of paired geoBoundaries `shapeName`s and `shapeID`s.
     If <intersecting> is supplied then filter to features that intersect that Geometry.
     See also `listGeoBoundariesCodes` and `listGeoBoundariesNames`.
  
  iso : string
    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....
  level : string
    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"
  intersecting : ee.Geometry, optional
    geometry used to filter features by intersection before getting codes.
    
  */
  var a = getGeoBoundariesAsset(iso, level);

  if ( intersecting !== undefined ) {
    a = a.filterBounds(intersecting);
  }
  var ids = a.reduceColumns(ee.Reducer.toList(), ['shapeID']).get('list');
  var names = a.reduceColumns(ee.Reducer.toList(), ['shapeName']).get('list');
  return ee.List(names).zip(ee.List(ids));
};

var getGeoBoundariesFeatures = function(iso, level, intersecting) {
  /* Get a FeatureCollection of geoBoundaries features at a certain level.
     If <intersecting> is supplied then filter to features that intersect that Geometry.
     Use `getGeoBoundariesAsset` if the intersection is not needed.
  
  iso : string
    3-letter capitalized country code, looks like "USA", "MEX", "RWA", "ETH", ....
  level : string
    administrative level, must be one of "ADM0", "ADM1", "ADM2", "ADM3", "ADM4"
  intersecting : ee.Geometry, optional
    geometry used to filter features by intersection before getting codes.
    
  */
  if ( intersecting === undefined ) {
    return getGeoBoundariesAsset(iso, level);
  }
  var ids = listGeoBoundariesCodes(iso, level, intersecting);
  return filterGeoBoundariesByCodes(getGeoBoundariesAsset(iso, level), ee.List(ids));
};

//
// EXPORTS
//
exports.version = version;
exports.docs = docs;

exports.checkGeoBoundariesAssetExists = checkGeoBoundariesAssetExists;
exports.getGeoBoundariesAssetName = getGeoBoundariesAssetName;
exports.getGeoBoundariesAsset = getGeoBoundariesAsset;
exports.filterGeoBoundariesByCodes = filterGeoBoundariesByCodes;
exports.filterGeoBoundariesByNames = filterGeoBoundariesByNames;
exports.unionGeoBoundariesByCodes = unionGeoBoundariesByCodes;
exports.unionGeoBoundariesByNames = unionGeoBoundariesByNames;
exports.listGeoBoundariesCodes = listGeoBoundariesCodes;
exports.listGeoBoundariesNames = listGeoBoundariesNames;
exports.listGeoBoundariesNamesAndCodes = listGeoBoundariesNamesAndCodes;
exports.getGeoBoundariesFeatures = getGeoBoundariesFeatures;
