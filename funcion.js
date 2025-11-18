function configurarFormularioCobroAnticipado(estado) {
  const camposPrimeraCuota = [
    '#frm_primera_cuota_medio_pago',
    '#frm_primera_cuota_modalidad',
    '#frm_primera_cuota_plan',
    '#frm_primera_cuota_total_primer_pago',
    '#frm_primera_cuota_descuento',
    '#frm_primera_cuota_total_pagar'
  ];

  if (estado === 'S') {
    // Ocultar y desactivar validaciones
    $('#frm_sbt_debito_primera_cuota').hide();
    $('#395648611690e01dd077f72043695235').hide();

    camposPrimeraCuota.forEach(campo => $(campo).disableValidation());
  } else {
    // Mostrar y activar validaciones
    $('#frm_sbt_debito_primera_cuota').show();
    $('#395648611690e01dd077f72043695235').show();

    camposPrimeraCuota.forEach(campo => $(campo).enableValidation());
  }
}


function validarFechaCaducidad(fechaCaducidad, fechaActual) {
  const tipoPago = $('#frm_medio_pago').getValue();

  if (tipoPago == "TARJETA") {


    const f1 = new Date(fechaCaducidad);
    const f2 = new Date(fechaActual);
    if (isNaN(f1.getTime()) || isNaN(f2.getTime())) {
      alert("Fechas inválidas");
      return false;
    }
    if (f1 < f2) {
      alert("Revisar la fecha de caducidad de la tarjeta");
      return false;
    }
    return true;
  }
}

function validarCambioMedioPago(param) {
  const {
    medioPago,
    numero,
    tipo,
    entidad,
    medioPagoAux,
    numeroAux,
    tipoAux,
    entidadAux
  } = param;

  // Comparar valores originales con los nuevos
  const sinCambios =
    medioPago === medioPagoAux &&
    numero === numeroAux &&
    (tipo ? tipo === tipoAux : entidad === entidadAux);

  if (sinCambios) {
    alert("No ha cambiado la forma de pago");
    return false;
  }

  return true;
}
