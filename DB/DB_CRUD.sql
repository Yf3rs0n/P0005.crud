CREATE DATABASE DB_CRUD
USE DB_CRUD

CREATE TABLE fruta  (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre_fruta NVARCHAR(50) NOT NULL,
    cantidad INT NOT NULL CHECK (cantidad >= 0), -- Asegura que la cantidad no sea negativa
    precio_unitario INT NOT NULL CHECK (precio_unitario >= 0),
    proveedor NVARCHAR(100) NOT NULL,
    fecha_ingreso DATE NOT NULL DEFAULT GETDATE() -- Si no se proporciona una fecha, usa la actual
);

-- Insertar datos de ejemplo
INSERT INTO fruta (nombre_fruta, cantidad, precio_unitario, proveedor, fecha_ingreso)
VALUES 
    ('Manzana', 50, 2500, 'Frutas del Valle', '2025-02-07'),
    ('Banano', 100, 1500, 'AgroFrutas', '2025-02-07'),
    ('Uva', 75, 4800, 'Viñedos del Sol', '2025-02-07'),
    ('Naranja', 60, 2000, 'Frutas del Valle', '2025-02-07');

-- Consultar los datos
SELECT * FROM fruta;
