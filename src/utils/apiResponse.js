class ApiResponse{
    constructor(statusCode,data,message="success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}


export default ApiResponse

// Legal name

// Talha Tabish
// Address

// Mardan
// Mohib Banda Par Hoti Mardan
// Mardan - 23400
// Pakistan (PK)