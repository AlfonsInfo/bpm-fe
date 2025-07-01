
import { FormikProvider, useFormik } from "formik";
import { Dialog, DialogProps } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useCreateEvent } from "@/hooks/event.mutation";
import { useEventState } from "@/hooks/event.state";
import { CreateEvent } from "@/interfaces/dto.interface";
import FormLayout from "@/components/form/form-layout";
import { createEventValidation } from "./validation";
import FormikInputText from "@/components/form/input-text/formik-input-text";
import { useGetEventCategories } from "@/hooks/event-category.query";
import { EVENT_SCOPE_OPTIONS, EVENT_TYPE_OPTIONS } from "@/constant/dropdown";
import { formatDateToYMD } from "@/lib/formatter/date-formatter";
;

export default function CreateEventDialog({ ...props }: DialogProps) {
  const { createEvent, isPendingCreateEvent } = useCreateEvent();
  const { hideDialog } = useEventState();
  const { isFetchingEventCategories, eventCategories } = useGetEventCategories(); 

  const eventCategoriesDropDown = eventCategories?.map((cat) => ({
    label: cat.name,
    value: cat.id,
  })) ?? [];

  const formik = useFormik<CreateEvent>({
    initialValues: {
      name: "",
      is_singleday: true,
      date: null,
      start_date: null,
      end_date: null,
      event_type: "OFFLINE",
      event_scope: "INTERNAL",
      event_category_id: null,
    },
    validationSchema: createEventValidation,
    onSubmit: async (values) => {
      const payload = {
        ...values,
        date : formatDateToYMD(values.date as Date| null),
        start_date : formatDateToYMD(values.start_date as Date | null),
        end_date : formatDateToYMD(values.end_date as Date | null) 
      };

      await createEvent(payload);
      formik.resetForm();
      hideDialog();
    },
  });

  return (
    <Dialog {...props} header="Add Event" style={{ width: "40rem" }} onHide={hideDialog}>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} noValidate className="space-y-4">
          {/* Input Event Name */}
          <FormikInputText name="name" label="Event Name" placeholder="Event Name" />

          {/* Input is single day  */}
          <FormLayout label={"Single Day Event?"}>
            <InputSwitch
              id="is_singleday"
              checked={formik.values.is_singleday}
              onChange={(e) => {
                const value = e.value;
                formik.setFieldValue("is_singleday", value);
                if (value) {
                  formik.setFieldValue("start_date", null);
                  formik.setFieldValue("end_date", null);
                  formik.setFieldError("start_date", undefined);
                  formik.setFieldError("end_date", undefined);
                } else {
                  formik.setFieldValue("date", null);
                  formik.setFieldError("date", undefined);
                }
              }}
            />
          </FormLayout>
          {formik.values.is_singleday ? (
            <FormLayout label={"Event Date"} error={formik.errors.date}>
              <Calendar
                className="w-full"
                id="date"
                name="date"
                minDate={new Date()}
                value={formik.values.date as Date | null}
                onChange={(e) => formik.setFieldValue("date", e.value)}
                dateFormat="yy-mm-dd"
                placeholder="Event Date"
                showIcon
              />
            </FormLayout>
          ) : (
            <div className="flex gap-2">
              <Calendar
                id="start_date"
                name="start_date"
                minDate={new Date()}
                value={formik.values.start_date}
                onChange={(e) => formik.setFieldValue("start_date", e.value)}
                dateFormat="yy-mm-dd"
                placeholder="Start Date"
                showIcon
              />
              <Calendar
                id="end_date"
                name="end_date"
                minDate={new Date()}
                value={formik.values.end_date}
                onChange={(e) => formik.setFieldValue("end_date", e.value)}
                dateFormat="yy-mm-dd"
                placeholder="End Date"
                showIcon
              />
            </div>
          )}

          <FormLayout label={"Event Type"} error={formik.errors.event_type}>
            <Dropdown
              className="w-full"
              id="event_type"
              value={formik.values.event_type}
              options={EVENT_TYPE_OPTIONS}
              onChange={(e) => formik.setFieldValue("event_type", e.value)}
              placeholder="Select Event Type"
            />
          </FormLayout>
          
          <FormLayout label={"Event Scope"} error={formik.errors.event_scope}>
            <Dropdown
              className="w-full"
              id="event_scope"
              value={formik.values.event_scope}
              options={EVENT_SCOPE_OPTIONS}
              onChange={(e) => formik.setFieldValue("event_scope", e.value)}
              placeholder="Select Scope"
            />
          </FormLayout>
          <FormLayout label={"Event Category Id"} error={formik.errors.event_category_id}>
            <Dropdown
              loading = {isFetchingEventCategories}
              className="w-full"
              id="event_category_id"
              value={formik.values.event_category_id}
              options={eventCategoriesDropDown}
              optionLabel="label"
              optionValue="value"
              onChange={(e) => formik.setFieldValue("event_category_id", e.value)}
              placeholder="Select Category"
            />
          </FormLayout>

          <Button
            label={isPendingCreateEvent ? "Saving..." : "Save"}
            loading={isPendingCreateEvent}
            type="submit"
            className="w-full"
          />
        </form>
      </FormikProvider>
    </Dialog>
  );
}
