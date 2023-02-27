import { useHttp } from '../hooks/http.hook'

export const useAviasalesServices = () => {

    const { request } = useHttp()
    const _apiBase = 'https://aviasales-test-api.kata.academy/'

    const getSearchId = async () => {
        const res = await  request(`${_apiBase}search`)
        return res.searchId
    }

    const getTickets = async (id) => {
        const res = await request(`${_apiBase}tickets?searchId=${id}`)
        return res
    }

    return {getSearchId, getTickets}
} 

export default useAviasalesServices;