import Swal from "sweetalert2";

// para redirecciones donde puede ser que deba llevar al catalogo sin necesidad de abrir una nueva pestaña
export const alertNavbar = ({
  label,
  finalLink,
  labelDad,
}: {
  label: string;
  finalLink: string;
  labelDad: string;
}) => {
  Swal.fire({
    title: `Serás redirigido a ${label}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4E2E80",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      if (labelDad !== "Catalogo") {
        window.open(finalLink, "_blank");
      } else {
        window.location.href = finalLink;
      }
    }
  });
};
