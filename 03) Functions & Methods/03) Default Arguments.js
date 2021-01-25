const coneVolume = function(radius, height = 1){
    //                       ^         ^
    //                    regular   default
    //                   argument   argument
    let area = (1/3)*3.14*(radius**2)*height;
    return area;
};

console.log(coneVolume(5)); /* radius as 5 and height as 1 */

console.log(coneVolume(7,2)); /* radius as 7 height as 2 */

