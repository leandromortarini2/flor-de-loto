import { toast } from "sonner";

export const whstappRedirection = (message: string | undefined) => {
  toast("Serás redirigido a WhatsApp", {
    style: {},
    cancel: {
      label: "Cancelar",

      onClick: () => console.log("Cancel!"),
    },
    action: {
      label: "Aceptar",
      onClick: () => {
        window.open(
          `https://wa.me/+5401122883245?text=Hola Flor de Loto! quiero pedirte: ${message}`,
          "_blank"
        );
      },
    },
  });
};
