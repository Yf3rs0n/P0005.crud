using Crud.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crud.Infrastructure.Persistence.Configurations
{
    public class InventarioFrutumConfiguration : IEntityTypeConfiguration<InventarioFrutum>
    {
        public void Configure(EntityTypeBuilder<InventarioFrutum> builder)
        {
            builder.HasKey(e => e.IdFruta).HasName("PK__inventar__64905FA1590BA61A");

            builder.ToTable("inventario_fruta");

            builder.Property(e => e.IdFruta).HasColumnName("id_fruta");
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
