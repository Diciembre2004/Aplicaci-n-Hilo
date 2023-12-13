CREATE DATABASE IF NOT EXIST hilodb;

USE hilodb;

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    ID_Usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    DNI INT CHECK (DNI BETWEEN 0 AND 99999999),
    Email VARCHAR(100),
    Contraseña VARCHAR(100)
);

-- Tabla de Medicamentos
CREATE TABLE Medicamentos (
    ID_Medicamento INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nombre_Medicamento VARCHAR(100)
    -- Otras columnas relevantes para los medicamentos
);

-- Tabla de Tipos de Dosis
CREATE TABLE TiposDosis (
    ID_TipoDosis INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nombre_TipoDosis VARCHAR(50)
);


-- Tabla de Recordatorios
CREATE TABLE Recordatorios (
    ID_Recordatorio INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ID_Usuario INT,
    ID_Medicamento INT,
    Dosis INT,
    ID_TipoDosis INT,
    Fecha_Inicio DATE,
    Fecha_Final DATE,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY (ID_Medicamento) REFERENCES Medicamentos(ID_Medicamento),
    FOREIGN KEY (ID_TipoDosis) REFERENCES TiposDosis(ID_TipoDosis)
);

-- Tabla de Días de la Semana
CREATE TABLE DiasSemana (
    ID_Dia INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nombre_Dia VARCHAR(20)
);

-- Tabla de Asociación para Días del Recordatorio
CREATE TABLE AsociacionDiasRecordatorio (
    ID_Recordatorio INT,
    ID_Dia INT,
    PRIMARY KEY (ID_Recordatorio, ID_Dia),
    FOREIGN KEY (ID_Recordatorio) REFERENCES Recordatorios(ID_Recordatorio),
    FOREIGN KEY (ID_Dia) REFERENCES DiasSemana(ID_Dia)
);

--INSERCION--

-- Insertar días de la semana
INSERT INTO DiasSemana (Nombre_Dia) VALUES ('Lunes');
INSERT INTO DiasSemana (Nombre_Dia) VALUES ('Martes');
INSERT INTO DiasSemana (Nombre_Dia) VALUES ('Miércoles');
INSERT INTO DiasSemana (Nombre_Dia) VALUES ('Jueves');
INSERT INTO DiasSemana (Nombre_Dia) VALUES ('Viernes');
INSERT INTO DiasSemana (Nombre_Dia) VALUES ('Sábado');
INSERT INTO DiasSemana (Nombre_Dia) VALUES ('Domingo');

-- Insertar tipos de dosis
INSERT INTO TiposDosis (Nombre_TipoDosis) VALUES ('Miligramo');
INSERT INTO TiposDosis (Nombre_TipoDosis) VALUES ('Gramo');
INSERT INTO TiposDosis (Nombre_TipoDosis) VALUES ('Mililitro');
INSERT INTO TiposDosis (Nombre_TipoDosis) VALUES ('Pastilla');