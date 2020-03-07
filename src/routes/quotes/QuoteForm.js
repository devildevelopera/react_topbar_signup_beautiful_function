import React from "react";
import Header from "../../components/header/header";
import Form from "../../components/quotes/quoteForm/form";

function QuoteForm() {
  return (
    <div className="container-fluid p-0 ">
      <Header />
      <div className="container mt-3 p-0 shadow pb-5">
        <Form />
      </div>
    </div>
  );
}

export default QuoteForm;
