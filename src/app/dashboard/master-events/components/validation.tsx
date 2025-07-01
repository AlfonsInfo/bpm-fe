import * as Yup from "yup";

export const createEventValidation = Yup.object({
      name: Yup.string().required("Name is required"),
       // date hanya required jika is_singleday === true
      date: Yup.date()
        .nullable()
        .when('is_singleday', {
          is: true,
          then: schema => schema.required('Date is required for single-day event.'),
          otherwise: schema => schema.notRequired()
        }),

      // start_date dan end_date hanya required jika is_singleday === false
      start_date: Yup.date()
        .nullable()
        .when('is_singleday', {
          is: false,
          then: schema => schema.required('Start date is required.'),
          otherwise: schema => schema.notRequired()
        }),

      end_date: Yup.date()
        .nullable()
        .when('is_singleday', {
          is: false,
          then: schema => schema.required('End date is required.'),
          otherwise: schema => schema.notRequired()
        }),
      event_type : Yup.string().required("Event type is required"),
      event_scope : Yup.string().required("Event scope is required"),
      event_category_id : Yup.number().required("Event category is required"),  
})