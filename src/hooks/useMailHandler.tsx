import emailjs from "@emailjs/browser";
import { Dispatch, SetStateAction } from "react";

type FormState = {
  name: string;
  message: string;
};

export const useMailHandler = (
  formState: FormState,
  setter: Dispatch<SetStateAction<FormState>>
) => {
  if (formState.message.length < 3) return;

  emailjs
    .send("service_4rfb3fe", "template_hoq4aqf", formState, "hXdGf86bwNCK2LZuE")
    .then(
      (response) => console.log("SUCCESS!", response.status, response.text),
      (error) => console.log("FAILED...", error)
    )
    .then(() => setter({ name: "", message: "" }));
};
