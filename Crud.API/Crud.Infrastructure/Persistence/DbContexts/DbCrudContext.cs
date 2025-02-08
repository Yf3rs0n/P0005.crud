using Crud.Application.Interfaces;
using Crud.Domain.Entities;
using Crud.Infrastructure.Persistence.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Crud.Infrastructure.Persistence.DbContexts;

public partial class DbCrudContext : DbContext, IApplicationDbContext
{
    public DbCrudContext()
    {
    }

    public DbCrudContext(DbContextOptions<DbCrudContext> options)
        : base(options)
    {
    }

    public virtual DbSet<InventarioFrutum> InventarioFruta { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new InventarioFrutumConfiguration());

        OnModelCreatingPartial(modelBuilder);
    }
    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken)
    {
        return await base.SaveChangesAsync(cancellationToken);
    }


    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
