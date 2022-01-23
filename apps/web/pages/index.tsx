import { Button, Card, TextInput } from "ui";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useFlag } from "@unleash/proxy-client-react";
import Error from "next/error";

const validateEmail = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_API_URL}/tools/email-validator`,
    {
      method: "POST",
      body: new URLSearchParams({
        email: email,
      }),
    }
  );
  return res.json();
};

function EmailValidator() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const [isError, setIsError] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [response, setResponse] = useState(null);
  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (response) {
      setResponse(null);
    }
    setTextInput(event.target.value);
    setIsError(null);
  };
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await validateEmail(textInput);
      setResponse(response);
      setIsSuccess(true);
    } catch (e) {
      setIsSuccess(false);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    if (!isSubmitting && response) {
      setIsError(false);
      if (response.message.includes("invalid") || response.code !== 200) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  }, [isSubmitting, response, isSuccess]);

  return (
    <Card>
      <TextInput
        placeholder="Enter some text"
        onChange={handleTextInputChange}
        value={textInput}
        className="col-span-3"
      />
      <Button type="submit" onClick={handleSubmit} className="col-span-1">
        Validate
      </Button>
      {response && (
        <div className={`text-${isValid ? "purple" : "red"}-500 col-span-4`}>
          {response.message}
        </div>
      )}
      {isError && (
        <div className="text-red-500 col-span-4">Something went wrong.</div>
      )}
    </Card>
  );
}
export default function Web() {
  const [isLoading, setIsLoading] = useState(true);
  const isEmailValidatorEnabled = useFlag("email-validator");
  useEffect(() => {
    if (isEmailValidatorEnabled) {
      setIsLoading(false);
    }
  }, [isEmailValidatorEnabled]);

  return (
    <>
      {isEmailValidatorEnabled && <EmailValidator />}
      {!isLoading && !isEmailValidatorEnabled && <Error statusCode={404} />}
    </>
  );
}
