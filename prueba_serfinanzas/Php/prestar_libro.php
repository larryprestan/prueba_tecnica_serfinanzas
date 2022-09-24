<?php

    include './conexion_db.php';

    $id_usuario = $_POST['id-usuario'];
    $nombre_usuario = $_POST['nombre-usuario'];
    $apellido_usuario = $_POST['apellido-usuario'];
    $fecha_naci = $_POST['fecha-naci'];
    $telefono_usuario = $_POST['telefono-usuario'];
    $idlib = $_POST['idlib'];
    $fecha_prestamo = $_POST['fecha-prestamo'];
    $fecha_devolucion = $_POST['fecha-devolucion'];
    $estado = "prestado";

    if(!empty($id_usuario) && !empty($nombre_usuario) && !empty($idlib) && !empty($fecha_prestamo) && !empty($fecha_devolucion)){
        $sql1="INSERT INTO usuarios (id,nombre,apellido,fecha_naci,telefono) VALUES ('$id_usuario','$nombre_usuario','$apellido_usuario','$fecha_naci','$telefono_usuario')";
        $sql2="INSERT INTO libros (idlib,fecha_prestamo,fecha_devolucion,estado) VALUES ('$idlib','$fecha_prestamo','$fecha_devolucion','$estado')";
        $res = mysqli_query($conn,$sql1);
        $res2 = mysqli_query($conn,$sql2);
    }

?>