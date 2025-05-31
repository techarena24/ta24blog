import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Need to get in touch with Tech Arena24? Contact us for inquiries, feedback, or collaborations related to expert tech news, reviews, comparisons, and top deals.",
};

const page = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default page;
