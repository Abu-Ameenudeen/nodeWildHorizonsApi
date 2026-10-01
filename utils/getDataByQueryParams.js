export const getDataByQueryParams = (data, queryObj) => {
    
    const { continent, country, is_open_to_public } = queryObj

    if (continent) {
        data = data.filter( (datum) => {
            return datum.continent.toLowerCase() === continent.toLowerCase()
        })
    }
    
    if (country) {
        data = data.filter( (datum) => {
            return datum.country.toLowerCase() === country.toLowerCase()
        })
    }

    if (is_open_to_public) {
        data = data.filter( (datum) => {
            return datum.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
        })
    }

    return data
}