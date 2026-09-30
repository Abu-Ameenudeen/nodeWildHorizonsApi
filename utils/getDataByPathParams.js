export const getDataByPathParams = (data, locationType, location) => {
    const filteredData = data.filter( (datum) => {
            return datum[locationType].toLowerCase() === location.toLowerCase()
        })
    return filteredData
}