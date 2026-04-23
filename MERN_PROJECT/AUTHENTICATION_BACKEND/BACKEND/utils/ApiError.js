class ApiError extends Error{
    constructor(statuscode,message="something went wrong"){
        super(message)
        this.success=false
        this.statuscode=statuscode
    }

}
export default ApiError