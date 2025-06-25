import { useForm } from 'react-hook-form';
import { templates } from '../templates/messages'
import { generateTxtFile } from '../utils/generateText';
import { openWhatsappMessage } from '../utils/sendWhatsapp';
import "../styles/Form.css"

export default function formMessage() {
  const { register, handleSubmit } = useForm<FormData>({
  defaultValues: {
    name: '',
    position: '',
    company: '',
    stack: '',
    recruiter: '',
    phone: '',
    type: 'presentation',
    action: 'download'
  }
});

  interface FormData {
    type: 'presentation' | 'thanks' | 'first_contact';
    name: string;
    position: string;
    company: string;
    stack: string;
    recruiter: string;
    phone: string;
    action: 'download' | 'whatsapp';
  }

  const onSubmit = (data: FormData) => {
    const rawTemplate = templates[data.type];
    const message = rawTemplate.replace(/{{(\w+)}}/g, (_, key) => (data as any)[key] || '');
    if (data.action === 'download') generateTxtFile(message);
    if (data.action === 'whatsapp') openWhatsappMessage(data.phone, message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[20rem]">
      <select {...register('type')} className="select">
        <option value="presentation">Carta Presentación</option>
        <option value="thanks">Agradecimiento</option>
        <option value="first_contact">Primer Contacto</option>
      </select>

      <input placeholder="Name" {...register('name')} className="input input-neutral" />
      <input placeholder="Position" {...register('position')} className="input input-neutral" />
      <input placeholder="Company" {...register('company')} className="input input-neutral" />
      <input placeholder="Stack (Separated by comma (,))" {...register('stack')} className="input input-neutral" />
      <input placeholder="Recruiter" {...register('recruiter')} className="input input-neutral" />
      <input placeholder="Phone" {...register('phone')} className="input input-neutral" />

      <select {...register('action')} className="select">
        <option value="download">Descargar .txt</option>
        <option value="whatsapp">Enviar por WhatsApp</option>
      </select>

      <button type="submit" className="bg-blue-500 h-[3rem] cursor-pointer text-white p-2 rounded">Generate</button>
    </form>
  );
}