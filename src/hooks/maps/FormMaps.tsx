import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { MapsContext } from '../../contexts/maps/mapsContext';

export default function FormMaps(): JSX.Element {
    // Create the Form in the hooks 'cause we not want render all times the user write (using the useState). With useForm just send the datas when the user click in the submit button or press the enter

    const mapNameSchema = z.object({
        mapName: z.string().toLowerCase()
    });

    type mapNameSchemaProps = z.infer<typeof mapNameSchema>

    const { register, handleSubmit } = useForm<mapNameSchemaProps>({
        resolver: zodResolver(mapNameSchema),
    });

    const {toSetMapName} = useContext(MapsContext);

    function sendTheMapName(data: mapNameSchemaProps): void {
        toSetMapName(data.mapName)
    }

    return (
        <form onSubmit={handleSubmit(sendTheMapName)}>
            <input 
            type="text" 
            placeholder="Exemplo: Lotus, Ascent, Haven  e etc.."
            id='inputMapName'
            {...register('mapName')}
            />
            <button type="submit">🔍</button>
        </form>
    )
}