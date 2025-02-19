using Crud.Application.Interfaces;
using Crud.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Crud.Application.Queries
{
    public class ConsultarFrutasQuery : IRequest<List<Fruta>>;
    public class ConsultarFrutasQueryHandler(IApplicationDbContext context) : IRequestHandler<ConsultarFrutasQuery, List<Fruta>>
    {
        private readonly IApplicationDbContext _context = context;
        public async Task<List<Fruta>> Handle(ConsultarFrutasQuery request, CancellationToken cancellationToken)
        {
            return await _context.Frutas.ToListAsync(cancellationToken);
        }
    }
}
