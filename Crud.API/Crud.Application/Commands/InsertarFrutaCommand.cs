using Crud.Application.Interfaces;
using Crud.Application.Common;
using Crud.Domain.Entities;
using MediatR;

namespace Crud.Application.Commands
{
    public record InsertarFrutaCommand(string nombreFruta, int cantidad, int precioUnitario, string proveedor) : IRequest<ApiResponse>;
    public class InsertarFrutaCommandHandler(IApplicationDbContext context) : IRequestHandler<InsertarFrutaCommand, ApiResponse>
    {
        private readonly IApplicationDbContext _context = context;

        public async Task<ApiResponse> Handle(InsertarFrutaCommand request, CancellationToken cancellationToken)
        {
            _context.Frutas.Add(new Fruta
            {
                NombreFruta = request.nombreFruta,
                Cantidad = request.cantidad,
                PrecioUnitario = request.precioUnitario,
                Proveedor = request.proveedor,
                FechaIngreso = DateOnly.FromDateTime(DateTime.UtcNow),
            });
            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return result
                ? new ApiResponse("Fruta insertada correctamente", true)
                : new ApiResponse("Error al insertar la fruta", false);
        }
    }
}
