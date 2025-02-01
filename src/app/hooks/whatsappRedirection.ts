// import { toast } from "sonner";
import Swal from "sweetalert2";

export const whstappRedirection = (message: string | undefined) => {
  Swal.fire({
    title: `Serás redirigido a WhatsApp`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4E2E80",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      if (message) {
        window.open(
          `https://wa.me/+5401122883245?text=Hola Flor de Loto! quiero pedirte: ${message}`,
          "_blank"
        );
      } else {
        window.open(
          "https://wa.me/+5401122883245?text=Hola Flor de Loto!",
          "_blank"
        );
      }
    }
  });
};
