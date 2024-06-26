DROP TABLE TBL_BOC_PERFILES;
DROP TABLE TBL_BOC_ROLES;
DROP TABLE TBL_BOC_USUARIOS;
DROP TABLE tbl_boc_permisos_x_perfil;

CREATE TABLE TBL_BOC_PERFILES(
	CODIGO_PERFIL SERIAL PRIMARY KEY,
	NOMBRE_PERFIL VARCHAR(200),
	TERRITORIO INTEGER NOT NULL,
	CANAL INTEGER NOT NULL,
	PADRE_PERFIL INTEGER,
	ESTADO INTEGER NOT NULL,
	ACCESO_MI_CALLE VARCHAR(10)
);

INSERT INTO TBL_BOC_PERFILES(NOMBRE_PERFIL, TERRITORIO, CANAL, PADRE_PERFIL, ESTADO, ACCESO_MI_CALLE) VALUES('BOC',4,5,26,1,'S');
INSERT INTO TBL_BOC_PERFILES(NOMBRE_PERFIL, TERRITORIO, CANAL, PADRE_PERFIL, ESTADO, ACCESO_MI_CALLE) VALUES('Practicante BOC',4,5,0,1,'N');
INSERT INTO TBL_BOC_PERFILES(NOMBRE_PERFIL, TERRITORIO, CANAL, PADRE_PERFIL, ESTADO, ACCESO_MI_CALLE) VALUES('Gerente',4,-1,-1,0,null);
commit;
INSERT INTO TBL_BOC_PERFILES(NOMBRE_PERFIL, TERRITORIO, CANAL, PADRE_PERFIL, ESTADO, ACCESO_MI_CALLE) VALUES('Servicio al Cliente',4,7,-1,1,null);
commit;

CREATE TABLE TBL_BOC_ROLES(
	CODIGO_ROL SERIAL PRIMARY KEY,
	NOMBRE_ROL VARCHAR(200) NOT NULL,
	ESTADO INTEGER NOT NULL
);

INSERT INTO TBL_BOC_ROLES(NOMBRE_ROL,ESTADO)VALUES('ADMINISTRADOR',1);
commit;
INSERT INTO TBL_BOC_ROLES(NOMBRE_ROL,ESTADO)VALUES('USUARIO COMUN',1);
commit;

CREATE TABLE TBL_BOC_USUARIOS(
	CODIGO_USUARIO SERIAL PRIMARY KEY,
	NOMBRES VARCHAR(200) NOT NULL,
	APELLIDOS VARCHAR(200) NOT NULL,
	USUARIO VARCHAR(100),
	CODIGO_PERFIL INTEGER NOT NULL,
	NOMBRE_PC VARCHAR(100),
	DIRECCION_IP VARCHAR(100),
	TELEFONO VARCHAR(100),
	CORREO VARCHAR(100) NOT NULL,
	TIPO_USUARIO INTEGER NOT NULL,
	CODIGO_ROL INTEGER NOT NULL,
	TIPO_PLANILLA INTEGER NOT NULL,
	ESTADO INTEGER NOT NULL,
	ADVERTENCIAS INTEGER,
	TERRITORIO VARCHAR(1000),
	NUMERO_IDENTIDAD VARCHAR(50),
	DOCUMENTO_IDENTIDAD VARCHAR(50),
	ID_DMS INTEGER,
	FECHA_CREACION DATE,
	USUARIO_MODIFICA VARCHAR(100),
	PAIS CHAR(5),
	ACCESO_MI_CALLE VARCHAR(10),
	CONTRASENA VARCHAR(200),
	FOREIGN KEY (CODIGO_PERFIL) REFERENCES TBL_BOC_PERFILES(CODIGO_PERFIL),
	FOREIGN KEY (CODIGO_ROL) REFERENCES TBL_BOC_ROLES(CODIGO_ROL)
);

INSERT INTO TBL_BOC_USUARIOS(NOMBRES,APELLIDOS,USUARIO,CODIGO_PERFIL,NOMBRE_PC,DIRECCION_IP,TELEFONO,CORREO,TIPO_USUARIO,CODIGO_ROL,TIPO_PLANILLA,ESTADO,ADVERTENCIAS,TERRITORIO,NUMERO_IDENTIDAD,DOCUMENTO_IDENTIDAD,ID_DMS,FECHA_CREACION,USUARIO_MODIFICA,PAIS,ACCESO_MI_CALLE,CONTRASENA)
VALUES('FRANKLIN ARIEL','CASTILLO HERNANDEZ','FRANKLIN.CASTILLO',1,NULL,NULL,96257721,'franklin.castillo@tigo.com.hn',1,1,1,1,null,'T1','0811199322740','Identidad',0,current_timestamp,'ADMIN','HN','S','TEST1$');
commit;
INSERT INTO TBL_BOC_USUARIOS(NOMBRES,APELLIDOS,USUARIO,CODIGO_PERFIL,NOMBRE_PC,DIRECCION_IP,TELEFONO,CORREO,TIPO_USUARIO,CODIGO_ROL,TIPO_PLANILLA,ESTADO,ADVERTENCIAS,TERRITORIO,NUMERO_IDENTIDAD,DOCUMENTO_IDENTIDAD,ID_DMS,FECHA_CREACION,USUARIO_MODIFICA,PAIS,ACCESO_MI_CALLE,CONTRASENA)
VALUES('MARIO ALEXIS','ORDONEZ CARRASCO','MARIO.ORDONEZ',1,NULL,NULL,95709264,'mario.ordonez@tigo.com.hn',1,1,1,1,null,'T1','0601199102604','Identidad',207121,current_timestamp,'ADMIN','HN','S','TEST2$');
commit;
INSERT INTO TBL_BOC_USUARIOS(NOMBRES,APELLIDOS,USUARIO,CODIGO_PERFIL,NOMBRE_PC,DIRECCION_IP,TELEFONO,CORREO,TIPO_USUARIO,CODIGO_ROL,TIPO_PLANILLA,ESTADO,ADVERTENCIAS,TERRITORIO,NUMERO_IDENTIDAD,DOCUMENTO_IDENTIDAD,ID_DMS,FECHA_CREACION,USUARIO_MODIFICA,PAIS,ACCESO_MI_CALLE,CONTRASENA)
VALUES('HESLER JARET','FERRERA VASQUEZ','HESLER.FERRERA',2,NULL,NULL,95894143,'hesler.ferrera@tigo.com.hn',1,2,1,1,null,'T1','0817199800256','Identidad',207121,current_timestamp,'ADMIN','HN','S','TEST3$');
commit;

CREATE TABLE tbl_boc_permisos_x_perfil(
	CODIGO_PERMISO SERIAL PRIMARY KEY,
	CODIGO_PERFIL VARCHAR(200),
	USUARIO VARCHAR(100),
	CODIGO_PAGINA INTEGER
);

INSERT INTO tbl_boc_permisos_x_perfil(CODIGO_PERFIL, CODIGO_PAGINA) VALUES(1,1200);
INSERT INTO tbl_boc_permisos_x_perfil(CODIGO_PERFIL, CODIGO_PAGINA) VALUES(1,1201);
INSERT INTO tbl_boc_permisos_x_perfil(CODIGO_PERFIL, CODIGO_PAGINA) VALUES(1,1202);
INSERT INTO tbl_boc_permisos_x_perfil(CODIGO_PERFIL, CODIGO_PAGINA) VALUES(1,1203);

select 	*
from 	TBL_BOC_usuarios;

select 	*
from 	tbl_boc_perfiles;

select 	*
from 	tbl_boc_roles;

select 	*
from 	tbl_boc_permisos_x_perfil;

select 	a.usuario, a.correo, r.nombre_rol, a.contrasena
from 	tbl_boc_usuarios a
		inner join tbl_boc_roles r on (a.codigo_rol = r.codigo_rol and a.estado = 1 and r.estado = 1)
where 	a.usuario = 'MARIO.ORDONEZ'