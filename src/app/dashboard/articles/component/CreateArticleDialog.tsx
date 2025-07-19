
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
import FormikInputText from "@/components/form/input-text/formik-input-text";
import { useGetEventCategories } from "@/hooks/event-category.query";
import { EVENT_SCOPE_OPTIONS, EVENT_TYPE_OPTIONS } from "@/constant/dropdown";
import { formatDateToYMD } from "@/lib/formatter/date-formatter";
import { createEventValidation } from "../../master-events/components/validation";
;

export default function CreateArticleDialog({ ...props }: DialogProps) {
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
            Hello
        </form>
      </FormikProvider>
    </Dialog>
  );
}
