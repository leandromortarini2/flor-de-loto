// import { toast } from "sonner";
import Swal from "sweetalert2";

export const whstappRedirection = (
  message: string | undefined,
  size: string | undefined
) => {
  Swal.fire({
    title: `Serás redirigido a WhatsApp`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4E2E80",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed && typeof window !== "undefined") {
      const baseURL = "https://wa.me/+5401122883245?text=";
      const defaultText = "Hola Flor de Loto!";
      const fullText = message
        ? `${defaultText} quiero pedirte: ${message} (${size})`
        : defaultText;

      window.open(`${baseURL}${encodeURIComponent(fullText)}`, "_blank");
    }
  });
};
