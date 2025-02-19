
using Crud.Application.Common;
using Crud.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Crud.Application.Commands
{
    public record EliminarFrutaCommand(int id) : IRequest<ApiResponse>;
    public class EliminarFrutaCommandHandler(IApplicationDbContext context) : IRequestHandler<EliminarFrutaCommand, ApiResponse>
    {
        private readonly IApplicationDbContext _context = context;
        public async Task<ApiResponse> Handle(EliminarFrutaCommand request, CancellationToken cancellationToken)
        {
            var fruta = await _context.Frutas.FirstOrDefaultAsync(f => f.Id == request.id, cancellationToken);
            if (fruta is null) return new ApiResponse("Fruta no encontrada", false);

            _context.Frutas.Remove(fruta);
            var result = await _context.SaveChangesAsync(cancellationToken) > 0;

            return result
                ? new ApiResponse("Fruta eliminada correctamente", true)
                : new ApiResponse("Error al eliminar la fruta", false);
        }
    }
}
