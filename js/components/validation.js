function isArrayValid(array) {
    if (!Array.isArray (array)) {
        console.error ("ERROR: object supplied is not an array.");
        return false;
    }
    if (array.length === 0) {
        console.error ("ERROR: array supplied is empty.");
        return false;
    }
    return true;
}

function isNumberProper(number, assessedObjectName) {
    if (typeof assessedObjectName !== "string") {
        console.warn( "WARNING: name supplied for the assessed object is of an unsupported non-string type.");
        assessedObjectName = "value/object";
    }
    if (typeof number !== "number") {
        console.error(`ERROR: submitted ${assessedObjectName} is not of integer type`);
        return false;
    }
    if (!isFinite(number)) {
        console.error(`ERROR: submitted ${assessedObjectName} is not a proper number.`);
        return false;
    }
    return true;
}

export { isArrayValid, isNumberProper }