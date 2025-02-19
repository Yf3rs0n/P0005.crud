using System;
using System.Collections.Generic;

namespace Crud.Infrastructure.Configurations;

public partial class Frutum
{
    public int IdFruta { get; set; }

    public string NombreFruta { get; set; } = null!;

    public int Cantidad { get; set; }

    public int PrecioUnitario { get; set; }

    public string Proveedor { get; set; } = null!;

    public DateOnly FechaIngreso { get; set; }
}
