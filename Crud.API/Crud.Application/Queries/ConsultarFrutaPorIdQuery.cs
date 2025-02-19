

using Crud.Application.Interfaces;
using Crud.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Crud.Application.Queries
{
    public record ConsultarFrutaPorIdQuery(int id): IRequest<Fruta?>;
    public class ConsultarFrutaPorIdQueryHandler(IApplicationDbContext context) : IRequestHandler<ConsultarFrutaPorIdQuery, Fruta?>
    {
        private readonly IApplicationDbContext _context = context;
        public async Task<Fruta?> Handle(ConsultarFrutaPorIdQuery request, CancellationToken cancellationToken)
        {
            return await _context.Frutas.FirstOrDefaultAsync(f => f.Id == request.id, cancellationToken);
        }
    }
}
