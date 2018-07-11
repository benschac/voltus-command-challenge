// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
/**
 * 
 * @param {string} input to transform to titleCase
 * 
 * @return {string} as titleCase 
 */
export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
