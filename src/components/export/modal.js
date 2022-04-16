import React, { useState } from "react";
import "./modal.scss";
import { useForm } from "react-hook-form";

export const RegisterModal = () => {
  return <div>RegisterModal</div>;
};

export const VacncyModal = ({ open, setOpen }) => {
  document.body.style.overflow = open ? "hidden" : "auto";
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    reset();
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 400);
  };
  return (
    <>
      {open && (
        <div className="requestform" id="vacancyModal">
          <div className="requestform_dialog">
            <section
              className="requestform_content tac"
              id="vacancyModal_request"
              style={isSuccess ? { display: "none" } : {}}
            >
              <button
                type="button"
                className="close"
                onClick={() => setOpen(!open)}
              >
                X
              </button>
              <div className="requestform-title">
                Отклик на вакансию <br />
                <b id="vacancyModal_vacancy">Менеджер отдела продаж</b>
              </div>
              <form name="vacancyModal_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_bl form_el_big">
                  <input
                    type="text"
                    className="text"
                    placeholder="ФИО"
                    {...register("fullName", { required: true })}
                    style={errors.fullName ? { borderColor: "red" } : {}}
                  />
                  <input
                    type="text"
                    className="text"
                    placeholder="e-mail"
                    {...register("email", { required: true })}
                    style={errors.email ? { borderColor: "red" } : {}}
                  />
                  <input
                    type="tel"
                    className="text"
                    placeholder="99-999-9999"
                    {...register("phone", { required: true })}
                    style={errors.phone ? { borderColor: "red" } : {}}
                  />
                </div>
                <div className="form_bl form_el_big">
                  <textarea
                    style={
                      errors.comment
                        ? {
                            width: "100%",
                            resize: "vertical",
                            padding: "10px",
                            fontSize: "20.56px",
                            fontWeight: 400,
                            borderColor: "red",
                          }
                        : {
                            width: "100%",
                            resize: "vertical",
                            padding: "10px",
                            fontSize: "20.56px",
                            fontWeight: 400,
                          }
                    }
                    {...register("comment", { required: true })}
                    className="text"
                    cols={30}
                    rows={10}
                    placeholder="Комментарий"
                  />
                </div>
                <div className="form_bl form_el_big">
                  <button
                    type="submit"
                    className="button button_success button_gradienteffect button_rounded"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </section>
            <div
              className="requestform_process"
              id="vacancyModal_process"
              style={isLoading ? {} : { display: "none" }}
            >
              <div className="requestform_process_loader" />
              <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div
              className="requestform_content tac"
              id="vacancyModal_done"
              style={isSuccess ? {} : { display: "none" }}
            >
              <p className="hugetext">Отклик на вакансию отправлен</p>
              <p>Скоро мы выйдем с вами на связь</p>
              <div style={{ marginTop: "1.5rem" }}>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setOpen(!open);
                  }}
                  className="button button_accent"
                >
                  Супер :)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
