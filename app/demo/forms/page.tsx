"use client";
import EmailInput from "@/components/mdb/components/inputs/EmailInput";
import PasswordInput from "@/components/mdb/components/inputs/PasswordInput";
import TextInput from "@/components/mdb/components/inputs/TextInput";
import Textarea from "@/components/mdb/components/inputs/Textarea";
import SelectInput from "@/components/mdb/components/inputs/SelectInput";
import Checkbox from "@/components/mdb/components/inputs/Checkbox";
import Toggle from "@/components/mdb/components/inputs/Toggle";
import RadioGroup from "@/components/mdb/components/inputs/RadioGroup";
import FormRow from "@/components/mdb/components/layout/forms/FormRow";
import FieldGroup from "@/components/mdb/components/layout/forms/FieldGroup";
import Form from "@/components/mdb/components/layout/forms/Form";
import { useState } from "react";

export default function FormDemoPage() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("dark");
  const [toggle, setToggle] = useState(false);

  return (
    <Form maxWidth="4xl" className="space-y-8 p-8 min-h-screen">
      <FieldGroup title="Basic Inputs" border>
        <FormRow label="Name" htmlFor="name" required>
          <TextInput name="name" id="name" required />
        </FormRow>
        <FormRow label="Email" htmlFor="email">
          <EmailInput name="email" />
        </FormRow>
        <FormRow label="Password" htmlFor="password">
          <PasswordInput name="password" />
        </FormRow>
        <FormRow label="Bio">
          <Textarea name="bio" rows={3} />
        </FormRow>
      </FieldGroup>

      <FieldGroup title="Options + Controls" border>
        <FormRow label="Theme Preference">
          <SelectInput
            name="theme"
            className="bg-stone-800"
            optionsClassName="bg-stone-800"
            options={[
              { label: "Dark Mode", value: "dark" },
              { label: "Light Mode", value: "light" },
            ]}
          />
        </FormRow>

        <Checkbox
          name="tos"
          label="I agree to the Terms of Service"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

        <Toggle
          name="newsletter"
          label="Subscribe to updates"
          checked={toggle}
          onChange={setToggle}
        />

        <RadioGroup
          name="stack"
          value={selected}
          onChange={setSelected}
          label="Select your stack"
          options={[
            { label: "Next.js + Tailwind", value: "dark" },
            { label: "Vue + UnoCSS", value: "vue" },
          ]}
        />
      </FieldGroup>
    </Form>
  );
}
