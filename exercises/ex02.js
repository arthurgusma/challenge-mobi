function updateData(currentObject, newDataObject) {
    const newCurrentObject = { ...currentObject }
 
     for (let key in newDataObject) {
        if (currentObject.hasOwnProperty(key)) {
            newCurrentObject[key] = newDataObject[key]
        }
     }
 
     return newCurrentObject
 }

module.exports = updateData;