using Crud.Application.Interfaces;
using Crud.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Crud.Application.Queries
{
    public class ConsultarFrutasQuery : IRequest<List<InventarioFrutum>> { }
    public class ConsultarFrutasQueryHandler : IRequestHandler<ConsultarFrutasQuery, List<InventarioFrutum>>
    {

        private readonly IApplicationDbContext _context;
        public ConsultarFrutasQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<InventarioFrutum>> Handle(ConsultarFrutasQuery request, CancellationToken cancellationToken)
        {
            return await _context.InventarioFruta.ToListAsync(cancellationToken);
        }
    }
}
