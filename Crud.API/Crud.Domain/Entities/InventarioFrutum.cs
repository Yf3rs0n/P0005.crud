using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crud.Domain.Entities
{
    public partial class InventarioFrutum
    {
        public int IdFruta { get; set; }

        public string NombreFruta { get; set; } = null!;

        public int Cantidad { get; set; }

        public int PrecioUnitario { get; set; }

        public string Proveedor { get; set; } = null!;

        public DateOnly FechaIngreso { get; set; }
    }

}
