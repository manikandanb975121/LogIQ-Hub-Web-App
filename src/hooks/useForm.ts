import { useFormik } from "formik"
import type { FormikConfig } from "formik"

export function useAppForm<TValues extends object>(
  config: { values: TValues; schema: any },
  onSubmit?: FormikConfig<TValues>["onSubmit"]
) {
  return useFormik<TValues>({
    initialValues: config.values,
    validationSchema: config.schema,
    onSubmit: onSubmit ?? (() => {}),
  })
}
