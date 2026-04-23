class  ApiError extends Error{
    constructor(statusCode,message="someting went wrong"){
        super(message)
        this.success=false
        this.statusCode=statusCode
        
    }
}
export default ApiError