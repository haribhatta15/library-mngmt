import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Container, Form } from "react-bootstrap";
import { CustomInput } from "../components/customInput/CustomInput";

export const SignUp = () => {
  const inputs = [
    {
      label: "First Name",
      name: "Fname",
      type: "text",
      placeholder: "Hari",
      required: true,
    },

    {
      label: "Last Name",
      name: "Lname",
      type: "text",
      placeholder: "Bhatta",
      required: true,
    },

    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@example.com",
      required: true,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: true,
    },

    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "********",
      required: true,
    },
  ];

  return (
    <MainLayout>
      <Container classname="mt-5">
        <Form
          className="border p-5 shadow-lg rounded m-auto bg-light"
          style={{ width: "400px" }}
        >
          <h2 className="text-primary fw-bold">Join our community</h2>
          <Form.Text className="mt-5">
            Anyone can create admin...............
            <br />
            <br />
            Once you are..........................
          </Form.Text>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Account Type</Form.Label>
            <Form.Select name="Role"></Form.Select>
          </Form.Group>

          <div className="mt-5">
            {inputs.map((item, i) => (
              <CustomInput {...item} key={i} />
            ))}
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};
