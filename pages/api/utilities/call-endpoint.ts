const callEndpoint = async (axiosCall) => {
    let result = {}
    result = await axiosCall.call
    return result
}
export default callEndpoint;