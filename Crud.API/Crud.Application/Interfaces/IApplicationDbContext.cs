using Crud.Domain.Entities;
using Microsoft.EntityFrameworkCore;


namespace Crud.Application.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Fruta> Frutas { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
