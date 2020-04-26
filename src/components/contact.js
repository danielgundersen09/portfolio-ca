import React from "react";
import { Grid, Cell } from "react-mdl";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Grid className="contact-grid">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Cell style={{ marginTop: "100px" }} col={3}>
          <input
            className="inputstyle"
            type="text"
            placeholder="First name"
            name="First name"
            ref={register({ required: true, maxLength: 30 })}
          />
        </Cell>
        <input
          className="inputstyle"
          type="text"
          placeholder="Last name"
          name="Last name"
          ref={register({ required: true, maxLength: 40 })}
        />
        <Cell col={3}>
          <input
            className="inputstyle"
            placeholder="Email adress"
            name="Email adress"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.email && errors.email.message}
        </Cell>

        <Cell col={3}>
          <input
            className="inputstyle"
            type="tel"
            placeholder="Mobile number"
            name="Mobile number"
            ref={register({ required: true, maxLength: 8 })}
          />
        </Cell>
        <Cell col={3}>
          {" "}
          <input style={{ width: "100px" }} type="submit" />
        </Cell>
      </form>
    </Grid>
  );
}
