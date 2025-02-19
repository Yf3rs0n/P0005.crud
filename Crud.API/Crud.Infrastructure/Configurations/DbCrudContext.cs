using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Crud.Infrastructure.Configurations;

public partial class DbCrudContext : DbContext
{
    public DbCrudContext()
    {
    }

    public DbCrudContext(DbContextOptions<DbCrudContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Frutum> Fruta { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-V2URENL\\SQLEXPRESS;Database=DB_CRUD;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Frutum>(entity =>
        {
            entity.HasKey(e => e.IdFruta).HasName("PK__fruta__64905FA11E1A062F");

            entity.ToTable("fruta");

            entity.Property(e => e.IdFruta).HasColumnName("id_fruta");
            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.FechaIngreso)
                .HasDefaultValueSql("(getdate())")
                .HasColumnName("fecha_ingreso");
            entity.Property(e => e.NombreFruta)
                .HasMaxLength(50)
                .HasColumnName("nombre_fruta");
            entity.Property(e => e.PrecioUnitario).HasColumnName("precio_unitario");
            entity.Property(e => e.Proveedor)
                .HasMaxLength(100)
                .HasColumnName("proveedor");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
