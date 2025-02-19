using Crud.Application.Commands;
using Crud.Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Crud.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FrutaController : ControllerBase
    {
        private readonly IMediator _mediator;
        public FrutaController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("get-frutas")]
        public async Task<IActionResult> Get()
        {
            var result = await _mediator.Send(new ConsultarFrutasQuery());
            return Ok(result);
        }
        [HttpGet("get-fruta-by-id")]
        public async Task<IActionResult> GetById([FromQuery] ConsultarFrutaPorIdQuery query)
        {
            var result = await _mediator.Send(query);
            return result is not null ? Ok(result) : NotFound("Fruta no encontrado");
        }
        [HttpPost("insert-fruta")]
        public async Task<IActionResult> Post([FromBody] InsertarFrutaCommand command)
        {
            var response = await _mediator.Send(command);
            return response.Success ? Ok(response) : BadRequest(response);
        }
        [HttpPut("update-fruta")]
        public async Task<IActionResult> Put([FromBody] ActualizarFrutaCommand command)
        {
            var response = await _mediator.Send(command);
            return response.Success ? Ok(response) : NotFound(response);
        }
        [HttpDelete("delete-fruta")]
        public async Task<IActionResult> Delete([FromQuery] EliminarFrutaCommand command)
        {
            var response = await _mediator.Send(command);
            return response.Success ? Ok(response) : NotFound(response);
        }
    }
}
