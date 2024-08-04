import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './Form.module.css'

export default function Form(placeholder: string, toSet: (name: string) => void): JSX.Element {
    // Create the Form with useForm and zod 'cause we not want render all times the user write (using the useState). With useForm just send the datas when the user click in the submit button or press the enter    

    const nameSchema = z.object({
        FormName: z.string().toLowerCase()
    });

    type nameSchemaProps = z.infer<typeof nameSchema>

    const { register, handleSubmit } = useForm<nameSchemaProps>({
        resolver: zodResolver(nameSchema),
    });

    function sendTheFormName(data: nameSchemaProps): void {
        toSet(data.FormName)
    }

    return (
        <form onSubmit={handleSubmit(sendTheFormName)} className={styles.form}>
            <input 
            type="text" 
            placeholder={placeholder}
            id='FormNameInput'
            {...register('FormName')}
            />
            <button type="submit">🔍</button>
        </form>
    )
}