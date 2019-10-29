/**
 * fiddle for http://stackoverflow.com/questions/13903897
 * -
 * COPY FROM HERE
 */

function dateDiff(timestamp, structure = dateDiff.structure) {
    let delta = Math.abs(timestamp - new Date().getTime()) / 1000; 
    let res = {};

		for(let key in structure) {
        res[key] = Math.floor(delta / structure[key]);
        delta -= res[key] * structure[key];
    }
    
    return res;
}

dateDiff.structure = {
  year: 31536000,
  month: 2592000,
//  week: 604800, // uncomment row to ignore
  day: 86400,   // feel free to add your own row
  hour: 3600,
  minute: 60,
//  second: 1
};

/**
 * TO HERE
 */

export default dateDiff;