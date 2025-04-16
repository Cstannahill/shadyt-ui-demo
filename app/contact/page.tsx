import PasswordInput from "@/components/mdb/components/inputs/PasswordInput";
import TextInput from "@/components/mdb/components/inputs/TextInput";
import FieldGroup from "@/components/mdb/components/layout/forms/FieldGroup";
import Form from "@/components/mdb/components/layout/forms/Form";

const ContactPage = () => {
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
      </div>
      <Form
        maxWidth="lg"
        spacing="gap-8"
        className="bg-brand-dark text-white p-8 rounded-xl"
      >
        <FieldGroup title="Account Info">
          <TextInput name="username" label="Name" dataType="name" />
          <PasswordInput name="password" label="Password" dataType="password" />
        </FieldGroup>
      </Form>
    </>
  );
};
export default ContactPage;
