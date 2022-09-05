import * as Yup from "yup";
export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).matches(/[abcdefghijklmnopqrstuvwxyz]+/ , 'Is not in correct format')
    .required("Please enter your name"),
    mobile:Yup.string().max(10).required("Please enter Mobile number"),
    email:Yup.string().email().required("Please enter your email"),
    password: Yup.string().matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ).required("Please enter your Password")

});

