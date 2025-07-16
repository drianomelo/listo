import { Form } from "../components/Form";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar";

export const Create = ({ handleMedias }) => {
  return (
    <div className="font-inter w-full h-screen bg-slate-100">
      <Header variant="small" />

      <div className="max-w-5xl mx-auto w-full flex gap-6 mt-8">
        <Sidebar />

        <Form handleMedias={handleMedias} />
      </div>
    </div>
  );
};
