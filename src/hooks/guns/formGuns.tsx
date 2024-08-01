import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { GunContext } from '../../contexts/guns/gunsContext';

export default function FormGuns(): JSX.Element {
    // Create the Form in the hooks 'cause we not want render all times the user write (using the useState). With useForm just send the datas when the user click in the submit button or press the enter

    const gunNameSchema = z.object({
        gunName: z.string().toLowerCase()
    });

    type gunNameSchemaProps = z.infer<typeof gunNameSchema>

    const { register, handleSubmit } = useForm<gunNameSchemaProps>({
        resolver: zodResolver(gunNameSchema),
    });

    const {toSetGunName} = useContext(GunContext);

    function sendTheGunName(data: gunNameSchemaProps): void {
        toSetGunName(data.gunName)
    }

    return (
        <form onSubmit={handleSubmit(sendTheGunName)}>
            <input 
            type="text" 
            placeholder="Exemplo: Vandal, Operator, Ghost e etc.."
            id='gunNameInput'
            {...register('gunName')}
            />
            <button type="submit">🔍</button>
        </form>
    )
}