using Crud.Application.Common;
using Crud.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Crud.Application.Commands
{
    public record class ActualizarFrutaCommand(int id, string nombreFruta, int cantidad, int precioUnitario, string proveedor) : IRequest<ApiResponse>;
    public class ActualizarFrutaCommandHandler(IApplicationDbContext context) : IRequestHandler<ActualizarFrutaCommand, ApiResponse>
    {
        private readonly IApplicationDbContext _context = context;

        public async Task<ApiResponse> Handle(ActualizarFrutaCommand request, CancellationToken cancellationToken)
        {
            var fruta = await _context.Frutas.FirstOrDefaultAsync(f => f.Id == request.id, cancellationToken);
            if (fruta is null) return new ApiResponse("Fruta no encontrada", false);
            //if (fruta != null) { };

            fruta.NombreFruta = request.nombreFruta;
            fruta.Cantidad = request.cantidad;
            fruta.PrecioUnitario = request.precioUnitario;
            fruta.Proveedor = request.proveedor;

            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return result
                ? new ApiResponse("Fruta actualizada correctamente", true)
                : new ApiResponse("Error al actualizar la fruta", false);
        }
    }

}
