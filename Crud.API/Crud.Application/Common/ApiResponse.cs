namespace Crud.Application.Common
{
    public class ApiResponse
    {
        public string Message { get; set; }
        public bool Success { get; set; }

        public ApiResponse(string message, bool success)
        {
            Message = message;
            Success = success;
        }
    }
}
