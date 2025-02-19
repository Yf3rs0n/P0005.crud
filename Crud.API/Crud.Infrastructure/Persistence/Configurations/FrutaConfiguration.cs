using Crud.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Crud.Infrastructure.Persistence.Configurations
{
    public class FrutaConfiguration : IEntityTypeConfiguration<Fruta>
    {
        public void Configure(EntityTypeBuilder<Fruta> builder)
        {
            builder.HasKey(e => e.Id).HasName("PK__fruta__64905FA11E1A062F");

            builder.ToTable("fruta");

            builder.Property(e => e.Id).HasColumnName("id");
            builder.Property(e => e.Cantidad).HasColumnName("cantidad");
            builder.Property(e => e.FechaIngreso)
                .HasDefaultValueSql("(getdate())")
                .HasColumnName("fecha_ingreso");
            builder.Property(e => e.NombreFruta)
                .HasMaxLength(50)
                .HasColumnName("nombre_fruta");
            builder.Property(e => e.PrecioUnitario).HasColumnName("precio_unitario");
            builder.Property(e => e.Proveedor)
                .HasMaxLength(100)
                .HasColumnName("proveedor");
        }
    }
}
