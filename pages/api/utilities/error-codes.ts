const errorsStatusCode = (code) => {
    function Api400Error(res) {
        return res.status(400).json({ message: 'Bad Request' })
    }

    function Api404Error(res) {
        return res.status(404).json({ message: 'Resource not found' })
    }

    function Api500Error(res) {
        return res.status(500).json({ message: 'Server Error' })
    }
    const statusCode = {
        400: Api400Error,
        404: Api404Error,
        500: Api500Error,
    }
    return statusCode[code]
}

export default errorsStatusCode;