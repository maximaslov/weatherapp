import * as Yup from "yup";

export const weatherFormSchemaEnglish = Yup.object().shape({
    city: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("The field must not be empty"),
});

export const weatherFormSchemaUkraine = Yup.object().shape({
    city: Yup.string()
        .max(20, "Поле не може містити більше ніж 20 символів")
        .required("Поле не повинно бути пустим"),
});
