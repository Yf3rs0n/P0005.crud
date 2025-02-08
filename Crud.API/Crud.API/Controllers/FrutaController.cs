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
            var jugadores = await _mediator.Send(new ConsultarFrutasQuery());
            return Ok(jugadores);
        }
    }
}
